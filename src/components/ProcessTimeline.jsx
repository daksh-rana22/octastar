import AnimatedSection from './AnimatedSection';

export default function ProcessTimeline({ steps, className = '' }) {
  return (
    <div className={className}>
      {/* Desktop: Horizontal */}
      <div className="hidden lg:block">
        <div className="relative flex items-start justify-between">
          {/* Connecting line */}
          <div className="absolute top-6 left-[8%] right-[8%] h-px bg-gradient-to-r from-accent-primary/30 via-accent-primary/60 to-accent-primary/30" />

          {steps.map((step, index) => (
            <AnimatedSection key={step.step || index} delay={index * 150} className="relative flex flex-col items-center text-center flex-1 px-3">
              {/* Node */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-navy-700 border-2 border-accent-primary/50 flex items-center justify-center mb-4 group-hover:border-accent-primary transition-colors">
                <span className="text-sm font-bold text-accent-secondary">
                  {step.step}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-text-primary mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed max-w-[160px]">
                {step.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet: Vertical */}
      <div className="lg:hidden">
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-[15px] w-px bg-gradient-to-b from-accent-primary/30 via-accent-primary/60 to-accent-primary/30" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.step || index} delay={index * 100} className="relative flex gap-5">
                {/* Node */}
                <div className="absolute -left-8 top-0 z-10 w-8 h-8 rounded-full bg-navy-700 border-2 border-accent-primary/50 flex items-center justify-center">
                  <span className="text-xs font-bold text-accent-secondary">
                    {step.step}
                  </span>
                </div>
                <div className="pt-1">
                  <h4 className="text-base font-semibold text-text-primary mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
