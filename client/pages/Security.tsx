import { 
  Shield, 
  Lock, 
  Eye, 
  Activity, 
  Settings, 
  AlertTriangle,
  CheckCircle,
  Users,
  Key,
  Database
} from 'lucide-react';

export default function Security() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-mesh-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-quantum-500/10 border border-quantum-500/20 text-quantum-400 text-sm font-medium mb-8">
              <Shield className="w-4 h-4 mr-2" />
              Security Dashboard
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-quantum-400 via-neural-400 to-algorand-400 bg-clip-text text-transparent">
                Security
              </span>
              <br />
              <span className="text-foreground">Control Center</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security management dashboard for wallet settings, 
              AI activity reports, and smart contract interaction monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card/50 rounded-2xl p-12 border border-muted/20 text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-quantum-500/10 text-quantum-400 mb-6">
                <Settings className="w-10 h-10" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4">Security Dashboard Coming Soon</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                The comprehensive security dashboard is being developed with advanced 
                React components for managing wallet security, viewing AI reports, 
                and monitoring smart contract interactions.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Continue prompting to have this page filled out with a fully functional 
                security dashboard interface.
              </p>
              
              <button className="px-6 py-3 bg-quantum-gradient text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-quantum-500/25">
                Request Dashboard Access
              </button>
            </div>

            {/* Preview Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-card/50 rounded-xl border border-muted/20">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-quantum-500/10 text-quantum-400 mb-4">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Wallet Security Settings</h3>
                <p className="text-muted-foreground text-sm">
                  Customize quantum security levels, AI monitoring sensitivity, 
                  and recovery policies
                </p>
              </div>

              <div className="p-6 bg-card/50 rounded-xl border border-muted/20">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-neural-500/10 text-neural-400 mb-4">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Activity Reports</h3>
                <p className="text-muted-foreground text-sm">
                  View detailed reports on AI Guardian monitoring, 
                  threat detection, and security analytics
                </p>
              </div>

              <div className="p-6 bg-card/50 rounded-xl border border-muted/20">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-algorand-500/10 text-algorand-400 mb-4">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Smart Contract Logs</h3>
                <p className="text-muted-foreground text-sm">
                  Monitor all smart contract interactions with 
                  detailed transaction and security logs
                </p>
              </div>

              <div className="p-6 bg-card/50 rounded-xl border border-muted/20">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-quantum-500/10 text-quantum-400 mb-4">
                  <Key className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Key Management</h3>
                <p className="text-muted-foreground text-sm">
                  Manage quantum-resistant keys, backup policies, 
                  and recovery configurations
                </p>
              </div>

              <div className="p-6 bg-card/50 rounded-xl border border-muted/20">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-neural-500/10 text-neural-400 mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-time Monitoring</h3>
                <p className="text-muted-foreground text-sm">
                  Live dashboard showing current security status, 
                  active threats, and system health
                </p>
              </div>

              <div className="p-6 bg-card/50 rounded-xl border border-muted/20">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-algorand-500/10 text-algorand-400 mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Access Control</h3>
                <p className="text-muted-foreground text-sm">
                  Configure multi-signature requirements, 
                  user permissions, and admin settings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
