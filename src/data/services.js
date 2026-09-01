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
  { title: 'Temporary Staffing', icon: Users, description: 'Flexible workforce solutions for short-term projects and seasonal needs with pre-screened, qualified professionals.', points: ['Flexible workforce solutions for short-term projects and seasonal scaling.', 'Pre-screened, qualified professionals with fast turnaround deployment.'] },
  { title: 'Temporary-to-Hire', icon: UserCheck, description: 'Evaluate talent on the job before making a permanent commitment. Reduce hiring risk while finding the right fit.', points: ['Evaluate talent on the job before making a permanent commitment.', 'Significantly reduce hiring risk while ensuring cultural and technical fit.'] },
  { title: 'Direct Hire', icon: UserPlus, description: 'Full-cycle recruitment for permanent positions. We find, screen, and present top candidates for your most critical roles.', points: ['Full-cycle recruitment tailored for key strategic and leadership positions.', 'Curated shortlist of elite candidates matching technical and culture criteria.'] },
  { title: 'Contract Staffing', icon: Briefcase, description: 'Engage specialized professionals on a contract basis for defined projects, timelines, and deliverables.', points: ['Engage specialized niche professionals on a targeted contract basis.', 'Milestone-driven deliverables aligned with your project timelines.'] },
  { title: 'Workforce Solutions', icon: Settings, description: 'Comprehensive workforce management including vendor management, compliance, and workforce planning strategies.', points: ['End-to-end workforce management and managed vendor programs.', 'Strategic capacity planning and strict compliance oversight.'] },
  { title: 'HR & Payroll Services', icon: FileText, description: 'End-to-end HR and payroll administration, ensuring compliance, timely processing, and employee satisfaction.', points: ['Automated HR and multi-state payroll administration.', '100% regulatory compliance, tax filing, and transparent reporting.'] },
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
  { title: 'IT Operations', icon: MonitorCheck, description: 'Proactive management of your IT environment to ensure uptime, performance, and reliability across all systems.', points: ['Proactive 24/7 management of enterprise infrastructure and systems.', 'Guaranteed SLA uptime with automated health telemetry and alerts.'] },
  { title: 'Infrastructure Management', icon: HardDrive, description: 'End-to-end infrastructure management including servers, networks, storage, and data center operations.', points: ['End-to-end management of servers, networks, storage, and hybrid clouds.', 'Automated provisioning, backup recovery, and performance tuning.'] },
  { title: 'Enterprise Support', icon: HeadphonesIcon, description: 'Dedicated support teams providing 24/7 technical assistance, incident resolution, and problem management.', points: ['Dedicated L1-L3 support teams providing 24/7 technical assistance.', 'Rapid incident escalation, root-cause resolution, and SLA tracking.'] },
  { title: 'Application Support', icon: AppWindow, description: 'Comprehensive application lifecycle support including monitoring, maintenance, and enhancement of business applications.', points: ['Comprehensive application maintenance and lifecycle support.', 'Continuous patch management, performance tuning, and feature upgrades.'] },
  { title: 'Cloud Operations', icon: CloudCog, description: 'Managed cloud services covering provisioning, monitoring, optimization, and governance across multi-cloud environments.', points: ['Managed multi-cloud governance across AWS, Azure, and GCP.', 'Automated cost optimization, autoscaling, and resource rightsizing.'] },
  { title: 'Managed Security', icon: Lock, description: 'Continuous security monitoring, threat detection, vulnerability management, and compliance enforcement.', points: ['Continuous SOC monitoring, threat detection, and vulnerability scanning.', 'Zero-trust policy enforcement and audit-ready compliance reporting.'] },
  { title: 'Service Management', icon: Wrench, description: 'ITIL-aligned service management processes including change, release, and configuration management.', points: ['ITIL-aligned change, incident, and release management workflows.', 'Single-pane-of-glass dashboard for enterprise service delivery.'] },
];

