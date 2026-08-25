import AnimatedSection from './AnimatedSection';

export default function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <AnimatedSection delay={index * 100}>
      <div className="group flex gap-4 md:gap-5 p-5 rounded-xl hover:bg-navy-700/30 transition-all duration-300">
        <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-lg bg-accent-primary/10 border border-accent-primary/20 group-hover:bg-accent-primary/15 transition-all duration-200">
          <Icon size={20} className="text-accent-secondary" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-text-primary mb-1 group-hover:text-accent-secondary transition-colors duration-200">
            {title}
          </h4>
          <p className="text-sm text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
