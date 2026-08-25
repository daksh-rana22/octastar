import Hero from '../../components/Hero';
import Container from '../../components/Container';
import SectionHeading from '../../components/SectionHeading';
import ProcessTimeline from '../../components/ProcessTimeline';
import AnimatedSection from '../../components/AnimatedSection';
import CTASection from '../../components/CTASection';
import { rpaProcess } from '../../data/solutions';
import { Bot, Zap, BarChart3, CheckCircle, TrendingUp, Clock } from 'lucide-react';

const benefits = [
  { icon: Clock, title: 'Faster Processing', description: 'Reduce manual process time by up to 80% with intelligent automation.' },
  { icon: CheckCircle, title: 'Higher Accuracy', description: 'Eliminate human errors in data entry, calculations, and rule-based decisions.' },
  { icon: TrendingUp, title: 'Scalable Operations', description: 'Scale automation across departments without proportional headcount increases.' },
  { icon: Zap, title: 'Immediate ROI', description: 'See measurable returns within weeks of deploying automation bots.' },
  { icon: BarChart3, title: 'Better Analytics', description: 'Generate detailed process analytics and performance metrics automatically.' },
  { icon: Bot, title: 'Employee Satisfaction', description: 'Free your team from repetitive tasks to focus on higher-value work.' },
];

export default function RPA() {
  return (
    <>
      <title>RPA & Automation — OctaStar Group</title>
      <meta name="description" content="Transform repetitive tasks into intelligent automation with OctaStar Group's RPA and automation solutions." />

      <Hero
        compact
        label="RPA & Automation"
        title={<>From Repetitive Tasks to <span className="gradient-text">Intelligent Automation.</span></>}
        description="Eliminate manual, rule-based work with robotic process automation that increases speed, accuracy, and employee satisfaction across your organization."
        primaryCta={{ label: 'Get Started', to: '/contact' }}
        secondaryCta={{ label: 'All Solutions', to: '/solutions' }}
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Automation Journey"
            title="The Path to Intelligent Automation"
            description="A structured approach that evolves from basic task automation to AI-powered intelligent processing."
          />
          <ProcessTimeline steps={rpaProcess} />
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-navy-800/30">
        <Container>
          <SectionHeading
            label="Benefits"
            title="The Impact of Automation"
            description="Organizations implementing RPA and intelligent automation see transformative results across operations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedSection key={benefit.title} delay={index * 100}>
                  <div className="group p-6 bg-navy-800 border border-border rounded-xl hover:border-accent-primary/30 transition-all duration-300">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-primary/10 border border-accent-primary/20 mb-4">
                      <Icon size={22} className="text-accent-secondary" />
                    </div>
                    <h4 className="text-base font-semibold text-text-primary mb-2 group-hover:text-accent-secondary transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{benefit.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to Automate?"
        description="Let's identify the highest-impact automation opportunities in your organization and build a roadmap to intelligent automation."
      />
    </>
  );
}
