import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function IndustryCard({ industry, index = 0, variant = 'light' }) {
  const Icon = industry.icon;
  const isLight = variant === 'light';

  return (
    <AnimatedSection delay={index * 90} className="h-full">
      <Link
        to={industry.slug}
        className={`group relative flex flex-col justify-between h-full rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-md ${
          isLight
            ? 'bg-white/85 hover:bg-white border border-slate-300/80 hover:border-accent-primary/60 text-slate-900 shadow-sm hover:shadow-xl backdrop-blur-sm'
            : 'bg-navy-800/90 hover:bg-navy-700/80 border border-border/80 hover:border-accent-primary/60 hover:shadow-2xl hover:shadow-accent-primary/15 text-text-primary'
        }`}
      >
        {/* Top Gradient Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-light opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Card Body */}
        <div className="p-6 sm:p-7 flex flex-col flex-1">
          {/* Top Row: Icon & Category Indicator */}
          <div className="flex items-center justify-between mb-5">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 group-hover:scale-105 ${
                isLight
                  ? 'bg-purple-100 border border-purple-200 text-[#5B3FA6] group-hover:bg-[#5B3FA6] group-hover:text-white group-hover:shadow-md'
                  : 'bg-accent-primary/15 border border-accent-primary/30 text-accent-secondary group-hover:bg-accent-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent-primary/25'
              }`}
            >
              <Icon size={22} />
            </div>
            <span
              className={`text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                isLight
                  ? 'text-slate-600 bg-slate-100 border-slate-200'
                  : 'text-accent-light/80 bg-accent-primary/10 border-accent-primary/20'
              }`}
            >
              Sector {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`text-xl font-bold mb-2.5 transition-colors duration-200 ${
              isLight
                ? 'text-slate-900 group-hover:text-[#5B3FA6]'
                : 'text-text-primary group-hover:text-accent-light'
            }`}
          >
            {industry.title}
          </h3>

          {/* Description */}
          <p
            className={`text-sm leading-relaxed mb-5 flex-1 ${
              isLight ? 'text-slate-600' : 'text-text-secondary'
            }`}
          >
            {industry.description}
          </p>

          {/* Capability Chips if available */}
          {industry.capabilities && industry.capabilities.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {industry.capabilities.slice(0, 3).map((cap) => (
                <span
                  key={cap}
                  className={`px-2.5 py-1 text-[11px] font-medium rounded-lg border transition-colors ${
                    isLight
                      ? 'bg-slate-100 text-slate-700 border-slate-200/80 group-hover:border-[#5B3FA6]/40 group-hover:text-[#5B3FA6]'
                      : 'bg-navy-900/60 text-text-secondary border-border/60 group-hover:border-accent-primary/30 group-hover:text-accent-light'
                  }`}
                >
                  {cap}
                </span>
              ))}
            </div>
          )}

          {/* Action Link */}
          <div
            className={`pt-4 border-t flex items-center justify-between mt-auto ${
              isLight ? 'border-slate-200/80' : 'border-border/40'
            }`}
          >
            <span
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                isLight
                  ? 'text-[#5B3FA6] group-hover:text-accent-primary'
                  : 'text-accent-secondary group-hover:text-accent-light'
              }`}
            >
              Explore Industry
            </span>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                isLight
                  ? 'bg-purple-100 border border-purple-200 text-[#5B3FA6] group-hover:bg-[#5B3FA6] group-hover:text-white'
                  : 'bg-navy-700/80 border border-border/80 text-text-secondary group-hover:bg-accent-primary group-hover:text-white group-hover:border-transparent'
              }`}
            >
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </div>
        </div>

        {/* Ambient bottom glow */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />
      </Link>
    </AnimatedSection>
  );
}
