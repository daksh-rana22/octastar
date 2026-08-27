import { Target, Eye, Heart, Lightbulb, Users, Globe, Award, Sparkles, CheckCircle, ArrowRight, Shield, Rocket } from 'lucide-react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import Stats from '../components/Stats';
import Button from '../components/Button';

const values = [
  { icon: Target, title: 'Engineering Precision', description: 'We deliver with uncompromising accuracy, technical rigor, and enterprise standards across every sprint and engagement.' },
  { icon: Eye, title: 'Radical Transparency', description: 'Open communication, real-time SLA telemetry, and clear milestones form the bedrock of our client partnerships.' },
  { icon: Heart, title: 'Human-Centered Delivery', description: 'Technology accelerates change, but elite people drive transformation. We cultivate talent and engineer genuine partnerships.' },
  { icon: Lightbulb, title: 'Continuous Innovation', description: 'We actively evolve our frameworks using the latest in AI, cloud-native architectures, and agile execution.' },
  { icon: Users, title: 'Collaborative Squads', description: 'Seamlessly embedding into your existing teams, workflows, and culture to operate as unified high-velocity units.' },
  { icon: Globe, title: 'Enterprise Integrity', description: 'Upholding strict security compliance, data confidentiality, and ethical governance across global operations.' },
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
        primaryCta={{ label: 'Partner With Us', to: '/contact' }}
        secondaryCta={{ label: 'Explore Services', to: '/services' }}
      />

      {/* Mission & Vision - Vibrant Purple Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-[#5B3FA6] text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-950/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 geometric-grid opacity-10 pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedSection className="max-w-3xl mb-12 text-center mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-200 mb-2">
              Our Guiding Compass
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 text-white">
              Purpose-Driven Transformation
            </h2>
            <p className="text-sm md:text-base text-purple-100/90 leading-relaxed">
              We empower modern enterprises to solve complex technological challenges, scale engineering capacity, and navigate digital disruption with confidence.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <AnimatedSection delay={100} className="h-full">
              <div className="group relative p-8 sm:p-10 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
                <div>
                  <div className="w-14 h-14 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-[#5B3FA6] group-hover:scale-105 transition-all duration-300">
                    <Target size={28} />
                  </div>
                  <span className="inline-block text-xs font-bold tracking-widest uppercase text-purple-200 mb-2">
                    Our Mission
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Empowering Organizations Through Elite Tech &amp; Talent
                  </h3>
                  <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed">
                    To connect high-growth organizations with exceptional technology professionals and innovative digital solutions. We bridge the critical gap between technological aspiration and measurable business execution.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-2 text-xs font-semibold text-purple-200">
                  <Sparkles size={14} /> Delivering measurable outcomes on every engagement
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="h-full">
              <div className="group relative p-8 sm:p-10 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
                <div>
                  <div className="w-14 h-14 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-[#5B3FA6] group-hover:scale-105 transition-all duration-300">
                    <Eye size={28} />
                  </div>
                  <span className="inline-block text-xs font-bold tracking-widest uppercase text-purple-200 mb-2">
                    Our Vision
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    The Premier Catalyst for Scalable Digital Evolution
                  </h3>
                  <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed">
                    To be the world’s most trusted technology staffing, cloud engineering, and digital transformation partner. We set the benchmark for engineering excellence, rapid adaptability, and human-centric client collaboration.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-2 text-xs font-semibold text-purple-200">
                  <CheckCircle size={14} /> Long-term partnerships built on transparency &amp; trust
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Core Values - Crisp Clean White Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200">
        <Container className="relative z-10">
          <SectionHeading
            label="Core Values"
            title="The Principles That Drive Our Work"
            description="Our values guide every technical architecture decision, client engagement, and talent relationship we build."
            darkText={true}
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} delay={index * 80}>
                  <div className="group relative h-full flex flex-col p-6 sm:p-7 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#5B3FA6]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5B3FA6]/10 hover:-translate-y-1">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 text-[#5B3FA6] group-hover:bg-[#5B3FA6] group-hover:text-white transition-all duration-300 mb-5">
                      <Icon size={22} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#5B3FA6] transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Stats Banner */}
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
                  <div className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 ${
                    index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}>
                    {/* Node on Line */}
                    <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-navy-900 border-2 border-accent-primary items-center justify-center z-10 shadow-lg shadow-accent-primary/30">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent-secondary animate-pulse" />
                    </div>

                    {/* Timeline Card */}
                    <div className={`w-full sm:w-[calc(50%-2rem)] p-6 sm:p-7 rounded-2xl bg-navy-800/90 border border-border/80 hover:border-accent-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/15 ${
                      index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'
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
