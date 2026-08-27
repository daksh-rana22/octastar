import ServiceDetailPage from './ServiceDetailPage';
import { aiMlServices } from '../../data/services';

export default function AIML() {
  return (
    <ServiceDetailPage
      title="Artificial Intelligence & Machine Learning"
      label="AI & Machine Learning"
      heroTitle={<>Intelligent Solutions <span className="gradient-text">That Learn, Adapt &amp; Scale.</span></>}
      heroDescription="Harness modern generative AI, custom machine learning models, and cognitive automation to transform raw enterprise data into predictive intelligence and autonomous operations."
      services={aiMlServices}
      process={[
        { step: '01', title: 'Opportunity Discovery', description: 'Identify and prioritize high-ROI AI use cases aligned with your core enterprise objectives.' },
        { step: '02', title: 'Data & Model Architecture', description: 'Architect robust data pipelines, feature stores, and model architectures with privacy-first governance.' },
        { step: '03', title: 'Model Training & Tuning', description: 'Train, fine-tune, and validate custom LLMs and machine learning algorithms against enterprise benchmarks.' },
        { step: '04', title: 'Production MLOps Deployment', description: 'Deploy scalable inference endpoints with automated CI/CD, latency optimization, and continuous monitoring.' },
        { step: '05', title: 'Governance & Drift Telemetry', description: 'Continuously measure model accuracy, prevent hallucination drift, and ensure ethical compliance.' },
      ]}
      processTitle="Our 5-Stage AI Implementation Framework"
      processDescription="A responsible, enterprise-grade approach to operationalizing artificial intelligence that delivers measurable business value."
      ctaTitle="Ready to Accelerate Your AI Roadmap?"
      ctaDescription="Schedule an exploratory workshop with our AI architects to evaluate use cases, model architectures, and data readiness."
    />
  );
}
