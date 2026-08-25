import { Users, Server, Layers, Compass, Handshake, Lightbulb, Shield, Award, ArrowRight } from 'lucide-react';
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
    title: 'Talent & Staffing',
    description: 'Find the right people for the right opportunity. Our talent network spans industries and skill sets to deliver the workforce your organization needs.',
    link: '/services/staffing',
  },
  {
    icon: Server,
    title: 'Technology Services',
    description: 'Transform your business with scalable technology solutions. From cloud and AI to cybersecurity and DevOps, we deliver end-to-end technology services.',
    link: '/services',
  },
  {
    icon: Layers,
    title: 'Managed Services',
    description: 'Reliable technology operations designed around your business. We manage your IT environment so you can focus on growth and innovation.',
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
  { step: '01', title: 'Understand', description: 'Learn the business, goals and challenges.' },
  { step: '02', title: 'Strategize', description: 'Create a customized strategy.' },
  { step: '03', title: 'Deliver', description: 'Execute with speed and precision.' },
  { step: '04', title: 'Optimize', description: 'Continuously improve outcomes.' },
];

export default function Home() {
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

      {/* What We Do */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            label="What We Do"
            title="Technology. Talent. Transformation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whatWeDo.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 150}>
                  <Link
                    to={item.link}
                    className="group relative flex flex-col h-full p-8 md:p-10 bg-navy-800 border border-border rounded-xl hover:border-accent-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Top glow line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent-primary/10 border border-accent-primary/20 mb-6 group-hover:bg-accent-primary/15 group-hover:scale-105 transition-all duration-300">
                      <Icon size={28} className="text-accent-secondary" />
                    </div>

                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                      {item.description}
                    </p>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-secondary group-hover:text-accent-light transition-colors">
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </span>

                    {/* Bottom glow line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-navy-800/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionHeading
                label="Why OctaStar Group"
                title="More Than a Service Provider. Your Technology Partner."
                align="left"
                className="mb-8"
              />
              <AnimatedSection delay={200}>
                <p className="text-text-secondary leading-relaxed mb-6">
                  We combine deep industry expertise with a vast network of technology talent and proven delivery frameworks to help organizations navigate complexity, accelerate growth, and stay ahead of change.
                </p>
                <Button to="/about" variant="outline">
                  Learn About Our Approach
                </Button>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.title} delay={index * 80}>
                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-navy-700/30 transition-all duration-200">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20">
                        <Icon size={18} className="text-accent-secondary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-1 group-hover:text-accent-secondary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-text-secondary leading-relaxed">
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

      {/* How We Work */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Our Process"
            title="From Vision to Impact."
            description="A proven engagement framework designed to deliver measurable results with speed, precision, and continuous improvement."
          />
          <ProcessTimeline steps={howWeWork} />
        </Container>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
