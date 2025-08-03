import { useState, useCallback } from 'react';
import algosdk from 'algosdk';
// Lazy import to avoid SSR issues
let peraWallet: any = null;
let algorandUtils: any = null;

const initializeAlgorand = async () => {
  if (!peraWallet || !algorandUtils) {
    try {
      const algorandLib = await import('@/lib/algorand');
      peraWallet = algorandLib.peraWallet;
      algorandUtils = algorandLib.algorandUtils;
    } catch (error) {
      console.error('Error initializing Algorand SDK:', error);
      throw new Error('Failed to initialize Algorand SDK');
    }
  }
  return { peraWallet, algorandUtils };
};

interface WalletState {
  isConnected: boolean;
  address: string | null;
  balance: number;
  isConnecting: boolean;
  error: string | null;
  walletType: 'pera' | 'demo' | null;
  showConnectModal: boolean;
}

export function useWallet() {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    address: null,
    balance: 0,
    isConnecting: false,
    error: null,
    walletType: null,
    showConnectModal: false,
  });

  const openConnectModal = useCallback(() => {
    setWalletState(prev => ({ ...prev, showConnectModal: true, error: null }));
  }, []);

  const closeConnectModal = useCallback(() => {
    setWalletState(prev => ({
      ...prev,
      showConnectModal: false,
      isConnecting: false,
      error: null
    }));
  }, []);

  const connectWallet = useCallback(async (method: 'qr' | 'extension') => {
    setWalletState(prev => ({ ...prev, isConnecting: true, error: null }));

    try {
      // Initialize Algorand SDK
      const { peraWallet: wallet, algorandUtils: utils } = await initializeAlgorand();

      let accounts: string[] = [];

      if (method === 'extension') {
        // Browser Extension Connection
        accounts = await wallet.connect();
      } else if (method === 'qr') {
        // QR Code / Mobile App Connection
        accounts = await wallet.connect();
      }

      if (accounts && accounts.length > 0) {
        const address = accounts[0];

        try {
          // Get the lazy-loaded utils
          const { algorandUtils: utils } = await initializeAlgorand();

          // Fetch real account information from Algorand TestNet
          const accountInfo = await utils.getAccountInfo(address);

          setWalletState({
            isConnected: true,
            address: utils.formatAddress(address),
            balance: accountInfo.balance,
            isConnecting: false,
            error: null,
            walletType: 'pera',
            showConnectModal: false,
          });

          // Store full address for transactions
          (window as any).connectedAddress = address;

        } catch (balanceError) {
          console.warn('Could not fetch balance:', balanceError);
          // Still connect but with 0 balance - format address safely
          const { algorandUtils: utils } = await initializeAlgorand();

          setWalletState({
            isConnected: true,
            address: utils.formatAddress(address),
            balance: 0,
            isConnecting: false,
            error: null,
            walletType: 'pera',
            showConnectModal: false,
          });

          (window as any).connectedAddress = address;
        }
      } else {
        throw new Error('No accounts returned from PeraWallet');
      }
    } catch (error) {
      console.error('PeraWallet connection error:', error);

      let errorMessage = 'Failed to connect to PeraWallet.';

      if (error instanceof Error) {
        if (error.message.includes('User rejected')) {
          errorMessage = 'Connection cancelled by user.';
        } else if (error.message.includes('No accounts')) {
          errorMessage = 'No accounts found in PeraWallet.';
        } else {
          errorMessage = error.message;
        }
      }

      setWalletState(prev => ({
        ...prev,
        isConnecting: false,
        error: errorMessage,
      }));
    }
  }, []);

  const disconnectWallet = useCallback(async () => {
    try {
      // Disconnect PeraWallet
      if (walletState.walletType === 'pera' && peraWallet) {
        const { peraWallet: wallet } = await initializeAlgorand();
        wallet.disconnect();
        delete (window as any).connectedAddress;
      }
    } catch (error) {
      console.error('Error disconnecting PeraWallet:', error);
    }

    setWalletState({
      isConnected: false,
      address: null,
      balance: 0,
      isConnecting: false,
      error: null,
      walletType: null,
      showConnectModal: false,
    });
  }, [walletState.walletType]);

  return {
    ...walletState,
    openConnectModal,
    closeConnectModal,
    connectWallet,
    disconnectWallet,
  };
}
export default useWallet;
