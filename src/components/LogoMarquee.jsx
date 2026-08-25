import AnimatedSection from './AnimatedSection';

export default function LogoMarquee() {
  // Monochrome placeholder "logos" for the trust section
  const logos = [
    'Vertex Solutions', 'Apex Digital', 'NovaTech Corp', 'Meridian Group',
    'Catalyst Partners', 'Elevate Systems', 'Prism Analytics', 'Forge Technologies',
    'Pinnacle Labs', 'Atlas Dynamics', 'Spectrum Health', 'Quantum Finance',
  ];

  return (
    <section className="py-14 md:py-16 border-y border-border/50 overflow-hidden">
      <AnimatedSection>
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-text-muted mb-8">
          Trusted by organizations that expect more
        </p>
      </AnimatedSection>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-900 to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...logos, ...logos].map((name, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center px-8 md:px-12 py-3 group cursor-default"
            >
              <span className="text-base md:text-lg font-bold tracking-wider text-navy-500 group-hover:text-accent-light transition-colors duration-300 whitespace-nowrap select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
