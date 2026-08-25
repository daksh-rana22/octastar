import { Target, Eye, Heart, Clock, CheckCircle, Lightbulb, Users, Globe } from 'lucide-react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';

const values = [
  { icon: Target, title: 'Precision', description: 'We deliver with accuracy and attention to detail in every engagement.' },
  { icon: Eye, title: 'Transparency', description: 'Open communication and honest partnerships are the foundation of how we work.' },
  { icon: Heart, title: 'Commitment', description: 'We are deeply invested in the success of every client and every candidate.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We continuously evolve our approach using the latest technology and methodologies.' },
  { icon: Users, title: 'People First', description: 'Technology enables, but people transform. We put humans at the center of every solution.' },
  { icon: Globe, title: 'Integrity', description: 'We operate with the highest ethical standards in every interaction and decision.' },
];

const timeline = [
  { year: '2015', title: 'Founded', description: 'OctaStar Group established with a vision to connect technology talent with opportunity.' },
  { year: '2017', title: 'Growth', description: 'Expanded service offerings to include managed technology services and consulting.' },
  { year: '2019', title: 'Innovation', description: 'Launched digital transformation and AI/ML practice areas to serve evolving client needs.' },
  { year: '2021', title: 'Scale', description: 'Reached national coverage with offices across major technology markets.' },
  { year: '2023', title: 'Leadership', description: 'Recognized as a leading technology staffing and consulting partner across multiple industries.' },
  { year: '2025', title: 'Future', description: 'Continuing to invest in AI, automation, and innovation to shape the future of work.' },
];

export default function About() {
  return (
    <>
      <title>About — OctaStar Group</title>
      <meta name="description" content="Learn about OctaStar Group's approach to combining technology, talent, and consulting expertise to deliver transformative outcomes." />

      <Hero
        compact
        label="About OctaStar Group"
        title={<>Technology Expertise. <span className="gradient-text">Human Connection.</span></>}
        description="We believe the best technology outcomes happen when deep technical expertise meets genuine partnership. Our approach combines industry knowledge, a vast talent network, and a commitment to understanding your business."
        primaryCta={{ label: 'Partner With Us', to: '/contact' }}
        secondaryCta={{ label: 'Our Services', to: '/services' }}
      />

      {/* Mission & Vision */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <AnimatedSection>
              <div className="p-8 md:p-10 bg-navy-800 border border-border rounded-xl h-full">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-secondary mb-4">
                  Our Mission
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Empowering Organizations Through Technology and Talent
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  To connect organizations with exceptional technology professionals and innovative solutions that help businesses transform, scale, and compete. We exist to bridge the gap between technology potential and business outcomes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="p-8 md:p-10 bg-navy-800 border border-border rounded-xl h-full">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-secondary mb-4">
                  Our Vision
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  The Trusted Partner for Technology Transformation
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  To be the most trusted technology staffing and consulting partner for organizations navigating digital transformation. We aspire to set the standard for quality, reliability, and human-centered service delivery.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-navy-800/30">
        <Container>
          <SectionHeading
            label="Our Values"
            title="What Drives Us"
            description="The principles that guide every decision, every engagement, and every relationship."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} delay={index * 100}>
                  <div className="group p-6 md:p-8 bg-navy-800 border border-border rounded-xl hover:border-accent-primary/30 transition-all duration-300">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-primary/10 border border-accent-primary/20 mb-5">
                      <Icon size={22} className="text-accent-secondary" />
                    </div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-secondary transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <Container size="narrow">
          <SectionHeading
            label="Our Journey"
            title="Building the Future, Step by Step"
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary/20 via-accent-primary/40 to-accent-primary/20" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection
                  key={item.year}
                  delay={index * 100}
                  animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                >
                  <div className={`relative flex items-start gap-6 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Node */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-navy-700 border-2 border-accent-primary flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-accent-secondary" />
                    </div>

                    {/* Content */}
                    <div className={`ml-14 md:ml-0 md:w-[45%] ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}>
                      <span className="text-sm font-bold text-accent-secondary">{item.year}</span>
                      <h4 className="text-lg font-semibold text-text-primary mt-1 mb-2">{item.title}</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
