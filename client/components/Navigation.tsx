import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Shield,
  Brain,
  Zap,
  Code,
  Settings,
  Bell,
  Menu,
  X,
  ChevronRight,
  Lock,
  Wallet,
  LogOut,
  Loader2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useWallet } from '@/hooks/useWallet';
import { WalletConnectModal } from './WalletConnectModal';
import { Activity, Eye, Clock } from 'lucide-react';
import { GitBranch, Terminal } from 'lucide-react';

const navigationItems = [
  { name: 'Home', href: '/', icon: Shield },
  { name: 'Features', href: '/features', icon: Brain },
  { name: 'Developer', href: '/developer', icon: Code },
  { name: 'Security', href: '/security', icon: Lock },
  { name: 'Alerts', href: '/alerts', icon: Bell },
  { name: 'Logs', href: '/logs', icon: Eye },
  { name: 'Dashboard', href: '/performance', icon: Activity },
  { name: 'Community', href: '/community', icon: GitBranch },
  { name: 'Forum', href: '/forum', icon: Terminal },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const {
    isConnected,
    address,
    isConnecting,
    walletType,
    showConnectModal,
    error,
    openConnectModal,
    closeConnectModal,
    connectWallet,
    disconnectWallet
  } = useWallet();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-background/80 backdrop-blur-xl border-b border-quantum-500/20" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-8 h-8 bg-quantum-gradient rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 w-8 h-8 bg-quantum-gradient rounded-lg opacity-50 group-hover:animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-quantum-400">Quantum</span>
              <span className="text-lg font-bold text-neural-400">Guard</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group",
                    isActive
                      ? "text-quantum-400 bg-quantum-500/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  )}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-quantum-400 rounded-full"></div>
                  )}
                  <div className="absolute inset-0 rounded-lg bg-quantum-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-200"></div>
                </Link>
              );
            })}
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden md:flex items-center space-x-4">
            {isConnected ? (
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 bg-card/50 rounded-lg border border-algorand-500/20 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-algorand-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">
                    {walletType === 'pera' ? 'PeraAlgo' : 'Demo'}
                  </span>
                  <span className="text-sm font-medium text-foreground">{address}</span>
                </div>
                <button
                  onClick={disconnectWallet}
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-lg transition-colors duration-200"
                  title="Disconnect PeraAlgo Wallet"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={openConnectModal}
                disabled={isConnecting}
                className="relative px-6 py-2 bg-neural-gradient text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-neural-500/25 group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  {isConnecting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Wallet className="w-4 h-4" />
                  )}
                  <span>{isConnecting ? 'Connecting...' : 'Connect PeraAlgo'}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neural-600 to-neural-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card/50 transition-colors duration-200"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-xl rounded-lg mt-2 border border-quantum-500/20">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-quantum-400 bg-quantum-500/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                    )}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      {isActive && <ChevronRight className="w-3 h-3 ml-auto" />}
                    </div>
                  </Link>
                );
              })}
              <div className="pt-2 mt-2 border-t border-quantum-500/20">
                {isConnected ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 bg-card/50 rounded-lg border border-algorand-500/20 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-algorand-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-muted-foreground">
                        {walletType === 'pera' ? 'PeraAlgo' : 'Demo'}
                      </span>
                      <span className="text-sm font-medium text-foreground">{address}</span>
                    </div>
                    <button
                      onClick={disconnectWallet}
                      className="w-full px-3 py-2 bg-muted/20 text-muted-foreground rounded-lg font-medium transition-all duration-200 hover:bg-muted/30"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <LogOut className="w-4 h-4" />
                        <span>Disconnect</span>
                      </div>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={openConnectModal}
                    disabled={isConnecting}
                    className="w-full px-3 py-2 bg-neural-gradient text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {isConnecting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Wallet className="w-4 h-4" />
                      )}
                      <span>{isConnecting ? 'Connecting...' : 'Connect PeraAlgo'}</span>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Wallet Connect Modal */}
      <WalletConnectModal
        isOpen={showConnectModal}
        onClose={closeConnectModal}
        onConnect={connectWallet}
        isConnecting={isConnecting}
        error={error}
      />
    </nav>
  );
}
