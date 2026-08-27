import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function ServiceCard({ service, index = 0, variant = 'dark' }) {
  const Icon = service.icon;

  return (
    <AnimatedSection delay={index * 80} className="h-full">
      <Link
        to={service.slug}
        className="group relative flex flex-col justify-between h-full p-6 sm:p-7 bg-navy-800/90 hover:bg-navy-700/80 border border-border/80 hover:border-accent-primary/60 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent-primary/15 hover:-translate-y-1.5 backdrop-blur-md overflow-hidden"
      >
        {/* Subtle Top Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Ambient Card Glow */}
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-accent-primary/10 rounded-full blur-2xl pointer-events-none group-hover:bg-accent-primary/20 transition-all duration-500" />

        {/* Top Row: Icon & Large Watermark Number */}
        <div>
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-primary/15 border border-accent-primary/30 text-accent-secondary group-hover:bg-[#5865F2] group-hover:text-white group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-accent-primary/30 transition-all duration-300">
              <Icon size={22} />
            </div>
            {service.number && (
              <span className="text-4xl font-extrabold font-mono text-navy-600/70 group-hover:text-accent-primary/25 transition-colors duration-300 select-none">
                {service.number}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-text-primary mb-2.5 group-hover:text-accent-light transition-colors duration-200">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            {service.description || service.shortDescription}
          </p>
        </div>

        {/* Footer: Tags / Learn More Action */}
        <div className="pt-4 border-t border-border/40 flex items-center justify-between mt-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-secondary group-hover:text-accent-light transition-colors">
            Explore Capability
          </span>
          <div className="w-8 h-8 rounded-full bg-navy-700/80 border border-border/80 flex items-center justify-center text-text-secondary group-hover:bg-accent-primary group-hover:text-white group-hover:border-transparent transition-all duration-200">
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </div>
        </div>

        {/* Bottom Accent Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    </AnimatedSection>
  );
}
