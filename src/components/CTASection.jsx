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
    <section className="relative py-14 sm:py-16 md:py-24 overflow-hidden bg-[#5853A9] text-white border-t border-purple-400/20">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 geometric-grid opacity-10 pointer-events-none" />

      <Container className="relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 text-balance">
              {title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-purple-100/90 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
              <Button
                to={primaryCta.to}
                size="lg"
                variant="white"
                className="hover:scale-105 transition-transform w-full sm:w-auto"
              >
                {primaryCta.label}
              </Button>
              <Button
                to={secondaryCta.to}
                size="lg"
                variant="glass"
                className="hover:scale-105 transition-transform w-full sm:w-auto"
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
