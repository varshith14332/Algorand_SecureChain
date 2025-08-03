import { useState } from 'react';
import { 
  Shield, 
  Brain, 
  Zap, 
  GitBranch, 
  Lock, 
  Eye, 
  Activity, 
  Fingerprint,
  Cpu,
  Database,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Code,
  Layers,
  Network,
  Key,
  Search,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 'quantum',
    title: 'Quantum-Resistant Cryptography',
    subtitle: 'Future-Proof Security Engine',
    description: 'Advanced post-quantum algorithms protect against quantum computer attacks',
    icon: Shield,
    color: 'quantum',
    details: [
      'CRYSTALS-Dilithium digital signatures',
      'CRYSTALS-KYBER key encapsulation',
      'SPHINCS+ hash-based signatures',
      'Lattice-based cryptographic primitives',
      'NIST-approved algorithms',
      'Quantum-safe key derivation'
    ]
  },
  {
    id: 'ai-guardian',
    title: 'AI Guardian Protection',
    subtitle: 'Intelligent Threat Detection',
    description: 'Machine learning algorithms monitor and protect against suspicious activities',
    icon: Brain,
    color: 'neural',
    details: [
      'Real-time behavioral analysis',
      'Anomaly detection algorithms',
      'Transaction pattern recognition',
      'Geo-location verification',
      'Device fingerprinting',
      'Predictive threat modeling'
    ]
  },
  {
    id: 'recovery',
    title: 'Autonomous Wallet Recovery',
    subtitle: 'AI-Powered Recovery System',
    description: 'Secure wallet restoration using advanced AI verification and multi-factor authentication',
    icon: Zap,
    color: 'algorand',
    details: [
      'Multi-signature recovery policies',
      'Biometric verification',
      'Social recovery networks',
      'Hardware security modules',
      'Time-locked recovery processes',
      'Zero-knowledge proofs'
    ]
  },
  {
    id: 'algorand',
    title: 'Algorand Integration',
    subtitle: 'Native Blockchain Support',
    description: 'Seamless integration with Algorand blockchain and PeraAlgo Wallet ecosystem',
    icon: GitBranch,
    color: 'quantum',
    details: [
      'PeraAlgo Wallet compatibility',
      'Algorand SDK integration',
      'Smart contract interactions',
      'Asset management (ASA)',
      'DeFi protocol support',
      'Atomic transactions'
    ]
  }
];

const technicalSpecs = [
  { label: 'Security Level', value: '256-bit Quantum', icon: Lock },
  { label: 'AI Accuracy', value: '99.7%', icon: Brain },
  { label: 'Response Time', value: '< 100ms', icon: Zap },
  { label: 'Uptime', value: '99.99%', icon: Activity },
];

