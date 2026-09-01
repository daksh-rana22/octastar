import { useState } from 'react';
import { Target, Eye, Heart, Lightbulb, Users, Globe, Award, Sparkles, CheckCircle, ArrowRight, Shield, Rocket } from 'lucide-react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import Stats from '../components/Stats';
import Button from '../components/Button';

const values = [
  {
    icon: Target,
    title: 'Engineering Precision',
    description: 'We deliver with uncompromising accuracy, technical rigor, and enterprise standards across every sprint and engagement.',
    image: '/hover-devops.jpg',
  },
  {
    icon: Eye,
    title: 'Radical Transparency',
    description: 'Open communication, real-time SLA telemetry, and clear milestones form the bedrock of our client partnerships.',
    image: '/hover-data.jpg',
  },
  {
    icon: Heart,
    title: 'Human-Centered Delivery',
    description: 'Technology accelerates change, but elite people drive transformation. We cultivate talent and engineer genuine partnerships.',
    image: '/hover-talent.jpg',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Innovation',
    description: 'We actively evolve our frameworks using the latest in AI, cloud-native architectures, and agile execution.',
    image: '/hover-cloud.jpg',
  },
  {
    icon: Users,
    title: 'Collaborative Squads',
    description: 'Seamlessly embedding into your existing teams, workflows, and culture to operate as unified high-velocity units.',
    image: '/services-talent-staffing.jpg',
  },
  {
    icon: Globe,
    title: 'Enterprise Integrity',
    description: 'Upholding strict security compliance, data confidentiality, and ethical governance across global operations.',
    image: '/hover-cyber.jpg',
  },
];

const timeline = [
  { year: '2015', title: 'Founding & Talent Ecosystem', description: 'OctaStar Group established to bridge the growing gap between top-tier tech talent and rapidly scaling enterprises.' },
  { year: '2017', title: 'Managed IT & Cloud Operations', description: 'Expanded capabilities to include full-lifecycle managed infrastructure, cloud migrations, and 24/7 technical operations.' },
  { year: '2019', title: 'AI & Digital Transformation Practice', description: 'Launched dedicated practices in Artificial Intelligence, Machine Learning, and enterprise RPA automation.' },
  { year: '2021', title: 'Global Footprint & Scaled Squads', description: 'Expanded cross-border delivery centers and agile squad models across North America, EMEA, and APAC.' },
  { year: '2023', title: 'Industry Leadership Recognition', description: 'Ranked as a premier technology consulting and specialized staffing partner for Fortune 500 enterprises.' },
  { year: '2025+', title: 'Next-Gen AI & Workforce Agility', description: 'Pioneering AI-orchestrated talent deployment and cloud automation architectures for the autonomous enterprise era.' },
];

const pillars = [
  { title: 'Global Delivery Network', desc: 'Pre-screened elite talent spanning 30+ technology domains across premier global hubs.' },
  { title: 'Agile Squad Velocity', desc: 'Rapid team ramp-up within 48 to 72 hours with seamless CI/CD and communication integration.' },
  { title: 'SLA-Driven Guarantee', desc: 'Predictable delivery outcomes backed by transparent KPI dashboards and rigorous QA benchmarks.' },
];

