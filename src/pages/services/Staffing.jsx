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
        <section className="py-12 md:py-16 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200">
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <AnimatedSection>
                <div className="p-6 sm:p-7 bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#5B3FA6]/50 rounded-2xl transition-all duration-300 hover:shadow-xl flex flex-col justify-between h-full">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center mb-4 text-[#5B3FA6]">
                      <Building2 size={22} />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B3FA6] mb-1.5 block">
                      For Enterprise Hiring Leaders
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      Scale Engineering Capacity On Demand
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      Access a bench of over 1 million pre-screened technology professionals across cloud, AI, DevOps, data, and cybersecurity. We ensure precise technical evaluation and culture alignment.
                    </p>
                    <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                      <li className="flex items-center gap-2 text-slate-800"><Zap size={14} className="text-[#5B3FA6]" /> 48-Hour Candidate Shortlist Guarantee</li>
                      <li className="flex items-center gap-2 text-slate-800"><ShieldCheck size={14} className="text-[#5B3FA6]" /> Risk-Free 2-Week Trial Period</li>
                      <li className="flex items-center gap-2 text-slate-800"><Users size={14} className="text-[#5B3FA6]" /> Direct Hire, Contract &amp; Executive Search</li>
                    </ul>
                  </div>
                  <Button to="/contact" variant="primary" size="sm" className="w-full sm:w-auto self-start">
                    Request Talent Briefing
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <div className="p-6 sm:p-7 bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#5B3FA6]/50 rounded-2xl transition-all duration-300 hover:shadow-xl flex flex-col justify-between h-full">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center mb-4 text-[#5B3FA6]">
                      <UserCheck size={22} />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B3FA6] mb-1.5 block">
                      For Technology Professionals
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      Accelerate Your Engineering Career
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      Join high-performing squads working on mission-critical platforms for leading global enterprises. We connect top technology talent with roles that match your ambitions, compensation goals, and lifestyle.
                    </p>
                    <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                      <li className="flex items-center gap-2 text-slate-800"><Sparkles size={14} className="text-[#5B3FA6]" /> Global Fortune 500 Projects</li>
                      <li className="flex items-center gap-2 text-slate-800"><ShieldCheck size={14} className="text-[#5B3FA6]" /> Continuous Upskilling &amp; Certifications</li>
                      <li className="flex items-center gap-2 text-slate-800"><Users size={14} className="text-[#5B3FA6]" /> Remote &amp; Hybrid High-Impact Roles</li>
                    </ul>
                  </div>
                  <Button to="/careers" variant="outline" size="sm" className="w-full sm:w-auto self-start border-slate-300 !text-slate-800 hover:!text-slate-900 hover:bg-slate-100">
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
