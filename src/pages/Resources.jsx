import { useState, useMemo } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import { resourcesList, resourceCategories } from '../data/resources';

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredResources = useMemo(() => {
    if (activeCategory === 'All') return resourcesList;
    return resourcesList.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <title>Resources — OctaStar Group</title>
      <meta name="description" content="Insights, articles, and thought leadership on technology, staffing, AI, cloud, and digital transformation from OctaStar Group." />

      <Hero
        compact
        label="Resources"
        title={<>Insights & <span className="gradient-text">Thought Leadership</span></>}
        description="Perspectives on technology, talent, and transformation from our team of industry experts and technology leaders."
        primaryCta={{ label: 'Contact Us', to: '/contact' }}
      />

      <section className="py-20 md:py-28">
        <Container>
          {/* Category Filter */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {resourceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'gradient-primary text-white'
                      : 'bg-navy-800 text-text-secondary border border-border hover:border-accent-primary/40 hover:text-text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <AnimatedSection key={resource.id} delay={index * 100}>
                <article className="group h-full flex flex-col bg-navy-800 border border-border rounded-xl overflow-hidden hover:border-accent-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-primary/10">
                  {/* Category bar */}
                  <div className="h-1 w-full gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex px-2.5 py-1 rounded-md bg-accent-primary/10 text-xs font-medium text-accent-secondary">
                        {resource.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-text-muted">
                        <Clock size={12} />
                        {resource.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-accent-secondary transition-colors leading-snug">
                      {resource.title}
                    </h3>

                    <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-muted">{resource.date}</span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-secondary group-hover:text-accent-light transition-colors">
                        Read More
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Stay Informed"
        description="Subscribe to our insights and receive the latest perspectives on technology, talent, and transformation."
        primaryCta={{ label: 'Contact Us', to: '/contact' }}
        secondaryCta={{ label: 'View Services', to: '/services' }}
      />
    </>
  );
}