export default function About() {
  const [hoveredValue, setHoveredValue] = useState(null);

  const columns = [
    { top: values[0], topIdx: 0, bottom: values[3], bottomIdx: 3 },
    { top: values[1], topIdx: 1, bottom: values[4], bottomIdx: 4 },
    { top: values[2], topIdx: 2, bottom: values[5], bottomIdx: 5 },
  ];

  return (
    <>
      <title>About Us — OctaStar Group</title>
      <meta name="description" content="Learn how OctaStar Group unites top-tier technology expertise with human-centered talent solutions to drive enterprise digital transformation." />

      {/* Hero */}
      <Hero
        compact
        label="About OctaStar Group"
        title={<>Technology Expertise. <span className="gradient-text">Human Connection.</span></>}
        description="We believe the most transformative technology outcomes happen when deep technical mastery meets authentic human partnership. Our approach unites specialized industry knowledge, a vast talent network, and agile delivery frameworks."
        image="/ChatGPT Image Aug 26, 2026, 02_48_07 PM.png"
        imageAlt="OctaStar Cybernetic Hand and Luminous Emblem"
        primaryCta={{ label: 'Partner With Us', to: '/contact' }}
        secondaryCta={{ label: 'Explore Services', to: '/services' }}
      />

      {/* Mission & Vision - Crisp stats-gradient-bg Section */}
      <section className="py-12 md:py-16 relative overflow-hidden stats-gradient-bg border-y border-slate-350">
        {/* Subtle Dark Edge Vignette Fades */}
        <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-slate-900/[0.08] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-slate-900/[0.10] to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45)_0%,_transparent_65%,_rgba(15,23,42,0.06)_100%)] pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedSection className="max-w-3xl mb-8 md:mb-10 text-center mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-accent-primary mb-1.5 drop-shadow-sm">
              Our Guiding Compass
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-2 text-slate-900">
              Purpose-Driven Transformation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We empower modern enterprises to solve complex technological challenges, scale engineering capacity, and navigate digital disruption with confidence.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <AnimatedSection delay={100} className="h-full">
              <div className="group relative p-7 sm:p-9 bg-white/85 hover:bg-white border border-slate-300/80 hover:border-accent-primary/60 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col justify-between overflow-hidden">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-badge-bg)] border border-[var(--color-border-light)] flex items-center justify-center mb-5 text-[var(--color-badge-text)] group-hover:bg-[var(--color-theme-container)] group-hover:!text-white group-hover:scale-105 transition-all duration-300">
                    <Target size={26} className="transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="inline-block text-xs font-mono font-bold tracking-widest uppercase text-[#5B3FA6] mb-2">
                    Our Mission
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#5B3FA6] transition-colors">
                    Empowering Organizations Through Elite Tech &amp; Talent
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    To connect high-growth organizations with exceptional technology professionals and innovative digital solutions. We bridge the critical gap between technological aspiration and measurable business execution.
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-[#5B3FA6]">
                  <Sparkles size={14} /> Delivering measurable outcomes on every engagement
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="h-full">
              <div className="group relative p-7 sm:p-9 bg-white/85 hover:bg-white border border-slate-300/80 hover:border-accent-primary/60 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col justify-between overflow-hidden">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-badge-bg)] border border-[var(--color-border-light)] flex items-center justify-center mb-5 text-[var(--color-badge-text)] group-hover:bg-[var(--color-theme-container)] group-hover:!text-white group-hover:scale-105 transition-all duration-300">
                    <Eye size={26} className="transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="inline-block text-xs font-mono font-bold tracking-widest uppercase text-[#5B3FA6] mb-2">
                    Our Vision
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#5B3FA6] transition-colors">
                    The Premier Catalyst for Scalable Digital Evolution
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    To be the world’s most trusted technology staffing, cloud engineering, and digital transformation partner. We set the benchmark for engineering excellence, rapid adaptability, and human-centric client collaboration.
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-[#5B3FA6]">
                  <CheckCircle size={14} /> Long-term partnerships built on transparency &amp; trust
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Core Values - Unified Editorial Container */}
      <section className="py-16 md:py-24 lg:py-28 relative overflow-hidden bg-[#5853A9] text-white">
        <Container className="relative z-10 max-w-6xl">
          {/* Header */}
          <AnimatedSection className="max-w-3xl mb-12 md:mb-16 text-center mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-purple-200 mb-3 drop-shadow-sm">
              Core Values
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-extrabold tracking-tight leading-tight mb-4 text-white font-sans">
              The Principles That Drive Our Work
            </h2>
            <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed max-w-2xl mx-auto font-normal">
              Our values guide every technical architecture decision, client engagement, and talent relationship we build.
            </p>
          </AnimatedSection>

          {/* Unified 6-Panel Container */}
          <AnimatedSection delay={150}>
            <div className="relative rounded-[22px] sm:rounded-[28px] bg-[#4D4899] border border-white/20 overflow-hidden shadow-2xl">
              {/* Subtle top inner highlight line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20 pointer-events-none z-10" />

              {/* Crystal Clear Container Background Image Layer */}
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <img
                  src="/hover-talent.jpg"
                  alt="Teamwork & Core Values"
                  className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/55" />
              </div>

              {/* Responsive 3-Column Accordion Grid */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15 min-h-[460px] sm:min-h-[490px]">
                {columns.map((col, colIdx) => {
                  const TopIcon = col.top.icon;
                  const BottomIcon = col.bottom.icon;
                  const isTopHovered = hoveredValue === col.topIdx;
                  const isBottomHovered = hoveredValue === col.bottomIdx;

                  return (
                    <div key={colIdx} className="flex flex-col h-full divide-y divide-white/15">
                      {/* Top Card */}
                      <div
                        onClick={() => setHoveredValue(isTopHovered ? null : col.topIdx)}
                        onMouseEnter={() => setHoveredValue(col.topIdx)}
                        onMouseLeave={() => setHoveredValue(null)}
                        className={`group/panel relative p-5 sm:p-7 lg:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-out cursor-pointer md:cursor-default select-none ${
                          isTopHovered
                            ? 'flex-[1.65] bg-white/[0.12]'
                            : isBottomHovered
                            ? 'flex-[0.65] opacity-65'
                            : 'flex-1 hover:bg-white/[0.06]'
                        }`}
                      >
                        {/* Top Bar: Icon Badge ONLY (Numbering removed) */}
                        <div className="relative z-10 flex items-center justify-between mb-3">
                          <div
                            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl border backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
                              isTopHovered
                                ? 'bg-white border-white text-[#5853A9] scale-105 shadow-[0_0_22px_rgba(255,255,255,0.45)]'
                                : 'bg-white/10 border-white/25 text-white'
                            }`}
                          >
                            <TopIcon size={22} className="transition-colors duration-300" />
                          </div>
                        </div>

                        {/* Content Area: Title + Expandable Description */}
                        <div className="relative z-10 mt-auto">
                          <h4
                            className={`text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight leading-snug transition-all duration-300 ${
                              isBottomHovered ? 'text-white/80' : 'text-white'
                            }`}
                          >
                            {col.top.title}
                          </h4>

                          {/* Description (Hidden by default, smoothly revealed when this card is hovered) */}
                          <div
                            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                              isTopHovered ? 'grid-rows-[1fr] opacity-100 mt-2.5' : 'grid-rows-[0fr] opacity-0'
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed">
                                {col.top.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Card */}
                      <div
                        onClick={() => setHoveredValue(isBottomHovered ? null : col.bottomIdx)}
                        onMouseEnter={() => setHoveredValue(col.bottomIdx)}
                        onMouseLeave={() => setHoveredValue(null)}
                        className={`group/panel relative p-5 sm:p-7 lg:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-out cursor-pointer md:cursor-default select-none ${
                          isBottomHovered
                            ? 'flex-[1.65] bg-white/[0.12]'
                            : isTopHovered
                            ? 'flex-[0.65] opacity-65'
                            : 'flex-1 hover:bg-white/[0.06]'
                        }`}
                      >
                        {/* Top Bar: Icon Badge ONLY (Numbering removed) */}
                        <div className="relative z-10 flex items-center justify-between mb-3">
                          <div
                            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl border backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
                              isBottomHovered
                                ? 'bg-white border-white text-[#5853A9] scale-105 shadow-[0_0_22px_rgba(255,255,255,0.45)]'
                                : 'bg-white/10 border-white/25 text-white'
                            }`}
                          >
                            <BottomIcon size={22} className="transition-colors duration-300" />
                          </div>
                        </div>

                        {/* Content Area: Title + Expandable Description */}
                        <div className="relative z-10 mt-auto">
                          <h4
                            className={`text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight leading-snug transition-all duration-300 ${
                              isTopHovered ? 'text-white/80' : 'text-white'
                            }`}
                          >
                            {col.bottom.title}
                          </h4>

                          {/* Description (Hidden by default, smoothly revealed when this card is hovered) */}
                          <div
                            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                              isBottomHovered ? 'grid-rows-[1fr] opacity-100 mt-2.5' : 'grid-rows-[0fr] opacity-0'
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed">
                                {col.bottom.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Stats Banner - Crisp stats-gradient-bg Container */}
      <Stats />

      {/* Our Journey & Milestones - Deep Navy Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-navy-950 border-t border-border/40">
        <div className="absolute inset-0 geometric-dots opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />

        <Container size="narrow" className="relative z-10">
          <SectionHeading
            label="Our Growth"
            title="Building the Future, Step by Step"
            description="From our origins in specialized technical recruiting to an international end-to-end technology solutions provider."
            className="mb-14"
          />

          <div className="relative">
            {/* Center vertical glowing line */}
            <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent-primary/10 via-accent-primary to-accent-primary/10 hidden sm:block" />

            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection
                  key={item.year}
                  delay={index * 100}
                  animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                >
                  <div className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}>
                    {/* Node on Line */}
                    <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-navy-900 border-2 border-accent-primary items-center justify-center z-10 shadow-lg shadow-accent-primary/30">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent-secondary animate-pulse" />
                    </div>

                    {/* Timeline Card */}
                    <div className={`w-full sm:w-[calc(50%-2rem)] p-6 sm:p-7 rounded-2xl bg-navy-800/90 border border-border/80 hover:border-accent-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/15 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'
                      }`}>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-accent-primary/15 text-accent-light border border-accent-primary/30 mb-2">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-bold text-text-primary mb-2">{item.title}</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Signature CTA */}
      <CTASection
        title="Ready to Transform Your Organization?"
        description="Whether you need specialized technology talent or end-to-end digital engineering squads, our experts are ready to build what's next with you."
        primaryCta={{ label: 'Start a Conversation', to: '/contact' }}
        secondaryCta={{ label: 'Explore Our Services', to: '/services' }}
      />
    </>
  );
}
