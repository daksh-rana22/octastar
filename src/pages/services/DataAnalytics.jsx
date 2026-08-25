import ServiceDetailPage from './ServiceDetailPage';
import { dataAnalyticsServices } from '../../data/services';

export default function DataAnalytics() {
  return (
    <ServiceDetailPage
      title="Data & Analytics"
      label="Data & Analytics"
      heroTitle={<>Turn Data Into <span className="gradient-text">Your Greatest Asset.</span></>}
      heroDescription="Build a data-driven organization with engineering, visualization, and predictive analytics solutions that transform raw data into actionable business intelligence."
      services={dataAnalyticsServices}
      process={[
        { step: '01', title: 'Discover', description: 'Assess your data landscape, sources, and analytics maturity.' },
        { step: '02', title: 'Engineer', description: 'Build robust data pipelines and infrastructure.' },
        { step: '03', title: 'Analyze', description: 'Apply analytics and modeling to extract insights.' },
        { step: '04', title: 'Visualize', description: 'Create dashboards and reports that drive action.' },
        { step: '05', title: 'Scale', description: 'Expand analytics capabilities across the organization.' },
      ]}
      processTitle="Analytics Journey"
      processDescription="From data discovery to organization-wide analytics adoption — a structured approach to becoming data-driven."
      ctaTitle="Unlock the Power of Your Data"
      ctaDescription="Let's build analytics solutions that give your organization the insights it needs to make better decisions faster."
    />
  );
}
