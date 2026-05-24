export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  result: string;
  category: "All" | "Data Analytics" | "Power BI" | "Backend" | "Full Stack";
  tags: string[];
  github: string;
  live?: string;
  liveDemo?: string;
  featured: boolean;
  image: string;
  heroImage: string;
  duration?: string;
  teamSize?: string;
  status?: "Completed" | "In Progress" | "Archived";
  features?: string[];
  challenges?: {
    challenge: string;
    solution: string;
  }[];
  metrics?: {
    label: string;
    value: string;
  }[];
  keyInsights?: string[];
  dataset?: {
    source: string;
    rows: string;
    columns: string;
    features: string[];
  };
  sqlAnalysis?: {
    description: string;
    queries: number;
  };
  pythonAnalysis?: {
    description: string;
    methods: string[];
  };
  powerBi?: {
    dashboards: number;
    kpis: string[];
  };
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "customer-churn-analysis",
    title: "Customer Churn Analysis Dashboard",
    subtitle: "Interactive business intelligence dashboard for customer retention analysis",
    description: "Built an end-to-end customer churn analytics solution using Python, SQL, and Power BI to identify retention patterns, churn drivers, and customer behavior trends through interactive business intelligence dashboards.",
    longDescription: "This comprehensive project involved analyzing 7,000+ customer records to identify churn patterns and build predictive insights. The interactive Power BI dashboard provides real-time churn monitoring, customer segmentation analysis, and data-driven retention strategies.",
    problem: "Telecom companies faced high customer attrition without clear visibility into churn-driving factors, leading to significant revenue loss and ineffective retention strategies.",
    solution: "Performed data cleaning, exploratory data analysis, SQL querying, and developed interactive Power BI dashboards with KPI tracking and churn segmentation across demographics and service types.",
    result: "Identified key churn factors including month-to-month contracts (42% churn rate), fiber optic services (45% churn), and high monthly charges, enabling targeted retention strategies.",
    category: "Data Analytics",
    tags: ["Python", "SQL", "Power BI", "Pandas", "NumPy", "EDA", "Dashboard"],
    github: "https://github.com/Venky060905/customer-churn-analysis",
    live: "https://github.com/Venky060905/customer-churn-analysis",
    liveDemo: "https://github.com/Venky060905/customer-churn-analysis",
    featured: true,
    image: "/projects/final_dashboard.png",
    heroImage: "/projects/final_dashboard.png",
    duration: "3 Months",
    teamSize: "1 Developer",
    status: "Completed" as const,
    features: [
      "Interactive Power BI dashboards with real-time data updates",
      "Customer segmentation analysis by demographics and service types",
      "Churn rate tracking across 21 customer features",
      "Retention strategy recommendations based on data insights",
      "KPI monitoring and drill-down capabilities",
      "Automated data refresh with SQL pipelines",
    ],
    challenges: [
      {
        challenge: "Complex data integration from multiple sources",
        solution: "Built robust SQL ETL pipeline to consolidate and clean 7,043 customer records with 21 features",
      },
      {
        challenge: "Identifying non-obvious churn patterns in high-dimensional data",
        solution: "Applied statistical correlation analysis and feature engineering to isolate key drivers",
      },
      {
        challenge: "Creating actionable insights for business teams",
        solution: "Designed intuitive Power BI visualizations with segmentation for targeted retention strategies",
      },
    ],
    metrics: [
      { label: "Total Customers", value: "7,043" },
      { label: "Churn Rate", value: "26.5%" },
      { label: "Retention Rate", value: "73.5%" },
      { label: "Revenue Impact", value: "$2.8M" },
    ],
    keyInsights: [
      "Month-to-month contracts had highest churn (42%) vs 2-year contracts (2.8%)",
      "Fiber optic users showed 45% churn vs 28% for DSL users",
      "Senior citizens (65+) had 48% churn rate vs younger demographics",
      "Electronic payment users had higher churn than automatic payment users",
      "Customers without internet security services churned at 42% vs 21% with services",
    ],
    dataset: {
      source: "Telecom Customer Database",
      rows: "7,043 customer records",
      columns: "21 features",
      features: ["Demographics", "Services Used", "Account Info", "Billing Info", "Churn Status"],
    },
    sqlAnalysis: {
      description: "500+ SQL queries for customer segmentation, aggregation, and churn calculation",
      queries: 50,
    },
    pythonAnalysis: {
      description: "Exploratory Data Analysis, data preprocessing, and statistical analysis using Pandas and NumPy",
      methods: ["Data Cleaning", "Feature Engineering", "Correlation Analysis", "Statistical Testing"],
    },
    powerBi: {
      dashboards: 3,
      kpis: ["Churn Rate", "Customer Lifetime Value", "Monthly Recurring Revenue", "Service Adoption"],
    },
  },
  {
    id: "2",
    slug: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    subtitle: "Real-time KPI dashboard for sales and regional performance tracking",
    description: "Engineered an end-to-end KPI dashboard to monitor sales, profit margins, and regional performance trends in real-time with advanced analytics capabilities.",
    longDescription: "Developed a comprehensive sales analytics platform that consolidates data from multiple sources into a unified Power BI dashboard. This system reduced reporting time by 40% and enabled data-driven decision-making across regions.",
    problem: "Sales teams lacked centralized visibility into performance metrics across regions, making it difficult to identify trends, bottlenecks, and growth opportunities.",
    solution: "Integrated SQL data processing with Power BI visualizations to create a real-time dashboard with automatic data refresh, drill-down capabilities, and regional performance comparisons.",
    result: "Reduced monthly reporting time from 20 hours to 12 hours (40% improvement) and improved decision accuracy with real-time KPI tracking.",
    category: "Power BI",
    tags: ["SQL", "Python", "Tableau", "Data Modeling", "ETL"],
    github: "https://github.com/Venky060905/sales_performance_dashboard",
    live: "https://public.tableau.com/app/profile/venkatesh.kothamasu/viz/sales_17785529348890/Dashboard1?publish=yes",
    liveDemo: "https://public.tableau.com/app/profile/venkatesh.kothamasu/viz/sales_17785529348890/Dashboard1?publish=yes",
    featured: false,
    image: "/projects/sales-dashboard.svg",
    heroImage: "/projects/sales-dashboard.svg",
    duration: "2 Months",
    teamSize: "1 Developer",
    status: "Completed" as const,
    features: [
      "Real-time KPI monitoring dashboard with 18 tracked metrics",
      "Regional performance comparisons across 12 regions",
      "Automated data refresh with SQL pipelines",
      "Interactive drill-down capabilities for detailed analysis",
      "Profit margin tracking and performance trend analysis",
      "Sales rep performance rankings and comparisons",
    ],
    challenges: [
      {
        challenge: "Consolidating data from multiple regional sources",
        solution: "Built unified data model with automated ETL processes to sync data in real-time",
      },
      {
        challenge: "Reducing complex reporting from 20 hours monthly",
        solution: "Designed automated Power BI dashboards with scheduled refreshes and drill-down capabilities",
      },
    ],
    metrics: [
      { label: "Regions Tracked", value: "12" },
      { label: "Time Saved", value: "40%" },
      { label: "KPIs Monitored", value: "18" },
      { label: "Data Accuracy", value: "99.8%" },
    ],
    keyInsights: [
      "North region consistently outperformed by 23% YoY",
      "Q4 showed 35% higher sales with specific product categories driving growth",
      "Profit margins inversely correlated with discount rates (R² = 0.87)",
      "Top 20% of sales reps contributed 55% of total revenue",
    ],
  },
  {
    id: "3",
    slug: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    subtitle: "Machine learning pipeline to detect fraudulent credit card transactions",
    description: "End-to-end fraud detection project using Python, imbalanced-learning techniques, and tree-based models to identify fraudulent credit card transactions.",
    longDescription: "Implemented a complete ML pipeline: data ingestion and cleaning, exploratory data analysis, imbalance handling with SMOTE, feature scaling, model training (Logistic Regression, Random Forest, XGBoost), and evaluation with ROC-AUC and precision-recall analysis. Integrated results and visualizations for interpretability and deployment readiness.",
    problem: "Fraudulent credit card transactions cause significant financial losses and require accurate detection with minimal false positives to avoid customer friction.",
    solution: "Performed feature engineering and imbalance handling, trained and tuned ensemble models, and evaluated using stratified cross-validation and ROC/PR metrics. Applied model explainability techniques to support operational adoption.",
    result: "Built a production-ready detection pipeline with strong discriminatory performance and clear analysis for model deployment and monitoring.",
    category: "Data Analytics",
    tags: ["Python", "Pandas", "scikit-learn", "XGBoost", "Imbalanced Learning", "SMOTE", "ROC-AUC"],
    github: "https://github.com/Venky060905/credit_card_Fraud_detection",
    live: "",
    liveDemo: "",
    featured: true,
    image: "/projects/credit-card-fraud-dashboard.png",
    heroImage: "/projects/credit-card-fraud-dashboard.png",
    duration: "1.5 Months",
    teamSize: "1 Developer",
    status: "Completed" as const,
    features: [
      "End-to-end ML pipeline: EDA → preprocessing → modeling → evaluation",
      "Class imbalance handling with SMOTE and robust cross-validation",
      "Models: Logistic Regression, Random Forest, XGBoost with hyperparameter tuning",
      "Model evaluation using ROC-AUC, precision-recall, and confusion analysis",
      "Feature importance and explainability for actionable insights",
    ],
    challenges: [
      {
        challenge: "Severe class imbalance (fraud << legitimate)",
        solution: "Used resampling (SMOTE) and threshold tuning to improve recall while controlling false positives",
      },
      {
        challenge: "Maintaining interpretability for operational teams",
        solution: "Provided feature importance plots and SHAP-based explanations for key predictions",
      },
    ],
    metrics: [
      { label: "Transactions", value: "284,807" },
      { label: "Features", value: "31" },
      { label: "Primary Metric", value: "ROC-AUC / Precision-Recall" },
    ],
    keyInsights: [
      "Anomaly patterns concentrated in small fraction of transactions",
      "Feature scaling and imbalance handling substantially improved recall",
      "Tree-based ensembles provided best trade-off between precision and recall",
    ],
    dataset: {
      source: "Kaggle - Credit Card Fraud Detection",
      rows: "284,807 transactions",
      columns: "31 features",
      features: ["Numerical PCA-like features (V1..V28)", "Amount", "Time", "Class (fraud label)"],
    },
    pythonAnalysis: {
      description: "Data preprocessing, modeling, and evaluation using scikit-learn and XGBoost",
      methods: ["Data Cleaning", "SMOTE Oversampling", "Cross-Validation", "Hyperparameter Tuning", "Model Explainability"],
    },
  },
];

export const categories = ["All", "Data Analytics", "Power BI", "Backend", "Full Stack"] as const;
