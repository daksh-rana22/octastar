import {
  Users, Server, Layers, Cloud, BarChart3, Brain,
  Shield, GitBranch, Settings, ClipboardList, Database,
  UserCheck, UserPlus, Briefcase, FileText, HeadphonesIcon, Building2,
  MonitorCheck, HardDrive, AppWindow, CloudCog, Lock, Wrench,
  Lightbulb, Rocket, TrendingUp, Zap, Target, RefreshCw,
  LayoutGrid, PieChart, LineChart, Eye, Activity, FileBarChart,
  Cpu, Bot, Sparkles, Workflow, GitMerge, Gauge,
  ShieldCheck, AlertTriangle, KeyRound, Search, CheckCircle, FileWarning,
  Code2, TestTube, Play, MonitorSmartphone, Repeat, BarChart
} from 'lucide-react';

export const servicesList = [
  {
    id: 'staffing',
    number: '01',
    title: 'Talent & Staffing',
    slug: '/services/staffing',
    icon: Users,
    description: 'Find the right people for the right opportunity. Our talent network spans industries and skill sets to deliver the workforce your organization needs.',
    shortDescription: 'Find the right people for the right opportunity.',
  },
  {
    id: 'managed-services',
    number: '02',
    title: 'Managed Technology Services',
    slug: '/services/managed-services',
    icon: Server,
    description: 'Reliable technology operations designed around your business. From infrastructure to applications, we keep your technology running.',
    shortDescription: 'Reliable technology operations designed around your business.',
  },
  {
    id: 'digital-transformation',
    number: '03',
    title: 'Digital Transformation',
    slug: '/services/digital-transformation',
    icon: Layers,
    description: 'Transform your business with modern technology, optimized processes, and data-driven strategies that create lasting competitive advantage.',
    shortDescription: 'Transform your business with scalable technology solutions.',
  },
  {
    id: 'cloud',
    number: '04',
    title: 'Cloud Computing',
    slug: '/services/cloud',
    icon: Cloud,
    description: 'Migrate, modernize, and optimize your cloud infrastructure with architecture designed for performance, security, and scalability.',
    shortDescription: 'Scalable cloud infrastructure and migration.',
  },
  {
    id: 'data-analytics',
    number: '05',
    title: 'Data & Analytics',
    slug: '/services/data-analytics',
    icon: BarChart3,
    description: 'Turn your data into actionable business intelligence. From engineering to visualization, we build analytics solutions that drive decisions.',
    shortDescription: 'Insights that drive better decisions.',
  },
  {
    id: 'ai-ml',
    number: '06',
    title: 'AI & Machine Learning',
    slug: '/services/ai-ml',
    icon: Brain,
    description: 'Harness artificial intelligence and machine learning to automate processes, predict outcomes, and unlock new business possibilities.',
    shortDescription: 'Intelligent automation and predictive solutions.',
  },
  {
    id: 'cybersecurity',
    number: '07',
    title: 'Cybersecurity',
    slug: '/services/cybersecurity',
    icon: Shield,
    description: 'Protect your organization with comprehensive security strategies covering risk management, identity, compliance, and threat monitoring.',
    shortDescription: 'Protect what matters most.',
  },
  {
    id: 'devops',
    number: '08',
    title: 'DevOps',
    slug: '/services/devops',
    icon: GitBranch,
    description: 'Accelerate software delivery with DevOps practices that improve collaboration, automate pipelines, and ensure continuous improvement.',
    shortDescription: 'Accelerate delivery and deployment.',
  },
  {
    id: 'enterprise-support',
    number: '09',
    title: 'Enterprise Support',
    slug: '/services#enterprise-support',
    icon: HeadphonesIcon,
    description: 'Round-the-clock technical support that keeps your enterprise systems running with minimal downtime and maximum performance.',
    shortDescription: 'Always-on enterprise technical support.',
  },
  {
    id: 'program-management',
    number: '10',
    title: 'Program & Project Management',
    slug: '/services#program-management',
    icon: ClipboardList,
    description: 'Experienced program and project managers who deliver complex technology initiatives on time, on budget, and aligned with business goals.',
    shortDescription: 'Deliver complex initiatives with precision.',
  },
  {
    id: 'erp',
    number: '11',
    title: 'ERP / Enterprise Solutions',
    slug: '/services#erp',
    icon: Database,
    description: 'Implement and optimize enterprise resource planning systems that unify your business processes and improve operational efficiency.',
    shortDescription: 'Unified enterprise resource planning.',
  },
];

