import { Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <title>Contact Us — OctaStar Group</title>
      <meta name="description" content="Connect with OctaStar Group. Reach out for specialized technology talent, digital engineering squads, or enterprise consulting." />

      {/* Hero */}
      <Hero
        compact
        label="Let's Connect"
        title={<>Let&rsquo;s Build <span className="gradient-text">What&rsquo;s Next.</span></>}
        description="Whether you require dedicated technology talent, custom engineering squads, or a transformation strategy — our practice leads are here to help."
      />

      {/* Inquiry Form & Direct Hub - Crisp Clean White Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="mb-6">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
                    Direct Inquiry
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    Start Your Enterprise Consultation
                  </h2>
                  <p className="text-sm text-slate-600">
                    Fill out the details below. Our practice director will respond within 24 hours.
                  </p>
                </div>
                <div className="p-6 sm:p-8 bg-slate-50 border border-slate-200/90 rounded-2xl shadow-sm">
                  <ContactForm variant="light" />
                </div>
              </AnimatedSection>
            </div>

            {/* Direct Contact Details & SLA Guarantee */}
            <div className="lg:col-span-5 space-y-6">
              <AnimatedSection delay={150}>
                <div className="p-7 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-6">
                  <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                    Direct Communication
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 text-[#5B3FA6] flex items-center justify-center flex-shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Corporate Inquiries</p>
                        <a href="mailto:info@octastargroup.com" className="text-sm font-semibold text-slate-900 hover:text-[#5B3FA6] transition-colors">
                          info@octastargroup.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 text-[#5B3FA6] flex items-center justify-center flex-shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Toll-Free Phone</p>
                        <a href="tel:+1-800-000-0000" className="text-sm font-semibold text-slate-900 hover:text-[#5B3FA6] transition-colors">
                          +1 (800) 000-0000
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 text-[#5B3FA6] flex items-center justify-center flex-shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Global Headquarters</p>
                        <p className="text-sm font-semibold text-slate-900">
                          United States
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={250}>
                <div className="p-7 sm:p-8 rounded-2xl bg-[#0B132B] text-white border border-purple-500/30 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center gap-3 mb-3">
                    <Clock size={20} className="text-accent-secondary" />
                    <h4 className="text-base font-bold text-white">24-Hour Response Guarantee</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    All business inquiries receive dedicated review by a senior partner within 24 business hours. For urgent project staffing requests, mention it in your message for expedited same-day routing.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-accent-light">
                    <ShieldCheck size={14} /> NDA &amp; IP Protection Standard
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
