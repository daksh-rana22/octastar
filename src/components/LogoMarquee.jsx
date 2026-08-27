import AnimatedSection from './AnimatedSection';

export default function LogoMarquee() {
  // Monochrome placeholder "logos" for the trust section
  const logos = [
    'Vertex Solutions', 'Apex Digital', 'NovaTech Corp', 'Meridian Group',
    'Catalyst Partners', 'Elevate Systems', 'Prism Analytics', 'Forge Technologies',
    'Pinnacle Labs', 'Atlas Dynamics', 'Spectrum Health', 'Quantum Finance',
  ];

  return (
    <section className="relative py-14 md:py-16 stats-gradient-bg border-y border-slate-350 overflow-hidden">
      {/* Subtle Dark Edge Vignette Fades */}
      <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-slate-900/[0.08] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-slate-900/[0.10] to-transparent pointer-events-none" />
      {/* Soft ambient center lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45)_0%,_transparent_65%,_rgba(15,23,42,0.06)_100%)] pointer-events-none" />

      <AnimatedSection className="relative z-10">
        <p className="text-center text-xs font-bold tracking-[0.25em] uppercase text-accent-primary mb-7 drop-shadow-sm">
          Trusted by organizations that expect more
        </p>
      </AnimatedSection>

      <div className="relative z-10">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#CAD4E2] via-[#CAD4E2]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#CAD4E2] via-[#CAD4E2]/80 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {[...logos, ...logos].map((name, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center px-8 md:px-12 py-3 group cursor-default"
            >
              <span className="text-base md:text-lg font-bold tracking-wider text-slate-600/90 group-hover:text-accent-primary transition-colors duration-300 whitespace-nowrap select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
