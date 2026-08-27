import { useState } from 'react';
import { Building2, User, Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2, Globe, Sparkles, MessageSquare } from 'lucide-react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import CTASection from '../components/CTASection';

const locations = [
  { city: 'New York / Global HQ', region: 'North America Hub', contact: '+1 (800) 000-0000', coverage: '24/7 Operations' },
  { city: 'London / EMEA Center', region: 'European Delivery Hub', contact: '+44 20 0000 0000', coverage: 'Full Timezone Sync' },
  { city: 'Singapore / APAC Hub', region: 'Asia-Pacific Operations', contact: '+65 6000 0000', coverage: 'High-Velocity Pods' },
];

export default function Contact() {
  const [activePathway, setActivePathway] = useState('enterprise'); // 'enterprise' | 'candidate'

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

      {/* Dual Pathway Selector - Vibrant Purple Container */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-[#5B3FA6] text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-950/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 geometric-grid opacity-10 pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedSection className="max-w-2xl text-center mx-auto mb-10">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-200 mb-2">
              Select Your Engagement Path
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              How Can We Partner With You?
            </h2>
            <p className="text-xs sm:text-sm text-purple-100/90">
              Select your inquiry profile so we can connect you with the right practice director.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Pathway 1: Enterprises */}
            <AnimatedSection>
              <div
                onClick={() => setActivePathway('enterprise')}
                className={`cursor-pointer p-7 sm:p-8 rounded-2xl border transition-all duration-300 backdrop-blur-md relative overflow-hidden ${activePathway === 'enterprise'
                    ? 'bg-white/20 border-white shadow-2xl scale-[1.02]'
                    : 'bg-white/10 hover:bg-white/15 border-white/20 hover:border-white/40'
                  }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-13 h-13 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
                    <Building2 size={24} />
                  </div>
                  {activePathway === 'enterprise' && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold bg-white text-[#5B3FA6] px-2.5 py-1 rounded-full shadow">
                      <CheckCircle2 size={12} /> Active Selection
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">For Enterprises &amp; Businesses</h3>
                <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed mb-4">
                  Need on-demand technical talent, autonomous engineering squads, or enterprise cloud transformation?
                </p>
                <ul className="space-y-1.5 text-xs text-purple-100 font-medium">
                  <li className="flex items-center gap-1.5">&bull; 48-Hour Talent Onboarding Bench</li>
                  <li className="flex items-center gap-1.5">&bull; Custom SLA &amp; Fixed-Price Squads</li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Pathway 2: Candidates */}
            <AnimatedSection delay={150}>
              <div
                onClick={() => setActivePathway('candidate')}
                className={`cursor-pointer p-7 sm:p-8 rounded-2xl border transition-all duration-300 backdrop-blur-md relative overflow-hidden ${activePathway === 'candidate'
                    ? 'bg-white/20 border-white shadow-2xl scale-[1.02]'
                    : 'bg-white/10 hover:bg-white/15 border-white/20 hover:border-white/40'
                  }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-13 h-13 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
                    <User size={24} />
                  </div>
                  {activePathway === 'candidate' && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold bg-white text-[#5B3FA6] px-2.5 py-1 rounded-full shadow">
                      <CheckCircle2 size={12} /> Active Selection
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">For Engineers &amp; Candidates</h3>
                <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed mb-4">
                  Looking for your next career challenge, high-impact remote squad, or global enterprise project?
                </p>
                <ul className="space-y-1.5 text-xs text-purple-100 font-medium">
                  <li className="flex items-center gap-1.5">&bull; Access to Fortune 500 tech roles</li>
                  <li className="flex items-center gap-1.5">&bull; Competitive compensation &amp; benefits</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

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
                    {activePathway === 'enterprise' ? 'Start Your Enterprise Consultation' : 'Submit Your Candidate Profile'}
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

      {/* Global Delivery Hubs - Deep Navy Container */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0 geometric-dots opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <SectionHeading
            label="Global Reach"
            title="Worldwide Delivery &amp; Support Centers"
            description="Our distributed squads provide round-the-clock continuity across major tech hubs."
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc, idx) => (
              <AnimatedSection key={loc.city} delay={idx * 80} className="h-full">
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-navy-800/90 border border-border/80 hover:border-accent-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/15 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent-primary/15 border border-accent-primary/30 text-accent-secondary flex items-center justify-center mb-4">
                      <Globe size={20} />
                    </div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-light block mb-1">
                      {loc.region}
                    </span>
                    <h4 className="text-lg font-bold text-text-primary mb-2">{loc.city}</h4>
                    <p className="text-xs text-text-secondary mb-4">{loc.contact}</p>
                  </div>
                  <div className="pt-3 border-t border-border/40 text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> {loc.coverage}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Signature CTA */}
      <CTASection
        title="Ready to Build With OctaStar?"
        description="Whether you need urgent talent reinforcement or full-lifecycle digital transformation, we're ready to engineer your success."
        primaryCta={{ label: 'Send an Inquiry', to: '#top' }}
        secondaryCta={{ label: 'Explore Our Services', to: '/services' }}
      />
    </>
  );
}
