import { useEffect, useRef, useState } from 'react';
import Container from './Container';
import AnimatedSection from './AnimatedSection';
import { stats } from '../data/stats';

function AnimatedCounter({ value, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats({ lightBg = true, variant }) {
  const isPurple = variant === 'purple';
  const isLight = !isPurple && (variant === 'light' || (lightBg && variant !== 'dark'));

  return (
    <section
      className={`relative py-16 md:py-20 overflow-hidden ${
        isPurple
          ? 'bg-[#5B3FA6] text-white border-t border-purple-400/20'
          : isLight
          ? 'stats-gradient-bg border-y border-slate-350'
          : 'bg-navy-800/80 border-y border-border'
      }`}
    >
      {isPurple ? (
        <>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 geometric-grid opacity-10 pointer-events-none" />
        </>
      ) : isLight ? (
        <>
          {/* Subtle Dark Edge Vignette Fades */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-900/[0.08] to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900/[0.10] to-transparent pointer-events-none" />
          {/* Soft ambient center lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45)_0%,_transparent_65%,_rgba(15,23,42,0.06)_100%)] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-800/70 to-navy-900/95 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </>
      )}

      <Container className="relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <span
            className={`text-xs font-bold uppercase tracking-[0.25em] ${
              isPurple
                ? 'text-purple-200'
                : isLight
                ? 'text-accent-primary'
                : 'text-accent-secondary'
            }`}
          >
            Proven Scale &amp; Performance
          </span>
          <h3
            className={`text-2xl md:text-3xl font-bold mt-1.5 ${
              isPurple
                ? 'text-white'
                : isLight
                ? 'text-slate-900'
                : 'text-text-primary'
            }`}
          >
            Engineered for high load
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 120}>
              <div className="text-center">
                <div
                  className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 ${
                    isPurple
                      ? 'text-white'
                      : isLight
                      ? 'text-accent-primary'
                      : 'gradient-text'
                  } drop-shadow-sm`}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div
                  className={`text-sm md:text-base font-bold mb-1 ${
                    isPurple
                      ? 'text-white'
                      : isLight
                      ? 'text-slate-800'
                      : 'text-text-primary'
                  }`}
                >
                  {stat.label}
                </div>
                <div
                  className={`text-xs ${
                    isPurple
                      ? 'text-purple-100/90'
                      : isLight
                      ? 'text-slate-600'
                      : 'text-text-muted'
                  } hidden md:block max-w-[200px] mx-auto leading-relaxed`}
                >
                  {stat.description}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
