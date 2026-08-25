import { useParams } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import { industriesList } from '../data/industries';

export default function IndustryDetail() {
  const { industryId } = useParams();
  const industry = industriesList.find((ind) => ind.id === industryId);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Industry Not Found</h1>
          <p className="text-text-secondary">The industry page you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;

  return (
    <>
      <title>{industry.title} — OctaStar Group</title>
      <meta name="description" content={industry.heroDescription} />

      <Hero
        compact
        label={industry.title}
        title={<>{industry.hero.replace('.', '')}.</>}
        description={industry.heroDescription}
        primaryCta={{ label: 'Discuss Your Needs', to: '/contact' }}
        secondaryCta={{ label: 'All Industries', to: '/industries' }}
      />

      {/* Challenges */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeading
                label="Industry Challenges"
                title="Challenges We Solve"
                align="left"
                className="mb-8"
              />
              <div className="space-y-4">
                {industry.challenges.map((challenge, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="flex gap-3 p-4 rounded-lg bg-navy-800/50 border border-border/50">
                      <CheckCircle size={18} className="text-accent-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-text-secondary leading-relaxed">{challenge}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                label="Our Approach"
                title="How We Help"
                align="left"
                className="mb-8"
              />
              <AnimatedSection delay={200}>
                <p className="text-text-secondary leading-relaxed mb-6">
                  We combine deep {industry.title.toLowerCase()} domain expertise with proven technology solutions and an extensive talent network to address your most critical challenges.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Our teams understand the regulatory requirements, competitive dynamics, and technology trends specific to your industry, ensuring every solution is contextually relevant and compliance-ready.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28 bg-navy-800/30">
        <Container>
          <SectionHeading
            label="Capabilities"
            title={`${industry.title} Capabilities`}
            description="Specialized technology and talent solutions designed for your industry's unique requirements."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.capabilities.map((capability, index) => (
              <AnimatedSection key={capability} delay={index * 100}>
                <div className="group p-6 bg-navy-800 border border-border rounded-xl hover:border-accent-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20 mb-4">
                    <Icon size={18} className="text-accent-secondary" />
                  </div>
                  <h4 className="text-base font-semibold text-text-primary group-hover:text-accent-secondary transition-colors">
                    {capability}
                  </h4>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Solutions */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Solutions"
            title="Industry Solutions"
            description="Purpose-built solutions that address the specific needs and challenges of your industry."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.solutions.map((solution, index) => (
              <AnimatedSection key={solution} delay={index * 100}>
                <div className="flex items-start gap-3 p-5 bg-navy-800 border border-border rounded-xl hover:border-accent-primary/30 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <ArrowRight size={14} className="text-accent-secondary" />
                  </div>
                  <span className="text-sm font-medium text-text-primary mt-1">{solution}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-navy-800/30">
        <Container>
          <SectionHeading
            label="Benefits"
            title="Business Outcomes"
            description="The measurable results our clients achieve through our industry-focused approach."
          />
          <div className="max-w-5xl mx-auto space-y-4">
            {industry.benefits.map((benefit, index) => (
              <AnimatedSection key={benefit} delay={index * 100}>
                <div className="flex items-center gap-4 p-5 bg-navy-800 border border-border rounded-xl">
                  <CheckCircle size={20} className="text-accent-secondary flex-shrink-0" />
                  <span className="text-text-primary">{benefit}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title={`Ready to Transform ${industry.title}?`}
        description={`Let's discuss how our ${industry.title.toLowerCase()} expertise can help your organization achieve its technology and business goals.`}
      />
    </>
  );
}
