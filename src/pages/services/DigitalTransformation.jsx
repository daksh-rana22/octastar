import ServiceDetailPage from './ServiceDetailPage';
import { digitalTransformationAreas, transformationJourney } from '../../data/services';

export default function DigitalTransformation() {
  return (
    <ServiceDetailPage
      title="Enterprise Digital Transformation"
      label="Digital Transformation"
      heroTitle={<>Reinvent Processes. Modernize Tech. <span className="gradient-text">Lead Your Market.</span></>}
      heroDescription="Reimagine legacy business models with modern cloud architectures, intelligent automated workflows, and human-centered digital experiences engineered to establish lasting competitive advantage."
      services={digitalTransformationAreas}
      process={transformationJourney}
      processTitle="Our 6-Step Transformation Framework"
      processDescription="A proven roadmap for navigating complex enterprise change — from architectural assessment to scaled agile execution."
      ctaTitle="Ready to Lead Your Digital Evolution?"
      ctaDescription="Partner with OctaStar's transformation leaders to define and execute your strategic technology vision."
    />
  );
}
