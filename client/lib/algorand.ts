import algosdk from 'algosdk';
import { PeraWalletConnect } from '@perawallet/connect';

// Algorand TestNet configuration
const algodToken = '';
const algodServer = 'https://testnet-api.algonode.cloud';
const algodPort = 443;

export const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

// Initialize PeraWallet with safe window check
export const peraWallet = new PeraWalletConnect({
  metadata: {
    name: 'QuantumGuard Wallet',
    description: 'Quantum-Resistant Algorand Wallet with AI Guardian',
    url: typeof window !== 'undefined' ? window.location.origin : 'https://quantumguard.app',
    icons: [typeof window !== 'undefined' ? `${window.location.origin}/favicon.ico` : '/favicon.ico']
  }
});

// Utility functions for Algorand operations
export const algorandUtils = {
  // Get account information
  async getAccountInfo(address: string) {
    try {
      const accountInfo = await algodClient.accountInformation(address).do();
      return {
        address: accountInfo.address,
        balance: accountInfo.amount / 1000000, // Convert microAlgos to Algos
        minBalance: accountInfo['min-balance'] / 1000000,
        assets: accountInfo.assets || [],
        round: accountInfo.round
      };
    } catch (error) {
      console.error('Error fetching account info:', error);
      throw error;
    }
  },

  // Get suggested transaction parameters
  async getSuggestedParams() {
    try {
      return await algodClient.getTransactionParams().do();
    } catch (error) {
      console.error('Error getting suggested params:', error);
      throw error;
    }
  },

  // Send payment transaction
  async sendPayment(from: string, to: string, amount: number, note?: string) {
    try {
      const suggestedParams = await this.getSuggestedParams();
      
      const txn = algosdk.makePaymentTxnWithSuggestedParams(
        from,
        to,
        amount * 1000000, // Convert Algos to microAlgos
        undefined,
        note ? new TextEncoder().encode(note) : undefined,
        suggestedParams
      );

      // Sign with PeraWallet
      const signedTxns = await peraWallet.signTransaction([
        { txn: txn, signers: [from] }
      ]);

      // Submit transaction
      const { txId } = await algodClient.sendRawTransaction(signedTxns).do();
      
      return txId;
    } catch (error) {
      console.error('Error sending payment:', error);
      throw error;
    }
  },

  // Wait for transaction confirmation
  async waitForConfirmation(txId: string, maxRounds = 10) {
    try {
      const status = await algodClient.status().do();
      let currentRound = status['last-round'];
      
      while (currentRound < status['last-round'] + maxRounds) {
        try {
          const txInfo = await algodClient.pendingTransactionInformation(txId).do();
          if (txInfo['confirmed-round']) {
            return txInfo;
          }
        } catch (err) {
          // Transaction might not be found yet
        }
        
        await algodClient.statusAfterBlock(currentRound).do();
        currentRound++;
      }
      
      throw new Error('Transaction not confirmed within max rounds');
    } catch (error) {
      console.error('Error waiting for confirmation:', error);
      throw error;
    }
  },

  // Format Algorand address for display
  formatAddress(address: string, length = 6) {
    if (!address) return '';
    return `${address.substring(0, length)}...${address.substring(address.length - length)}`;
  },

  // Validate Algorand address
  isValidAddress(address: string) {
    try {
      return algosdk.isValidAddress(address);
    } catch {
      return false;
    }
  },

  // Convert microAlgos to Algos
  microAlgosToAlgos(microAlgos: number) {
    return microAlgos / 1000000;
  },

  // Convert Algos to microAlgos
  algosToMicroAlgos(algos: number) {
    return Math.round(algos * 1000000);
  }
};
