import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { servicesList } from '../data/services';

export default function Services() {
  return (
    <>
      <title>Services — OctaStar Group</title>
      <meta name="description" content="Explore OctaStar Group's comprehensive technology services including staffing, managed services, cloud, AI, cybersecurity, DevOps, and more." />

      <Hero
        compact
        label="Our Services"
        title={<>Comprehensive Technology <span className="gradient-text">Services & Solutions</span></>}
        description="From talent acquisition to digital transformation, we deliver the full spectrum of technology services that modern organizations need to compete, scale, and innovate."
        primaryCta={{ label: 'Contact Us', to: '/contact' }}
        secondaryCta={{ label: 'View Solutions', to: '/solutions' }}
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Service Ecosystem"
            title="Technology Services Built for Impact"
            description="Every service is designed to deliver measurable business outcomes — not just technical deliverables."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Need a Custom Solution?"
        description="Every organization is different. Let's discuss how our services can be tailored to your specific technology and talent needs."
        primaryCta={{ label: 'Start a Conversation', to: '/contact' }}
        secondaryCta={{ label: 'View Industries', to: '/industries' }}
      />
    </>
  );
}
