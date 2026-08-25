import ServiceDetailPage from './ServiceDetailPage';
import { cloudServices } from '../../data/services';

export default function CloudService() {
  return (
    <ServiceDetailPage
      title="Cloud Computing"
      label="Cloud Computing"
      heroTitle={<>Scalable Cloud Solutions <span className="gradient-text">Built for Performance.</span></>}
      heroDescription="Migrate, modernize, and optimize your cloud infrastructure with architecture designed for performance, security, and scalability across AWS, Azure, and GCP."
      services={cloudServices}
      process={[
        { step: '01', title: 'Assess', description: 'Evaluate your current infrastructure and cloud readiness.' },
        { step: '02', title: 'Architect', description: 'Design a cloud architecture optimized for your workloads.' },
        { step: '03', title: 'Migrate', description: 'Execute migration with minimal disruption to business operations.' },
        { step: '04', title: 'Optimize', description: 'Continuously tune performance, costs, and security posture.' },
      ]}
      processTitle="Cloud Journey"
      processDescription="A structured approach to cloud adoption that balances speed with stability and cost optimization."
      ctaTitle="Ready for the Cloud?"
      ctaDescription="Whether you're migrating your first workload or optimizing a multi-cloud environment, we can help."
    />
  );
}