export const digitalTransformationAreas = [
  { title: 'Process Modernization', icon: RefreshCw, description: 'Redesign and automate business processes to eliminate inefficiencies and accelerate operations.', points: ['Redesign workflows to eliminate friction and manual bottlenecks.', 'Deploy automated pipelines to accelerate cycle times and throughput.'] },
  { title: 'Technology Modernization', icon: Rocket, description: 'Upgrade legacy systems with modern, scalable, cloud-native technology architectures.', points: ['Migrate legacy monoliths to modular microservices and event-driven architectures.', 'Implement modern cloud stacks with elastic scalability and high availability.'] },
  { title: 'Data-Driven Strategy', icon: TrendingUp, description: 'Leverage data and analytics to inform business decisions and uncover new opportunities.', points: ['Consolidate fragmented data silos into unified analytics platforms.', 'Empower leadership teams with real-time KPI dashboards and predictive insights.'] },
  { title: 'Customer Experience', icon: Zap, description: 'Transform customer touchpoints with personalized, digital-first experiences that drive loyalty.', points: ['Create omnichannel, frictionless customer journey interfaces.', 'Leverage personalization algorithms to improve retention and satisfaction.'] },
  { title: 'Operational Excellence', icon: Target, description: 'Optimize operations with intelligent automation, lean processes, and continuous improvement.', points: ['Implement intelligent automation across mission-critical business processes.', 'Continuously monitor SLAs and operational metrics for sustained efficiency.'] },
];

export const transformationJourney = [
  { step: '01', title: 'Current State', description: 'Assess existing technology, processes, and organizational readiness.' },
  { step: '02', title: 'Strategy', description: 'Define a clear transformation roadmap aligned with business objectives.' },
  { step: '03', title: 'Modernization', description: 'Implement modern technology solutions and redesigned processes.' },
  { step: '04', title: 'Implementation', description: 'Execute with agility, change management, and continuous delivery.' },
  { step: '05', title: 'Optimization', description: 'Measure outcomes, iterate, and continuously improve for sustained value.' },
];

export const cloudServices = [
  { title: 'Cloud Migration', icon: Cloud, description: 'Seamlessly migrate workloads, applications, and data to the cloud with minimal disruption to your business.', points: ['Seamless zero-downtime migration of workloads, data, and applications.', 'Re-architecting legacy workloads for native cloud performance.'] },
  { title: 'Cloud Architecture', icon: LayoutGrid, description: 'Design scalable, resilient cloud architectures optimized for performance, security, and cost efficiency.', points: ['Design fault-tolerant, resilient architectures across AWS, Azure, and GCP.', 'Multi-region redundancy and disaster recovery automation.'] },
  { title: 'Cloud Optimization', icon: Gauge, description: 'Continuously optimize cloud resources, costs, and performance to maximize your return on cloud investment.', points: ['Continuous FinOps cost optimization and resource right-sizing.', 'Automated workload scheduling and spot instance utilization.'] },
  { title: 'Infrastructure', icon: HardDrive, description: 'Build and manage cloud infrastructure that scales with your business needs across hybrid and multi-cloud environments.', points: ['Infrastructure-as-Code (IaC) via Terraform, OpenTofu, and Pulumi.', 'Standardized, repeatable environments across dev, staging, and prod.'] },
  { title: 'DevOps', icon: GitBranch, description: 'Implement cloud-native DevOps practices including CI/CD, infrastructure as code, and automated deployment.', points: ['End-to-end automated CI/CD deployment pipelines.', 'GitOps workflows with automated rollbacks and canary deployments.'] },
  { title: 'Cloud Security', icon: Shield, description: 'Secure your cloud environment with identity management, encryption, compliance controls, and threat monitoring.', points: ['Zero-trust cloud perimeter, IAM hardening, and encryption at rest/in transit.', 'Continuous compliance monitoring across SOC2, HIPAA, and ISO 27001.'] },
];

