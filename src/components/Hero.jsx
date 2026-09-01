import { useEffect, useRef } from 'react';
import Container from './Container';
import Button from './Button';
import AnimatedSection from './AnimatedSection';
import { useTheme } from '../context/ThemeContext';

function hexToRgba(hex, alpha = 1) {
  if (!hex) return `rgba(88, 101, 242, ${alpha})`;
  if (hex.startsWith('rgba') || hex.startsWith('rgb')) return hex;
  const cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    const r = parseInt(cleanHex[0] + cleanHex[0], 16);
    const g = parseInt(cleanHex[1] + cleanHex[1], 16);
    const b = parseInt(cleanHex[2] + cleanHex[2], 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  if (cleanHex.length >= 6) {
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgba(88, 101, 242, ${alpha})`;
}

function HeroCanvas() {
  const canvasRef = useRef(null);
  const { activeTheme } = useTheme();
  const themeRef = useRef(activeTheme);

  useEffect(() => {
    themeRef.current = activeTheme;
  }, [activeTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createParticles = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const count = Math.min(70, Math.floor((w * h) / 13000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2.2 + 1,
        opacity: Math.random() * 0.6 + 0.35,
      }));
    };

    const drawCompassShape = (time) => {
      const currentTheme = themeRef.current || { primary: '#3B82F6', secondary: '#68A9E8', light: '#A0D2EB' };
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const cx = w * 0.65;
      const cy = h * 0.5;
      const radius = Math.min(w, h) * 0.27;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time * 0.0001);

      // Draw compass/star points with bright luminous gradient
      const points = 8;
      const innerR = radius * 0.3;
      for (let i = 0; i < points; i++) {
        const angle = (i * Math.PI * 2) / points;
        const outerR = i % 2 === 0 ? radius : radius * 0.6;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * outerR, Math.sin(angle) * outerR);
        const grad = ctx.createLinearGradient(0, 0, Math.cos(angle) * outerR, Math.sin(angle) * outerR);
        grad.addColorStop(0, hexToRgba(currentTheme.light || currentTheme.primary, 0.35));
        grad.addColorStop(1, hexToRgba(currentTheme.secondary, 0));
        ctx.strokeStyle = grad;
        ctx.lineWidth = i % 2 === 0 ? 1.8 : 1.0;
        ctx.stroke();
      }

      // Draw concentric rings
      for (let r = 1; r <= 3; r++) {
        ctx.beginPath();
        ctx.arc(0, 0, innerR + (radius - innerR) * (r / 3), 0, Math.PI * 2);
        ctx.strokeStyle = hexToRgba(currentTheme.light || currentTheme.primary, 0.15 - r * 0.03);
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Center bright radiant core
      const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 0.22);
      glow.addColorStop(0, hexToRgba('#FFFFFF', 0.45));
      glow.addColorStop(0.3, hexToRgba(currentTheme.light || currentTheme.primary, 0.35));
      glow.addColorStop(0.7, hexToRgba(currentTheme.secondary, 0.15));
      glow.addColorStop(1, hexToRgba(currentTheme.primary, 0));
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.22, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const animate = (time) => {
      const currentTheme = themeRef.current || { primary: '#3B82F6', secondary: '#68A9E8', light: '#A0D2EB' };
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Draw compass star
      drawCompassShape(time);

      // Update and draw glowing particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = hexToRgba(currentTheme.light || currentTheme.secondary, p.opacity);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate(0);

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.85 }}
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
  image,
  imageAlt = 'Hero visual',
  rightElement,
  children,
}) {
  const isHome = !compact && !label && !image && !rightElement;
  const hasSideContent = Boolean(image || rightElement);
  const isCentered = !isHome && !hasSideContent && align === 'center';

  return (
    <section
      className={`relative overflow-hidden ${
        compact ? 'pt-32 pb-16 md:pt-40 md:pb-24' : 'pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32'
      }`}
    >
      {/* ── Background Video Layer (if provided) ── */}
      {videoBg && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-right md:object-[82%_center] translate-x-6 md:translate-x-[10%] lg:translate-x-[14%] xl:translate-x-[18%] opacity-95 filter brightness-115 contrast-105 transition-transform duration-700"
          >
            <source src={videoBg} type="video/mp4" />
          </video>
          {/* Clean luminous ambient gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-900)]/40 via-transparent to-transparent pointer-events-none" />
        </div>
      )}

      {/* ── Background Base & Mesh Atmosphere ── */}
      {!videoBg && <div className="absolute inset-0 gradient-bg" />}

      {/* Top luminous ambient light wash */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none blur-[120px] opacity-40 transition-colors duration-500"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, var(--color-accent-light) 0%, var(--color-accent-primary) 35%, transparent 75%)',
        }}
      />

      {/* Bright glowing aurora orbs */}
      <div
        className="absolute top-1/4 -left-10 w-[600px] md:w-[750px] h-[600px] md:h-[750px] rounded-full pointer-events-none blur-[110px] opacity-50 transition-colors duration-500"
        style={{
          background: 'radial-gradient(circle, var(--color-accent-light) 0%, var(--color-accent-primary) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute -top-16 right-0 w-[550px] md:w-[700px] h-[550px] md:h-[700px] rounded-full pointer-events-none blur-[120px] opacity-45 transition-colors duration-500"
        style={{
          background: 'radial-gradient(circle, #FFFFFF 0%, var(--color-accent-secondary) 30%, var(--color-accent-light) 60%, transparent 75%)',
        }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full pointer-events-none blur-[90px] opacity-35 transition-colors duration-500"
        style={{
          background: 'radial-gradient(circle, var(--color-accent-secondary) 0%, transparent 70%)',
        }}
      />

      {/* Animated Canvas Visualization (Constellation & Compass Star) */}
      {showVisualization && <HeroCanvas />}

      {/* ── Content ── */}
      <Container className="relative z-10">
        {hasSideContent ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Left: Text & CTA */}
            <div className="lg:col-span-7 text-left">
              <AnimatedSection>
                {label && (
                  <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-secondary mb-4 md:mb-5">
                    {label}
                  </span>
                )}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.15] tracking-tight mb-5 md:mb-6 text-text-primary text-balance drop-shadow-sm">
                  {title}
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-8 md:mb-10 max-w-2xl">
                  {description}
                </p>
              </AnimatedSection>

              {(primaryCta || secondaryCta) && (
                <AnimatedSection delay={300}>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    {primaryCta && (
                      <Button to={primaryCta.to} size="lg" className="w-full sm:w-auto text-center">
                        {primaryCta.label}
                      </Button>
                    )}
                    {secondaryCta && (
                      <Button to={secondaryCta.to} variant="secondary" size="lg" className="w-full sm:w-auto text-center">
                        {secondaryCta.label}
                      </Button>
                    )}
                  </div>
                  {tertiaryLink && (
                    <div className="mt-4 sm:mt-5 text-center sm:text-left">
                      <Button to={tertiaryLink.to} variant="text" size="sm">
                        {tertiaryLink.label} →
                      </Button>
                    </div>
                  )}
                </AnimatedSection>
              )}

              {children}
            </div>

            {/* Right: Thematic Image / Showcase Graphic */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <AnimatedSection delay={200} className="w-full max-w-lg lg:max-w-none">
                {rightElement || (
                  <div className="relative group flex items-center justify-center">
                    {/* Glowing ambient backdrop aura */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent-primary)]/35 via-[var(--color-accent-secondary)]/25 to-purple-600/30 blur-3xl scale-95 pointer-events-none group-hover:scale-105 transition-transform duration-700" />

                    <img
                      src={image}
                      alt={imageAlt}
                      className="relative z-10 w-full h-auto max-h-[300px] sm:max-h-[440px] lg:max-h-[500px] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)] filter brightness-105 contrast-105 animate-float"
                    />
                  </div>
                )}
              </AnimatedSection>
            </div>
          </div>
        ) : (
          <div className={isHome ? 'lg:max-w-[58%]' : 'max-w-4xl mx-auto text-center'}>
            <AnimatedSection>
              {label && (
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-secondary mb-3 sm:mb-4 md:mb-5">
                  {label}
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-4 sm:mb-5 md:mb-6 text-text-primary text-balance drop-shadow-sm">
                {title}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <p className={`text-sm sm:text-base md:text-xl text-text-secondary leading-relaxed mb-6 sm:mb-8 md:mb-10 ${isHome ? 'max-w-2xl' : 'max-w-2xl mx-auto'}`}>
                {description}
              </p>
            </AnimatedSection>

            {(primaryCta || secondaryCta) && (
              <AnimatedSection delay={300}>
                <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto ${isHome ? '' : 'justify-center'}`}>
                  {primaryCta && (
                    <Button to={primaryCta.to} size="lg" className="w-full sm:w-auto text-center">
                      {primaryCta.label}
                    </Button>
                  )}
                  {secondaryCta && (
                    <Button to={secondaryCta.to} variant="secondary" size="lg" className="w-full sm:w-auto text-center">
                      {secondaryCta.label}
                    </Button>
                  )}
                </div>
                {tertiaryLink && (
                  <div className={`mt-4 sm:mt-5 ${isHome ? '' : 'text-center'}`}>
                    <Button to={tertiaryLink.to} variant="text" size="sm">
                      {tertiaryLink.label} →
                    </Button>
                  </div>
                )}
              </AnimatedSection>
            )}

            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
