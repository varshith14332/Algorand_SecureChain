// Algorand Wallet Types
export interface AlgorandAccount {
  address: string;
  balance: number;
  assets: AlgorandAsset[];
  isConnected: boolean;
}

export interface AlgorandAsset {
  assetId: number;
  unitName: string;
  name: string;
  decimals: number;
  balance: number;
  url?: string;
}

export interface AlgorandTransaction {
  txId: string;
  sender: string;
  receiver: string;
  amount: number;
  fee: number;
  timestamp: number;
  note?: string;
  assetId?: number;
  type: 'payment' | 'asset-transfer' | 'smart-contract';
}

// Quantum Security Types
export interface QuantumResistantKey {
  keyId: string;
  algorithm: 'CRYSTALS-Dilithium' | 'CRYSTALS-KYBER' | 'SPHINCS+';
  publicKey: string;
  createdAt: number;
  expiresAt: number;
  isActive: boolean;
}

export interface QuantumSecurityLevel {
  level: 'standard' | 'enhanced' | 'maximum';
  keyLength: number;
  description: string;
  estimatedQuantumResistance: number; // years
}

// AI Guardian Types
export interface AIGuardianAlert {
  id: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  type: 'suspicious-transaction' | 'unusual-activity' | 'security-breach' | 'recovery-attempt';
  title: string;
  description: string;
  timestamp: number;
  resolved: boolean;
  recommendedActions: string[];
  metadata: Record<string, any>;
}

export interface AIGuardianConfig {
  enabled: boolean;
  sensitivity: 'low' | 'medium' | 'high';
  monitoringScope: {
    transactions: boolean;
    accountAccess: boolean;
    keyUsage: boolean;
    smartContractInteractions: boolean;
  };
  alertThresholds: {
    transactionAmount: number;
    frequencyLimit: number;
    geographicVariance: boolean;
  };
}

export interface AIActivityReport {
  reportId: string;
  period: {
    start: number;
    end: number;
  };
  totalTransactionsMonitored: number;
  alertsGenerated: number;
  threatsDetected: number;
  falsePositives: number;
  accuracy: number;
  topThreatTypes: Array<{
    type: string;
    count: number;
    percentage: number;
  }>;
}

// Wallet Recovery Types
export interface RecoveryPolicy {
  id: string;
  name: string;
  enabled: boolean;
  threshold: number; // minimum number of recovery methods required
  methods: RecoveryMethod[];
  aiAssistedRecovery: boolean;
  quantumSafeBackup: boolean;
}

export interface RecoveryMethod {
  id: string;
  type: 'mnemonic' | 'hardware-key' | 'biometric' | 'social-recovery' | 'ai-verification';
  name: string;
  enabled: boolean;
  lastUsed?: number;
  trustScore: number; // 0-100
  metadata: Record<string, any>;
}

export interface RecoveryAttempt {
  id: string;
  initiatedAt: number;
  status: 'pending' | 'in-progress' | 'completed' | 'failed' | 'cancelled';
  methodsUsed: string[];
  aiConfidenceScore: number;
  approvalRequired: boolean;
  completedAt?: number;
  failureReason?: string;
}

// Smart Contract Types
export interface SmartContractInteraction {
  contractId: string;
  contractAddress: string;
  method: string;
  parameters: any[];
  gasUsed: number;
  status: 'pending' | 'confirmed' | 'failed';
  timestamp: number;
  txId: string;
}

export interface SecurityAuditLog {
  id: string;
  timestamp: number;
  event: string;
  severity: 'info' | 'warning' | 'error' | 'critical';
  source: 'user' | 'ai-guardian' | 'quantum-engine' | 'smart-contract';
  details: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
}

// Dashboard Types
export interface DashboardMetrics {
  totalBalance: number;
  totalAssets: number;
  activeAlerts: number;
  securityScore: number;
  quantumResistanceLevel: number;
  aiGuardianStatus: 'active' | 'inactive' | 'maintenance';
  lastSecurityScan: number;
  recentTransactions: AlgorandTransaction[];
  topAlerts: AIGuardianAlert[];
}

export interface WalletConfig {
  quantum: {
    securityLevel: QuantumSecurityLevel;
    keyRotationInterval: number; // days
    autoUpgrade: boolean;
  };
  ai: AIGuardianConfig;
  recovery: RecoveryPolicy;
  general: {
    theme: 'light' | 'dark' | 'auto';
    notifications: boolean;
    biometricAuth: boolean;
    multiSigRequired: boolean;
  };
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: number;
}

export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}
