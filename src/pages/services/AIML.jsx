import ServiceDetailPage from './ServiceDetailPage';
import { aiMlServices } from '../../data/services';

export default function AIML() {
  return (
    <ServiceDetailPage
      title="AI & Machine Learning"
      label="AI & Machine Learning"
      heroTitle={<>Intelligent Solutions <span className="gradient-text">That Learn and Adapt.</span></>}
      heroDescription="Harness the power of artificial intelligence and machine learning to automate complex processes, predict outcomes, and unlock new business possibilities."
      services={aiMlServices}
      process={[
        { step: '01', title: 'Identify', description: 'Discover high-impact AI use cases aligned with business goals.' },
        { step: '02', title: 'Design', description: 'Architect AI solutions with the right models and data strategy.' },
        { step: '03', title: 'Build', description: 'Develop, train, and validate machine learning models.' },
        { step: '04', title: 'Deploy', description: 'Production deployment with monitoring and governance.' },
        { step: '05', title: 'Evolve', description: 'Continuously retrain and improve model performance.' },
      ]}
      processTitle="AI Implementation Framework"
      processDescription="A responsible, business-aligned approach to deploying AI that delivers measurable value."
      ctaTitle="Ready for AI?"
      ctaDescription="Explore how AI and machine learning can transform your business processes and decision-making."
    />
  );
}
