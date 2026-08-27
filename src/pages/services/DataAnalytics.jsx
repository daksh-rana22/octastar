import ServiceDetailPage from './ServiceDetailPage';
import { dataAnalyticsServices } from '../../data/services';

export default function DataAnalytics() {
  return (
    <ServiceDetailPage
      title="Data Engineering & Advanced Analytics"
      label="Data & Analytics"
      heroTitle={<>Turn Complex Data Into <span className="gradient-text">Compounding Business Value.</span></>}
      heroDescription="Architect modern cloud data platforms, real-time streaming pipelines, and AI-ready semantic layers using Snowflake, Databricks, BigQuery, and Power BI to empower fast, high-confidence decision making."
      services={dataAnalyticsServices}
      process={[
        { step: '01', title: 'Data Architecture Audit', description: 'Assess existing data silos, schemas, governance gaps, and analytics maturity.' },
        { step: '02', title: 'Data Lakehouse Engineering', description: 'Design modern lakehouse architecture with automated ETL/ELT pipelines and dbt transformations.' },
        { step: '03', title: 'Real-Time Streaming', description: 'Deploy event-driven pipelines via Kafka and Spark for sub-second telemetry ingestion.' },
        { step: '04', title: 'Semantic Modeling & BI', description: 'Create unified semantic layers, executive KPI dashboards, and self-service analytics.' },
        { step: '05', title: 'AI & Data Governance', description: 'Establish automated data lineage, cataloging, quality checks, and regulatory compliance.' },
      ]}
      processTitle="Our 5-Stage Data Modernization Lifecycle"
      processDescription="From fragmented legacy silos to high-throughput enterprise intelligence platforms."
      ctaTitle="Ready to Unlock Your Data Advantage?"
      ctaDescription="Connect with our principal data architects to design your enterprise data roadmap and analytics strategy."
    />
  );
}
