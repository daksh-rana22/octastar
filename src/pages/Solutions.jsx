import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap, Bot, Layers, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import { solutionsList } from '../data/solutions';

const roiMetrics = [
  {
    metric: '80%',
    label: 'Reduction in Manual Process Time',
    desc: 'Through intelligent RPA workflows, document AI, and automated system integrations.',
  },
  {
    metric: '3.5x',
    label: 'Faster Sprint Velocity',
    desc: 'Empowering engineering squads with automated CI/CD pipelines and reusable cloud blueprints.',
  },
  {
    metric: '99.99%',
    label: 'Infrastructure SLA Uptime',
    desc: 'Zero-downtime multi-cloud architectures with automated failover and 24/7 telemetry monitoring.',
  },
  {
    metric: '45%',
    label: 'Average IT Operational Savings',
    desc: 'Achieved through cloud resource right-sizing, license optimization, and automated remediation.',
  },
];

const solutionPhases = [
  {
    phase: '01',
    title: 'Discovery & Tech Architecture Audit',
    desc: 'Comprehensive analysis of existing bottlenecks, data pipelines, legacy dependencies, and business ROI goals.',
  },
  {
    phase: '02',
    title: 'Agile Solution Blueprint & Pilot',
    desc: 'Rapid prototyping of target cloud/AI architectures with security compliance benchmarks and PoC validation.',
  },
  {
    phase: '03',
    title: 'Production Scale & Continuous Governance',
    desc: 'Seamless enterprise rollout with automated CI/CD deployment, SLA monitoring, and cross-team knowledge transfer.',
  },
];

export default function Solutions() {
  return (
    <>
      <title>Solutions — OctaStar Group</title>
      <meta name="description" content="Outcome-focused enterprise technology solutions from OctaStar Group including AI, RPA, Cloud Modernization, Data Analytics, and Cybersecurity." />

      {/* Hero */}
      <Hero
        compact
        label="Enterprise Solutions"
        title={<>Outcome-Focused <span className="gradient-text">Technology Solutions</span></>}
        description="Our solutions are engineered to deliver measurable business outcomes — accelerating operational efficiency, modernizing legacy architectures, and unlocking compounding ROI across your enterprise."
        primaryCta={{ label: 'Discuss Your Initiative', to: '/contact' }}
        secondaryCta={{ label: 'View All Services', to: '/services' }}
      />

      {/* Solutions Matrix - Crisp stats-gradient-bg matching Services.jsx */}
      <section className="py-12 md:py-16 relative overflow-hidden stats-gradient-bg border-y border-slate-350">
        {/* Subtle Dark Edge Vignette Fades */}
        <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-slate-900/[0.08] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-slate-900/[0.10] to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45)_0%,_transparent_65%,_rgba(15,23,42,0.06)_100%)] pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedSection className="max-w-3xl mb-8 md:mb-10 text-center mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-accent-primary mb-1.5 drop-shadow-sm">
              Solution Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-2 text-slate-900">
              Purpose-Built for Measurable Business Value
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Combining cutting-edge cloud, automation, and AI frameworks to solve high-stakes enterprise challenges.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {solutionsList.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <AnimatedSection key={solution.id} delay={index * 80} className="h-full">
                  <Link
                    to={solution.link}
                    className="group relative flex flex-col justify-between h-full p-5 sm:p-6 bg-white/85 hover:bg-white border border-slate-300/80 hover:border-accent-primary/60 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-purple-100 border border-purple-200 text-[#5B3FA6] group-hover:bg-[#5B3FA6] group-hover:text-white group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                          <Icon size={22} />
                        </div>
                        <span className="text-xs font-mono font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                          Solution 0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-[#5B3FA6] transition-colors">
                        {solution.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                        {solution.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between mt-auto">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#5B3FA6] group-hover:text-accent-primary transition-colors">
                        Explore Solution
                      </span>
                      <div className="w-8 h-8 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-[#5B3FA6] group-hover:bg-[#5B3FA6] group-hover:text-white group-hover:border-transparent transition-all duration-200">
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Quantifiable Impact & ROI - Vibrant Container */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-[#5853A9] text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 geometric-grid opacity-10 pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedSection className="max-w-3xl mb-12 text-center mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-200 mb-2">
              Proven Results
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 text-white">
              Measurable Business Impact Across Engagements
            </h2>
            <p className="text-sm md:text-base text-purple-100/90 leading-relaxed">
              Our solutions are held to strict business benchmarks — driving measurable velocity, reliability, and cost-efficiency.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {roiMetrics.map((item, idx) => (
              <AnimatedSection key={item.label} delay={idx * 80} className="h-full">
                <div className="h-full p-6 sm:p-7 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight block mb-2">
                      {item.metric}
                    </span>
                    <h4 className="text-base font-bold text-white mb-2">
                      {item.label}
                    </h4>
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

      {/* Transformation Architecture - Crisp Clean White Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200">
        <Container className="relative z-10">
          <SectionHeading
            label="Delivery Architecture"
            title="End-to-End Solution Lifecycle"
            description="How we architect, deploy, and scale enterprise solutions from initial discovery to continuous SLA execution."
            darkText={true}
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {solutionPhases.map((phase, idx) => (
              <AnimatedSection key={phase.phase} delay={idx * 100} className="h-full">
                <div className="h-full p-7 sm:p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#5B3FA6]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5B3FA6]/10 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center mb-5 text-[#5B3FA6] font-mono font-bold text-lg">
                      {phase.phase}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-[#5B3FA6] font-semibold flex items-center gap-1.5">
                    <Sparkles size={14} /> Enterprise Governance Standard
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Signature CTA */}
      <CTASection
        title="Ready to Engineer Your Custom Solution?"
        description="Let's analyze your current technology bottlenecks and architect a high-velocity solution roadmap tailored to your enterprise."
        primaryCta={{ label: 'Schedule an Architecture Review', to: '/contact' }}
        secondaryCta={{ label: 'Explore RPA & Automation', to: '/solutions/rpa' }}
      />
    </>
  );
}