export const staffingTypes = [
  { title: 'Temporary Staffing', icon: Users, description: 'Flexible workforce solutions for short-term projects and seasonal needs with pre-screened, qualified professionals.' },
  { title: 'Temporary-to-Hire', icon: UserCheck, description: 'Evaluate talent on the job before making a permanent commitment. Reduce hiring risk while finding the right fit.' },
  { title: 'Direct Hire', icon: UserPlus, description: 'Full-cycle recruitment for permanent positions. We find, screen, and present top candidates for your most critical roles.' },
  { title: 'Contract Staffing', icon: Briefcase, description: 'Engage specialized professionals on a contract basis for defined projects, timelines, and deliverables.' },
  { title: 'Workforce Solutions', icon: Settings, description: 'Comprehensive workforce management including vendor management, compliance, and workforce planning strategies.' },
  { title: 'HR & Payroll Services', icon: FileText, description: 'End-to-end HR and payroll administration, ensuring compliance, timely processing, and employee satisfaction.' },
];

export const staffingProcess = [
  { step: '01', title: 'Understand', description: 'Learn your business, culture, and talent requirements.' },
  { step: '02', title: 'Source', description: 'Tap into our extensive talent network and sourcing channels.' },
  { step: '03', title: 'Screen', description: 'Rigorous vetting including skills assessment and background checks.' },
  { step: '04', title: 'Match', description: 'Present qualified candidates aligned with your specific needs.' },
  { step: '05', title: 'Onboard', description: 'Seamless onboarding to get talent productive from day one.' },
  { step: '06', title: 'Support', description: 'Ongoing support and performance management throughout the engagement.' },
];

export const managedServicesList = [
  { title: 'IT Operations', icon: MonitorCheck, description: 'Proactive management of your IT environment to ensure uptime, performance, and reliability across all systems.' },
  { title: 'Infrastructure Management', icon: HardDrive, description: 'End-to-end infrastructure management including servers, networks, storage, and data center operations.' },
  { title: 'Enterprise Support', icon: HeadphonesIcon, description: 'Dedicated support teams providing 24/7 technical assistance, incident resolution, and problem management.' },
  { title: 'Application Support', icon: AppWindow, description: 'Comprehensive application lifecycle support including monitoring, maintenance, and enhancement of business applications.' },
  { title: 'Cloud Operations', icon: CloudCog, description: 'Managed cloud services covering provisioning, monitoring, optimization, and governance across multi-cloud environments.' },
  { title: 'Managed Security', icon: Lock, description: 'Continuous security monitoring, threat detection, vulnerability management, and compliance enforcement.' },
  { title: 'Service Management', icon: Wrench, description: 'ITIL-aligned service management processes including change, release, and configuration management.' },
];

export const digitalTransformationAreas = [
  { title: 'Process Modernization', icon: RefreshCw, description: 'Redesign and automate business processes to eliminate inefficiencies and accelerate operations.' },
  { title: 'Technology Modernization', icon: Rocket, description: 'Upgrade legacy systems with modern, scalable, cloud-native technology architectures.' },
  { title: 'Data-Driven Strategy', icon: TrendingUp, description: 'Leverage data and analytics to inform business decisions and uncover new opportunities.' },
  { title: 'Customer Experience', icon: Zap, description: 'Transform customer touchpoints with personalized, digital-first experiences that drive loyalty.' },
  { title: 'Operational Excellence', icon: Target, description: 'Optimize operations with intelligent automation, lean processes, and continuous improvement.' },
];

export const transformationJourney = [
  { step: '01', title: 'Current State', description: 'Assess existing technology, processes, and organizational readiness.' },
  { step: '02', title: 'Strategy', description: 'Define a clear transformation roadmap aligned with business objectives.' },
  { step: '03', title: 'Modernization', description: 'Implement modern technology solutions and redesigned processes.' },
  { step: '04', title: 'Implementation', description: 'Execute with agility, change management, and continuous delivery.' },
  { step: '05', title: 'Optimization', description: 'Measure outcomes, iterate, and continuously improve for sustained value.' },
];

export const cloudServices = [
  { title: 'Cloud Migration', icon: Cloud, description: 'Seamlessly migrate workloads, applications, and data to the cloud with minimal disruption to your business.' },
  { title: 'Cloud Architecture', icon: LayoutGrid, description: 'Design scalable, resilient cloud architectures optimized for performance, security, and cost efficiency.' },
  { title: 'Cloud Optimization', icon: Gauge, description: 'Continuously optimize cloud resources, costs, and performance to maximize your return on cloud investment.' },
  { title: 'Infrastructure', icon: HardDrive, description: 'Build and manage cloud infrastructure that scales with your business needs across hybrid and multi-cloud environments.' },
  { title: 'DevOps', icon: GitBranch, description: 'Implement cloud-native DevOps practices including CI/CD, infrastructure as code, and automated deployment.' },
  { title: 'Cloud Security', icon: Shield, description: 'Secure your cloud environment with identity management, encryption, compliance controls, and threat monitoring.' },
];

