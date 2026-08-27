import { useState, useMemo } from 'react';
import { Search, TrendingUp, BookOpen, Award, Users, Lightbulb, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, MapPin, Briefcase, Rocket } from 'lucide-react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import JobCard from '../components/JobCard';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import { jobListings, jobTypes, jobLocations } from '../data/jobs';

const whyWorkWithUs = [
  { icon: TrendingUp, title: 'Accelerated Career Trajectory', description: 'Fast-track engineering pathways with dedicated mentorship, tech lead apprenticeships, and global opportunities.' },
  { icon: BookOpen, title: 'Continuous Upskilling & Certifications', description: 'Generous learning stipends, paid cloud certifications (AWS, Azure, GCP, Kubernetes), and hands-on AI lab access.' },
  { icon: Award, title: 'High-Impact Enterprise Projects', description: 'Work on mission-critical platforms for leading global enterprises that affect millions of end users worldwide.' },
  { icon: Lightbulb, title: 'Cutting-Edge Modern Tech Stack', description: 'Build with Next.js, Cloud-Native Kubernetes, PyTorch, OpenAI APIs, Go, Rust, and modern CI/CD automation.' },
  { icon: Users, title: 'Inclusive, Collaborative Culture', description: 'A transparent, engineer-first culture that celebrates diversity, psychological safety, and radical ownership.' },
  { icon: Rocket, title: 'Flexible Remote-First Work', description: 'Autonomous working models with competitive global compensation packages, health wellness, and home office stipends.' },
];

const hiringSteps = [
  { step: '01', title: 'Application Review', desc: 'Our talent squad reviews your background and technical profile within 48 hours.' },
  { step: '02', title: 'Technical Exploration', desc: 'An engaging conversation with an engineering practice lead about your architecture experience and interests.' },
  { step: '03', title: 'Hands-On Evaluation', desc: 'A collaborative, real-world coding exercise or system architecture walkthrough — zero whiteboard trivia.' },
  { step: '04', title: 'Fast Offer & Onboarding', desc: 'Competitive offer presentation and white-glove onboarding into your dedicated squad.' },
];

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const filteredJobs = useMemo(() => {
    return jobListings.filter((job) => {
      const matchesSearch = !searchQuery ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === 'All' || job.type === selectedType;
      const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
      return matchesSearch && matchesType && matchesLocation;
    });
  }, [searchQuery, selectedType, selectedLocation]);

  return (
    <>
      <title>Careers &amp; Open Engineering Roles — OctaStar Group</title>
      <meta name="description" content="Build what's next with OctaStar Group. Explore open technology engineering, cloud architecture, AI, and consulting roles." />

      {/* Hero */}
      <Hero
        compact
        label="Join Our Team"
        title={<>Build Your Future <span className="gradient-text">With OctaStar.</span></>}
        description="Join an elite community of technology professionals, engineers, and digital architects solving mission-critical challenges for world-class enterprises."
        primaryCta={{ label: 'Explore Open Positions', to: '#jobs' }}
        secondaryCta={{ label: 'General Application', to: '/contact' }}
      />

      {/* Why Work With Us - Vibrant Purple Container */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-[#5B3FA6] text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-950/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 geometric-grid opacity-10 pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedSection className="max-w-3xl mb-12 text-center mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-200 mb-2">
              The OctaStar Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 text-white">
              An Engineer-First Ecosystem Built for Growth
            </h2>
            <p className="text-sm md:text-base text-purple-100/90 leading-relaxed">
              We invest heavily in our people because we know that top-tier talent drives extraordinary client outcomes.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {whyWorkWithUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 70} className="h-full">
                  <div className="h-full p-6 sm:p-7 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center mb-4 text-white">
                        <Icon size={22} />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Open Positions Job Portal - Crisp Clean White Section */}
      <section id="jobs" className="py-20 md:py-28 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200">
        <Container className="relative z-10">
          <SectionHeading
            label="Open Opportunities"
            title="Explore Current Openings"
            description="Find your next high-impact role across our specialized engineering and technology practice areas."
            darkText={true}
            className="mb-10 md:mb-12"
          />

          {/* Interactive Search & Filter Bar */}
          <AnimatedSection>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 mb-10 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative">
                  <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by title, skill, or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#5B3FA6] focus:ring-2 focus:ring-[#5B3FA6]/20 transition-all"
                  />
                </div>
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    aria-label="Filter by Job Type"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#5B3FA6] focus:ring-2 focus:ring-[#5B3FA6]/20 transition-all appearance-none"
                  >
                    {jobTypes.map((type) => (
                      <option key={type} value={type}>{type === 'All' ? 'All Job Types' : type}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    aria-label="Filter by Location"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#5B3FA6] focus:ring-2 focus:ring-[#5B3FA6]/20 transition-all appearance-none"
                  >
                    {jobLocations.map((loc) => (
                      <option key={loc} value={loc}>{loc === 'All' ? 'All Locations' : loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {(searchQuery || selectedType !== 'All' || selectedLocation !== 'All') && (
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-200/80 text-xs">
                  <span className="text-slate-500">
                    Filtered results: <strong className="text-slate-800">{filteredJobs.length}</strong> matching positions
                  </span>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedType('All');
                      setSelectedLocation('All');
                    }}
                    className="text-[#5B3FA6] font-bold hover:underline"
                  >
                    Reset all filters
                  </button>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Job Listings Grid */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} variant="light" />
              ))
            ) : (
              <div className="text-center py-16 px-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <p className="text-base text-slate-700 font-semibold mb-2">No positions match your current criteria.</p>
                <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto">We are constantly creating new squads. Submit a general resume inquiry to be considered for upcoming roles.</p>
                <Button to="/contact" className="bg-[#5B3FA6] hover:bg-[#4b2f96] text-white">
                  Submit General Application
                </Button>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Hiring Process - Deep Navy Container */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0 geometric-dots opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <SectionHeading
            label="Transparent Process"
            title="Our 4-Step Hiring Roadmap"
            description="We respect your time. Our hiring framework is streamlined, transparent, and structured for swift decisions."
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((step, idx) => (
              <AnimatedSection key={step.step} delay={idx * 80} className="h-full">
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-navy-800/90 border border-border/80 hover:border-accent-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/15 flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-extrabold font-mono text-accent-light block mb-3">
                      {step.step}
                    </span>
                    <h4 className="text-lg font-bold text-text-primary mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Signature CTA */}
      <CTASection
        title="Ready to Build Your Legacy With OctaStar?"
        description="Don't see the exact role you're looking for? Submit your details and our talent team will reach out when a matching opportunity opens."
        primaryCta={{ label: 'Submit Your Resume', to: '/contact' }}
        secondaryCta={{ label: 'Learn More About Us', to: '/about' }}
      />
    </>
  );
}
