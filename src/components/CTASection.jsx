import Container from './Container';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

export default function CTASection({
  title = "Ready to Build What's Next?",
  description = "Whether you need exceptional technology talent, a smarter workforce strategy, or a transformation partner, let's start the conversation.",
  primaryCta = { label: 'Talk to an Expert', to: '/contact' },
  secondaryCta = { label: 'Explore Careers', to: '/careers' },
}) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 geometric-grid opacity-10" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(88,101,242,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Compass lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-10">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent-primary to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full border border-accent-primary/20 rounded-full" />
      </div>

      <Container className="relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-5 text-balance">
              {title}
            </h2>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button to={primaryCta.to} size="lg">
                {primaryCta.label}
              </Button>
              <Button to={secondaryCta.to} variant="secondary" size="lg">
                {secondaryCta.label}
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
