import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

export default function JobCard({ job, index = 0 }) {
  return (
    <AnimatedSection delay={index * 100}>
      <div className="group p-6 bg-navy-800 border border-border rounded-xl hover:border-accent-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-accent-primary/10 text-xs font-medium text-accent-secondary">
                {job.type}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-navy-700 text-xs font-medium text-text-secondary">
                {job.category}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-secondary transition-colors">
              {job.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-3">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-text-muted" />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-text-muted" />
                {job.experience}
              </span>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed">
              {job.description}
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary text-sm font-semibold text-white hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-200 whitespace-nowrap self-start"
          >
            Apply
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
