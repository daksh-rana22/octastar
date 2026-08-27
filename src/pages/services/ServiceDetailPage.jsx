import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import SectionHeading from '../../components/SectionHeading';
import AnimatedSection from '../../components/AnimatedSection';
import ProcessTimeline from '../../components/ProcessTimeline';
import CTASection from '../../components/CTASection';
import Button from '../../components/Button';

const serviceGuarantees = [
  {
    icon: ShieldCheck,
    title: 'Guaranteed SLA Benchmarks',
    desc: 'Rigorous key performance indicators, code quality telemetry, and guaranteed milestone delivery timelines.',
  },
  {
    icon: Users,
    title: 'Dedicated Senior Practice Leads',
    desc: 'Direct executive oversight and architecture guidance from seasoned domain specialists on every engagement.',
  },
  {
    icon: Clock,
    title: 'Rapid 48-Hour Deployment',
    desc: 'Immediate access to vetted senior engineering talent ready to integrate into your CI/CD pipelines.',
  },
  {
    icon: Award,
    title: 'Transparent Sprint Governance',
    desc: 'Real-time velocity tracking, weekly demo sprint reviews, and zero hidden billing surprises.',
  },
];

export default function ServiceDetailPage({
  title,
  label,
  heroTitle,
  heroDescription,
  services = [],
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

      {/* Hero */}
      <Hero
        compact
        label={label || title}
        title={heroTitle || <>{title} — <span className="gradient-text">Engineered for Impact.</span></>}
        description={heroDescription}
        primaryCta={{ label: 'Consult With Our Lead', to: '/contact' }}
        secondaryCta={{ label: 'All Services', to: '/services' }}
      />

      {/* Core Capabilities Grid - Deep Navy */}
      {services && services.length > 0 && (
        <section className="py-16 md:py-24 relative overflow-hidden bg-navy-900">
          <div className="absolute inset-0 geometric-dots opacity-20 pointer-events-none" />
          <Container className="relative z-10">
            <SectionHeading
              label="Practice Capabilities"
              title={`${label || title} Capabilities`}
              description="Comprehensive, scalable engineering capabilities designed to resolve high-complexity technical and operational challenges."
              className="mb-12 md:mb-16"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {services.map((service, index) => {
                const Icon = service.icon || Sparkles;
                return (
                  <AnimatedSection key={service.title || index} delay={index * 80} className="h-full">
                    <div className="group h-full p-6 sm:p-7 bg-navy-800/90 hover:bg-navy-700/80 border border-border/80 hover:border-accent-primary/60 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/15 hover:-translate-y-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-12 h-12 rounded-xl bg-accent-primary/15 border border-accent-primary/30 text-accent-secondary group-hover:bg-[#5865F2] group-hover:text-white group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
                            <Icon size={22} />
                          </div>
                          <span className="text-xs font-mono font-bold text-accent-light/70 bg-accent-primary/10 px-2.5 py-1 rounded-full border border-accent-primary/20">
                            0{index + 1}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-text-primary mb-2.5 group-hover:text-accent-light transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-sm text-text-secondary leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border/40 text-xs font-semibold text-accent-secondary flex items-center gap-1">
                        <CheckCircle2 size={13} /> Enterprise Ready
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* Delivery Process - Vibrant Purple Container */}
      {process && (
        <section className="py-16 md:py-24 relative overflow-hidden bg-[#5B3FA6] text-white">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-950/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 geometric-grid opacity-10 pointer-events-none" />

          <Container className="relative z-10">
            <AnimatedSection className="max-w-3xl mb-12 text-center mx-auto">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-200 mb-2">
                Our Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 text-white">
                {processTitle || 'How We Deliver Precision Outcomes'}
              </h2>
              <p className="text-sm md:text-base text-purple-100/90 leading-relaxed">
                {processDescription || 'An agile, transparent delivery lifecycle engineered to accelerate time-to-market while maintaining enterprise quality.'}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
              {process.map((step, idx) => (
                <AnimatedSection key={step.step || idx} delay={idx * 80} className="h-full">
                  <div className="h-full p-6 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
                    <div>
                      <span className="text-3xl font-extrabold font-mono text-purple-200 block mb-3">
                        {step.step}
                      </span>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Additional Custom Content */}
      {additionalContent}

      {/* Why Choose OctaStar Guarantee - Crisp Clean White Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200">
        <Container className="relative z-10">
          <SectionHeading
            label="The OctaStar Standard"
            title={`Why Enterprises Choose OctaStar for ${label || title}`}
            description="Our service execution is backed by strict engineering rigor, dedicated leadership, and predictable delivery frameworks."
            darkText={true}
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {serviceGuarantees.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={idx * 80} className="h-full">
                  <div className="h-full p-6 sm:p-7 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#5B3FA6]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5B3FA6]/10 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 text-[#5B3FA6] flex items-center justify-center mb-4">
                        <Icon size={22} />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Signature CTA */}
      <CTASection
        title={ctaTitle || `Ready to Scale Your ${label || title}?`}
        description={ctaDescription || "Let's discuss your technical requirements and configure the ideal delivery squad for your organization."}
        primaryCta={{ label: 'Schedule Practice Consultation', to: '/contact' }}
        secondaryCta={{ label: 'Explore All Services', to: '/services' }}
      />
    </>
  );
}
