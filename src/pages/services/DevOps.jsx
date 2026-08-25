import ServiceDetailPage from './ServiceDetailPage';
import Container from '../../components/Container';
import SectionHeading from '../../components/SectionHeading';
import AnimatedSection from '../../components/AnimatedSection';
import { devopsServices, devopsLifecycle } from '../../data/services';

export default function DevOps() {
  return (
    <ServiceDetailPage
      title="DevOps"
      label="DevOps"
      heroTitle={<>Accelerate Delivery. <span className="gradient-text">Automate Everything.</span></>}
      heroDescription="Implement DevOps practices that improve collaboration, automate pipelines, and ensure continuous improvement across your software delivery lifecycle."
      services={devopsServices}
      process={null}
      additionalContent={
        <section className="py-20 md:py-28 bg-navy-800/30">
          <Container>
            <SectionHeading
              label="DevOps Lifecycle"
              title="Continuous Everything"
              description="An integrated, automated lifecycle that accelerates software delivery while maintaining quality and security."
            />

            {/* Interactive DevOps Loop */}
            <div className="max-w-6xl mx-auto">
              {/* Desktop - circular representation */}
              <div className="hidden md:block relative">
                <div className="flex flex-wrap justify-center gap-4">
                  {devopsLifecycle.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <AnimatedSection key={item.step} delay={index * 100}>
                        <div className="group relative flex flex-col items-center">
                          <div className="w-20 h-20 rounded-2xl bg-navy-800 border border-border group-hover:border-accent-primary/50 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent-primary/10 group-hover:-translate-y-1">
                            <Icon size={28} className="text-accent-secondary" />
                          </div>
                          <span className="mt-3 text-sm font-semibold text-text-primary group-hover:text-accent-secondary transition-colors">
                            {item.step}
                          </span>
                          {index < devopsLifecycle.length - 1 && (
                            <div className="absolute top-10 -right-4 text-accent-primary/40 text-lg">→</div>
                          )}
                        </div>
                      </AnimatedSection>
                    );
                  })}
                </div>
                {/* Loop arrow */}
                <div className="text-center mt-4">
                  <span className="text-xs text-text-muted tracking-wider uppercase">Continuous Feedback Loop</span>
                </div>
              </div>

              {/* Mobile - vertical */}
              <div className="md:hidden space-y-4">
                {devopsLifecycle.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <AnimatedSection key={item.step} delay={index * 80}>
                      <div className="flex items-center gap-4 p-4 bg-navy-800 border border-border rounded-xl">
                        <div className="w-12 h-12 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center flex-shrink-0">
                          <Icon size={20} className="text-accent-secondary" />
                        </div>
                        <span className="font-semibold text-text-primary">{item.step}</span>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      }
      ctaTitle="Ready to Accelerate?"
      ctaDescription="Transform your software delivery with DevOps practices that improve speed, quality, and collaboration."
    />
  );
}
