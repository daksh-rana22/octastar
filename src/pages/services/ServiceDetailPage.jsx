import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import SectionHeading from '../../components/SectionHeading';
import AnimatedSection from '../../components/AnimatedSection';
import ProcessTimeline from '../../components/ProcessTimeline';
import CTASection from '../../components/CTASection';

export default function ServiceDetailPage({
  title,
  label,
  heroTitle,
  heroDescription,
  services,
  process,
  processTitle,
  processDescription,
  additionalContent,
  ctaTitle,
  ctaDescription,
}) {
  return (
    <>
      <title>{title} — OctaStar Group</title>
      <meta name="description" content={heroDescription} />

      <Hero
        compact
        label={label}
        title={heroTitle}
        description={heroDescription}
        primaryCta={{ label: 'Get Started', to: '/contact' }}
        secondaryCta={{ label: 'All Services', to: '/services' }}
      />

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Capabilities"
            title={`${label} Capabilities`}
            description="Comprehensive solutions designed to address your most critical technology and business challenges."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={index * 100}>
                  <div className="group h-full p-6 md:p-8 bg-navy-800 border border-border rounded-xl hover:border-accent-primary/40 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-primary/10 border border-accent-primary/20 mb-5 group-hover:bg-accent-primary/15 transition-all">
                      <Icon size={22} className="text-accent-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-accent-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process */}
      {process && (
        <section className="py-20 md:py-28 bg-navy-800/30">
          <Container>
            <SectionHeading
              label="Our Approach"
              title={processTitle || 'How We Deliver'}
              description={processDescription || 'A structured approach designed to deliver outcomes with speed, quality, and continuous improvement.'}
            />
            <ProcessTimeline steps={process} />
          </Container>
        </section>
      )}

      {/* Additional Content */}
      {additionalContent}

      <CTASection
        title={ctaTitle || "Ready to Get Started?"}
        description={ctaDescription || "Let's discuss how our expertise can help you achieve your technology and business goals."}
      />
    </>
  );
}
