import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Lock, Users, Sparkles, CheckCircle2, ArrowRight, Building, Landmark, HeartPulse, Factory, ShoppingCart, Zap } from 'lucide-react';
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

      {/* Industry Sector Grid - 4-Column Bento Grid matching Solution Portfolio layout */}
      <section className="py-14 md:py-20 relative overflow-hidden stats-gradient-bg border-y border-slate-350">
        {/* Subtle Dark Edge Vignette Fades */}
        <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-slate-900/[0.08] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-slate-900/[0.10] to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45)_0%,_transparent_65%,_rgba(15,23,42,0.06)_100%)] pointer-events-none" />

        <Container className="relative z-10 max-w-7xl">
          <AnimatedSection className="max-w-3xl mb-10 md:mb-14 text-center mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-accent-primary mb-1.5 drop-shadow-sm">
              Industry Practices
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase leading-[1.15] font-sans">
              VERTICAL SOLUTIONS BUILT FOR<br className="hidden sm:inline" /> SPECIFIC DEMANDS
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto mt-2">
              Proven engineering blueprints and domain talent tailored to solve sector-specific complexities.
            </p>
          </AnimatedSection>

          {/* 4-Column Bento Grid of 6 Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
            {/* Column 1: Left 2 Stacked Cards */}
            <div className="flex flex-col gap-4 sm:gap-5 justify-between h-full">
              {/* 1. Banking & Financial Services (Dark Theme Card) */}
              <AnimatedSection delay={50} className="h-full">
                <Link
                  to="/industries/banking"
                  className="group relative overflow-hidden bg-[var(--color-navy-900)] text-[var(--color-text-primary)] border border-[var(--color-border)]/60 hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full min-h-[230px]"
                >
                  {/* Hover Image Crossfade */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                    <img
                      src="/industries/industry-banking.jpg"
                      alt="Banking & Financial Services"
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                  </div>

                  {/* Top: Icon + Original Resting Heading & Info */}
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-accent-primary)]/20 group-hover:bg-black/70 group-hover:border-white/30 border border-[var(--color-accent-primary)]/35 text-[var(--color-accent-light)] group-hover:text-[#A3E635] flex items-center justify-center mb-4 transition-all duration-500 ease-out">
                      <Landmark className="w-6 h-6" />
                    </div>

                    {/* Original Heading */}
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)] mb-0.5 leading-snug group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      Banking &amp; Finance
                    </h3>

                    {/* Subtitle & Description */}
                    <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-light)] mb-2">
                        Fintech &amp; Capital Markets
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        Core banking modernization, real-time payment rails, and AI-powered fraud detection platforms.
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                  <div className="relative z-10 mt-auto pt-3 flex items-end justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                      Banking &amp; Finance
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-theme-container)] text-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A3E635] group-hover:text-black group-hover:border-transparent transition-all duration-500 ease-out shadow-md ml-auto">
                      <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>

              {/* 2. Insurance (Soft Tint Theme Card) */}
              <AnimatedSection delay={100} className="h-full">
                <Link
                  to="/industries/insurance"
                  className="group relative overflow-hidden bg-[var(--color-surface-card)] text-[var(--color-text-on-light)] border border-[var(--color-border-light)] hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full min-h-[230px]"
                >
                  {/* Hover Image Crossfade */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                    <img
                      src="/industries/industry-insurance.jpg"
                      alt="Insurance"
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                  </div>

                  {/* Top: Icon + Original Resting Heading & Info */}
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-badge-bg)] group-hover:bg-black/70 group-hover:border-white/30 border border-[var(--color-border-light)] text-[var(--color-badge-text)] group-hover:text-[#A3E635] flex items-center justify-center mb-4 transition-all duration-500 ease-out">
                      <ShieldCheck className="w-6 h-6" />
                    </div>

                    {/* Original Heading */}
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-on-light)] mb-0.5 leading-snug group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      Insurance
                    </h3>

                    {/* Subtitle & Description */}
                    <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-primary)] mb-2">
                        Underwriting &amp; Claims AI
                      </p>
                      <p className="text-xs text-[var(--color-text-on-light-secondary)] leading-relaxed">
                        Straight-through claims processing, automated risk underwriting, and digital policyholder portals.
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                  <div className="relative z-10 mt-auto pt-3 flex items-end justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                      Insurance
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-button-dark)] text-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A3E635] group-hover:text-black group-hover:border-transparent transition-all duration-500 ease-out shadow-md ml-auto">
                      <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>

            {/* Column 2: Tall Center Healthcare & Life Sciences Card */}
            <div className="h-full">
              <AnimatedSection delay={150} className="h-full">
                <Link
                  to="/industries/healthcare"
                  className="group relative overflow-hidden bg-gradient-to-b from-[var(--color-navy-900)] via-[var(--color-navy-800)] to-[var(--color-navy-900)] text-[var(--color-text-primary)] border border-[var(--color-accent-primary)]/40 hover:border-[var(--color-accent-light)]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full min-h-[470px]"
                >
                  {/* Hover Image Crossfade */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                    <img
                      src="/industries/industry-healthcare.jpg"
                      alt="Healthcare & Life Sciences"
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                  </div>

                  {/* Top: Icon + Permanent Heading & Info */}
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-accent-primary)]/25 border border-[var(--color-accent-light)]/40 text-[var(--color-accent-light)] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500">
                      <HeartPulse className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-0.5 leading-tight group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      Healthcare &amp; Life Sciences
                    </h3>

                    <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-light)] mb-2">
                        Clinical AI &amp; Telehealth
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
                        Empowering healthcare organizations with EHR interoperability, clinical data lakes, and HIPAA-compliant digital health platforms.
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                  <div className="relative z-10 mt-auto pt-4 flex items-end justify-between gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                      Healthcare &amp; Life Sciences
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-theme-container)] border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#A3E635] group-hover:text-black group-hover:border-transparent transition-all duration-500 ease-out shadow-xl ml-auto">
                      <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>

            {/* Column 3: Center-Right 2 Stacked Cards */}
            <div className="flex flex-col gap-4 sm:gap-5 justify-between h-full">
              {/* 4. Retail (Soft Tint Theme Card) */}
              <AnimatedSection delay={200} className="h-full">
                <Link
                  to="/industries/retail"
                  className="group relative overflow-hidden bg-[var(--color-surface-card)] text-[var(--color-text-on-light)] border border-[var(--color-border-light)] hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full min-h-[230px]"
                >
                  {/* Hover Image Crossfade */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                    <img
                      src="/industries/industry-retail.jpg"
                      alt="Retail"
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                  </div>

                  {/* Top: Icon + Original Resting Heading & Info */}
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-badge-bg)] group-hover:bg-black/70 group-hover:border-white/30 border border-[var(--color-border-light)] text-[var(--color-badge-text)] group-hover:text-[#A3E635] flex items-center justify-center mb-4 transition-all duration-500 ease-out">
                      <ShoppingCart className="w-6 h-6" />
                    </div>

                    {/* Original Heading */}
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-on-light)] mb-0.5 leading-snug group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      Retail
                    </h3>

                    {/* Subtitle & Description */}
                    <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-primary)] mb-2">
                        Omnichannel &amp; Smart Commerce
                      </p>
                      <p className="text-xs text-[var(--color-text-on-light-secondary)] leading-relaxed">
                        Personalized omnichannel commerce, AI-driven product recommendations, and real-time inventory management.
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                  <div className="relative z-10 mt-auto pt-3 flex items-end justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                      Retail
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-button-dark)] text-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A3E635] group-hover:text-black group-hover:border-transparent transition-all duration-500 ease-out shadow-md ml-auto">
                      <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>

              {/* 5. Manufacturing (Dark Theme Card) */}
              <AnimatedSection delay={250} className="h-full">
                <Link
                  to="/industries/manufacturing"
                  className="group relative overflow-hidden bg-[var(--color-navy-900)] text-[var(--color-text-primary)] border border-[var(--color-border)]/60 hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full min-h-[230px]"
                >
                  {/* Hover Image Crossfade */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                    <img
                      src="/industries/industry-manufacturing.jpg"
                      alt="Manufacturing"
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                  </div>

                  {/* Top: Icon + Original Resting Heading & Info */}
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-accent-primary)]/20 group-hover:bg-black/70 group-hover:border-white/30 border border-[var(--color-accent-primary)]/35 text-[var(--color-accent-light)] group-hover:text-[#A3E635] flex items-center justify-center mb-4 transition-all duration-500 ease-out">
                      <Factory className="w-6 h-6" />
                    </div>

                    {/* Original Heading */}
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)] mb-0.5 leading-snug group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      Manufacturing
                    </h3>

                    {/* Subtitle & Description */}
                    <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-light)] mb-2">
                        Industry 4.0 &amp; Smart IoT
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        IoT telemetry analytics, predictive equipment maintenance, digital twins, and autonomous supply chains.
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                  <div className="relative z-10 mt-auto pt-3 flex items-end justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                      Manufacturing
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
                  to="/industries/energy"
                  className="group relative overflow-hidden bg-[var(--color-badge-bg)] text-[var(--color-text-on-light)] border border-[var(--color-border-light)] hover:border-[#A3E635]/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full min-h-[470px]"
                >
                  {/* Hover Image Crossfade */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0">
                    <img
                      src="/industries/industry-energy.jpg"
                      alt="Energy & Utilities"
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
                  </div>

                  {/* Top: Icon + Original Resting Heading & Info */}
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-surface-light)] group-hover:bg-black/70 group-hover:border-white/30 border border-[var(--color-border-light)] text-[var(--color-badge-text)] group-hover:text-[#A3E635] flex items-center justify-center mb-4 transition-all duration-500 ease-out">
                      <Zap className="w-6 h-6" />
                    </div>

                    {/* Original Heading */}
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-on-light)] mb-0.5 leading-snug group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      Energy &amp; Utilities
                    </h3>

                    {/* Subtitle & Description */}
                    <div className="group-hover:opacity-0 group-hover:-translate-y-1 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-500 ease-in-out">
                      <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent-primary)] mb-2">
                        Smart Grid &amp; Clean Power
                      </p>
                      <p className="text-xs text-[var(--color-text-on-light-secondary)] leading-relaxed">
                        Harness digital technology to optimize smart grid telemetry, improve safety, and accelerate the transition to sustainable clean energy.
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Heading (shown ONLY on hover at bottom) + Action Button */}
                  <div className="relative z-10 mt-auto pt-3 flex items-end justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#A3E635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-out delay-75 leading-snug">
                      Energy &amp; Utilities
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

      {/* Enterprise Standards - Vibrant Container */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-[#5853A9] text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 geometric-grid opacity-10 pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedSection className="max-w-3xl mb-12 text-center mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-200 mb-2">
              Enterprise Standards
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 text-white">
              Governance, Compliance &amp; Domain Rigor
            </h2>
            <p className="text-sm md:text-base text-purple-100/90 leading-relaxed">
              Regardless of your sector, our engineering squads operate under the highest standards of enterprise security and regulatory precision.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {compliancePillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={idx * 80} className="h-full">
                  <div className="h-full p-6 sm:p-7 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 text-white flex items-center justify-center mb-4">
                        <Icon size={22} />
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed">
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

      {/* Sector Transformation Highlights - Crisp Clean White Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200">
        <Container className="relative z-10">
          <SectionHeading
            label="Demonstrated Impact"
            title="Proven Delivery Across Regulated Sectors"
            description="Real-world velocity, modernization, and compliance breakthroughs delivered for enterprise clients worldwide."
            darkText={true}
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {industryHighlights.map((item, idx) => (
              <AnimatedSection key={item.sector} delay={idx * 80} className="h-full">
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#5B3FA6]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5B3FA6]/10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5B3FA6] block mb-1">
                      {item.sector}
                    </span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#5B3FA6] font-mono block mb-2">
                      {item.metric}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