export const dataAnalyticsServices = [
  { title: 'Business Intelligence', icon: PieChart, description: 'Transform raw data into interactive dashboards and reports that provide clear, actionable business insights.' },
  { title: 'Data Engineering', icon: Database, description: 'Build robust data pipelines, ETL processes, and data infrastructure that ensure reliable, high-quality data flow.' },
  { title: 'Data Warehousing', icon: HardDrive, description: 'Design and implement modern data warehouses that centralize your data for efficient analysis and reporting.' },
  { title: 'Data Visualization', icon: LineChart, description: 'Create compelling visual representations of complex data that make insights accessible to every stakeholder.' },
  { title: 'Predictive Analytics', icon: Eye, description: 'Leverage statistical models and machine learning to forecast trends, identify risks, and uncover opportunities.' },
  { title: 'Reporting', icon: FileBarChart, description: 'Automated, scheduled reporting solutions that deliver the right information to the right people at the right time.' },
];

export const aiMlServices = [
  { title: 'AI Strategy', icon: Lightbulb, description: 'Develop a comprehensive AI strategy aligned with your business goals, identifying high-impact use cases and building a roadmap.' },
  { title: 'Machine Learning', icon: Cpu, description: 'Build and deploy custom machine learning models that solve complex business problems and improve decision-making.' },
  { title: 'Generative AI', icon: Sparkles, description: 'Implement generative AI solutions including large language models, content generation, and conversational AI systems.' },
  { title: 'Intelligent Automation', icon: Bot, description: 'Combine AI with automation to create intelligent workflows that learn, adapt, and improve over time.' },
  { title: 'Predictive Models', icon: Activity, description: 'Develop predictive models for demand forecasting, risk assessment, customer behavior, and operational optimization.' },
  { title: 'AI Integration', icon: Workflow, description: 'Integrate AI capabilities into existing business applications and workflows for seamless intelligent automation.' },
];

export const cybersecurityServices = [
  { title: 'Security Strategy', icon: ShieldCheck, description: 'Develop comprehensive security strategies and governance frameworks that protect your organization from evolving threats.' },
  { title: 'Risk Management', icon: AlertTriangle, description: 'Identify, assess, and mitigate security risks across your technology environment with proactive risk management.' },
  { title: 'Identity & Access', icon: KeyRound, description: 'Implement robust identity and access management solutions that control who can access what, when, and how.' },
  { title: 'Security Monitoring', icon: Search, description: 'Continuous security monitoring with real-time threat detection, alerting, and incident response capabilities.' },
  { title: 'Compliance', icon: CheckCircle, description: 'Ensure regulatory compliance across industry standards including SOC2, HIPAA, PCI-DSS, GDPR, and more.' },
  { title: 'Threat Management', icon: FileWarning, description: 'Proactive threat intelligence, vulnerability assessments, and penetration testing to stay ahead of adversaries.' },
];

export const devopsServices = [
  { title: 'Plan', icon: ClipboardList, description: 'Strategic planning and backlog management with agile methodologies that align development with business priorities.' },
  { title: 'Develop', icon: Code2, description: 'Modern development practices including code reviews, pair programming, and secure coding standards.' },
  { title: 'Build', icon: GitMerge, description: 'Automated build systems with continuous integration that catch issues early and maintain code quality.' },
  { title: 'Test', icon: TestTube, description: 'Comprehensive automated testing including unit, integration, performance, and security testing.' },
  { title: 'Deploy', icon: Play, description: 'Automated deployment pipelines with blue-green deployments, canary releases, and rollback capabilities.' },
  { title: 'Monitor', icon: MonitorSmartphone, description: 'Real-time monitoring, logging, and observability across your entire application and infrastructure stack.' },
  { title: 'Optimize', icon: Repeat, description: 'Continuous improvement through performance analysis, capacity planning, and process optimization.' },
];

export const devopsLifecycle = [
  { step: 'Plan', icon: ClipboardList },
  { step: 'Develop', icon: Code2 },
  { step: 'Build', icon: GitMerge },
  { step: 'Test', icon: TestTube },
  { step: 'Deploy', icon: Play },
  { step: 'Monitor', icon: MonitorSmartphone },
  { step: 'Optimize', icon: Repeat },
];
