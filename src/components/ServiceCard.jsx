import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;

  return (
    <AnimatedSection delay={index * 100} className="h-full">
      <Link
        to={service.slug}
        className="group relative flex flex-col h-full p-6 md:p-8 bg-navy-800 border border-border rounded-xl hover:border-accent-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/10 hover:-translate-y-1 overflow-hidden"
      >
        {/* Number */}
        <span className="absolute top-5 right-6 text-5xl font-bold text-navy-700 group-hover:text-accent-primary/10 transition-colors duration-300 select-none">
          {service.number}
        </span>

        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-primary/10 border border-accent-primary/20 mb-5 group-hover:bg-accent-primary/15 transition-all duration-300">
          <Icon size={22} className="text-accent-secondary" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-accent-secondary transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
          {service.shortDescription || service.description}
        </p>

        {/* Link */}
        <div className="flex items-center gap-2 text-sm font-medium text-accent-secondary group-hover:text-accent-light transition-colors">
          Learn More
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </div>

        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    </AnimatedSection>
  );
}
