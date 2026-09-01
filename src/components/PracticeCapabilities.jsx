import { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import Container from './Container';
import AnimatedSection from './AnimatedSection';

export default function PracticeCapabilities({
  title = 'Accelerating Business Goals',
  label = 'Practice Capabilities',
  description,
  services = [],
  variant = 'stats', // 'stats' | 'vibrant'
  className = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!services || services.length === 0) return null;

  const isVibrant = variant === 'vibrant';

  // Distribute items across 2 columns (left column gets first half, right column gets second half)
  const midpoint = Math.ceil(services.length / 2);
  const leftColumn = services.slice(0, midpoint);
  const rightColumn = services.slice(midpoint);

  const renderCard = (service, globalIndex) => {
    const Icon = service.icon || Sparkles;
    const isActive = activeIndex === globalIndex;

    // Determine bullet points
    let points = [];
    if (Array.isArray(service.points) && service.points.length > 0) {
      points = service.points;
    } else if (service.description) {
      const sentences = service.description
        .split(/(?<=[.!?])\s+/)
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
      points = sentences.length > 0 ? sentences : [service.description];
    } else {
      points = [
        'Modernize enterprise architecture with scalable, cloud-native solutions.',
        'Deliver robust business outcomes with enterprise-grade SLA compliance.',
      ];
    }

    return (
      <div
        key={service.title || globalIndex}
        onMouseEnter={() => setActiveIndex(globalIndex)}
        onClick={() => setActiveIndex(globalIndex)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setActiveIndex(globalIndex);
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={isActive}
        className={`w-full cursor-pointer select-none text-left outline-none rounded-[22px] backdrop-blur-sm transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVibrant
            ? isActive
              ? 'bg-white text-slate-900 border-2 border-white p-5 sm:p-6 shadow-2xl scale-[1.01]'
              : 'bg-white/15 hover:bg-white/25 border border-white/20 hover:border-white/40 text-white p-3.5 px-5 sm:p-4 sm:px-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5'
            : isActive
            ? 'bg-white border-2 border-accent-primary p-5 sm:p-6 shadow-xl shadow-accent-primary/15 ring-2 ring-accent-primary/20 scale-[1.01]'
            : 'bg-white/85 hover:bg-white border border-slate-300/80 hover:border-accent-primary/60 p-3.5 px-5 sm:p-4 sm:px-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5'
        }`}
      >
        {/* Header row: Circular Icon Badge + Title */}
        <div className="flex items-center gap-4">
          <div
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-400 ${
              isVibrant
                ? isActive
                  ? 'bg-[#5853A9] text-white shadow-md shadow-purple-950/30 scale-105'
                  : 'bg-white/20 border border-white/30 text-white'
                : isActive
                ? 'bg-accent-primary text-white shadow-md shadow-accent-primary/30 scale-105'
                : 'bg-purple-100 border border-purple-200/90 text-[#5B3FA6]'
            }`}
          >
            <Icon size={22} className="stroke-[2.2]" />
          </div>

          <h3
            className={`font-bold leading-snug text-base sm:text-lg transition-colors duration-300 ${
              isVibrant
                ? isActive
                  ? 'text-slate-900'
                  : 'text-white'
                : isActive
                ? 'text-[#5B3FA6]'
                : 'text-slate-900'
            }`}
          >
            {service.title}
          </h3>
        </div>

        {/* Content list with smooth CSS grid transition */}
        <div
          className={`grid overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isActive
              ? 'grid-rows-[1fr] opacity-100 mt-3.5'
              : 'grid-rows-[0fr] opacity-0 mt-0'
          }`}
        >
          <div className="overflow-hidden space-y-2.5 pt-1">
            {points.map((point, pIdx) => (
              <div
                key={pIdx}
                className="flex items-start gap-3"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(6px)',
                  transition: `opacity 350ms ease ${isActive ? pIdx * 60 + 60 : 0}ms, transform 350ms cubic-bezier(0.22, 1, 0.36, 1) ${isActive ? pIdx * 60 + 60 : 0}ms`,
                }}
              >
                <div
                  className={`mt-0.5 shrink-0 ${
                    isVibrant ? 'text-[#5853A9]' : 'text-accent-primary'
                  }`}
                >
                  <CheckCircle2 size={16} className="stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  if (isVibrant) {
    return (
      <section
        className={`py-16 md:py-24 relative overflow-hidden bg-[#5853A9] text-white ${className}`}
      >
        {/* Vibrant Container Background Accents matching Proven Results */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 geometric-grid opacity-10 pointer-events-none" />

        <Container className="relative z-10">
          {/* Section Header */}
          <AnimatedSection className="max-w-3xl mb-10 md:mb-12 text-center mx-auto">
            {label && (
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-200 mb-2">
                {label}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-2 text-white">
              {title}
            </h2>
            {description && (
              <p className="text-sm md:text-base text-purple-100/90 leading-relaxed max-w-2xl mx-auto mt-2">
                {description}
              </p>
            )}
          </AnimatedSection>

          {/* 2-Column Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {leftColumn.map((service, idx) => renderCard(service, idx))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {rightColumn.map((service, idx) =>
                renderCard(service, midpoint + idx)
              )}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      className={`py-12 md:py-16 relative overflow-hidden stats-gradient-bg border-y border-slate-350 ${className}`}
    >
      {/* Subtle Dark Edge Vignette Fades matching Our Guiding Compass */}
      <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-slate-900/[0.08] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-slate-900/[0.10] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45)_0%,_transparent_65%,_rgba(15,23,42,0.06)_100%)] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mb-8 md:mb-10 text-center mx-auto">
          {label && (
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-accent-primary mb-1.5 drop-shadow-sm">
              {label}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-2 text-slate-900">
            {title}
          </h2>
          {description && (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </AnimatedSection>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            {leftColumn.map((service, idx) => renderCard(service, idx))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            {rightColumn.map((service, idx) =>
              renderCard(service, midpoint + idx)
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
