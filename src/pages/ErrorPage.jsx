import { useRouteError, Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass, Briefcase, Mail } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import Logo from '../components/Logo';

export default function ErrorPage() {
  const error = useRouteError();

  const quickLinks = [
    { label: 'Home', to: '/', icon: Home },
    { label: 'Services', to: '/services', icon: Compass },
    { label: 'Careers', to: '/careers', icon: Briefcase },
    { label: 'Contact', to: '/contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-[#0B132B] flex flex-col justify-center items-center px-4 py-16 relative overflow-hidden text-white">
      {/* Radiant Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-accent-primary/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute inset-0 geometric-dots opacity-20 pointer-events-none" />

      <Container className="relative z-10 text-center max-w-xl">
        <div className="flex justify-center mb-8">
          <Logo size="large" />
        </div>

        <div className="relative mb-6">
          <span className="text-8xl sm:text-9xl font-black font-mono gradient-text tracking-tighter select-none">
            404
          </span>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-mono font-bold tracking-widest text-purple-200 uppercase">
            Navigation Anomaly
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Page Coordinates Not Found
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-md mx-auto">
          {error?.statusText || error?.message || "The destination page you are looking for has migrated or does not exist on our servers."}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Button to="/" size="lg" className="bg-[#5B3FA6] hover:bg-[#4b2f96] text-white border-none shadow-xl shadow-purple-900/30">
            <Home size={16} className="mr-2" /> Return to Homepage
          </Button>
          <Button to="/contact" variant="secondary" size="lg" className="border-border hover:bg-white/10">
            Report Issue
          </Button>
        </div>

        {/* Quick Navigation Cards */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4">
            Popular Destinations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-primary/40 transition-all text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-2"
                >
                  <Icon size={14} className="text-accent-secondary" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
