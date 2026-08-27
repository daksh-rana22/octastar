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

export default function Stats({ lightBg = true }) {
  return (
    <section className={`relative py-16 md:py-20 overflow-hidden ${
      lightBg ? 'bg-[#ECEEF2] border-y border-slate-300/80' : 'bg-navy-800/50'
    }`}>
      {lightBg ? (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent pointer-events-none" />
      ) : (
        <>
          <div className="absolute inset-0 bg-navy-800/50" />
          <div className="absolute inset-0 geometric-grid opacity-20" />
        </>
      )}

      <Container className="relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <span className={`text-xs font-bold uppercase tracking-[0.2em] ${lightBg ? 'text-purple-700' : 'text-accent-secondary'}`}>
            Proven Scale &amp; Performance
          </span>
          <h3 className={`text-2xl md:text-3xl font-bold mt-1 ${lightBg ? 'text-slate-900' : 'text-text-primary'}`}>
            Engineered for high load
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 120}>
              <div className="text-center">
                <div className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 ${
                  lightBg ? 'text-[#5B3FA6]' : 'gradient-text'
                }`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className={`text-sm md:text-base font-semibold mb-1 ${
                  lightBg ? 'text-slate-900' : 'text-text-primary'
                }`}>
                  {stat.label}
                </div>
                <div className={`text-xs ${
                  lightBg ? 'text-slate-600' : 'text-text-muted'
                } hidden md:block`}>
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
