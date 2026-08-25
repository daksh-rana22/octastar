import { Brain, Bot, Cloud, BarChart3, Layers, Shield, Database } from 'lucide-react';

export const solutionsList = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Deploy intelligent solutions that automate decisions, predict outcomes, and transform how your organization creates value.',
    link: '/services/ai-ml',
  },
  {
    id: 'rpa',
    title: 'RPA & Automation',
    icon: Bot,
    slug: '/solutions/rpa',
    description: 'Eliminate repetitive manual work with robotic process automation that increases speed, accuracy, and employee satisfaction.',
    link: '/solutions/rpa',
  },
  {
    id: 'cloud',
    title: 'Cloud Transformation',
    icon: Cloud,
    description: 'Modernize your infrastructure with cloud-native architectures that deliver scalability, resilience, and cost optimization.',
    link: '/services/cloud',
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    icon: BarChart3,
    description: 'Turn data into your most valuable business asset with engineering, visualization, and predictive analytics solutions.',
    link: '/services/data-analytics',
  },
  {
    id: 'digital',
    title: 'Digital Transformation',
    icon: Layers,
    description: 'Reimagine your business with end-to-end digital transformation that modernizes processes, technology, and customer experiences.',
    link: '/services/digital-transformation',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Protect your organization with comprehensive security solutions covering strategy, monitoring, compliance, and threat management.',
    link: '/services/cybersecurity',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Solutions',
    icon: Database,
    description: 'Implement and optimize enterprise systems including ERP, CRM, and business process management platforms.',
    link: '/services#erp',
  },
];

export const rpaProcess = [
  { step: '01', title: 'Manual Process', description: 'Identify repetitive, rule-based tasks consuming valuable human resources.' },
  { step: '02', title: 'Automation', description: 'Design and deploy RPA bots that execute tasks with speed and precision.' },
  { step: '03', title: 'Intelligent Processing', description: 'Add AI capabilities for complex decision-making and exception handling.' },
  { step: '04', title: 'Analytics', description: 'Monitor performance, measure ROI, and identify new automation opportunities.' },
  { step: '05', title: 'Business Outcome', description: 'Achieve measurable improvements in speed, accuracy, cost, and employee satisfaction.' },
];