const securityLayers = [
  {
    name: 'Application Layer',
    description: 'User interface and application logic protection',
    technologies: ['React Security', 'Input Validation', 'XSS Protection'],
    icon: Layers
  },
  {
    name: 'AI Guardian Layer',
    description: 'Intelligent monitoring and threat detection',
    technologies: ['Machine Learning', 'Behavioral Analysis', 'Anomaly Detection'],
    icon: Brain
  },
  {
    name: 'Cryptographic Layer',
    description: 'Quantum-resistant encryption and signing',
    technologies: ['Post-Quantum Crypto', 'Digital Signatures', 'Key Management'],
    icon: Shield
  },
  {
    name: 'Blockchain Layer',
    description: 'Algorand network integration and smart contracts',
    technologies: ['Algorand SDK', 'Smart Contracts', 'Consensus Protocol'],
    icon: Network
  }
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState('quantum');
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  const currentFeature = features.find(f => f.id === activeFeature);

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-mesh-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-quantum-500/10 border border-quantum-500/20 text-quantum-400 text-sm font-medium mb-8">
              <Shield className="w-4 h-4 mr-2" />
              Advanced Security Features
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-quantum-400 via-neural-400 to-algorand-400 bg-clip-text text-transparent">
                Next-Generation
              </span>
              <br />
              <span className="text-foreground">Wallet Technology</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the advanced features that make QuantumGuard the most secure 
              and intelligent crypto wallet for the quantum era.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Feature Tabs */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold mb-6">Core Features</h2>
                <div className="space-y-2">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeature(feature.id)}
                      className={cn(
                        "w-full text-left p-4 rounded-lg transition-all duration-200 group",
                        activeFeature === feature.id 
                          ? "bg-card border border-quantum-500/30 shadow-lg" 
                          : "hover:bg-card/50"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={cn(
                          "flex items-center justify-center w-10 h-10 rounded-lg",
                          feature.color === 'quantum' && "bg-quantum-500/10 text-quantum-400",
                          feature.color === 'neural' && "bg-neural-500/10 text-neural-400",
                          feature.color === 'algorand' && "bg-algorand-500/10 text-algorand-400"
                        )}>
                          <feature.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground">{feature.subtitle}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Feature Details */}
              <div className="lg:col-span-2">
                {currentFeature && (
                  <div className="bg-card/50 rounded-2xl p-8 border border-muted/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={cn(
                        "flex items-center justify-center w-16 h-16 rounded-xl",
                        currentFeature.color === 'quantum' && "bg-quantum-500/10 text-quantum-400",
                        currentFeature.color === 'neural' && "bg-neural-500/10 text-neural-400",
                        currentFeature.color === 'algorand' && "bg-algorand-500/10 text-algorand-400"
                      )}>
                        <currentFeature.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{currentFeature.title}</h3>
                        <p className="text-muted-foreground">{currentFeature.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {currentFeature.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentFeature.details.map((detail, index) => (
                        <div key={detail} className="flex items-center space-x-3">
                          <CheckCircle className={cn(
                            "w-5 h-5",
                            currentFeature.color === 'quantum' && "text-quantum-400",
                            currentFeature.color === 'neural' && "text-neural-400",
                            currentFeature.color === 'algorand' && "text-algorand-400"
                          )} />
                          <span className="text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-neural-400 to-algorand-400 bg-clip-text text-transparent">
                  Technical Specifications
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Performance metrics and security standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalSpecs.map((spec, index) => (
                <div 
                  key={spec.label}
                  className="bg-card rounded-xl p-6 border border-muted/20 hover:border-quantum-500/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-quantum-500/10 text-quantum-400 mb-4">
                    <spec.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{spec.value}</div>
                  <div className="text-sm text-muted-foreground">{spec.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Security </span>
                <span className="bg-gradient-to-r from-quantum-400 to-neural-400 bg-clip-text text-transparent">
                  Architecture
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Multi-layered defense system protecting your digital assets
              </p>
            </div>

            <div className="relative">
              {/* Security Layers Visualization */}
              <div className="space-y-4">
                {securityLayers.map((layer, index) => (
                  <div
                    key={layer.name}
                    className={cn(
                      "relative p-6 rounded-xl border transition-all duration-300 cursor-pointer",
                      hoveredLayer === index 
                        ? "bg-card/80 border-quantum-500/50 shadow-lg shadow-quantum-500/10" 
                        : "bg-card/50 border-muted/20 hover:border-quantum-500/30"
                    )}
                    onMouseEnter={() => setHoveredLayer(index)}
                    onMouseLeave={() => setHoveredLayer(null)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={cn(
                        "flex items-center justify-center w-12 h-12 rounded-lg",
                        hoveredLayer === index 
                          ? "bg-quantum-500/20 text-quantum-400" 
                          : "bg-muted/20 text-muted-foreground"
                      )}>
                        <layer.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{layer.name}</h3>
                        <p className="text-muted-foreground mb-3">{layer.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {layer.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 bg-muted/20 rounded-full text-xs font-medium text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className={cn(
                        "w-5 h-5 transition-all duration-300",
                        hoveredLayer === index 
                          ? "text-quantum-400 translate-x-1" 
                          : "text-muted-foreground"
                      )} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-24 bg-mesh-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Seamless </span>
                  <span className="bg-gradient-to-r from-algorand-400 to-quantum-400 bg-clip-text text-transparent">
                    Algorand Integration
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Built for the Algorand ecosystem with native support for PeraAlgo Wallet 
                  and comprehensive smart contract functionality.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "PeraAlgo Compatibility",
                      description: "Full compatibility with existing PeraAlgo Wallet infrastructure",
                      icon: GitBranch
                    },
                    {
                      title: "Smart Contract Support",
                      description: "Execute and monitor Algorand smart contracts with enhanced security",
                      icon: Code
                    },
                    {
                      title: "Asset Management",
                      description: "Comprehensive Algorand Standard Asset (ASA) management",
                      icon: Database
                    }
                  ].map((item, index) => (
                    <div key={item.title} className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-algorand-500/10 text-algorand-400">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-card/50 rounded-2xl p-8 border border-muted/20">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-algorand-500/10 text-algorand-400 mb-4">
                      <Network className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">Algorand Network</h3>
                    <p className="text-muted-foreground">Connected & Secured</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted/10 rounded-lg">
                      <span className="text-sm">Network Status</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-400">Connected</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-muted/10 rounded-lg">
                      <span className="text-sm">Block Height</span>
                      <span className="text-sm font-mono">32,841,267</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-muted/10 rounded-lg">
                      <span className="text-sm">TPS</span>
                      <span className="text-sm font-mono">6,000+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
