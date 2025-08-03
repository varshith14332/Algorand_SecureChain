import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Brain, 
  Zap, 
  Lock, 
  Eye, 
  Cpu, 
  ArrowRight, 
  Check,
  Star,
  GitBranch,
  Database,
  Fingerprint,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Shield,
    title: "Quantum-Resistant Cryptography",
    description: "Advanced post-quantum algorithms protect your assets against future quantum threats",
    color: "quantum"
  },
  {
    icon: Brain,
    title: "AI Guardian Protection",
    description: "Intelligent monitoring system detects suspicious activities and prevents unauthorized access",
    color: "neural"
  },
  {
    icon: Zap,
    title: "Autonomous Recovery",
    description: "AI-powered recovery system ensures secure wallet restoration without compromising security",
    color: "algorand"
  },
  {
    icon: GitBranch,
    title: "Algorand Integration",
    description: "Native support for Algorand blockchain with PeraAlgo Wallet compatibility",
    color: "quantum"
  }
];

const stats = [
  { value: "99.99%", label: "Uptime", icon: Activity },
  { value: "256-bit", label: "Quantum Security", icon: Lock },
  { value: "< 0.1%", label: "False Positives", icon: Eye },
  { value: "24/7", label: "AI Monitoring", icon: Brain }
];

export default function Index() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute w-1 h-1 bg-quantum-500 rounded-full animate-pulse-slow",
                `left-[${Math.random() * 100}%] top-[${Math.random() * 100}%]`
              )}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-quantum-500/10 border border-quantum-500/20 text-quantum-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                Quantum-Resistant • AI-Powered • Algorand Native
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-quantum-400 via-neural-400 to-algorand-400 bg-clip-text text-transparent">
                  Next-Generation
                </span>
                <br />
                <span className="text-foreground">Crypto Security</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
                The world's first quantum-resistant Algorand wallet protected by AI Guardian technology. 
                Secure your digital assets against tomorrow's threats, today.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link 
                  to="/features"
                  className="group relative px-8 py-4 bg-quantum-gradient text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-quantum-500/25 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-quantum-600 to-quantum-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link 
                  to="/developer"
                  className="group px-8 py-4 border border-neural-500/30 text-neural-400 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-neural-500/10 hover:border-neural-400 hover:scale-105"
                >
                  <span className="flex items-center">
                    View Documentation
                    <Cpu className="w-5 h-5 ml-2 group-hover:rotate-180 transition-transform duration-500" />
                  </span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className={cn(
                      "text-center transition-all duration-700 transform",
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                    )}
                    style={{ transitionDelay: `${index * 200 + 600}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-card/50 border border-quantum-500/20 mb-3">
                      <stat.icon className="w-6 h-6 text-quantum-400" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-neural-400 to-algorand-400 bg-clip-text text-transparent">
                  Advanced Protection
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Combining cutting-edge quantum cryptography with artificial intelligence 
                to create the most secure wallet experience possible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={cn(
                    "group relative p-8 rounded-2xl bg-card/50 border border-muted/20 hover:border-quantum-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                    feature.color === 'quantum' && "hover:shadow-quantum-500/10",
                    feature.color === 'neural' && "hover:shadow-neural-500/10",
                    feature.color === 'algorand' && "hover:shadow-algorand-500/10"
                  )}
                >
                  <div className="flex items-start space-x-4">
                    <div className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-xl",
                      feature.color === 'quantum' && "bg-quantum-500/10 text-quantum-400",
                      feature.color === 'neural' && "bg-neural-500/10 text-neural-400",
                      feature.color === 'algorand' && "bg-algorand-500/10 text-algorand-400"
                    )}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-quantum-400 transition-colors duration-200">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300",
                    feature.color === 'quantum' && "bg-quantum-gradient",
                    feature.color === 'neural' && "bg-neural-gradient",
                    feature.color === 'algorand' && "bg-gradient-to-br from-algorand-500 to-algorand-400"
                  )}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Showcase */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Unbreakable </span>
                  <span className="bg-gradient-to-r from-quantum-400 to-neural-400 bg-clip-text text-transparent">
                    Security Architecture
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our revolutionary security stack combines post-quantum cryptography 
                  with advanced AI monitoring to protect against both current and future threats.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "CRYSTALS-Dilithium digital signatures",
                    "Real-time behavioral analysis",
                    "Multi-layer threat detection",
                    "Autonomous incident response"
                  ].map((item, index) => (
                    <div key={item} className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-quantum-500/10">
                        <Check className="w-4 h-4 text-quantum-400" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/security"
                  className="inline-flex items-center px-6 py-3 bg-neural-gradient text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-neural-500/25 group"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Security Dashboard
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

              <div className="relative">
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Central Core */}
                  <div className="absolute inset-1/3 rounded-full bg-quantum-gradient animate-pulse-slow"></div>
                  
                  {/* Orbiting Elements */}
                  {[
                    { icon: Lock, color: "quantum", delay: "0s" },
                    { icon: Brain, color: "neural", delay: "1s" },
                    { icon: Database, color: "algorand", delay: "2s" },
                    { icon: Fingerprint, color: "quantum", delay: "3s" }
                  ].map((element, index) => (
                    <div
                      key={index}
                      className="absolute inset-0 animate-spin"
                      style={{ 
                        animationDuration: "20s",
                        animationDelay: element.delay,
                        animationDirection: index % 2 === 0 ? "normal" : "reverse"
                      }}
                    >
                      <div className={cn(
                        "absolute w-12 h-12 rounded-full flex items-center justify-center",
                        element.color === 'quantum' && "bg-quantum-500/20 text-quantum-400 top-0 left-1/2 transform -translate-x-1/2",
                        element.color === 'neural' && "bg-neural-500/20 text-neural-400 right-0 top-1/2 transform -translate-y-1/2",
                        element.color === 'algorand' && "bg-algorand-500/20 text-algorand-400 bottom-0 left-1/2 transform -translate-x-1/2"
                      )}>
                        <element.icon className="w-6 h-6" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-mesh-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Ready to Secure Your </span>
              <span className="bg-gradient-to-r from-quantum-400 via-neural-400 to-algorand-400 bg-clip-text text-transparent">
                Digital Future?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the next generation of crypto security. Experience quantum-resistant 
              protection with AI-powered intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/features"
                className="px-8 py-4 bg-quantum-gradient text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-quantum-500/25"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/developer"
                className="px-8 py-4 border border-neural-500/30 text-neural-400 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-neural-500/10 hover:border-neural-400"
              >
                Developer Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
