import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import IndustryCard from '../components/IndustryCard';
import CTASection from '../components/CTASection';
import { industriesList } from '../data/industries';

export default function Industries() {
  return (
    <>
      <title>Industries — OctaStar Group</title>
      <meta name="description" content="OctaStar Group serves banking, healthcare, insurance, manufacturing, retail, media, and energy industries with specialized technology solutions." />

      <Hero
        compact
        label="Industries We Serve"
        title={<>Deep Expertise Across <span className="gradient-text">Key Industries</span></>}
        description="Our industry specialists understand the unique challenges, regulatory requirements, and competitive dynamics of each sector we serve."
        primaryCta={{ label: 'Contact Us', to: '/contact' }}
        secondaryCta={{ label: 'Our Services', to: '/services' }}
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Industry Expertise"
            title="Specialized Solutions for Every Sector"
            description="We bring deep domain knowledge and proven experience to solve industry-specific technology and talent challenges."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesList.map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Don't See Your Industry?"
        description="Our technology and talent solutions are adaptable to any industry. Let's discuss how we can help your sector."
      />
    </>
  );
}