export const dataAnalyticsServices = [
  { title: 'Business Intelligence', icon: PieChart, description: 'Transform raw data into interactive dashboards and reports that provide clear, actionable business insights.', points: ['Transform raw multi-source data into interactive executive dashboards.', 'Deliver real-time telemetry and decision-ready visual reporting.'] },
  { title: 'Data Engineering', icon: Database, description: 'Build robust data pipelines, ETL processes, and data infrastructure that ensure reliable, high-quality data flow.', points: ['Architect robust ETL/ELT pipelines using Spark, Kafka, and dbt.', 'Ensure data freshness, automated schema migrations, and reliability.'] },
  { title: 'Data Warehousing', icon: HardDrive, description: 'Design and implement modern data warehouses that centralize your data for efficient analysis and reporting.', points: ['Deploy modern data lakehouses via Snowflake, Databricks, and BigQuery.', 'Centralize enterprise data for lightning-fast concurrent analytics queries.'] },
  { title: 'Data Visualization', icon: LineChart, description: 'Create compelling visual representations of complex data that make insights accessible to every stakeholder.', points: ['Design custom visual analytics tools using Power BI, Tableau, and Looker.', 'Empower cross-functional teams with self-serve data exploration.'] },
  { title: 'Predictive Analytics', icon: Eye, description: 'Leverage statistical models and machine learning to forecast trends, identify risks, and uncover opportunities.', points: ['Deploy predictive models for demand forecasting and risk assessment.', 'Uncover revenue opportunities with automated trend analysis.'] },
  { title: 'Data Governance & Reporting', icon: FileBarChart, description: 'Automated, scheduled reporting solutions that deliver the right information to the right people at the right time.', points: ['Implement automated data lineage, cataloging, and quality validation.', 'Scheduled enterprise compliance reporting and audit trails.'] },
];

export const aiMlServices = [
  {
    title: 'AI-Driven Platform Transformation',
    icon: RefreshCw,
    points: [
      'Modernize legacy systems into AI-ready, cloud-native platforms.',
      'Embed GenAI, LLMs, Agentic capabilities into enterprise architecture.',
    ],
    description: 'Modernize legacy systems into AI-ready, cloud-native platforms. Embed GenAI, LLMs, Agentic capabilities into enterprise architecture.',
  },
  {
    title: 'AI-Powered Experience Transformation',
    icon: Bot,
    points: [
      'Transform customer and employee touchpoints with multimodal AI & intuitive interfaces.',
      'Deploy autonomous conversational agents and real-time intelligent assistants.',
    ],
    description: 'Transform customer touchpoints with multimodal AI and intelligent conversational agents.',
  },
  {
    title: 'Intelligent Data Transformation',
    icon: Database,
    points: [
      'Unify disparate data into real-time semantic layers & feature stores.',
      'Streamline automated ingestion pipelines for AI & analytics inference.',
    ],
    description: 'Unify fragmented enterprise data into high-throughput semantic layers and feature stores.',
  },
  {
    title: 'GenAI & Agentic Accelerators',
    icon: Sparkles,
    points: [
      'Pre-built enterprise agent frameworks and domain-specific accelerators.',
      'Rapidly prototype and orchestrate multi-agent workflow squads.',
    ],
    description: 'Pre-built enterprise agent frameworks and domain-specific accelerators.',
  },
  {
    title: 'Agentic Process Transformation',
    icon: Workflow,
    points: [
      'Automate complex multi-step business operations with autonomous agents.',
      'Embed continuous learning loops and adaptive process automation.',
    ],
    description: 'Automate complex cross-functional business workflows with autonomous agent squads.',
  },
  {
    title: 'Responsible AI Strategy & Governance',
    icon: ShieldCheck,
    points: [
      'Implement guardrails, bias telemetry, and compliance monitoring.',
      'Ensure hallucination defense, privacy controls, and auditability.',
    ],
    description: 'Comprehensive AI ethics, governance, guardrails, and compliance telemetry.',
  },
];

