import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Shield } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background pt-16 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-quantum-500/10 text-quantum-400 mb-8">
            <Shield className="w-10 h-10" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-quantum-400 to-neural-400 bg-clip-text text-transparent">
              404
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Quantum State Not Found
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for has collapsed into a quantum superposition. 
            Let's get you back to a stable state.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="inline-flex items-center px-6 py-3 bg-quantum-gradient text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-quantum-500/25"
            >
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 border border-neural-500/30 text-neural-400 rounded-lg font-medium transition-all duration-200 hover:bg-neural-500/10 hover:border-neural-400"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
