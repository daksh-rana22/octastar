import { Building2, User, Mail, Phone, MapPin } from 'lucide-react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import CTASection from '../components/CTASection';

export default function Contact() {
  return (
    <>
      <title>Contact — OctaStar Group</title>
      <meta name="description" content="Get in touch with OctaStar Group. Whether you need technology talent, consulting services, or your next career opportunity." />

      <Hero
        compact
        label="Contact Us"
        title={<>Let&rsquo;s Build <span className="gradient-text">What&rsquo;s Next.</span></>}
        description="Whether you need exceptional technology talent, innovative solutions, or your next career opportunity — we're here to help."
      />

      {/* Two Pathways */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <AnimatedSection>
              <div className="group p-8 bg-navy-800 border border-border rounded-xl hover:border-accent-primary/40 transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mx-auto mb-5">
                  <Building2 size={26} className="text-accent-secondary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">For Businesses</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Need talent or technology solutions? Tell us about your business challenges and we'll connect you with the right team.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="group p-8 bg-navy-800 border border-border rounded-xl hover:border-accent-primary/40 transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mx-auto mb-5">
                  <User size={26} className="text-accent-secondary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">For Candidates</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Looking for your next opportunity? Submit your inquiry and our talent team will reach out to discuss career options.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-20 bg-navy-800/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                  Send Us an Inquiry
                </h2>
                <p className="text-text-secondary mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <ContactForm />
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2">
              <AnimatedSection delay={200}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-4">Get in Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail size={18} className="text-accent-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-text-primary">Email</p>
                          <a href="mailto:info@octastargroup.com" className="text-sm text-text-secondary hover:text-accent-secondary transition-colors">
                            info@octastargroup.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone size={18} className="text-accent-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-text-primary">Phone</p>
                          <a href="tel:+1-800-000-0000" className="text-sm text-text-secondary hover:text-accent-secondary transition-colors">
                            +1 (800) 000-0000
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-accent-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-text-primary">Headquarters</p>
                          <p className="text-sm text-text-secondary">
                            United States
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-navy-800 border border-border rounded-xl">
                    <h4 className="text-base font-semibold text-text-primary mb-2">Response Time</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Our team typically responds within 24 hours during business days. For urgent staffing needs, please mention it in your message and we'll prioritize your inquiry.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
