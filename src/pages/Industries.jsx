import { ShieldCheck, Award, Lock, Users, Sparkles, CheckCircle2, ArrowRight, Building, Landmark, HeartPulse, Factory } from 'lucide-react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import IndustryCard from '../components/IndustryCard';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { industriesList } from '../data/industries';

const compliancePillars = [
  {
    icon: ShieldCheck,
    title: 'Strict Regulatory Compliance',
    desc: 'Deep adherence to HIPAA, SOC 2 Type II, PCI-DSS, GDPR, Basel III, and FedRAMP governance frameworks across all deployments.',
  },
  {
    icon: Users,
    title: 'Domain-Specialized Talent',
    desc: 'Access pre-vetted engineers and architects with 8+ years of dedicated vertical domain experience in your specific industry.',
  },
  {
    icon: Lock,
    title: 'Zero-Trust Architecture',
    desc: 'Enterprise security benchmarks built directly into every data pipeline, cloud migration, and custom software squad.',
  },
  {
    icon: Award,
    title: 'Mission-Critical Reliability',
    desc: 'Battle-tested delivery blueprints engineered for high-throughput, low-latency, and zero-downtime mission-critical environments.',
  },
];

const industryHighlights = [
  {
    sector: 'Financial Services',
    metric: '50+ Modernizations',
    desc: 'Core banking upgrades, real-time payment rails, and AI-powered AML fraud detection platforms.',
  },
  {
    sector: 'Healthcare & Life Sciences',
    metric: '100% HIPAA Ready',
    desc: 'EHR interoperability, clinical telemetry data lakes, and secure telehealth infrastructure.',
  },
  {
    sector: 'Manufacturing & Supply',
    metric: '35% Downtime Cut',
    desc: 'IoT telemetry analytics, predictive equipment maintenance, and supply chain automation.',
  },
  {
    sector: 'Insurance & Claims',
    metric: '80% Faster FNOL',
    desc: 'Straight-through claims processing, automated risk underwriting, and policyholder portals.',
  },
];

export default function Industries() {
  return (
    <>
      <title>Industries We Serve — OctaStar Group</title>
      <meta name="description" content="OctaStar Group delivers specialized technology engineering and talent solutions across banking, healthcare, insurance, manufacturing, retail, media, and energy." />

      {/* Hero */}
      <Hero
        compact
        label="Industry Specializations"
        title={<>Deep Domain Expertise <span className="gradient-text">Across Key Sectors</span></>}
        description="Our dedicated industry practice squads understand the precise compliance requirements, legacy dependencies, and technological shifts reshaping your vertical."
        primaryCta={{ label: 'Discuss Your Sector Requirements', to: '/contact' }}
        secondaryCta={{ label: 'Explore Services', to: '/services' }}
      />

      {/* Industry Sector Grid - Deep Navy */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0 geometric-dots opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <SectionHeading
            label="Industry Practices"
            title="Vertical Solutions Built for Specific Demands"
            description="Proven engineering blueprints and domain talent tailored to solve sector-specific complexities."
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {industriesList.map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Cross-Industry Standards - Crisp Clean White Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200">
        <Container className="relative z-10">
          <SectionHeading
            label="Enterprise Standards"
            title="Governance, Compliance &amp; Domain Rigor"
            description="Regardless of your sector, our engineering squads operate under the highest standards of enterprise security and regulatory precision."
            darkText={true}
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {compliancePillars.map((item, idx) => {
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

      {/* Sector Transformation Highlights - Vibrant Purple Container */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-[#5B3FA6] text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-950/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 geometric-grid opacity-10 pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedSection className="max-w-3xl mb-12 text-center mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-200 mb-2">
              Demonstrated Impact
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 text-white">
              Proven Delivery Across Regulated Sectors
            </h2>
            <p className="text-sm md:text-base text-purple-100/90 leading-relaxed">
              Real-world velocity, modernization, and compliance breakthroughs delivered for enterprise clients worldwide.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {industryHighlights.map((item, idx) => (
              <AnimatedSection key={item.sector} delay={idx * 80} className="h-full">
                <div className="h-full p-6 sm:p-7 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-200 block mb-1">
                      {item.sector}
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block mb-2">
                      {item.metric}
                    </span>
                    <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Signature CTA */}
      <CTASection
        title="Don't See Your Industry Listed?"
        description="Our agile engineering frameworks, cloud architectures, and talent pipelines adapt seamlessly to custom enterprise verticals."
        primaryCta={{ label: 'Speak With an Industry Lead', to: '/contact' }}
        secondaryCta={{ label: 'Explore Our Technology Services', to: '/services' }}
      />
    </>
  );
}
