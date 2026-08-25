import { useState, useMemo } from 'react';
import { Search, TrendingUp, BookOpen, Award, Users, Lightbulb } from 'lucide-react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import JobCard from '../components/JobCard';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import { jobListings, jobTypes, jobLocations } from '../data/jobs';

const whyWorkWithUs = [
  { icon: TrendingUp, title: 'Career Growth', description: 'Clear career paths with mentorship, leadership development, and advancement opportunities.' },
  { icon: BookOpen, title: 'Learning Opportunities', description: 'Continuous learning through certifications, training programs, and access to latest technologies.' },
  { icon: Award, title: 'Professional Development', description: 'Regular skill assessments, personalized development plans, and industry conference participation.' },
  { icon: Lightbulb, title: 'Diverse Projects', description: 'Work across industries and technologies on challenging projects that expand your expertise.' },
  { icon: Users, title: 'Supportive Environment', description: 'Collaborative teams, inclusive culture, and dedicated support throughout your career journey.' },
];

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const filteredJobs = useMemo(() => {
    return jobListings.filter((job) => {
      const matchesSearch = !searchQuery ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === 'All' || job.type === selectedType;
      const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
      return matchesSearch && matchesType && matchesLocation;
    });
  }, [searchQuery, selectedType, selectedLocation]);

  return (
    <>
      <title>Careers — OctaStar Group</title>
      <meta name="description" content="Build your future with OctaStar Group. Explore technology career opportunities across industries and skill sets." />

      <Hero
        compact
        label="Careers"
        title={<>Build Your Future <span className="gradient-text">With Us.</span></>}
        description="Join a team of exceptional technology professionals working on meaningful projects across leading organizations. Your next career opportunity starts here."
        primaryCta={{ label: 'Find Opportunities', to: '#jobs' }}
        secondaryCta={{ label: 'Submit Resume', to: '/contact' }}
      />

      {/* Job Search */}
      <section id="jobs" className="py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Open Positions"
            title="Current Opportunities"
            description="Explore our open positions and find the role that matches your skills and career aspirations."
          />

          {/* Filters */}
          <AnimatedSection>
            <div className="bg-navy-800 border border-border rounded-xl p-6 mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="text"
                    placeholder="Search positions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-navy-700/50 border border-border rounded-lg pl-10 pr-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors"
                  />
                </div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-navy-700/50 border border-border rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent-primary transition-colors appearance-none"
                >
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>{type === 'All' ? 'All Job Types' : type}</option>
                  ))}
                </select>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-navy-700/50 border border-border rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent-primary transition-colors appearance-none"
                >
                  {jobLocations.map((loc) => (
                    <option key={loc} value={loc}>{loc === 'All' ? 'All Locations' : loc}</option>
                  ))}
                </select>
              </div>
            </div>
          </AnimatedSection>

          {/* Results */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))
            ) : (
              <div className="text-center py-12 bg-navy-800 border border-border rounded-xl">
                <p className="text-text-secondary mb-4">No positions match your current filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedType('All');
                    setSelectedLocation('All');
                  }}
                  className="text-accent-secondary hover:text-accent-light transition-colors text-sm font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-text-muted">
              Showing {filteredJobs.length} of {jobListings.length} positions
            </p>
          </div>
        </Container>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 md:py-28 bg-navy-800/30">
        <Container>
          <SectionHeading
            label="Benefits"
            title="Why Work With Us"
            description="We invest in our people because we know that when our team succeeds, our clients succeed."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyWorkWithUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 100}>
                  <div className="group p-6 bg-navy-800 border border-border rounded-xl hover:border-accent-primary/30 transition-all duration-300 text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-primary/10 border border-accent-primary/20 mb-4 mx-auto">
                      <Icon size={22} className="text-accent-secondary" />
                    </div>
                    <h4 className="text-base font-semibold text-text-primary mb-2 group-hover:text-accent-secondary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        title="Don't See the Right Role?"
        description="Submit your resume and we'll connect you with opportunities that match your skills and career goals."
        primaryCta={{ label: 'Submit Your Resume', to: '/contact' }}
        secondaryCta={{ label: 'View Services', to: '/services' }}
      />
    </>
  );
}
