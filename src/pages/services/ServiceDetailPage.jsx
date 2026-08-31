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

      {/* 1. Core Capabilities Grid - 1st: Proven Scale & Performance Container bg (stats-gradient-bg) */}
      {services && services.length > 0 && (
        <section className="py-12 md:py-16 relative overflow-hidden stats-gradient-bg border-y border-slate-350">
          {/* Subtle Dark Edge Vignette Fades */}
          <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-slate-900/[0.08] to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-slate-900/[0.10] to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45)_0%,_transparent_65%,_rgba(15,23,42,0.06)_100%)] pointer-events-none" />

          <Container className="relative z-10">
            <AnimatedSection className="max-w-3xl mb-8 md:mb-10 text-center mx-auto">
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-accent-primary mb-1.5 drop-shadow-sm">
                Practice Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-2 text-slate-900">
                {label || title} Capabilities
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Comprehensive, scalable engineering capabilities designed to resolve high-complexity technical and operational challenges.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {services.map((service, index) => {
                const Icon = service.icon || Sparkles;
                return (
                  <AnimatedSection key={service.title || index} delay={index * 80} className="h-full">
                    <div className="group h-full p-4.5 sm:p-5 bg-white/85 hover:bg-white border border-slate-300/80 hover:border-accent-primary/60 rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 border border-purple-200 text-[#5B3FA6] flex items-center justify-center">
                            <Icon size={19} />
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                            0{index + 1}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#5B3FA6] transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-[#5B3FA6] flex items-center gap-1">
                        <CheckCircle2 size={12} /> Enterprise Ready
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* 2. Delivery Process - 2nd: Vibrant Container */}
      {process && (
        <section className="py-12 md:py-16 relative overflow-hidden bg-[#5853A9] text-white">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

          <Container className="relative z-10">
            <AnimatedSection className="max-w-3xl mb-8 md:mb-10 text-center mx-auto">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-200 mb-1.5">
                Our Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-2 text-white">
                {processTitle || 'How We Deliver Precision Outcomes'}
              </h2>
              <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed max-w-2xl mx-auto">
                {processDescription || 'An agile, transparent delivery lifecycle engineered to accelerate time-to-market while maintaining enterprise quality.'}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-4">
              {process.map((step, idx) => (
                <AnimatedSection key={step.step || idx} delay={idx * 80} className="h-full">
                  <div className="h-full p-4.5 sm:p-5 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 rounded-xl backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between">
                    <div>
                      <span className="text-2xl font-extrabold font-mono text-purple-200 block mb-2">
                        {step.step}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-xs text-purple-100/90 leading-relaxed">
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

      {/* 3. Why Choose OctaStar Guarantee - 3rd: Crisp Clean White Section */}
      <section className="py-14 md:py-20 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200">
        <Container className="relative z-10">
          <SectionHeading
            label="The OctaStar Standard"
            title={`Why Enterprises Choose OctaStar for ${label || title}`}
            description="Our service execution is backed by strict engineering rigor, dedicated leadership, and predictable delivery frameworks."
            darkText={true}
            className="mb-8 md:mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {serviceGuarantees.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={idx * 80} className="h-full">
                  <div className="flip-card h-[220px] sm:h-[240px] rounded-xl">
                    <div className="flip-card-inner">
                      {/* ── Front Face ── */}
                      <div className="flip-card-front p-5 sm:p-6 bg-slate-50 border border-slate-200/90 rounded-xl flex flex-col justify-between">
                        <div>
                          <div className="w-11 h-11 rounded-xl bg-purple-100 border border-purple-200 text-[#5853A9] flex items-center justify-center mb-4">
                            <Icon size={20} />
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                            {item.title}
                          </h4>
                        </div>
                        <div className="flex justify-end mt-3">
                          <span className="text-[11px] font-semibold text-[#5853A9] tracking-wide uppercase">Hover to learn more</span>
                        </div>
                      </div>

                      {/* ── Back Face ── */}
                      <div className="flip-card-back p-5 sm:p-6 bg-[#5853A9] border border-[#5853A9] rounded-xl flex flex-col justify-between">
                        <div>
                          <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 text-white flex items-center justify-center mb-4">
                            <Icon size={18} />
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <div className="flex justify-end mt-3">
                          <div className="w-8 h-8 rounded-full bg-white/15 border border-white/25 flex items-center justify-center">
                            <CheckCircle2 size={14} className="text-white" />
                          </div>
                        </div>
                      </div>
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
