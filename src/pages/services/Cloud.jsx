import ServiceDetailPage from './ServiceDetailPage';
import { cloudServices } from '../../data/services';

export default function CloudService() {
  return (
    <ServiceDetailPage
      title="Cloud Computing & Modernization"
      label="Cloud Computing"
      heroTitle={<>Scalable Cloud Infrastructure <span className="gradient-text">Built for Peak Performance.</span></>}
      heroDescription="Migrate legacy workloads, modernize application architectures, and optimize multi-cloud operations across AWS, Microsoft Azure, and Google Cloud with guaranteed enterprise SLAs."
      services={cloudServices}
      process={[
        { step: '01', title: 'Workload Assessment', description: 'Evaluate existing legacy topology, cloud readiness, security posture, and TCO cost models.' },
        { step: '02', title: 'Architecture Blueprint', description: 'Design resilient, multi-region, cloud-native landing zones with automated infrastructure-as-code.' },
        { step: '03', title: 'Zero-Downtime Migration', description: 'Execute phased workload migrations with continuous data synchronization and zero business disruption.' },
        { step: '04', title: 'Cost & FinOps Optimization', description: 'Continuously tune resource right-sizing, auto-scaling policies, and reserved instance allocations.' },
        { step: '05', title: 'Continuous Governance', description: 'Implement 24/7 security posture monitoring, automated patch pipelines, and compliance auditing.' },
      ]}
      processTitle="Our 5-Phase Cloud Transformation Roadmap"
      processDescription="A proven framework designed to balance deployment speed with enterprise resilience, security, and FinOps efficiency."
      ctaTitle="Ready to Accelerate Your Cloud Strategy?"
      ctaDescription="Whether you are embarking on your initial migration or modernizing multi-cloud Kubernetes architectures, our cloud practice is ready."
    />
  );
}
