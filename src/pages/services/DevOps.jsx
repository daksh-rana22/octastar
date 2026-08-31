import ServiceDetailPage from './ServiceDetailPage';
import Container from '../../components/Container';
import SectionHeading from '../../components/SectionHeading';
import AnimatedSection from '../../components/AnimatedSection';
import { devopsServices, devopsLifecycle } from '../../data/services';
import { ArrowRight, RefreshCw, GitBranch, Terminal, ShieldAlert, Sparkles } from 'lucide-react';

export default function DevOps() {
  return (
    <ServiceDetailPage
      title="DevOps &amp; Infrastructure Engineering"
      label="DevOps"
      heroTitle={<>Accelerate Delivery. <span className="gradient-text">Automate Everything.</span></>}
      heroDescription="Implement automated CI/CD pipelines, GitOps workflows, and cloud-native infrastructure-as-code to improve release velocity, reduce deployment errors, and achieve continuous delivery excellence."
      services={devopsServices}
      process={null}
      additionalContent={
        <section className="py-16 md:py-24 relative overflow-hidden bg-[#5B3FA6] text-white">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 geometric-grid opacity-10 pointer-events-none" />

          <Container className="relative z-10">
            <AnimatedSection className="max-w-3xl mb-12 text-center mx-auto">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-200 mb-2">
                Automated Pipeline
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 text-white">
                Continuous Integration &amp; Deployment Loop
              </h2>
              <p className="text-sm md:text-base text-purple-100/90 leading-relaxed">
                An integrated, security-embedded lifecycle that accelerates software delivery while maintaining enterprise reliability.
              </p>
            </AnimatedSection>

            {/* Interactive DevOps Loop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
              {devopsLifecycle.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.step} delay={index * 80} className="h-full">
                    <div className="h-full p-5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center mb-3 text-white">
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-mono font-bold text-purple-200 mb-1">
                        Phase 0{index + 1}
                      </span>
                      <h4 className="text-sm font-bold text-white">
                        {item.step}
                      </h4>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-200 uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
                <RefreshCw size={12} className="animate-spin" /> Continuous Feedback &amp; Telemetry Loop
              </span>
            </div>
          </Container>
        </section>
      }
      ctaTitle="Ready to Accelerate Your Release Cycles?"
      ctaDescription="Let our DevOps architects modernize your CI/CD pipelines, container orchestration, and cloud infrastructure."
    />
  );
}
