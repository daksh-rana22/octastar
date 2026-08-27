import { MapPin, Clock, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

export default function JobCard({ job, index = 0, variant = 'light' }) {
  const isLight = variant === 'light';

  return (
    <AnimatedSection delay={index * 60}>
      <div
        className={`group p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
          isLight
            ? 'bg-slate-50 hover:bg-white border-slate-200/90 hover:border-[#5B3FA6]/50 hover:shadow-[#5B3FA6]/10'
            : 'bg-navy-800/90 hover:bg-navy-700/80 border-border/80 hover:border-accent-primary/60 hover:shadow-accent-primary/15'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                  isLight
                    ? 'bg-purple-100 text-[#5B3FA6] border border-purple-200'
                    : 'bg-accent-primary/15 text-accent-light border border-accent-primary/30'
                }`}
              >
                {job.type}
              </span>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  isLight
                    ? 'bg-slate-200/70 text-slate-700'
                    : 'bg-navy-700/80 text-text-secondary border border-border/50'
                }`}
              >
                {job.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/40">
                <Sparkles size={11} /> Actively Hiring
              </span>
            </div>

            {/* Title */}
            <h3
              className={`text-xl font-bold mb-2.5 transition-colors ${
                isLight
                  ? 'text-slate-900 group-hover:text-[#5B3FA6]'
                  : 'text-text-primary group-hover:text-accent-light'
              }`}
            >
              {job.title}
            </h3>

            {/* Meta tags */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-text-secondary mb-3.5">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin size={15} className="text-[#5B3FA6] dark:text-accent-secondary" />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock size={15} className="text-[#5B3FA6] dark:text-accent-secondary" />
                {job.experience}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Briefcase size={15} className="text-[#5B3FA6] dark:text-accent-secondary" />
                Competitive Package + Benefits
              </span>
            </div>

            {/* Description */}
            <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-text-secondary'}`}>
              {job.description}
            </p>
          </div>

          {/* Action CTA */}
          <div className="flex-shrink-0 flex items-center md:flex-col justify-between sm:justify-start gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5B3FA6] hover:bg-[#4a328c] text-white text-sm font-bold shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 hover:scale-105 transition-all duration-200 whitespace-nowrap"
            >
              Apply Now
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <span className="text-[11px] text-slate-400 dark:text-text-muted text-center">
              Quick 2-min application
            </span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
