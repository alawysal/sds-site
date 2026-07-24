import {
  Activity,
  AreaChart,
  BadgeCheck,
  Banknote,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Factory,
  GitBranch,
  Globe2,
  HeartPulse,
  Layers3,
  LineChart,
  LockKeyhole,
  Network,
  RadioTower,
  Scale,
  ShieldAlert,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Truck,
  UsersRound,
  Workflow,
  type LucideIcon
} from "lucide-react";

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
];

export type OpenRole = {
  title: string;
  department: string;
  location: string;
  employmentType: string;
  description: string;
  applyUrl: string;
  isPublished: boolean;
  publicationEndDate: string;
};

/**
 * Add, edit, reorder, or remove vacancies here.
 * Use a full application URL or a mailto link in `applyUrl`.
 * Set `isPublished` to false to hide a vacancy.
 * Use the YYYY-MM-DD format for `publicationEndDate`.
 */
export const openRoles: OpenRole[] = [
  {
    title: "Senior Data Engineer",
    department: "Data Engineering",
    location: "Remote",
    employmentType: "Full-time",
    description: "Design and deliver reliable cloud data platforms, pipelines, and governed data products for enterprise clients.",
    applyUrl: "mailto:careers@saldatasolutions.com?subject=Application%20-%20Senior%20Data%20Engineer",
    isPublished: true,
    publicationEndDate: "2026-12-31"
  }
];

export const services: Array<{ title: string; description: string; icon: LucideIcon }> = [
  { title: "Data Engineering", description: "Reliable pipelines, lakehouse foundations, and data products built for enterprise scale.", icon: Database },
  { title: "ETL Development", description: "Modern extraction, transformation, and orchestration patterns that reduce manual work.", icon: Workflow },
  { title: "Data Warehousing", description: "Modeled, governed warehouses designed for trusted reporting and analytics.", icon: Layers3 },
  { title: "Business Intelligence", description: "Executive-ready dashboards that connect performance, risk, and growth signals.", icon: BarChart3 },
  { title: "Artificial Intelligence", description: "Practical AI systems that automate decisions, insight discovery, and knowledge work.", icon: BrainCircuit },
  { title: "Machine Learning", description: "Prediction models and ML operations that move from prototype to production.", icon: Sparkles },
  { title: "Cloud Data Platforms", description: "Azure, AWS, Databricks, Snowflake, and hybrid architectures aligned to business goals.", icon: Cloud },
  { title: "Big Data", description: "Distributed processing with Spark, Kafka, and resilient data platform patterns.", icon: Network },
  { title: "Analytics", description: "Deep analysis that turns operational data into strategy, efficiency, and measurable outcomes.", icon: LineChart },
  { title: "Data Governance", description: "Ownership, lineage, access, quality, and standards that make data trustworthy.", icon: LockKeyhole },
  { title: "Data Quality", description: "Monitoring, validation, and remediation for dependable enterprise information.", icon: BadgeCheck },
  { title: "Digital Transformation", description: "Roadmaps and delivery programs that modernize how organizations use data.", icon: Globe2 },
  { title: "Consulting", description: "Senior advisory across architecture, delivery, adoption, and operating models.", icon: BriefcaseBusiness }
];

export const industries = [
  { title: "Telecommunications", icon: RadioTower },
  { title: "Banking", icon: Banknote },
  { title: "Government", icon: Building2 },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Retail", icon: ShoppingCart },
  { title: "Logistics", icon: Truck },
  { title: "NGOs", icon: UsersRound }
];

export const solutions = [
  { title: "Executive Dashboards", description: "Board-level performance visibility across operations, finance, customers, and risk.", icon: AreaChart },
  { title: "Predictive Analytics", description: "Forecast demand, churn, capacity, and outcomes before they become urgent.", icon: Activity },
  { title: "Customer Analytics", description: "Understand behavior, lifetime value, segmentation, and next-best actions.", icon: UsersRound },
  { title: "Fraud Detection", description: "Anomaly detection and intelligence workflows for financial and operational risk.", icon: ShieldAlert },
  { title: "Network Analytics", description: "Telecom-grade observability for usage, availability, quality, and investment planning.", icon: RadioTower },
  { title: "Data Pipelines", description: "Automated ingestion and processing that keeps critical decisions current.", icon: GitBranch },
  { title: "Cloud Migration", description: "Move data platforms to modern cloud foundations with control and continuity.", icon: Cloud },
  { title: "AI Assistants", description: "Enterprise assistants grounded in governed knowledge, processes, and analytics.", icon: BrainCircuit }
];

export const technologies = [
  "Spark",
  "Scala",
  "Python",
  "Java",
  "Hive",
  "Kafka",
  "Airflow",
  "Azure",
  "AWS",
  "Databricks",
  "Power BI",
  "Grafana",
  "Snowflake",
  "Starburst",
  "Docker",
  "Kubernetes"
];

export const processSteps = [
  { title: "Discovery", description: "Clarify business outcomes, systems, constraints, and success metrics." },
  { title: "Architecture", description: "Design a future-ready platform blueprint with the right controls." },
  { title: "Implementation", description: "Build data pipelines, models, dashboards, and AI components." },
  { title: "Testing", description: "Validate quality, performance, security, and adoption readiness." },
  { title: "Deployment", description: "Launch with clean handover, monitoring, and operating rhythm." },
  { title: "Support", description: "Improve continuously through advisory, optimization, and enablement." }
];

export type StatId = "experience" | "projects" | "technologies" | "countries";

/** Edit KPI values here. Labels are translated in lib/i18n.ts. */
export const stats: Array<{ id: StatId; value: number; suffix: string }> = [
  { id: "experience", value: 10, suffix: "+" },
  { id: "projects", value: 50, suffix: "+" },
  { id: "technologies", value: 30, suffix: "+" },
  { id: "countries", value: 3, suffix: "+" }
];

export const values = [
  { title: "Business First", description: "Every platform decision starts with the decision it helps leaders make.", icon: BriefcaseBusiness },
  { title: "Engineering Excellence", description: "We build durable foundations, not fragile demos.", icon: Code2 },
  { title: "Trust by Design", description: "Governance, quality, privacy, and security are integrated from day one.", icon: Scale },
  { title: "Measurable Impact", description: "Our work is judged by clarity, adoption, efficiency, and growth.", icon: CheckCircle2 }
];
