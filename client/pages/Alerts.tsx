import { 
  Bell, 
  AlertTriangle, 
  Shield, 
  Brain, 
  Activity, 
  Eye,
  Clock,
  Filter,
  Search,
  Settings
} from 'lucide-react';

export default function Alerts() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-mesh-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-neural-500/10 border border-neural-500/20 text-neural-400 text-sm font-medium mb-8">
              <Bell className="w-4 h-4 mr-2" />
              Real-Time Alert System
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neural-400 via-quantum-400 to-algorand-400 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              <span className="text-foreground">Security Alerts</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time notification system with AI-powered alerts for suspicious 
              wallet activity, using advanced monitoring and threat detection.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card/50 rounded-2xl p-12 border border-muted/20 text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-neural-500/10 text-neural-400 mb-6">
                <AlertTriangle className="w-10 h-10" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4">Real-Time Alerts Module Coming Soon</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                The live notification system is being developed with mock data initially, 
                but built with architecture ready to integrate live Algorand transactions 
                and wallet activity monitoring.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Continue prompting to have this page filled out with a complete 
                real-time alert dashboard and notification system.
              </p>
              
              <button className="px-6 py-3 bg-neural-gradient text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-neural-500/25">
                Enable Alert System
              </button>
            </div>

            {/* Alert System Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-card/50 rounded-xl border border-muted/20">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-neural-500/10 text-neural-400 mb-4">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Threat Detection</h3>
                <p className="text-muted-foreground text-sm">
                  Machine learning algorithms analyze transaction patterns 
                  and detect suspicious wallet activities in real-time
                </p>
              </div>

              <div className="p-6 bg-card/50 rounded-xl border border-muted/20">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-quantum-500/10 text-quantum-400 mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Security Breach Alerts</h3>
                <p className="text-muted-foreground text-sm">
                  Instant notifications for unauthorized access attempts, 
                  unusual login patterns, and potential security breaches
                </p>
              </div>

              <div className="p-6 bg-card/50 rounded-xl border border-muted/20">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-algorand-500/10 text-algorand-400 mb-4">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Transaction Monitoring</h3>
                <p className="text-muted-foreground text-sm">
                  Live monitoring of Algorand transactions with alerts 
                  for unusual amounts, frequencies, or destinations
                </p>
              </div>

              <div className="p-6 bg-card/50 rounded-xl border border-muted/20">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-neural-500/10 text-neural-400 mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Behavioral Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  AI-powered analysis of user behavior patterns 
                  to identify anomalies and potential threats
                </p>
              </div>

              <div className="p-6 bg-card/50 rounded-xl border border-muted/20">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-quantum-500/10 text-quantum-400 mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Monitoring</h3>
                <p className="text-muted-foreground text-sm">
                  Continuous monitoring with instant alerts 
                  delivered via multiple channels including push, email, and SMS
                </p>
              </div>

              <div className="p-6 bg-card/50 rounded-xl border border-muted/20">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-algorand-500/10 text-algorand-400 mb-4">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom Alert Rules</h3>
                <p className="text-muted-foreground text-sm">
                  Configure custom alert thresholds, notification preferences, 
                  and automated response actions for different threat levels
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
