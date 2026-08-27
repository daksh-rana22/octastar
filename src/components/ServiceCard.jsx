import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function ServiceCard({ service, index = 0, variant = 'dark' }) {
  const Icon = service.icon;

  return (
    <AnimatedSection delay={index * 80} className="h-full">
      <Link
        to={service.slug}
        className={`group relative flex flex-col justify-between h-full p-4.5 sm:p-5 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 backdrop-blur-md overflow-hidden ${
          variant === 'glass'
            ? 'bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white'
            : variant === 'light'
            ? 'bg-white/85 hover:bg-white border border-slate-300/80 hover:border-accent-primary/60 text-slate-900 shadow-sm hover:shadow-md backdrop-blur-sm'
            : 'bg-navy-800/90 hover:bg-navy-700/80 border border-border/80 hover:border-accent-primary/60 text-text-primary'
        }`}
      >
        {/* Subtle Top Gradient Line */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
            variant === 'glass'
              ? 'bg-gradient-to-r from-transparent via-white to-transparent'
              : 'bg-gradient-to-r from-transparent via-accent-primary to-transparent'
          }`}
        />

        {/* Ambient Card Glow */}
        <div
          className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-all duration-500 ${
            variant === 'glass'
              ? 'bg-white/10 group-hover:bg-white/20'
              : 'bg-accent-primary/10 group-hover:bg-accent-primary/20'
          }`}
        />

        {/* Top Row: Icon & Watermark Number */}
        <div>
          <div className="flex items-start justify-between mb-3.5">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 group-hover:scale-105 ${
                variant === 'glass'
                  ? 'bg-white/15 border border-white/25 text-white group-hover:bg-white group-hover:text-accent-primary'
                  : variant === 'light'
                  ? 'bg-purple-100 border border-purple-200 text-[#5B3FA6] group-hover:bg-[#5B3FA6] group-hover:text-white'
                  : 'bg-accent-primary/15 border border-accent-primary/30 text-accent-secondary group-hover:bg-accent-primary group-hover:text-white'
              }`}
            >
              <Icon size={19} />
            </div>
            {service.number && (
              <span
                className={`text-2xl sm:text-3xl font-extrabold font-mono transition-colors duration-300 select-none ${
                  variant === 'glass'
                    ? 'text-purple-200/40 group-hover:text-white/60'
                    : variant === 'light'
                    ? 'text-slate-300 group-hover:text-[#5B3FA6]/40'
                    : 'text-navy-600/60 group-hover:text-accent-primary/30'
                }`}
              >
                {service.number}
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            className={`text-base sm:text-lg font-bold mb-1.5 transition-colors duration-200 ${
              variant === 'glass'
                ? 'text-white group-hover:text-purple-100'
                : variant === 'light'
                ? 'text-slate-900 group-hover:text-[#5B3FA6]'
                : 'text-text-primary group-hover:text-accent-light'
            }`}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p
            className={`text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 ${
              variant === 'glass'
                ? 'text-purple-100/90'
                : variant === 'light'
                ? 'text-slate-600'
                : 'text-text-secondary'
            }`}
          >
            {service.description || service.shortDescription}
          </p>
        </div>

        {/* Footer: Tags / Learn More Action */}
        <div
          className={`pt-3 border-t flex items-center justify-between mt-auto ${
            variant === 'glass'
              ? 'border-white/15'
              : variant === 'light'
              ? 'border-slate-200/80'
              : 'border-border/40'
          }`}
        >
          <span
            className={`text-[11px] font-semibold uppercase tracking-wider transition-colors ${
              variant === 'glass'
                ? 'text-purple-200 group-hover:text-white'
                : variant === 'light'
                ? 'text-[#5B3FA6] group-hover:text-accent-primary'
                : 'text-accent-secondary group-hover:text-accent-light'
            }`}
          >
            Explore Capability
          </span>
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
              variant === 'glass'
                ? 'bg-white/15 border border-white/25 text-white group-hover:bg-white group-hover:text-accent-primary'
                : variant === 'light'
                ? 'bg-purple-100 border border-purple-200 text-[#5B3FA6] group-hover:bg-[#5B3FA6] group-hover:text-white'
                : 'bg-navy-700/80 border border-border/80 text-text-secondary group-hover:bg-accent-primary group-hover:text-white group-hover:border-transparent'
            }`}
          >
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </div>
        </div>

        {/* Bottom Accent Glow */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
            variant === 'glass'
              ? 'bg-gradient-to-r from-transparent via-white/40 to-transparent'
              : 'bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent'
          }`}
        />
      </Link>
    </AnimatedSection>
  );
}
