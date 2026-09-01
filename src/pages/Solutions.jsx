import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap, Bot, Layers, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import { solutionsList } from '../data/solutions';

// Geometric SVG Icons matching reference layout
function HexCubeIcon({ className = "w-6 h-6 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function NodesIcon({ className = "w-6 h-6 text-current" }) {
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

function StarKnotIcon({ className = "w-6 h-6 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

function WireCubeIcon({ className = "w-6 h-6 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M12 12L4 7.5M12 12l8-4.5M12 12v9" />
      <path d="M8 5.25l8 4.5M8 18.75l8-4.5" />
    </svg>
  );
}

function TrianglePrismIcon({ className = "w-6 h-6 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3L2 20h20L12 3z" />
      <path d="M12 8l-5 9h10l-5-9z" />
      <path d="M12 12l-2 3.5h4L12 12z" />
    </svg>
  );
}

function TriangularPetalsIcon({ className = "w-6 h-6 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2a4 4 0 014 4v2a4 4 0 01-4 4 4 4 0 01-4-4V6a4 4 0 014-4z" />
      <path d="M6 12a4 4 0 014 4v2a4 4 0 01-4 4 4 4 0 01-4-4v-2a4 4 0 014-4z" />
      <path d="M18 12a4 4 0 014 4v2a4 4 0 01-4 4 4 4 0 01-4-4v-2a4 4 0 014-4z" />
    </svg>
  );
}

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

      {/* Solutions Matrix - 4-Column Bento Grid matching reference layout */}
      <section className="py-14 md:py-20 relative overflow-hidden stats-gradient-bg border-y border-slate-350">
        {/* Subtle Dark Edge Vignette Fades */}
        <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-slate-900/[0.08] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-slate-900/[0.10] to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45)_0%,_transparent_65%,_rgba(15,23,42,0.06)_100%)] pointer-events-none" />

        <Container className="relative z-10 max-w-7xl">
          <AnimatedSection className="max-w-3xl mb-10 md:mb-14 text-center mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-accent-primary mb-1.5 drop-shadow-sm">
              Solution Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase leading-[1.15] font-sans">
              PURPOSE-BUILT FOR MEASURABLE<br className="hidden sm:inline" /> BUSINESS VALUE
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto mt-2">
              Combining cutting-edge cloud, automation, and AI frameworks to solve high-stakes enterprise challenges.
            </p>
          </AnimatedSection>

          {/* 4-Column Bento Grid of 6 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
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

                    {/* Original Heading */}
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

                    {/* Original Heading */}
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
              {/* 4. Cloud Transformation (Soft Tint Theme Card) */}
              <AnimatedSection delay={200} className="h-full">
                <Link
                  to="/services/cloud"
                  className="group relative overflow-hidden bg-[var(--color-surface-card)] text-[var(--color-text-on-light)] border border-[var(--color-border-light)] hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full min-h-[230px]"
                >
                  {/* Hover Image Crossfade */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                    <img
                      src="/hover-cloud.jpg"
                      alt="Cloud Transformation"
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                  </div>

                  {/* Top: Icon + Original Resting Heading & Info */}
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-badge-bg)] group-hover:bg-black/70 group-hover:border-white/30 border border-[var(--color-border-light)] text-[var(--color-badge-text)] group-hover:text-[#A3E635] flex items-center justify-center mb-4 transition-all duration-500 ease-out">
                      <WireCubeIcon className="w-6 h-6" />
                    </div>

                    {/* Original Heading */}
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-on-light)] mb-0.5 leading-snug group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      Cloud Transformation
                    </h3>

                    {/* Subtitle & Description */}
                    <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-primary)] mb-2">
                        Scalable cloud platforms
                      </p>
                      <p className="text-xs text-[var(--color-text-on-light-secondary)] leading-relaxed">
                        Migrate, modernize, and optimize your cloud infrastructure with enterprise architectures designed for speed, security, and resilience.
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                  <div className="relative z-10 mt-auto pt-3 flex items-end justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                      Cloud Transformation
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-button-dark)] text-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A3E635] group-hover:text-black group-hover:border-transparent transition-all duration-500 ease-out shadow-md ml-auto">
                      <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>

              {/* 5. RPA & Automation (Dark Theme Card) */}
              <AnimatedSection delay={250} className="h-full">
                <Link
                  to="/solutions/rpa"
                  className="group relative overflow-hidden bg-[var(--color-navy-900)] text-[var(--color-text-primary)] border border-[var(--color-border)]/60 hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full min-h-[230px]"
                >
                  {/* Hover Image Crossfade */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                    <img
                      src="/solutions/solution-rpa.jpg"
                      alt="RPA & Automation"
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                  </div>

                  {/* Top: Icon + Original Resting Heading & Info */}
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-accent-primary)]/20 group-hover:bg-black/70 group-hover:border-white/30 border border-[var(--color-accent-primary)]/35 text-[var(--color-accent-light)] group-hover:text-[#A3E635] flex items-center justify-center mb-4 transition-all duration-500 ease-out">
                      <TrianglePrismIcon className="w-6 h-6" />
                    </div>

                    {/* Original Heading */}
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)] mb-0.5 leading-snug group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      RPA &amp; Automation
                    </h3>

                    {/* Subtitle & Description */}
                    <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-light)] mb-2">
                        Autonomous bot workflows
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        Eliminate repetitive manual bottlenecks with intelligent robotic bots that increase speed, accuracy, and operational capacity.
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                  <div className="relative z-10 mt-auto pt-3 flex items-end justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                      RPA &amp; Automation
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-theme-container)] text-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A3E635] group-hover:text-black group-hover:border-transparent transition-all duration-500 ease-out shadow-md ml-auto">
                      <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>

            {/* Column 4: Right Tall Card (Luminous Theme Card) */}
            <div className="h-full">
              <AnimatedSection delay={300} className="h-full">
                <Link
                  to="/services/cybersecurity"
                  className="group relative overflow-hidden bg-[var(--color-badge-bg)] text-[var(--color-text-on-light)] border border-[var(--color-border-light)] hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full min-h-[470px]"
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

                    {/* Original Heading */}
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
                    <div className="w-8 h-8 rounded-full bg-[var(--color-button-dark)] text-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A3E635] group-hover:text-black group-hover:border-transparent transition-all duration-500 ease-out shadow-md ml-auto">
                      <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
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