export const cybersecurityServices = [
  { title: 'Security Strategy', icon: ShieldCheck, description: 'Develop comprehensive security strategies and governance frameworks that protect your organization from evolving threats.', points: ['Formulate enterprise security roadmaps aligned with regulatory frameworks.', 'Implement continuous threat modeling and security posture management.'] },
  { title: 'Risk Management', icon: AlertTriangle, description: 'Identify, assess, and mitigate security risks across your technology environment with proactive risk management.', points: ['Identify, quantify, and mitigate technology and operational vulnerabilities.', 'Third-party vendor risk assessments and remediation workflows.'] },
  { title: 'Identity & Access Management', icon: KeyRound, description: 'Implement robust identity and access management solutions that control who can access what, when, and how.', points: ['Deploy zero-trust identity architectures and SSO/MFA policies.', 'Granular role-based access controls and privileged access management (PAM).'] },
  { title: 'Security Monitoring & SOC', icon: Search, description: 'Continuous security monitoring with real-time threat detection, alerting, and incident response capabilities.', points: ['24/7 SIEM/SOAR monitoring with sub-minute threat detection alerts.', 'Automated incident containment and forensic investigation protocols.'] },
  { title: 'Compliance & Audit Readiness', icon: CheckCircle, description: 'Ensure regulatory compliance across industry standards including SOC2, HIPAA, PCI-DSS, GDPR, and more.', points: ['Continuous compliance verification across SOC2, HIPAA, PCI-DSS, and ISO.', 'Automated audit evidence collection and governance dashboards.'] },
  { title: 'Threat & Vulnerability Management', icon: FileWarning, description: 'Proactive threat intelligence, vulnerability assessments, and penetration testing to stay ahead of adversaries.', points: ['Regular penetration testing and automated vulnerability assessments.', 'Proactive threat intelligence feeds and dark web surveillance.'] },
];

export const devopsServices = [
  { title: 'Plan & Architecture', icon: ClipboardList, description: 'Strategic planning and backlog management with agile methodologies that align development with business priorities.', points: ['Strategic backlog architecture and agile development alignment.', 'Infrastructure planning with automated dependency mapping.'] },
  { title: 'Develop & Security (DevSecOps)', icon: Code2, description: 'Modern development practices including code reviews, pair programming, and secure coding standards.', points: ['Shift-left security with automated SAST/DAST code scanning.', 'Standardized developer environments and automated linting.'] },
  { title: 'Build & Continuous Integration', icon: GitMerge, description: 'Automated build systems with continuous integration that catch issues early and maintain code quality.', points: ['Blazing-fast build pipelines with cached artifact management.', 'Automated unit test runs and immediate regression alerts.'] },
  { title: 'Test Automation', icon: TestTube, description: 'Comprehensive automated testing including unit, integration, performance, and security testing.', points: ['End-to-end automated testing suites covering integration and load.', 'Continuous performance benchmarking before production deployment.'] },
  { title: 'Deploy & Orchestration', icon: Play, description: 'Automated deployment pipelines with blue-green deployments, canary releases, and rollback capabilities.', points: ['Zero-downtime blue-green and progressive canary deployments.', 'Automated one-click rollback triggers on anomaly detection.'] },
  { title: 'Monitor & Observability', icon: MonitorSmartphone, description: 'Real-time monitoring, logging, and observability across your entire application and infrastructure stack.', points: ['Full-stack APM observability, distributed tracing, and metrics.', 'Intelligent alerting with automated root-cause suggestions.'] },
  { title: 'Optimize & FinOps', icon: Repeat, description: 'Continuous improvement through performance analysis, capacity planning, and process optimization.', points: ['Continuous cloud cost optimization and resource right-sizing.', 'Post-incident analysis and delivery lifecycle tuning.'] },
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
