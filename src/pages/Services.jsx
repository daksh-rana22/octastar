import { Link } from 'react-router-dom';
import { Users, Cpu, Layers, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Workflow, Zap, Server } from 'lucide-react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

// Geometric SVG Icons matching reference image
function HexCubeIcon({ className = "w-7 h-7 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function NodesIcon({ className = "w-7 h-7 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="6" height="6" rx="1.5" />
      <rect x="16" y="2" width="6" height="6" rx="1.5" />
      <rect x="9" y="16" width="6" height="6" rx="1.5" />
      <path d="M5 8v3a2 2 0 002 2h10a2 2 0 002-2V8" />
      <path d="M12 13v3" />
    </svg>
  );
}

function StarKnotIcon({ className = "w-7 h-7 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

function WireCubeIcon({ className = "w-7 h-7 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M12 12L4 7.5M12 12l8-4.5M12 12v9" />
      <path d="M8 5.25l8 4.5M8 18.75l8-4.5" />
    </svg>
  );
}

function TrianglePrismIcon({ className = "w-7 h-7 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3L2 20h20L12 3z" />
      <path d="M12 8l-5 9h10l-5-9z" />
      <path d="M12 12l-2 3.5h4L12 12z" />
    </svg>
  );
}

function TriangularPetalsIcon({ className = "w-7 h-7 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2a4 4 0 014 4v2a4 4 0 01-4 4 4 4 0 01-4-4V6a4 4 0 014-4z" />
      <path d="M6 12a4 4 0 014 4v2a4 4 0 01-4 4 4 4 0 01-4-4v-2a4 4 0 014-4z" />
      <path d="M18 12a4 4 0 014 4v2a4 4 0 01-4 4 4 4 0 01-4-4v-2a4 4 0 014-4z" />
    </svg>
  );
}

function PenroseTriangleIcon({ className = "w-7 h-7 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2.5L2 19.5h5.5l1.8-3.1L6.5 12 12 2.5z" />
      <path d="M12 2.5l5.5 9.5-2.8 4.9 1.8 3.1 5.5-9.5L12 2.5z" />
      <path d="M7.5 19.5h9l-2.8-4.9H9.3l-1.8 4.9z" />
    </svg>
  );
}

function MazeIcon({ className = "w-7 h-7 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 7h10v10H7V7z" />
      <path d="M11 11h2v2h-2v-2z" />
      <path d="M7 11H3M17 11h4M11 7V3M11 17v4" />
    </svg>
  );
}

function RhombusIcon({ className = "w-7 h-7 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2l7 7-7 7-7-7 7-7z" />
      <path d="M12 6l4 4-4 4-4-4 4-4z" />
      <circle cx="12" cy="10" r="1.5" />
    </svg>
  );
}

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

      {/* 1. Service Ecosystem Grid - Empowering Enterprises With Next-Level Capabilities */}
      <section className="py-14 md:py-20 relative overflow-hidden stats-gradient-bg border-y border-slate-350">
        {/* Subtle Dark Edge Vignette Fades */}
        <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-slate-900/[0.08] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-slate-900/[0.10] to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45)_0%,_transparent_65%,_rgba(15,23,42,0.06)_100%)] pointer-events-none" />

        <Container className="relative z-10 max-w-7xl">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-accent-primary mb-2 drop-shadow-sm">
              Service Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 uppercase leading-[1.15] font-sans">
              EMPOWERING ENTERPRISES WITH<br className="hidden sm:inline" /> NEXT-LEVEL CAPABILITIES
            </h2>
          </AnimatedSection>

          {/* Top Bento Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-4 sm:mb-5 items-stretch">
            {/* Column 1: Left 2 Stacked Cards */}
            <div className="flex flex-col gap-4 sm:gap-5 justify-between h-full">
              {/* 1. Digital Transformation (Dark Theme Card) */}
              <AnimatedSection delay={50} className="h-full">
                <Link
                  to="/services/digital-transformation"
                  className="group relative overflow-hidden bg-[var(--color-navy-900)] text-[var(--color-text-primary)] border border-[var(--color-border)]/60 hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full min-h-[230px]"
                >
                  {/* Hover Image Crossfade */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                    <img
                      src="/hover-digital.jpg"
                      alt="Digital Transformation"
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                  </div>

                  {/* Top: Icon + Original Resting Heading & Info */}
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-accent-primary)]/20 group-hover:bg-black/70 group-hover:border-white/30 border border-[var(--color-accent-primary)]/35 text-[var(--color-accent-light)] group-hover:text-[#A3E635] flex items-center justify-center mb-4 transition-all duration-500 ease-out">
                      <HexCubeIcon className="w-6 h-6" />
                    </div>

                    {/* Original Heading (in original place) */}
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)] mb-0.5 leading-snug group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      Digital Transformation
                    </h3>

                    {/* Subtitle & Description */}
                    <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-light)] mb-2">
                        Modernize your business
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        Optimized processes, cloud-native architectures, and data-driven strategies that create lasting competitive advantage.
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                  <div className="relative z-10 mt-auto pt-3 flex items-end justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                      Digital Transformation
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-theme-container)] text-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A3E635] group-hover:text-black group-hover:border-transparent transition-all duration-500 ease-out shadow-md ml-auto">
                      <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>

              {/* 2. Data & Analytics (Soft Tint Theme Card) */}
              <AnimatedSection delay={100} className="h-full">
                <Link
                  to="/services/data-analytics"
                  className="group relative overflow-hidden bg-[var(--color-surface-card)] text-[var(--color-text-on-light)] border border-[var(--color-border-light)] hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full min-h-[230px]"
                >
                  {/* Hover Image Crossfade */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                    <img
                      src="/hover-data.jpg"
                      alt="Data & Analytics"
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                  </div>

                  {/* Top: Icon + Original Resting Heading & Info */}
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-badge-bg)] group-hover:bg-black/70 group-hover:border-white/30 border border-[var(--color-border-light)] text-[var(--color-badge-text)] group-hover:text-[#A3E635] flex items-center justify-center mb-4 transition-all duration-500 ease-out">
                      <NodesIcon className="w-6 h-6" />
                    </div>

                    {/* Original Heading (in original place) */}
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-on-light)] mb-0.5 leading-snug group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      Data &amp; Analytics
                    </h3>

                    {/* Subtitle & Description */}
                    <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-primary)] mb-2">
                        Insights that drive decisions
                      </p>
                      <p className="text-xs text-[var(--color-text-on-light-secondary)] leading-relaxed">
                        Turn raw enterprise data into actionable intelligence with modern data engineering, feature stores, and visualization.
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                  <div className="relative z-10 mt-auto pt-3 flex items-end justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                      Data &amp; Analytics
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-button-dark)] text-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A3E635] group-hover:text-black group-hover:border-transparent transition-all duration-500 ease-out shadow-md ml-auto">
                      <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>

            {/* Column 2: Tall Center AI & Machine Learning Card (Theme Gradient Hero Card) */}
            <div className="h-full">
              <AnimatedSection delay={150} className="h-full">
                <Link
                  to="/services/ai-ml"
                  className="group relative overflow-hidden bg-gradient-to-b from-[var(--color-navy-900)] via-[var(--color-navy-800)] to-[var(--color-navy-900)] text-[var(--color-text-primary)] border border-[var(--color-accent-primary)]/40 hover:border-[var(--color-accent-light)]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full min-h-[470px]"
                >
                  {/* Top: Icon + Permanent Heading & Info */}
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-accent-primary)]/25 border border-[var(--color-accent-light)]/40 text-[var(--color-accent-light)] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500">
                      <StarKnotIcon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-0.5 leading-tight group-hover:text-[var(--color-accent-light)] transition-colors duration-500">
                      AI &amp; Machine Learning
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-light)] mb-2">
                      Intelligent automation
                    </p>

                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
                      Enterprise solutions designed to accelerate transformation, cognitive automation, and predictive intelligence.
                    </p>
                  </div>

                  {/* 3D Pyramid Architectural Graphic */}
                  <div className="relative mt-auto -mx-7 -mb-7 pt-4 overflow-hidden flex items-end justify-center">
                    <img
                      src="/ai-first-pyramid.jpg"
                      alt="AI & Machine Learning Solutions Architecture"
                      className="w-full h-auto max-h-[260px] sm:max-h-[280px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />

                    {/* Floating arrow button bottom-right */}
                    <div className="absolute bottom-6 right-6 z-10">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-theme-container)] border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-[var(--color-theme-container)] group-hover:border-transparent transition-all duration-500 ease-out shadow-xl">
                        <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>

            {/* Column 3: Center-Right 2 Stacked Cards */}
            <div className="flex flex-col gap-4 sm:gap-5 justify-between h-full">
              {/* 4. Talent & Staffing (Soft Tint Theme Card) */}
              <AnimatedSection delay={200} className="h-full">
                <Link
                  to="/services/staffing"
                  className="group relative overflow-hidden bg-[var(--color-surface-card)] text-[var(--color-text-on-light)] border border-[var(--color-border-light)] hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full min-h-[230px]"
                >
                  {/* Hover Image Crossfade */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                    <img
                      src="/hover-talent.jpg"
                      alt="Talent & Staffing"
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                  </div>

                  {/* Top: Icon + Original Resting Heading & Info */}
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-badge-bg)] group-hover:bg-black/70 group-hover:border-white/30 border border-[var(--color-border-light)] text-[var(--color-badge-text)] group-hover:text-[#A3E635] flex items-center justify-center mb-4 transition-all duration-500 ease-out">
                      <WireCubeIcon className="w-6 h-6" />
                    </div>

                    {/* Original Heading (in original place) */}
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-on-light)] mb-0.5 leading-snug group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      Talent &amp; Staffing
                    </h3>

                    {/* Subtitle & Description */}
                    <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-primary)] mb-2">
                        Find the right people for every role
                      </p>
                      <p className="text-xs text-[var(--color-text-on-light-secondary)] leading-relaxed">
                        Connect high-growth enterprises with elite technology professionals — from specialized individual contributors to turnkey squads.
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                  <div className="relative z-10 mt-auto pt-3 flex items-end justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                      Talent &amp; Staffing
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-button-dark)] text-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A3E635] group-hover:text-black group-hover:border-transparent transition-all duration-500 ease-out shadow-md ml-auto">
                      <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>

              {/* 5. DevOps (Dark Theme Card) */}
              <AnimatedSection delay={250} className="h-full">
                <Link
                  to="/services/devops"
                  className="group relative overflow-hidden bg-[var(--color-navy-900)] text-[var(--color-text-primary)] border border-[var(--color-border)]/60 hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full min-h-[230px]"
                >
                  {/* Hover Image Crossfade */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                    <img
                      src="/hover-devops.jpg"
                      alt="DevOps"
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                  </div>

                  {/* Top: Icon + Original Resting Heading & Info */}
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-accent-primary)]/20 group-hover:bg-black/70 group-hover:border-white/30 border border-[var(--color-accent-primary)]/35 text-[var(--color-accent-light)] group-hover:text-[#A3E635] flex items-center justify-center mb-4 transition-all duration-500 ease-out">
                      <TrianglePrismIcon className="w-6 h-6" />
                    </div>

                    {/* Original Heading (in original place) */}
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)] mb-0.5 leading-snug group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      DevOps
                    </h3>

                    {/* Subtitle & Description */}
                    <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-light)] mb-2">
                        Accelerate delivery
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        Accelerate software delivery with CI/CD automation, cloud infrastructure-as-code, and continuous integration pipelines.
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                  <div className="relative z-10 mt-auto pt-3 flex items-end justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                      DevOps
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-theme-container)] text-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A3E635] group-hover:text-black group-hover:border-transparent transition-all duration-500 ease-out shadow-md ml-auto">
                      <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>

            {/* Column 4: Right Card (Luminous Theme Card) */}
            <div className="h-full">
              <AnimatedSection delay={300} className="h-full">
                <Link
                  to="/services/cybersecurity"
                  className="group relative overflow-hidden bg-[var(--color-badge-bg)] text-[var(--color-text-on-light)] border border-[var(--color-border-light)] hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full min-h-[230px]"
                >
                  {/* Hover Image Crossfade */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                    <img
                      src="/hover-cyber.jpg"
                      alt="Cybersecurity"
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                  </div>

                  {/* Top: Icon + Original Resting Heading & Info */}
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-surface-light)] group-hover:bg-black/70 group-hover:border-white/30 border border-[var(--color-border-light)] text-[var(--color-badge-text)] group-hover:text-[#A3E635] flex items-center justify-center mb-4 transition-all duration-500 ease-out">
                      <TriangularPetalsIcon className="w-6 h-6" />
                    </div>

                    {/* Original Heading (in original place) */}
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-on-light)] mb-0.5 leading-snug group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      Cybersecurity
                    </h3>

                    {/* Subtitle & Description */}
                    <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-primary)] mb-2">
                        Protect what matters
                      </p>
                      <p className="text-xs text-[var(--color-text-on-light-secondary)] leading-relaxed">
                        Protect what matters most with comprehensive zero-trust architectures, compliance governance, threat telemetry, and identity security.
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                  <div className="relative z-10 mt-auto pt-3 flex items-end justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                      Cybersecurity
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-theme-container)] text-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A3E635] group-hover:text-black group-hover:border-transparent transition-all duration-500 ease-out shadow-md ml-auto">
                      <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          </div>

          {/* Bottom Row: 3 Wide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* 7. Cloud Computing (Luminous Theme Card) */}
            <AnimatedSection delay={350} className="h-full">
              <Link
                to="/services/cloud"
                className="group relative overflow-hidden bg-[var(--color-badge-bg)] text-[var(--color-text-on-light)] border border-[var(--color-border-light)] hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 min-h-[210px] h-full"
              >
                {/* Hover Image Crossfade */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                  <img
                    src="/hover-cloud.jpg"
                    alt="Cloud Computing"
                    className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                </div>

                {/* Top: Icon + Original Resting Heading & Info */}
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-surface-light)] group-hover:bg-black/70 group-hover:border-white/30 border border-[var(--color-border-light)] text-[var(--color-badge-text)] group-hover:text-[#A3E635] flex items-center justify-center mb-4 transition-all duration-500 ease-out">
                    <PenroseTriangleIcon className="w-6 h-6" />
                  </div>

                  {/* Original Heading (in original place) */}
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-on-light)] mb-0.5 leading-snug group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                    Cloud Computing
                  </h3>

                  {/* Subtitle & Description */}
                  <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                    <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-primary)] mb-2">
                      Scalable cloud solutions
                    </p>
                    <p className="text-xs text-[var(--color-text-on-light-secondary)] leading-relaxed">
                      Migrate, modernize, and optimize your cloud infrastructure with enterprise architecture designed for speed, security, and elasticity.
                    </p>
                  </div>
                </div>

                {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                <div className="relative z-10 mt-auto pt-3 flex items-end justify-between gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                    Cloud Computing
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-[var(--color-theme-container)] text-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A3E635] group-hover:text-black group-hover:border-transparent transition-all duration-500 ease-out shadow-md ml-auto">
                    <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* 8. Managed Services (Dark Theme Card) */}
            <AnimatedSection delay={400} className="h-full">
              <Link
                to="/services/managed-services"
                className="group relative overflow-hidden bg-[var(--color-navy-900)] text-[var(--color-text-primary)] border border-[var(--color-border)]/60 hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 min-h-[210px] h-full"
              >
                {/* Hover Image Crossfade */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                  <img
                    src="/hover-managed.jpg"
                    alt="Managed Services"
                    className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                </div>

                {/* Top: Icon + Original Resting Heading & Info */}
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-accent-primary)]/20 group-hover:bg-black/70 group-hover:border-white/30 border border-[var(--color-accent-primary)]/35 text-[var(--color-accent-light)] group-hover:text-[#A3E635] flex items-center justify-center mb-4 transition-all duration-500 ease-out">
                    <MazeIcon className="w-6 h-6" />
                  </div>

                  {/* Original Heading (in original place) */}
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)] mb-0.5 leading-snug group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                    Managed Services
                  </h3>

                  {/* Subtitle & Description */}
                  <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                    <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-light)] mb-2">
                      Reliable technology operations
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      Reliable technology operations designed around your business. From infrastructure to applications, 24/7/365 active support and uptime.
                    </p>
                  </div>
                </div>

                {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                <div className="relative z-10 mt-auto pt-3 flex items-end justify-between gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                    Managed Services
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-[var(--color-theme-container)] text-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A3E635] group-hover:text-black group-hover:border-transparent transition-all duration-500 ease-out shadow-md ml-auto">
                    <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* 9. Enterprise Support (Soft Tint Theme Card) */}
            <AnimatedSection delay={450} className="h-full">
              <Link
                to="/services#enterprise-support"
                className="group relative overflow-hidden bg-[var(--color-surface-card)] text-[var(--color-text-on-light)] border border-[var(--color-border-light)] hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 min-h-[210px] h-full"
              >
                {/* Hover Image Crossfade */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                  <img
                    src="/hover-support.jpg"
                    alt="Enterprise Support"
                    className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                </div>

                {/* Top: Icon + Original Resting Heading & Info */}
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-badge-bg)] group-hover:bg-black/70 group-hover:border-white/30 border border-[var(--color-border-light)] text-[var(--color-badge-text)] group-hover:text-[#A3E635] flex items-center justify-center mb-4 transition-all duration-500 ease-out">
                    <RhombusIcon className="w-6 h-6" />
                  </div>

                  {/* Original Heading (in original place) */}
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-on-light)] mb-0.5 leading-snug group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                    Enterprise Support
                  </h3>

                  {/* Subtitle & Description */}
                  <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                    <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-primary)] mb-2">
                      Always-on technical operations
                    </p>
                    <p className="text-xs text-[var(--color-text-on-light-secondary)] leading-relaxed">
                      Round-the-clock technical support, incident management, and SLA telemetry that keeps your mission-critical systems running without compromise.
                    </p>
                  </div>
                </div>

                {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                <div className="relative z-10 mt-auto pt-3 flex items-end justify-between gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                    Enterprise Support
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-[var(--color-button-dark)] text-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A3E635] group-hover:text-black group-hover:border-transparent transition-all duration-500 ease-out shadow-md ml-auto">
                    <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* 2. Engagement Models - 2nd: Vibrant Purple Container */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-[#5B3FA6] text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

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
