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
              background: `linear-gradient(90deg, #4F46E5 0%, #5865F2 40%, #7C83FF 75%, #A8B0FF 100%)`,
              boxShadow: `0 0 10px rgba(124, 131, 255, 0.7), 0 0 20px rgba(88, 101, 242, 0.5)`,
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
              <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-accent-secondary shadow-[0_0_12px_#ffffff,0_0_20px_#7C83FF]" />
            </div>
          </div>

          {/* Step Nodes - Elevated above the laser beam (z-10) with solid backdrop */}
          <div className="relative z-10 flex items-start justify-between">
            {items.map((item, index) => {
              const Icon = item.icon || Search;
              const isActive = index === activeStep;
              const isPassed = index <= activeStep;
              const stepPositionPercent = (index / (totalSteps - 1)) * 100;
              const isCurrentOrPassed = progress >= stepPositionPercent - 2;

              return (
                <div
                  key={item.title || index}
                  onClick={() => handleStepClick(index)}
                  className="relative z-10 flex-1 flex flex-col items-center text-center px-1.5 cursor-pointer select-none"
                >
                  {/* Node Circle */}
                  <div className="relative mb-3.5 flex items-center justify-center">
                    {/* Active Halo Ring */}
                    <div
                      className={`absolute -inset-2.5 rounded-full transition-all duration-500 pointer-events-none border-2 border-accent-secondary/60 ${
                        isActive
                          ? 'opacity-100 scale-110 shadow-[0_0_25px_rgba(124,131,255,0.6)] animate-pulse'
                          : 'opacity-0'
                      }`}
                    />

                    {/* Circle Node with solid background so the beam passes BEHIND */}
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-accent-primary to-accent-secondary text-white scale-110 ring-4 ring-offset-4 ring-offset-navy-950 ring-accent-primary/50 shadow-[0_0_25px_rgba(88,101,242,0.7)]'
                          : isCurrentOrPassed
                          ? 'bg-navy-900 text-accent-secondary border-2 border-accent-primary/60 shadow-lg'
                          : 'bg-navy-900 text-text-muted border border-border/90 shadow-md'
                      }`}
                    >
                      <Icon size={28} className="stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Step Title & Description */}
                  <div className="flex items-center gap-1 mb-1">
                    <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-accent-secondary' : 'text-text-muted'}`}>
                      {item.step || `0${index + 1}`}
                    </span>
                  </div>
                  <h4
                    className={`text-sm font-bold mb-1 transition-colors duration-200 ${
                      isActive ? 'text-white scale-105' : 'text-text-primary'
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-text-secondary leading-normal max-w-[155px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: Vertical Interactive Timeline */}
      <div className="lg:hidden relative z-10">
        <div className="relative pl-14 pr-2">
          {/* Base Vertical Track - Behind nodes (z-0) */}
          <div className="absolute top-4 bottom-4 left-[24px] w-[2px] bg-navy-700/80 rounded-full z-0" />

          {/* Active Vertical Track - Behind nodes (z-0) */}
          <div
            className="absolute top-4 left-[24px] w-[2px] rounded-full transition-all duration-100 ease-linear pointer-events-none z-0"
            style={{
              height: `${progress}%`,
              background: `linear-gradient(180deg, #4F46E5 0%, #5865F2 40%, #7C83FF 75%, #A8B0FF 100%)`,
              boxShadow: `0 0 10px rgba(124, 131, 255, 0.5)`,
            }}
          />

          {/* Traveling Vertical Bullet - Behind nodes (z-0) */}
          <div
            className="absolute left-[24px] z-0 transition-all duration-100 ease-linear pointer-events-none -translate-x-1/2 -translate-y-1/2"
            style={{ top: `${4 + progress * 0.92}%` }}
          >
            <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#ffffff,0_0_15px_#7C83FF]" />
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
