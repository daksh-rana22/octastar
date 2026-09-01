import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ShieldCheck, AlertCircle, Sparkles, CheckCircle2, Award } from 'lucide-react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import PracticeCapabilities from '../components/PracticeCapabilities';
import { industriesList } from '../data/industries';

export default function IndustryDetail() {
  const { industryId } = useParams();
  const industry = industriesList.find((ind) => ind.id === industryId);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B132B] text-white px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-6 text-purple-300">
            <AlertCircle size={32} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Industry Practice Not Found</h1>
          <p className="text-slate-400 mb-8 text-sm">The industry practice you requested is not available.</p>
          <Button to="/industries">Back to All Industries</Button>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;

  return (
    <>
      <title>{industry.title} Technology Solutions — OctaStar Group</title>
      <meta name="description" content={industry.heroDescription} />

      {/* Hero */}
      <Hero
        compact
        label={`${industry.title} Practice`}
        title={<>{industry.hero.replace(/\.$/, '')} — <span className="gradient-text">Engineered for Scale.</span></>}
        description={industry.heroDescription}
        primaryCta={{ label: 'Schedule an Industry Briefing', to: '/contact' }}
        secondaryCta={{ label: 'All Industry Sectors', to: '/industries' }}
      />

      {/* Challenges vs Strategic Solutions - Crisp stats-gradient-bg */}
      <section className="py-12 md:py-16 relative overflow-hidden stats-gradient-bg border-y border-slate-350">
        {/* Subtle Dark Edge Vignette Fades */}
        <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-slate-900/[0.08] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-slate-900/[0.10] to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45)_0%,_transparent_65%,_rgba(15,23,42,0.06)_100%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left: Sector Challenges */}
            <AnimatedSection>
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-white/85 border border-slate-300/80 shadow-sm flex flex-col justify-between backdrop-blur-sm">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                      Sector Friction
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-5">
                    Critical Challenges We Solve
                  </h3>
                  <div className="space-y-3">
                    {industry.challenges.map((challenge, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <AlertCircle size={17} className="text-rose-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Purpose-Built Solutions */}
            <AnimatedSection delay={200}>
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-white border border-purple-300/90 shadow-md shadow-purple-900/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#5B3FA6] bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                      Target Architectures
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-5">
                    Tailored Technology Frameworks
                  </h3>
                  <div className="space-y-3">
                    {industry.solutions.map((sol, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-50/60 border border-purple-200/70 hover:border-[#5B3FA6]/40 transition-colors">
                        <CheckCircle size={17} className="text-[#5B3FA6] flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-900 leading-relaxed font-semibold">{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
                  <Button to="/contact" variant="text" size="sm" className="!text-[#5B3FA6] hover:!text-[#4a328c] font-bold">
                    Deploy for Your Enterprise →
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Capabilities - Practice Capabilities Container matching Proven Results container style */}
      <PracticeCapabilities
        variant="vibrant"
        title="Accelerating Business Goals"
        label="Practice Capabilities"
        description={`Specialized squads, compliant cloud blueprints, and domain accelerators tailored to ${industry.title.toLowerCase()}.`}
        services={industry.capabilities.map((cap) => ({
          title: cap,
          icon: Icon,
          points: [
            `Enterprise-grade ${cap.toLowerCase()} tailored for ${industry.title}.`,
            `Engineered to meet industry-specific compliance, scalability, and SLA standards.`,
          ],
        }))}
      />

      {/* Measurable Benefits - Crisp Clean White Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200">
        <Container className="relative z-10">
          <SectionHeading
            label="Quantifiable Impact"
            title={`Why Market Leaders Choose OctaStar for ${industry.title}`}
            description="Our domain frameworks deliver measurable acceleration, strict compliance posture, and tangible return on investment."
            darkText={true}
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {industry.benefits.map((benefit, index) => (
              <AnimatedSection key={benefit} delay={index * 80}>
                <div className="group relative h-full flex flex-col p-6 sm:p-7 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#5B3FA6]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5B3FA6]/10 hover:-translate-y-1">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-purple-100 border border-purple-200 text-[#5B3FA6] group-hover:bg-[#5B3FA6] group-hover:text-white transition-all duration-300 mb-4">
                    <Award size={20} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#5B3FA6] transition-colors">
                    {benefit}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Backed by guaranteed SLA benchmarks, security telemetry, and dedicated enterprise account governance.
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Signature CTA */}
      <CTASection
        title={`Accelerate Your ${industry.title} Roadmap`}
        description={`Partner with OctaStar's dedicated ${industry.title.toLowerCase()} practice lead to design and execute your transformation.`}
        primaryCta={{ label: 'Speak to Our Practice Lead', to: '/contact' }}
        secondaryCta={{ label: 'Explore Related Services', to: '/services' }}
      />
    </>
  );
}
