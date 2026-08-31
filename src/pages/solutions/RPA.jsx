import { useState } from 'react';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import SectionHeading from '../../components/SectionHeading';
import ProcessTimeline from '../../components/ProcessTimeline';
import AnimatedSection from '../../components/AnimatedSection';
import CTASection from '../../components/CTASection';
import Button from '../../components/Button';
import { rpaProcess } from '../../data/solutions';
import { Bot, Zap, BarChart3, CheckCircle, TrendingUp, Clock, Sparkles, FileSpreadsheet, ShieldAlert, Headphones, RefreshCw } from 'lucide-react';

const benefits = [
  { icon: Clock, title: '80% Faster Processing', description: 'Reduce manual document and data workflows from days to seconds with 24/7 unattended bots.' },
  { icon: CheckCircle, title: '99.9% Execution Accuracy', description: 'Eliminate costly human errors in high-volume transaction processing, billing, and regulatory reporting.' },
  { icon: TrendingUp, title: 'Elastic Operational Scale', description: 'Scale automation instances on demand during peak seasons without linear hiring costs.' },
  { icon: Zap, title: 'Rapid 60-Day ROI', description: 'Realize measurable cost reductions and efficiency payback within 6 to 8 weeks of initial bot rollout.' },
  { icon: BarChart3, title: 'Real-Time Process Telemetry', description: 'Gain complete visibility into throughput, bot utilization, and exception metrics via live dashboards.' },
  { icon: Bot, title: 'Elevated Workforce Morale', description: 'Liberate knowledge workers from mundane data entry to focus on high-impact strategic initiatives.' },
];

const useCases = [
  {
    icon: FileSpreadsheet,
    title: 'Finance & Accounting',
    items: ['Invoice matching & 3-way reconciliation', 'Accounts payable & receivable automation', 'Month-end closing & financial reporting'],
  },
  {
    icon: ShieldAlert,
    title: 'Compliance & Claims',
    items: ['Automated insurance claim intake & validation', 'KYC & AML identity verification checks', 'Audit trail generation & regulatory filing'],
  },
  {
    icon: Headphones,
    title: 'IT & Customer Operations',
    items: ['User provisioning & credential management', 'Automated tier-1 ticket triaging', 'Order processing & CRM status sync'],
  },
];

export default function RPA() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <title>RPA &amp; Intelligent Automation — OctaStar Group</title>
      <meta name="description" content="Eliminate repetitive workflows and scale operational precision with OctaStar Group's end-to-end RPA and AI automation solutions." />

      {/* Hero */}
      <Hero
        compact
        label="RPA &amp; Intelligent Automation"
        title={<>From Repetitive Tasks to <span className="gradient-text">Intelligent Automation.</span></>}
        description="Eliminate manual, rule-based friction with AI-driven Robotic Process Automation. Accelerate processing speed, ensure error-free accuracy, and unlock enterprise-wide operational agility."
        primaryCta={{ label: 'Schedule an Automation Audit', to: '/contact' }}
        secondaryCta={{ label: 'View All Solutions', to: '/solutions' }}
      />

      {/* Automation Journey - Vibrant Purple Container */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-[#5B3FA6] text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 geometric-grid opacity-10 pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedSection className="max-w-3xl mb-12 text-center mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-200 mb-2">
              Implementation Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 text-white">
              The Path to Autonomous Enterprise Workflows
            </h2>
            <p className="text-sm md:text-base text-purple-100/90 leading-relaxed">
              A structured, low-risk framework designed to take your workflows from manual execution to intelligent cognitive automation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
            {rpaProcess.map((step, idx) => (
              <AnimatedSection key={step.step} delay={idx * 80} className="h-full">
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

      {/* Benefits - Crisp Clean White Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200">
        <Container className="relative z-10">
          <SectionHeading
            label="Automation Value"
            title="Quantifiable Advantages of Enterprise Automation"
            description="Organizations implementing OctaStar RPA frameworks see immediate improvements across operational efficiency and cost structures."
            darkText={true}
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedSection key={benefit.title} delay={index * 80}>
                  <div className="group relative h-full flex flex-col p-6 sm:p-7 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#5B3FA6]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5B3FA6]/10 hover:-translate-y-1">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 text-[#5B3FA6] group-hover:bg-[#5B3FA6] group-hover:text-white transition-all duration-300 mb-5">
                      <Icon size={22} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#5B3FA6] transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Key Enterprise Use Cases - Crisp stats-gradient-bg */}
      <section className="py-12 md:py-16 relative overflow-hidden stats-gradient-bg border-y border-slate-350">
        {/* Subtle Dark Edge Vignette Fades */}
        <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-slate-900/[0.08] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-slate-900/[0.10] to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45)_0%,_transparent_65%,_rgba(15,23,42,0.06)_100%)] pointer-events-none" />

        <Container className="relative z-10">
          <SectionHeading
            label="Applied Automation"
            title="High-Impact Automation Use Cases"
            description="Proven robotic and cognitive workflows ready for rapid deployment across key business functions."
            darkText={true}
            className="mb-8 md:mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {useCases.map((uc, idx) => {
              const Icon = uc.icon;
              return (
                <AnimatedSection key={uc.title} delay={idx * 100} className="h-full">
                  <div className="h-full p-6 sm:p-7 rounded-2xl bg-white/85 hover:bg-white border border-slate-300/80 hover:border-[#5B3FA6]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between backdrop-blur-sm">
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-purple-100 border border-purple-200 text-[#5B3FA6] flex items-center justify-center mb-4">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                        {uc.title}
                      </h3>
                      <ul className="space-y-2.5">
                        {uc.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                            <CheckCircle size={15} className="text-[#5B3FA6] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
        title="Ready to Automate Your High-Friction Workflows?"
        description="Schedule a 30-minute discovery call with our automation architects to identify your top 3 bot opportunities."
        primaryCta={{ label: 'Start an Automation Assessment', to: '/contact' }}
        secondaryCta={{ label: 'Explore AI & Machine Learning', to: '/services/ai-ml' }}
      />
    </>
  );
}
