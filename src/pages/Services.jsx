import { Users, Cpu, Layers, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Workflow, Zap, Server } from 'lucide-react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { servicesList } from '../data/services';

const engagementModels = [
  {
    title: 'Staff Augmentation',
    tag: 'Flexible Elastic Scaling',
    description: 'Quickly inject vetted senior engineers, architects, and product specialists into your in-house teams to bridge critical skill gaps.',
    points: ['Access to 1M+ pre-screened talent bench', 'Seamless onboarding in 48-72 hours', 'Full timezone and workflow synchronization'],
  },
  {
    title: 'Dedicated Engineering Squads',
    tag: 'Autonomous Delivery Units',
    description: 'Self-contained, cross-functional squads engineered with tech leads, developers, and QA to execute major feature roadmaps and sprints.',
    points: ['Turnkey squad with sprint governance', 'Direct CI/CD repository integration', 'Agile velocity telemetry & SLA metrics'],
  },
  {
    title: 'Managed Technology Services',
    tag: '24/7 Enterprise Reliability',
    description: 'Outsource your core cloud infrastructure, IT operations, database administration, and security monitoring with guaranteed SLAs.',
    points: ['24/7/365 active monitoring & support', '99.99% uptime and incident response SLAs', 'Proactive patch and vulnerability management'],
  },
  {
    title: 'End-to-End Project Delivery',
    tag: 'From Architecture to Launch',
    description: 'Comprehensive digital transformation and custom software engineering executed from initial discovery through production deployment.',
    points: ['Fixed-price or agile milestone delivery', 'Enterprise cloud-native architecture', 'Full knowledge transfer & post-launch warranty'],
  },
];

const techStack = [
  {
    category: 'Cloud & Infrastructure',
    icon: Server,
    items: ['AWS', 'Microsoft Azure', 'Google Cloud (GCP)', 'Kubernetes', 'Terraform', 'Docker', 'OpenShift'],
  },
  {
    category: 'AI, ML & Advanced Analytics',
    icon: Cpu,
    items: ['Python', 'PyTorch / TensorFlow', 'Snowflake', 'Databricks', 'OpenAI / Anthropic APIs', 'Power BI / Tableau', 'Apache Kafka'],
  },
  {
    category: 'Modern Engineering & DevOps',
    icon: Workflow,
    items: ['Node.js / React / Next.js', 'Go / Rust / Java', 'GitHub Actions / GitLab CI', 'ArgoCD', 'PostgreSQL / MongoDB', 'GraphQL'],
  },
  {
    category: 'Cybersecurity & Governance',
    icon: ShieldCheck,
    items: ['Zero Trust Architecture', 'SOC 2 Type II', 'HIPAA & GDPR Compliance', 'HashiCorp Vault', 'CrowdStrike', 'Penetration Testing'],
  },
];

export default function Services() {
  return (
    <>
      <title>Services &amp; Capabilities — OctaStar Group</title>
      <meta name="description" content="Explore OctaStar Group's comprehensive technology services including staffing, managed services, cloud, AI, cybersecurity, DevOps, and more." />

      {/* Hero */}
      <Hero
        compact
        label="Our Services &amp; Capabilities"
        title={<>Comprehensive Technology <span className="gradient-text">Services &amp; Squads</span></>}
        description="From agile talent augmentation to full-scale digital transformation and 24/7 managed operations, we deliver the entire spectrum of modern technology services built to help enterprises compete, scale, and lead."
        primaryCta={{ label: 'Schedule a Consultation', to: '/contact' }}
        secondaryCta={{ label: 'Explore Solutions', to: '/solutions' }}
      />

      {/* 1. Service Ecosystem Grid - 1st: Proven Scale & Performance Container bg (stats-gradient-bg) */}
      <section className="py-12 md:py-16 relative overflow-hidden stats-gradient-bg border-y border-slate-350">
        {/* Subtle Dark Edge Vignette Fades */}
        <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-slate-900/[0.08] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-slate-900/[0.10] to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45)_0%,_transparent_65%,_rgba(15,23,42,0.06)_100%)] pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedSection className="max-w-3xl mb-8 md:mb-10 text-center mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-accent-primary mb-1.5 drop-shadow-sm">
              Service Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-2 text-slate-900">
              Engineered for Scalable Enterprise Impact
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Every capability is architected to deliver measurable business outcomes — accelerating velocity, reducing risk, and optimizing costs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {servicesList.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} variant="light" />
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Engagement Models - 2nd: Vibrant Purple Container */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-[#5B3FA6] text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-950/40 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedSection className="max-w-3xl mb-8 md:mb-10 text-center mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-200 mb-1.5">
              Engagement Models
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-2 text-white">
              Tailored Delivery Frameworks for Any Scale
            </h2>
            <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed max-w-2xl mx-auto">
              Whether you need on-demand specialist talent or full-lifecycle managed engineering squads, our engagement models adapt to your exact operational requirements.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
            {engagementModels.map((model, idx) => (
              <AnimatedSection key={model.title} delay={idx * 100} className="h-full">
                <div className="group h-full flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/15 text-white border border-white/25">
                        {model.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-purple-200/60">
                        Model 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors">
                      {model.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed mb-4">
                      {model.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-white/15">
                      {model.points.map((pt) => (
                        <div key={pt} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-purple-100">
                          <CheckCircle2 size={15} className="text-purple-200 flex-shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 flex items-center justify-end">
                    <Button to="/contact" variant="text" size="sm" className="!text-white hover:!text-purple-200 font-bold !text-xs">
                      Discuss This Model →
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Technology Ecosystem - 3rd: Crisp Clean White Container */}
      <section className="py-14 md:py-20 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200">
        <Container className="relative z-10">
          <SectionHeading
            label="Technology Stack"
            title="Enterprise Technology &amp; Toolchain Mastery"
            description="We leverage modern architectures, battle-tested cloud frameworks, and cutting-edge toolchains to build scalable, resilient platforms."
            darkText={true}
            className="mb-8 md:mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 items-stretch">
            {techStack.map((stack, idx) => {
              const Icon = stack.icon;
              return (
                <AnimatedSection key={stack.category} delay={idx * 80} className="h-full">
                  <div className="h-full p-4.5 sm:p-5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#5B3FA6]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-purple-100 border border-purple-200 flex items-center justify-center mb-3 text-[#5B3FA6]">
                        <Icon size={18} />
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                        {stack.category}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {stack.items.map((item) => (
                          <span
                            key={item}
                            className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 text-slate-700 rounded-md border border-slate-200/80"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Signature CTA - Vibrant Purple Container */}
      <CTASection
        title="Need a Custom Technology Solution?"
        description="Every organization has unique technical complexities and scaling goals. Let's design a custom delivery model tailored to your exact roadmap."
        primaryCta={{ label: 'Start a Conversation', to: '/contact' }}
        secondaryCta={{ label: 'View Industries We Serve', to: '/industries' }}
      />
    </>
  );
}
