import { useState, useMemo } from 'react';
import { Clock, ArrowRight, BookOpen, Sparkles, Send, CheckCircle2, FileText, TrendingUp, Cpu, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import { resourcesList, resourceCategories } from '../data/resources';

const featuredInsight = {
  category: 'Enterprise AI & Architecture',
  readTime: '7 min read',
  date: 'August 2026',
  title: 'Architecting for the Autonomous Enterprise: From Model Prototyping to Production AI Squads',
  description: 'How Fortune 500 technology leaders are transitioning from fragmented AI pilots into governed, production-ready engineering architectures that deliver compounding ROI.',
  author: 'OctaStar AI Practice Leadership',
};

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filteredResources = useMemo(() => {
    if (activeCategory === 'All') return resourcesList;
    return resourcesList.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <>
      <title>Resources &amp; Engineering Insights — OctaStar Group</title>
      <meta name="description" content="Perspectives on technology, AI orchestration, cloud engineering, agile staffing, and digital transformation from OctaStar Group leaders." />

      {/* Hero */}
      <Hero
        compact
        label="Insights &amp; Perspectives"
        title={<>Executive Insights &amp; <span className="gradient-text">Thought Leadership</span></>}
        description="Deep dives, architecture blueprints, and strategic perspectives on technology, elite workforce models, and enterprise digital transformation."
        primaryCta={{ label: 'Explore Articles', to: '#articles' }}
        secondaryCta={{ label: 'Consult Our Experts', to: '/contact' }}
      />

      {/* Featured Insight Spotlight - Vibrant Purple Container */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-[#5B3FA6] text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 geometric-grid opacity-10 pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="p-8 sm:p-10 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 rounded-3xl backdrop-blur-md transition-all duration-300 shadow-2xl relative overflow-hidden">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#5B3FA6]">
                  Featured Whitepaper
                </span>
                <span className="flex items-center gap-1.5 text-xs text-purple-200">
                  <Clock size={13} /> {featuredInsight.readTime}
                </span>
                <span className="text-xs text-purple-200/80">
                  &bull; {featuredInsight.date}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {featuredInsight.title}
              </h2>

              <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed mb-6">
                {featuredInsight.description}
              </p>

              <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-purple-200 font-mono font-medium">
                  By {featuredInsight.author}
                </span>
                <Button to="/contact" variant="white" size="md">
                  Read Full Whitepaper →
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Articles Grid & Category Filters - Crisp Clean White Section */}
      <section id="articles" className="py-20 md:py-28 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200">
        <Container className="relative z-10">
          <SectionHeading
            label="Library of Perspectives"
            title="Latest Research &amp; Articles"
            description="Explore our curated analysis across cloud architectures, AI frameworks, talent agility, and DevOps."
            darkText={true}
            className="mb-10"
          />

          {/* Filter Pills */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {resourceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${activeCategory === category
                      ? 'bg-[#5B3FA6] text-white shadow-md shadow-purple-900/20 scale-105'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredResources.map((resource, index) => (
              <AnimatedSection key={resource.id} delay={index * 80}>
                <article className="group h-full flex flex-col justify-between p-7 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#5B3FA6]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5B3FA6]/10 hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-100 text-[#5B3FA6] border border-purple-200">
                        {resource.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                        <Clock size={12} /> {resource.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#5B3FA6] transition-colors leading-snug">
                      {resource.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {resource.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between mt-auto">
                    <span className="text-xs text-slate-400 font-medium">{resource.date}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#5B3FA6] group-hover:underline">
                      Read Article <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Subscription - Crisp stats-gradient-bg */}
      <section className="py-12 md:py-16 relative overflow-hidden stats-gradient-bg border-y border-slate-350">
        {/* Subtle Dark Edge Vignette Fades */}
        <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-slate-900/[0.08] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-slate-900/[0.10] to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45)_0%,_transparent_65%,_rgba(15,23,42,0.06)_100%)] pointer-events-none" />

        <Container size="narrow" className="relative z-10">
          <AnimatedSection className="text-center">
            <div className="p-8 sm:p-12 rounded-3xl bg-white/90 border border-slate-300/80 relative overflow-hidden shadow-xl backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center mx-auto mb-4 text-[#5B3FA6]">
                <BookOpen size={26} />
              </div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#5B3FA6] uppercase block mb-2">
                Executive Tech Briefing
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                Stay Ahead of Digital Disruption
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto mb-8">
                Subscribe to our monthly executive briefing on emerging enterprise technologies, cloud benchmarks, and AI workforce strategies.
              </p>

              {subscribed ? (
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold">
                  <CheckCircle2 size={18} className="text-emerald-600" /> Thank you for subscribing to the OctaStar briefing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your corporate email"
                    className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#5B3FA6] focus:ring-2 focus:ring-[#5B3FA6]/20 transition-all"
                  />
                  <Button type="submit" className="whitespace-nowrap bg-[#5B3FA6] hover:bg-[#4b2f96] text-white">
                    Subscribe <Send size={14} className="ml-1" />
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Signature CTA */}
      <CTASection
        title="Need Technical Advisory for Your Enterprise?"
        description="Connect directly with our practice directors to discuss your specific technological architecture and talent requirements."
        primaryCta={{ label: 'Schedule an Advisory Call', to: '/contact' }}
        secondaryCta={{ label: 'Explore Our Services', to: '/services' }}
      />
    </>
  );
}
