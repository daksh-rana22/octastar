import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function IndustryCard({ industry, index = 0 }) {
  const Icon = industry.icon;

  return (
    <AnimatedSection delay={index * 100} className="h-full">
      <Link
        to={industry.slug}
        className="group relative flex flex-col h-full bg-navy-800 border border-border rounded-xl overflow-hidden hover:border-accent-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/10 hover:-translate-y-1"
      >
        {/* Top gradient bar */}
        <div className="h-1 w-full gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col flex-1">
          {/* Icon */}
          <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent-primary/10 border border-accent-primary/20 mb-5 group-hover:bg-accent-primary/15 group-hover:scale-105 transition-all duration-300">
            <Icon size={26} className="text-accent-secondary" />
          </div>

          <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-accent-secondary transition-colors duration-200">
            {industry.title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
            {industry.description}
          </p>

          {/* Link */}
          <div className="flex items-center gap-2 text-sm font-medium text-accent-secondary group-hover:text-accent-light transition-colors">
            Explore Industry
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}
