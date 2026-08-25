import ServiceDetailPage from './ServiceDetailPage';
import Container from '../../components/Container';
import SectionHeading from '../../components/SectionHeading';
import AnimatedSection from '../../components/AnimatedSection';
import Button from '../../components/Button';
import { staffingTypes, staffingProcess } from '../../data/services';

export default function Staffing() {
  return (
    <ServiceDetailPage
      title="Talent & Staffing"
      label="Talent & Staffing"
      heroTitle={<>Find the Right People. <span className="gradient-text">Build the Right Team.</span></>}
      heroDescription="Our talent acquisition expertise connects your organization with exceptional technology professionals — from individual contributors to entire teams — through flexible engagement models designed for your needs."
      services={staffingTypes}
      process={staffingProcess}
      processTitle="Our Staffing Process"
      processDescription="A rigorous, streamlined process that delivers qualified talent quickly without compromising quality."
      additionalContent={
        <section className="py-20 md:py-28">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <AnimatedSection>
                <div className="p-8 md:p-10 bg-navy-800 border border-border rounded-xl">
                  <h3 className="text-2xl font-bold text-text-primary mb-4">For Businesses</h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    Access pre-screened, qualified technology professionals across every skill set and industry. Our deep understanding of your business ensures the right cultural and technical fit every time.
                  </p>
                  <Button to="/contact">Find Talent</Button>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className="p-8 md:p-10 bg-navy-800 border border-border rounded-xl">
                  <h3 className="text-2xl font-bold text-text-primary mb-4">For Candidates</h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    Discover your next career opportunity with leading organizations across industries. We connect exceptional talent with roles that match their skills, ambitions, and career goals.
                  </p>
                  <Button to="/careers" variant="outline">Find Your Next Opportunity</Button>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>
      }
      ctaTitle="Need the Right Talent?"
      ctaDescription="Tell us about your staffing needs and we'll connect you with qualified technology professionals within 48 hours."
    />
  );
}
