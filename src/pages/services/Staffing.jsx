import ServiceDetailPage from './ServiceDetailPage';
import Container from '../../components/Container';
import SectionHeading from '../../components/SectionHeading';
import AnimatedSection from '../../components/AnimatedSection';
import Button from '../../components/Button';
import { staffingTypes, staffingProcess } from '../../data/services';
import { Building2, UserCheck, ShieldCheck, Zap, Users, Sparkles } from 'lucide-react';

export default function Staffing() {
  return (
    <ServiceDetailPage
      title="Talent & Staffing"
      label="Talent & Staffing"
      heroTitle={<>Find the Right People. <span className="gradient-text">Build the Right Squad.</span></>}
      heroDescription="Our agile talent network connects high-growth enterprises with elite technology professionals — from specialized individual contributors to turnkey engineering squads — delivered with speed, precision, and cultural alignment."
      services={staffingTypes}
      process={staffingProcess}
      processTitle="Our 5-Tier Talent Vetting Process"
      processDescription="A rigorous, technical screening lifecycle that delivers pre-screened talent within 48 hours without compromising quality."
      additionalContent={
        <section className="py-16 md:py-24 relative overflow-hidden bg-navy-950 border-t border-border/40">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <AnimatedSection>
                <div className="p-8 sm:p-10 bg-navy-800/90 border border-border/80 hover:border-accent-primary/60 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent-primary/10 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-accent-primary/15 border border-accent-primary/30 flex items-center justify-center mb-6 text-accent-secondary">
                      <Building2 size={26} />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-light mb-2 block">
                      For Enterprise Hiring Leaders
                    </span>
                    <h3 className="text-2xl font-bold text-text-primary mb-4">
                      Scale Engineering Capacity On Demand
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                      Access a bench of over 1 million pre-screened technology professionals across cloud, AI, DevOps, data, and cybersecurity. We ensure precise technical evaluation and culture alignment.
                    </p>
                    <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-text-secondary font-medium">
                      <li className="flex items-center gap-2 text-text-primary"><Zap size={14} className="text-accent-secondary" /> 48-Hour Candidate Shortlist Guarantee</li>
                      <li className="flex items-center gap-2 text-text-primary"><ShieldCheck size={14} className="text-accent-secondary" /> Risk-Free 2-Week Trial Period</li>
                      <li className="flex items-center gap-2 text-text-primary"><Users size={14} className="text-accent-secondary" /> Direct Hire, Contract &amp; Executive Search</li>
                    </ul>
                  </div>
                  <Button to="/contact" size="lg" className="w-full sm:w-auto self-start">
                    Request Talent Briefing
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <div className="p-8 sm:p-10 bg-navy-800/90 border border-border/80 hover:border-accent-primary/60 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent-primary/10 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-accent-primary/15 border border-accent-primary/30 flex items-center justify-center mb-6 text-accent-secondary">
                      <UserCheck size={26} />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-light mb-2 block">
                      For Technology Professionals
                    </span>
                    <h3 className="text-2xl font-bold text-text-primary mb-4">
                      Accelerate Your Engineering Career
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                      Join high-performing squads working on mission-critical platforms for leading global enterprises. We connect top technology talent with roles that match your ambitions, compensation goals, and lifestyle.
                    </p>
                    <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-text-secondary font-medium">
                      <li className="flex items-center gap-2 text-text-primary"><Sparkles size={14} className="text-accent-secondary" /> Global Fortune 500 Projects</li>
                      <li className="flex items-center gap-2 text-text-primary"><ShieldCheck size={14} className="text-accent-secondary" /> Continuous Upskilling &amp; Certifications</li>
                      <li className="flex items-center gap-2 text-text-primary"><Users size={14} className="text-accent-secondary" /> Remote &amp; Hybrid High-Impact Roles</li>
                    </ul>
                  </div>
                  <Button to="/careers" variant="secondary" size="lg" className="w-full sm:w-auto self-start">
                    Explore Open Opportunities
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>
      }
      ctaTitle="Need the Right Talent Fast?"
      ctaDescription="Tell us about your skill requirements and we'll deliver a curated shortlist of senior technology professionals within 48 hours."
    />
  );
}
