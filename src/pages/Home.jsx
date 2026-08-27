import { useState } from 'react';
import { Users, Server, Layers, Compass, Handshake, Lightbulb, Shield, Award, ArrowRight, Sparkles, Search, Workflow, UserCheck, Rocket, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import LogoMarquee from '../components/LogoMarquee';
import Stats from '../components/Stats';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ProcessTimeline from '../components/ProcessTimeline';
import CTASection from '../components/CTASection';
import Button from '../components/Button';

const whatWeDo = [
  {
    icon: Users,
    badge: 'Workforce Agility',
    title: 'Talent & Staffing',
    description: 'Find the right people for the right opportunity. Our talent network spans industries and skill sets to deliver the workforce your organization needs.',
    tags: ['Direct Hire', 'Contract Staffing', 'Executive Search'],
    link: '/services/staffing',
  },
  {
    icon: Server,
    badge: 'Digital Transformation',
    title: 'Technology Services',
    description: 'Transform your business with scalable technology solutions. From cloud and AI to cybersecurity and DevOps, we deliver end-to-end technology services.',
    tags: ['Cloud & DevOps', 'AI & Machine Learning', 'Cybersecurity'],
    link: '/services',
  },
  {
    icon: Layers,
    badge: 'Enterprise Operations',
    title: 'Managed Services',
    description: 'Reliable technology operations designed around your business. We manage your IT environment so you can focus on growth and innovation.',
    tags: ['24/7 IT Support', 'Infrastructure Ops', 'SLA Management'],
    link: '/services/managed-services',
  },
];

const whyChooseUs = [
  { icon: Compass, title: 'Deep Industry Expertise', description: 'Decades of experience across banking, healthcare, insurance, manufacturing, and more.' },
  { icon: Users, title: 'Highly Skilled Talent Network', description: 'Access to over a million pre-screened technology professionals ready to deliver.' },
  { icon: Handshake, title: 'Customized Workforce Solutions', description: 'Flexible staffing models tailored to your unique business requirements and culture.' },
  { icon: Lightbulb, title: 'Faster Delivery', description: 'Streamlined processes and deep bench strength that reduce time-to-fill and time-to-value.' },
  { icon: Shield, title: 'Dedicated Support', description: 'Round-the-clock support with dedicated account teams invested in your success.' },
  { icon: Server, title: 'Technology-Driven Approach', description: 'Leveraging AI, automation, and analytics to optimize talent matching and service delivery.' },
  { icon: Award, title: 'Quality & Reliability', description: 'Rigorous vetting, compliance, and quality management processes that ensure consistent results.' },
  { icon: Layers, title: 'Long-Term Partnerships', description: 'We build lasting relationships focused on mutual growth, trust, and shared outcomes.' },
];

const howWeWork = [
  { step: '01', title: 'Understand', description: 'Deep-dive into business objectives, technical requirements, and talent needs.', icon: Search, bgImage: '/process/01-understand.jpg', tag: 'Phase 1: Discovery & Tech Architecture Analysis' },
  { step: '02', title: 'Strategize', description: 'Architect tailored workforce solutions and agile execution roadmaps.', icon: Workflow, bgImage: '/process/02-strategize.jpg', tag: 'Phase 2: Solution Architecture & Delivery Blueprint' },
  { step: '03', title: 'Vetting & Match', description: 'Deploy rigorous multi-tier technical vetting and skill evaluations.', icon: UserCheck, bgImage: '/process/03-vetting.jpg', tag: 'Phase 3: AI-Assisted Elite Talent Matching' },
  { step: '04', title: 'Deploy', description: 'Seamlessly integrate dedicated talent and engineering squads into your workflow.', icon: Rocket, bgImage: '/process/04-deploy.jpg', tag: 'Phase 4: Squad Launch & Workflow Integration' },
  { step: '05', title: 'Deliver', description: 'Execute sprint deliverables with speed, enterprise security, and precision.', icon: Zap, bgImage: '/process/05-deliver.jpg', tag: 'Phase 5: High-Velocity Agile Sprint Execution' },
  { step: '06', title: 'Optimize', description: 'Continuously measure SLAs, refine outcomes, and scale capabilities.', icon: TrendingUp, bgImage: '/process/06-optimize.jpg', tag: 'Phase 6: SLA Telemetry & Enterprise Growth Scaling' },
];

export default function Home() {
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  return (
    <>
      {/* SEO */}
      <title>OctaStar Group — Technology, Talent & Transformation</title>
      <meta name="description" content="OctaStar Group connects organizations with exceptional technology talent and innovative solutions that help businesses transform, scale and compete." />

      {/* Hero */}
      <Hero
        showVisualization
        videoBg="/this_is_my_logo_i_wan_an_intro.mp4"
        title={<>Technology, Talent &amp; Transformation — <span className="gradient-text">Built for What&rsquo;s Next.</span></>}
        description="Connecting organizations with exceptional technology talent and innovative solutions that help businesses transform, scale and compete."
        primaryCta={{ label: 'Partner With Us', to: '/contact' }}
        secondaryCta={{ label: 'Explore Our Services', to: '/services' }}
        tertiaryLink={{ label: 'Explore Careers', to: '/careers' }}
      />

      {/* Trust Section */}
      <LogoMarquee />

      {/* What We Do - Solid Vibrant Purple/Violet Container */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-[#5B3FA6] text-white">
        {/* Subtle decorative purple glow orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 geometric-grid opacity-10 pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedSection className="max-w-4xl mb-8 md:mb-10 text-center mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-200 mb-2">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-2.5 text-white">
              Technology. Talent. Transformation.
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-purple-100/90 max-w-2xl mx-auto">
              Delivering end-to-end expertise across agile talent staffing, scalable cloud engineering, and resilient IT operations.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left: Mirrored Robot Hand & Glowing Star with floating/flowing motion */}
            <AnimatedSection delay={100} className="lg:col-span-5 h-full flex flex-col justify-center items-center">
              <div className="relative w-full h-full min-h-[340px] lg:min-h-[390px] flex flex-col items-center justify-center group select-none">
                {/* Radiant Ambient Floating Glow Behind Star Hand */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300/35 rounded-full blur-3xl pointer-events-none animate-star-aura" />
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-44 h-44 bg-indigo-300/40 rounded-full blur-2xl pointer-events-none animate-pulse" />

                {/* Direct Mirrored Image with floating flow animation */}
                <div className="relative z-10 w-full h-full flex items-center justify-center py-1">
                  <img
                    src="/ChatGPT Image Aug 26, 2026, 02_48_07 PM.png"
                    alt="OctaStar Technology & Talent Ecosystem"
                    className="w-full h-auto max-h-[340px] sm:max-h-[370px] lg:max-h-[390px] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)] transition-all duration-700 animate-hand-flow"
                  />
                </div>

                {/* Subtle descriptor below image */}
                <div className="text-center mt-1.5 relative z-10">
                  <p className="text-[11px] font-mono tracking-widest text-purple-200 uppercase font-semibold">
                    AI-Powered &bull; Talent &amp; Technology Engine
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: The 3 Service Cards on Purple */}
            <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-3.5 justify-between h-full">
              {whatWeDo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.title} delay={index * 120 + 150} className="h-full">
                    <Link
                      to={item.link}
                      className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-5 h-full bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 backdrop-blur-md overflow-hidden"
                    >
                      {/* Left white accent bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Icon */}
                      <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-lg bg-white/15 border border-white/25 group-hover:bg-white group-hover:text-[#5B3FA6] text-white group-hover:scale-105 transition-all duration-300">
                        <Icon size={20} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200">
                            {item.badge}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-100 transition-colors mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed mb-2.5">
                          {item.description}
                        </p>
                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-[11px] font-medium bg-white/15 text-white rounded-md border border-white/20 group-hover:bg-white/25 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Learn More Arrow */}
                      <div className="self-end sm:self-center flex-shrink-0 flex items-center gap-1 text-xs font-semibold text-white group-hover:text-purple-100 transition-colors">
                        <span className="hidden md:inline text-[11px] font-medium">Learn More</span>
                        <div className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#5B3FA6] transition-all duration-200">
                          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us - Crisp Clean White Container */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                label="Why OctaStar Group"
                title="More Than a Service Provider. Your Technology Partner."
                align="left"
                darkText={true}
                className="mb-6"
              />
              <AnimatedSection delay={200}>
                <p className="text-slate-600 leading-relaxed mb-8 text-base sm:text-lg">
                  We combine deep industry expertise with a vast network of technology talent and proven delivery frameworks to help organizations navigate complexity, accelerate growth, and stay ahead of change.
                </p>
                <div className="flex flex-wrap gap-3.5">
                  <Button to="/about" variant="dark">
                    Learn About Our Approach
                  </Button>
                  <Button to="/contact" variant="outline" className="border-slate-300 hover:bg-slate-100 !text-slate-800 hover:!text-slate-900 bg-transparent">
                    Talk to an Expert
                  </Button>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.title} delay={index * 60}>
                    <div className="group relative h-full flex gap-3.5 p-4 sm:p-4.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#5B3FA6]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5B3FA6]/10 hover:-translate-y-0.5">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100 border border-purple-200 text-[#5B3FA6] group-hover:bg-[#5B3FA6] group-hover:text-white transition-all duration-300">
                        <Icon size={19} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-[#5B3FA6] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Statistics */}
      <Stats />

      {/* Our Proven 6-Step Process - Full Container Dynamic Immersive Background */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-navy-950 border-t border-border/40">
        {/* Full Container Edge-to-Edge Dynamic Background Images */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {howWeWork.map((item, idx) => (
            <div
              key={item.bgImage || idx}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === activeProcessStep ? 'opacity-35 scale-100' : 'opacity-0 scale-105'
                }`}
            >
              <img
                src={item.bgImage}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}

          {/* Gradients to blend smoothly with adjacent sections & ensure perfect contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/80 to-navy-950" />
          <div className="absolute inset-0 bg-navy-950/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 geometric-grid opacity-15" />
        </div>

        <Container className="relative z-10">
          <SectionHeading
            label="Our Process"
            title="Our Proven 6-Step Process."
            subtitle="An agile, transparent delivery framework engineered to take your projects from initial vision to measurable enterprise impact."
            className="mb-8 md:mb-10"
          />
          <ProcessTimeline
            steps={howWeWork}
            activeStep={activeProcessStep}
            onStepChange={setActiveProcessStep}
          />
        </Container>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
