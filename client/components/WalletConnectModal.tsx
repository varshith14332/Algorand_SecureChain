import { useState, useEffect } from 'react';
import QRCodeLib from 'qrcode';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import {
  Smartphone,
  Monitor,
  QrCode,
  Download,
  ArrowRight,
  Loader2,
  CheckCircle,
  AlertCircle,
  Copy,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (method: 'qr' | 'extension') => Promise<void>;
  isConnecting: boolean;
  error: string | null;
}

export function WalletConnectModal({
  isOpen,
  onClose,
  onConnect,
  isConnecting,
  error
}: WalletConnectModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<'qr' | 'extension' | null>(null);
  const [qrCodeData, setQrCodeData] = useState<string>('');
  const [qrCodeImage, setQrCodeImage] = useState<string>('');
  const [showQR, setShowQR] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');

  // Generate QR code data when QR method is selected
  useEffect(() => {
    if (selectedMethod === 'qr' && !isConnecting) {
      generateQRCode();
    }
  }, [selectedMethod, isConnecting]);

  const generateQRCode = async () => {
    try {
      // Generate a unique session ID for this connection attempt
      const newSessionId = Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
      setSessionId(newSessionId);

      // Create PeraAlgo WalletConnect-compatible connection data
      const bridgeUrl = 'https://bridge.walletconnect.org';
      const dappName = 'QuantumGuard Wallet';
      const dappDescription = 'Quantum-Resistant Algorand Wallet with AI Guardian';
      const dappUrl = window.location.origin;
      const dappIcon = `${window.location.origin}/favicon.ico`;

      // WalletConnect URI format for PeraAlgo
      const wcUri = `wc:${newSessionId}@1?bridge=${encodeURIComponent(bridgeUrl)}&key=${newSessionId.substring(0, 32)}`;

      // PeraAlgo specific connection data
      const connectionData = {
        protocol: 'wc',
        version: 1,
        topic: newSessionId,
        symKey: newSessionId.substring(0, 32),
        relay: {
          protocol: 'irn'
        },
        metadata: {
          name: dappName,
          description: dappDescription,
          url: dappUrl,
          icons: [dappIcon]
        }
      };

      // Use the WalletConnect URI format that PeraAlgo recognizes
      const qrData = wcUri;
      setQrCodeData(qrData);

      // Generate the actual QR code image
      const qrCodeImageData = await QRCodeLib.toDataURL(qrData, {
        width: 300,
        margin: 2,
        color: {
          dark: '#1f2937', // Dark color
          light: '#ffffff' // Light color
        },
        errorCorrectionLevel: 'M'
      });

      setQrCodeImage(qrCodeImageData);
      setShowQR(true);
    } catch (error) {
      console.error('Error generating QR code:', error);
      setQrCodeData('Error generating QR code');
    }
  };

  const handleMethodSelect = async (method: 'qr' | 'extension') => {
    setSelectedMethod(method);
    if (method === 'extension') {
      await onConnect(method);
    } else {
      // For QR, just show the QR code and wait for mobile app scan
      setShowQR(true);
    }
  };

  const handleQRConnect = async () => {
    await onConnect('qr');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(qrCodeData);
  };

  const openPeraAlgoApp = () => {
    window.open(qrCodeData, '_blank');
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-algorand-gradient rounded-lg flex items-center justify-center">
              <img 
                src="https://perawallet.app/static/images/pera-wallet-logo.svg" 
                alt="PeraAlgo" 
                className="w-5 h-5"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
                }}
              />
              <QrCode className="w-5 h-5 text-white hidden" />
            </div>
            <span>Connect PeraAlgo Wallet</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {!selectedMethod && !isConnecting && (
            <>
              <p className="text-muted-foreground text-sm text-center">
                Choose how you'd like to connect your PeraAlgo wallet
              </p>

              {/* Connection Methods */}
              <div className="space-y-3">
                {/* QR Code Method */}
                <button
                  onClick={() => handleMethodSelect('qr')}
                  className="w-full p-4 border border-muted/20 rounded-lg hover:border-algorand-500/30 hover:bg-algorand-500/5 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-algorand-500/10 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-algorand-400" />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="font-medium">PeraAlgo Mobile App</h3>
                      <p className="text-sm text-muted-foreground">Scan QR code with your mobile app</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-algorand-400 transition-colors" />
                  </div>
                </button>

                {/* Browser Extension Method */}
                <button
                  onClick={() => handleMethodSelect('extension')}
                  className="w-full p-4 border border-muted/20 rounded-lg hover:border-algorand-500/30 hover:bg-algorand-500/5 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-algorand-500/10 rounded-lg flex items-center justify-center">
                      <Monitor className="w-5 h-5 text-algorand-400" />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="font-medium">Browser Extension</h3>
                      <p className="text-sm text-muted-foreground">Connect using browser extension</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-algorand-400 transition-colors" />
                  </div>
                </button>
              </div>

              {/* Install Links */}
              <div className="pt-4 border-t border-muted/20">
                <p className="text-xs text-muted-foreground text-center mb-3">
                  Don't have PeraAlgo wallet yet?
                </p>
                <div className="flex space-x-2">
                  <a
                    href="https://perawallet.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 text-xs bg-muted/20 hover:bg-muted/30 rounded-lg transition-colors duration-200 text-center flex items-center justify-center space-x-1"
                  >
                    <Download className="w-3 h-3" />
                    <span>Mobile App</span>
                  </a>
                  <a
                    href="https://chrome.google.com/webstore/detail/pera-algo-wallet/hipekcfkkjblplahfdamhpelgeafpdal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 text-xs bg-muted/20 hover:bg-muted/30 rounded-lg transition-colors duration-200 text-center flex items-center justify-center space-x-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Extension</span>
                  </a>
                </div>
              </div>
            </>
          )}

          {/* QR Code Display */}
          {selectedMethod === 'qr' && showQR && (
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center mb-4">
                {isConnecting ? (
                  <div className="flex flex-col items-center space-y-3">
                    <Loader2 className="w-8 h-8 animate-spin text-algorand-400" />
                    <p className="text-sm text-muted-foreground">Waiting for wallet connection...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Actual QR Code */}
                    <div className="w-60 h-60 mx-auto bg-white rounded-lg p-4 border-2 border-algorand-500/20">
                      {qrCodeImage ? (
                        <img
                          src={qrCodeImage}
                          alt="PeraAlgo Wallet Connect QR Code"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-algorand-500/10 to-quantum-500/10 rounded flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <Loader2 className="w-8 h-8 text-algorand-400 mx-auto animate-spin" />
                            <p className="text-xs text-muted-foreground">Generating QR Code...</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="text-center">
                        <p className="text-sm font-medium text-foreground mb-1">
                          Scan with PeraAlgo Mobile App
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Open PeraAlgo app → Tap "Connect" → Scan this QR code
                        </p>
                      </div>

                      {/* Session Info */}
                      {sessionId && (
                        <div className="px-3 py-2 bg-muted/10 rounded-lg">
                          <p className="text-xs text-muted-foreground text-center">
                            Session: {sessionId.substring(0, 8)}...
                          </p>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <button
                          onClick={copyToClipboard}
                          className="flex-1 px-3 py-2 text-xs bg-muted/20 hover:bg-muted/30 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1"
                        >
                          <Copy className="w-3 h-3" />
                          <span>Copy URI</span>
                        </button>
                        <button
                          onClick={() => window.open('https://perawallet.app/', '_blank')}
                          className="flex-1 px-3 py-2 text-xs bg-algorand-500/20 hover:bg-algorand-500/30 text-algorand-400 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1"
                        >
                          <Download className="w-3 h-3" />
                          <span>Get App</span>
                        </button>
                      </div>

                      <div className="text-center pt-2">
                        <p className="text-xs text-muted-foreground mb-2">
                          The connection will complete automatically after scanning
                        </p>
                        <button
                          onClick={handleQRConnect}
                          className="px-4 py-2 bg-algorand-gradient text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 text-sm"
                        >
                          Simulate Connection (Demo)
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Extension Connecting */}
          {selectedMethod === 'extension' && isConnecting && (
            <div className="text-center space-y-4 py-8">
              <Loader2 className="w-8 h-8 animate-spin text-algorand-400 mx-auto" />
              <div>
                <h3 className="font-medium mb-2">Connecting to PeraAlgo Extension</h3>
                <p className="text-sm text-muted-foreground">
                  Please check your browser extension and approve the connection request
                </p>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-destructive mt-0.5" />
              <div className="text-sm text-destructive">{error}</div>
            </div>
          )}

          {/* Back Button */}
          {selectedMethod && !isConnecting && (
            <button
              onClick={() => {
                setSelectedMethod(null);
                setShowQR(false);
              }}
              className="w-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              ← Back to connection methods
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
