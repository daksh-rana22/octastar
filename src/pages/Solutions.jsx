import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import { solutionsList } from '../data/solutions';

export default function Solutions() {
  return (
    <>
      <title>Solutions — OctaStar Group</title>
      <meta name="description" content="Outcome-focused technology solutions from OctaStar Group including AI, RPA, Cloud, Data Analytics, and more." />

      <Hero
        compact
        label="Our Solutions"
        title={<>Outcome-Focused <span className="gradient-text">Technology Solutions</span></>}
        description="Our solutions are designed to deliver measurable business outcomes — not just technology implementations. We focus on the results that matter most to your organization."
        primaryCta={{ label: 'Discuss Solutions', to: '/contact' }}
        secondaryCta={{ label: 'View Services', to: '/services' }}
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Solutions"
            title="Solutions That Drive Business Value"
            description="Each solution combines deep technology expertise with a focus on tangible business outcomes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionsList.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <AnimatedSection key={solution.id} delay={index * 100}>
                  <Link
                    to={solution.link}
                    className="group relative flex flex-col h-full p-6 md:p-8 bg-navy-800 border border-border rounded-xl hover:border-accent-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-primary/10 overflow-hidden"
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent-primary/10 border border-accent-primary/20 mb-5 group-hover:bg-accent-primary/15 transition-all">
                      <Icon size={26} className="text-accent-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-accent-secondary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                      {solution.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-secondary">
                      Learn More
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        title="Need a Custom Solution?"
        description="Every business challenge is unique. Let's discuss how we can build the right solution for your organization."
      />
    </>
  );
}
