import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function IndustryCard({ industry, index = 0 }) {
  const Icon = industry.icon;

  return (
    <AnimatedSection delay={index * 90} className="h-full">
      <Link
        to={industry.slug}
        className="group relative flex flex-col justify-between h-full bg-navy-800/90 hover:bg-navy-700/80 border border-border/80 hover:border-accent-primary/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent-primary/15 hover:-translate-y-1.5 backdrop-blur-md"
      >
        {/* Top Gradient Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-light opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Card Body */}
        <div className="p-6 sm:p-7 flex flex-col flex-1">
          {/* Top Row: Icon & Category Indicator */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center justify-center w-13 h-13 rounded-xl bg-accent-primary/15 border border-accent-primary/30 text-accent-secondary group-hover:bg-accent-primary group-hover:text-white group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-accent-primary/25 transition-all duration-300">
              <Icon size={24} />
            </div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-accent-light/80 bg-accent-primary/10 px-2.5 py-1 rounded-full border border-accent-primary/20">
              Sector {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-text-primary mb-2.5 group-hover:text-accent-light transition-colors duration-200">
            {industry.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
            {industry.description}
          </p>

          {/* Capability Chips if available */}
          {industry.capabilities && industry.capabilities.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {industry.capabilities.slice(0, 3).map((cap) => (
                <span
                  key={cap}
                  className="px-2.5 py-1 text-[11px] font-medium bg-navy-900/60 text-text-secondary rounded-lg border border-border/60 group-hover:border-accent-primary/30 group-hover:text-accent-light transition-colors"
                >
                  {cap}
                </span>
              ))}
            </div>
          )}

          {/* Action Link */}
          <div className="pt-4 border-t border-border/40 flex items-center justify-between mt-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-secondary group-hover:text-accent-light transition-colors">
              Explore Industry
            </span>
            <div className="w-8 h-8 rounded-full bg-navy-700/80 border border-border/80 flex items-center justify-center text-text-secondary group-hover:bg-accent-primary group-hover:text-white group-hover:border-transparent transition-all duration-200">
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </div>
        </div>

        {/* Ambient bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    </AnimatedSection>
  );
}
