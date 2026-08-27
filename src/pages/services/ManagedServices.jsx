import ServiceDetailPage from './ServiceDetailPage';
import { managedServicesList } from '../../data/services';

export default function ManagedServices() {
  return (
    <ServiceDetailPage
      title="Managed IT & Cloud Operations"
      label="Managed Services"
      heroTitle={<>Reliable Technology Operations <span className="gradient-text">Engineered Around Your Business.</span></>}
      heroDescription="Unburden your core engineering teams while we manage, monitor, and optimize your hybrid cloud environments, database clusters, and mission-critical enterprise systems with 99.99% uptime SLAs."
      services={managedServicesList}
      process={[
        { step: '01', title: 'Operational Audit', description: 'Comprehensive audit of infrastructure topology, monitoring gaps, incident logs, and SLA requirements.' },
        { step: '02', title: 'Target Operating Model', description: 'Design tailored runbooks, escalation matrix, alerting thresholds, and dedicated tier-1 to tier-3 staffing.' },
        { step: '03', title: 'Seamless Transition', description: 'Shadow and reverse-shadow onboarding with parallel runs to guarantee zero disruption to live systems.' },
        { step: '04', title: '24/7/365 Operations', description: 'Proactive telemetry monitoring, automated incident triage, root-cause analysis, and patch management.' },
        { step: '05', title: 'Continuous FinOps Tuning', description: 'Monthly architecture reviews, cost optimization right-sizing, and preventive capacity scaling.' },
      ]}
      processTitle="Our 5-Stage Managed Operations Framework"
      processDescription="A disciplined approach to enterprise IT management that guarantees system resilience and predictable operational overhead."
      ctaTitle="Simplify Your Enterprise IT Operations"
      ctaDescription="Let our certified engineers manage your technology complexity so your internal teams can focus on strategic product innovation."
    />
  );
}
