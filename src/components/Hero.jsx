import { useEffect, useRef } from 'react';
import Container from './Container';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    let connections = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createParticles = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const count = Math.min(60, Math.floor((w * h) / 15000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      }));
    };

    const drawCompassShape = (time) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const cx = w * 0.65;
      const cy = h * 0.5;
      const radius = Math.min(w, h) * 0.25;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time * 0.0001);

      // Draw compass/star points
      const points = 8;
      const innerR = radius * 0.3;
      for (let i = 0; i < points; i++) {
        const angle = (i * Math.PI * 2) / points;
        const outerR = i % 2 === 0 ? radius : radius * 0.6;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * outerR, Math.sin(angle) * outerR);
        const grad = ctx.createLinearGradient(0, 0, Math.cos(angle) * outerR, Math.sin(angle) * outerR);
        grad.addColorStop(0, 'rgba(88, 101, 242, 0.15)');
        grad.addColorStop(1, 'rgba(88, 101, 242, 0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = i % 2 === 0 ? 1.5 : 0.8;
        ctx.stroke();
      }

      // Draw concentric rings
      for (let r = 1; r <= 3; r++) {
        ctx.beginPath();
        ctx.arc(0, 0, innerR + (radius - innerR) * (r / 3), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(88, 101, 242, ${0.08 - r * 0.02})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Center glow
      const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 0.15);
      glow.addColorStop(0, 'rgba(88, 101, 242, 0.2)');
      glow.addColorStop(1, 'rgba(88, 101, 242, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.15, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const animate = (time) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Draw compass
      drawCompassShape(time);

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(88, 101, 242, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(88, 101, 242, ${0.15 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate(0);

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}

export default function Hero({
  label,
  title,
  description,
  primaryCta,
  secondaryCta,
  tertiaryLink,
  showVisualization = true,
  videoBg,
  align = 'center',
  compact = false,
  children,
}) {
  const isHome = !compact && !label;
  const isCentered = !isHome || align === 'center';

  return (
    <section
      className={`relative overflow-hidden ${
        compact ? 'pt-32 pb-16 md:pt-40 md:pb-24' : 'pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32'
      }`}
    >
      {/* Background Video (if provided) */}
      {videoBg && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-right md:object-[82%_center] translate-x-6 md:translate-x-[10%] lg:translate-x-[14%] xl:translate-x-[18%] opacity-90 filter brightness-105 contrast-105 transition-transform duration-700"
          >
            <source src={videoBg} type="video/mp4" />
          </video>
          {/* Subtle Dark Navy Overlay for crisp text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/60 to-transparent" />
          <div className="absolute inset-0 bg-navy-900/10" />
        </div>
      )}

      {/* Background Gradients */}
      {!videoBg && <div className="absolute inset-0 gradient-bg" />}
      <div className="absolute inset-0 geometric-dots opacity-30" />

      {/* Radial glow effects */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(88,101,242,0.12) 0%, rgba(124,131,255,0.04) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,176,255,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Animated Canvas Visualization (Active on all pages) */}
      {showVisualization && <HeroCanvas />}

      <Container className="relative z-10">
        <div className={isHome ? 'lg:max-w-[58%]' : 'max-w-4xl mx-auto text-center'}>
          <AnimatedSection>
            {label && (
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-secondary mb-4 md:mb-5">
                {label}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-5 md:mb-6 text-text-primary text-balance">
              {title}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <p className={`text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-8 md:mb-10 ${isHome ? 'max-w-2xl' : 'max-w-2xl mx-auto'}`}>
              {description}
            </p>
          </AnimatedSection>

          {(primaryCta || secondaryCta) && (
            <AnimatedSection delay={300}>
              <div className={`flex flex-wrap items-center gap-4 ${isHome ? '' : 'justify-center'}`}>
                {primaryCta && (
                  <Button to={primaryCta.to} size="lg">
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button to={secondaryCta.to} variant="secondary" size="lg">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
              {tertiaryLink && (
                <div className={`mt-5 ${isHome ? '' : 'text-center'}`}>
                  <Button to={tertiaryLink.to} variant="text" size="sm">
                    {tertiaryLink.label} →
                  </Button>
                </div>
              )}
            </AnimatedSection>
          )}

          {children}
        </div>
      </Container>

      {/* Bottom fade into navy background */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none" />
    </section>
  );
}
