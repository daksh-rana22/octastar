import ServiceDetailPage from './ServiceDetailPage';
import { cybersecurityServices } from '../../data/services';

export default function Cybersecurity() {
  return (
    <ServiceDetailPage
      title="Enterprise Cybersecurity & Zero Trust"
      label="Cybersecurity"
      heroTitle={<>Protect What Matters. <span className="gradient-text">Stay Ahead of Emerging Threats.</span></>}
      heroDescription="Safeguard your enterprise digital assets with zero-trust architectures, continuous SOC monitoring, threat intelligence, and automated compliance auditing across all environments."
      services={cybersecurityServices}
      process={[
        { step: '01', title: 'Vulnerability Assessment', description: 'Comprehensive penetration testing, attack surface mapping, and compliance gap audits.' },
        { step: '02', title: 'Zero Trust Architecture', description: 'Implement least-privilege access, identity controls, micro-segmentation, and endpoint security.' },
        { step: '03', title: '24/7 Managed SOC', description: 'Continuous threat hunting, real-time SIEM/SOAR telemetry, and automated incident response.' },
        { step: '04', title: 'Compliance & Governance', description: 'Continuous readiness validation for SOC 2 Type II, HIPAA, PCI-DSS, ISO 27001, and GDPR.' },
        { step: '05', title: 'Resilience & Remediation', description: 'Disaster recovery simulation, tabletop drills, and automated threat patch remediation.' },
      ]}
      processTitle="Our Layered Enterprise Defense Framework"
      processDescription="A proactive, multi-tier cybersecurity model engineered to anticipate vulnerabilities and neutralize threats in real time."
      ctaTitle="Strengthen Your Enterprise Security Posture"
      ctaDescription="Schedule a confidential security readiness consultation with our Chief Information Security consultants."
    />
  );
}
