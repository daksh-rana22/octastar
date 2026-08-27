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
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#5B3FA6] text-white border-t border-purple-400/20">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-950/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 geometric-grid opacity-10 pointer-events-none" />

      <Container className="relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              {title}
            </h2>
            <p className="text-base md:text-lg text-purple-100/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                to={primaryCta.to}
                size="lg"
                variant="white"
                className="hover:scale-105 transition-transform"
              >
                {primaryCta.label}
              </Button>
              <Button
                to={secondaryCta.to}
                size="lg"
                variant="glass"
                className="hover:scale-105 transition-transform"
              >
                {secondaryCta.label}
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
