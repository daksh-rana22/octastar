import ServiceDetailPage from './ServiceDetailPage';
import { managedServicesList } from '../../data/services';

export default function ManagedServices() {
  return (
    <ServiceDetailPage
      title="Managed Technology Services"
      label="Managed Services"
      heroTitle={<>Reliable Technology Operations <span className="gradient-text">Designed Around Your Business.</span></>}
      heroDescription="Focus on growth while we manage your technology. Our managed services keep your IT environment running at peak performance with proactive monitoring, expert support, and continuous optimization."
      services={managedServicesList}
      process={[
        { step: '01', title: 'Assess', description: 'Evaluate your current IT environment and identify opportunities.' },
        { step: '02', title: 'Design', description: 'Create a tailored service delivery model for your needs.' },
        { step: '03', title: 'Transition', description: 'Smoothly onboard services with zero business disruption.' },
        { step: '04', title: 'Operate', description: 'Deliver proactive, 24/7 managed services.' },
        { step: '05', title: 'Optimize', description: 'Continuously improve performance and reduce costs.' },
      ]}
      processTitle="Service Delivery Framework"
      processDescription="A structured approach to onboarding and delivering managed services that ensures reliability from day one."
      ctaTitle="Simplify Your IT Operations"
      ctaDescription="Let us manage the complexity of your technology environment so your team can focus on strategic initiatives."
    />
  );
}
