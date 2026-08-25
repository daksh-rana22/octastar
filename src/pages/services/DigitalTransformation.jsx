import ServiceDetailPage from './ServiceDetailPage';
import { digitalTransformationAreas, transformationJourney } from '../../data/services';

export default function DigitalTransformation() {
  return (
    <ServiceDetailPage
      title="Digital Transformation"
      label="Digital Transformation"
      heroTitle={<>Transform Your Business. <span className="gradient-text">Shape Your Future.</span></>}
      heroDescription="Modernize processes, technology, data, and customer experiences with a comprehensive digital transformation strategy that creates lasting competitive advantage."
      services={digitalTransformationAreas}
      process={transformationJourney}
      processTitle="Transformation Journey"
      processDescription="A proven framework for navigating digital transformation — from assessment through implementation to continuous optimization."
      ctaTitle="Ready to Transform?"
      ctaDescription="Start your digital transformation journey with a partner who understands both the technology and the business side of change."
    />
  );
}
