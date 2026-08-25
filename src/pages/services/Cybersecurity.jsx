import ServiceDetailPage from './ServiceDetailPage';
import { cybersecurityServices } from '../../data/services';

export default function Cybersecurity() {
  return (
    <ServiceDetailPage
      title="Cybersecurity"
      label="Cybersecurity"
      heroTitle={<>Protect What Matters. <span className="gradient-text">Stay Ahead of Threats.</span></>}
      heroDescription="Comprehensive cybersecurity solutions that protect your organization from evolving threats with strategy, monitoring, compliance, and proactive threat management."
      services={cybersecurityServices}
      process={[
        { step: '01', title: 'Assess', description: 'Evaluate your current security posture and identify vulnerabilities.' },
        { step: '02', title: 'Strategize', description: 'Develop a comprehensive security strategy and governance framework.' },
        { step: '03', title: 'Implement', description: 'Deploy security tools, controls, and monitoring capabilities.' },
        { step: '04', title: 'Monitor', description: 'Continuous 24/7 security monitoring and incident response.' },
        { step: '05', title: 'Evolve', description: 'Adapt security strategies to address emerging threats and compliance changes.' },
      ]}
      processTitle="Security Framework"
      processDescription="A proactive, layered approach to cybersecurity that protects your organization today and prepares it for tomorrow."
      ctaTitle="Strengthen Your Security Posture"
      ctaDescription="Don't wait for a breach. Let's build a comprehensive cybersecurity strategy for your organization."
    />
  );
}
