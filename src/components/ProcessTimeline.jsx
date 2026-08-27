import { useState, useEffect } from 'react';
import { Search, Workflow, UserCheck, Rocket, Zap, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const defaultSteps = [
  {
    step: '01',
    title: 'Understand',
    description: 'Deep-dive into business objectives, technical requirements, and talent needs.',
    icon: Search,
    bgImage: '/process/01-understand.jpg',
    tag: 'Phase 1: Discovery & Tech Architecture Analysis',
  },
  {
    step: '02',
    title: 'Strategize',
    description: 'Architect tailored workforce solutions and agile execution roadmaps.',
    icon: Workflow,
    bgImage: '/process/02-strategize.jpg',
    tag: 'Phase 2: Solution Architecture & Delivery Blueprint',
  },
  {
    step: '03',
    title: 'Vetting & Match',
    description: 'Deploy rigorous multi-tier technical vetting and skill evaluations.',
    icon: UserCheck,
    bgImage: '/process/03-vetting.jpg',
    tag: 'Phase 3: AI-Assisted Elite Talent Matching',
  },
  {
    step: '04',
    title: 'Deploy',
    description: 'Seamlessly integrate dedicated talent and engineering squads into your workflow.',
    icon: Rocket,
    bgImage: '/process/04-deploy.jpg',
    tag: 'Phase 4: Squad Launch & Workflow Integration',
  },
  {
    step: '05',
    title: 'Deliver',
    description: 'Execute sprint deliverables with speed, enterprise security, and precision.',
    icon: Zap,
    bgImage: '/process/05-deliver.jpg',
    tag: 'Phase 5: High-Velocity Agile Sprint Execution',
  },
  {
    step: '06',
    title: 'Optimize',
    description: 'Continuously measure SLAs, refine outcomes, and scale capabilities.',
    icon: TrendingUp,
    bgImage: '/process/06-optimize.jpg',
    tag: 'Phase 6: SLA Telemetry & Enterprise Growth Scaling',
  },
];

export default function ProcessTimeline({
  steps = defaultSteps,
  className = '',
  activeStep: controlledActiveStep,
  onStepChange,
  showBackground = false,
}) {
  const [internalActiveStep, setInternalActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const activeStep = controlledActiveStep !== undefined ? controlledActiveStep : internalActiveStep;

  // Merge steps with default styling & images if custom steps are passed
  const items = (Array.isArray(steps) && steps.length > 0 ? steps : defaultSteps).map((step, index) => {
    const fallback = defaultSteps[index % defaultSteps.length];
    return {
      ...fallback,
      ...step,
      icon: step.icon || fallback.icon,
      bgImage: step.bgImage || fallback.bgImage,
      tag: step.tag || fallback.tag,
    };
  });

  const totalSteps = items.length;

  // Auto-advancing continuous loading animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          const nextStep = 0;
          setInternalActiveStep(nextStep);
          if (onStepChange) onStepChange(nextStep);
          return 0;
        }
        const next = prev + 0.12; // ~25s full cycle, ~4.2s per step
        const currentStepIndex = Math.min(
          totalSteps - 1,
          Math.floor((next / 100) * (totalSteps - 1))
        );
        setInternalActiveStep(currentStepIndex);
        if (onStepChange) onStepChange(currentStepIndex);
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [totalSteps, onStepChange]);

  const handleStepClick = (index) => {
    setInternalActiveStep(index);
    if (onStepChange) onStepChange(index);
    const targetProgress = totalSteps > 1 ? (index / (totalSteps - 1)) * 100 : 0;
    setProgress(targetProgress);
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Optional fallback background if used standalone */}
      {showBackground && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 rounded-3xl">
          {items.map((item, idx) => (
            <div
              key={item.bgImage || idx}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                idx === activeStep ? 'opacity-35 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={item.bgImage}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/85 to-navy-950" />
        </div>
      )}

      {/* Desktop: Horizontal Interactive Timeline */}
      <div className="hidden lg:block relative z-10">
        <div className="relative">
          {/* Base Track Line - Layered behind nodes (z-0) */}
          <div className="absolute top-8 left-[8%] right-[8%] h-[2px] bg-navy-750/90 rounded-full z-0 pointer-events-none" />

          {/* Active Glowing Laser Progress Line - Layered behind nodes (z-0) */}
          <div
            className="absolute top-8 left-[8%] h-[2px] rounded-full transition-all duration-100 ease-linear pointer-events-none z-0"
            style={{
              width: `${progress * 0.84}%`,
              background: `linear-gradient(90deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 50%, var(--color-accent-light) 100%)`,
              boxShadow: `0 0 12px var(--color-accent-glow), 0 0 24px var(--color-accent-glow)`,
            }}
          />

          {/* Traveling Loading Bead / Bullet - Layered behind nodes (z-0) */}
          <div
            className="absolute top-8 z-0 transition-all duration-100 ease-linear pointer-events-none -translate-y-1/2 -translate-x-1/2"
            style={{
              left: `${8 + progress * 0.84}%`,
            }}
          >
            <div className="relative flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-accent-secondary/60 animate-ping opacity-75 pointer-events-none absolute" />
              <div className="w-2.5 h-2.5 rounded-full bg-white shadow-lg shadow-accent-primary/80 ring-2 ring-accent-primary z-10" />
            </div>
          </div>

          {/* Nodes Grid */}
          <div
            className="grid gap-3 relative z-10"
            style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
          >
            {items.map((step, index) => {
              const isPassed = activeStep > index;
              const isCurrent = activeStep === index;
              const Icon = step.icon || Search;

              return (
                <div
                  key={step.title || index}
                  onClick={() => handleStepClick(index)}
                  className="cursor-pointer group flex flex-col items-center text-center select-none"
                >
                  {/* Step Node Icon Container */}
                  <div className="relative mb-5 flex items-center justify-center">
                    {/* Pulsing ring on active node */}
                    {isCurrent && (
                      <div className="absolute inset-0 rounded-full animate-ping opacity-25 bg-accent-primary pointer-events-none scale-150" />
                    )}

                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 relative z-10 ${
                        isCurrent
                          ? 'bg-navy-800 border-accent-primary shadow-xl shadow-accent-primary/40 scale-110 -translate-y-1'
                          : isPassed
                          ? 'bg-navy-800/90 border-accent-secondary/80 text-accent-light'
                          : 'bg-navy-800/60 border-border/70 text-text-muted group-hover:border-border-hover group-hover:text-text-secondary group-hover:bg-navy-700/60'
                      }`}
                    >
                      <Icon
                        size={24}
                        className={`transition-colors duration-300 ${
                          isCurrent
                            ? 'text-accent-light scale-110 animate-pulse'
                            : isPassed
                            ? 'text-accent-secondary'
                            : 'text-text-muted group-hover:text-text-secondary'
                        }`}
                      />

                      {/* Step Number Badge */}
                      <span
                        className={`absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-mono font-bold flex items-center justify-center border ${
                          isCurrent
                            ? 'bg-accent-primary text-white border-white/40 shadow-sm'
                            : isPassed
                            ? 'bg-navy-700 text-accent-light border-accent-secondary/50'
                            : 'bg-navy-800 text-text-muted border-border'
                        }`}
                      >
                        {step.step || index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title & Phase */}
                  <div className="px-1 max-w-[170px]">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-accent-secondary block mb-1">
                      {step.phase || step.tag || `Phase ${index + 1}`}
                    </span>
                    <h4
                      className={`text-sm font-bold leading-snug transition-colors duration-200 mb-1.5 ${
                        isCurrent
                          ? 'text-text-primary'
                          : isPassed
                          ? 'text-text-secondary'
                          : 'text-text-muted group-hover:text-text-secondary'
                      }`}
                    >
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-text-muted leading-relaxed line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical Process Stepper */}
      <div className="lg:hidden relative z-10">
        <div className="relative pl-6 space-y-6">
          {/* Vertical Base Track Line */}
          <div className="absolute left-[39px] top-6 bottom-6 w-[2px] bg-navy-750/90 rounded-full z-0" />

          {/* Vertical Progress Fill */}
          <div
            className="absolute left-[39px] top-6 w-[2px] rounded-full transition-all duration-100 ease-linear pointer-events-none z-0"
            style={{
              height: `${progress * 0.9}%`,
              background: `linear-gradient(180deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 50%, var(--color-accent-light) 100%)`,
              boxShadow: `0 0 10px var(--color-accent-glow)`,
            }}
          />

          {/* Traveling Vertical Bullet - Behind nodes (z-0) */}
          <div
            className="absolute left-[39px] z-0 transition-all duration-100 ease-linear pointer-events-none -translate-x-1/2 -translate-y-1/2"
            style={{ top: `${6 + progress * 0.88}%` }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-white shadow-lg shadow-accent-primary/80 ring-2 ring-accent-primary" />
          </div>

          <div className="space-y-6 relative z-10">
            {items.map((item, index) => {
              const Icon = item.icon || Search;
              const isActive = index === activeStep;

              return (
                <div
                  key={item.title || index}
                  onClick={() => handleStepClick(index)}
                  className="relative z-10 flex items-start gap-4 cursor-pointer"
                >
                  <div
                    className={`absolute -left-14 top-0 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-accent-primary to-accent-secondary text-white scale-110 ring-4 ring-offset-2 ring-offset-navy-950 ring-accent-primary/40 shadow-lg'
                        : 'bg-navy-900 text-text-secondary border border-border shadow-md'
                    }`}
                  >
                    <Icon size={20} className="stroke-[2.2]" />
                  </div>

                  <div className="pt-0.5">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[11px] font-mono font-bold text-accent-secondary">
                        {item.step || `0${index + 1}`}
                      </span>
                      <h4
                        className={`text-base font-bold transition-colors ${
                          isActive ? 'text-white' : 'text-text-primary'
                        }`}
                      >
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-text-secondary leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
