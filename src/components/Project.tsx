import React, { useState } from "react";
import brandImg from "../assets/images/brand.png";
import momoImg from "../assets/images/momo.png";
import segmentImg from "../assets/images/segmentation.png";
import creditImg from "../assets/images/credit.png";
import insuranceImg from "../assets/images/insurance.jpg";
import productivityImg from "../assets/images/productivity.jpg";
import wikipediaImg from "../assets/images/wikipedia.png";
import izoneImg from "../assets/images/izone.jpg";
import izoneDashImg from "../assets/images/izone-dashboard.png";
import garchImg from "../assets/images/garch.png";
import vcbImg from "../assets/images/vcb.png";
import "../assets/styles/Project.scss";

type TabValue = "all" | "stats" | "modeling" | "analytics" | "finance";
type Category = Exclude<TabValue, "all">;

const TABS: Array<{ value: TabValue; label: string }> = [
    { value: "all", label: "All" },
    { value: "stats", label: "Statistical Inference" },
    { value: "modeling", label: "Predictive Modeling" },
    { value: "analytics", label: "Product Analytics" },
    { value: "finance", label: "Finance" },
];

interface ProjectItem {
    title: string;
    href: string;
    image: string;
    alt: string;
    description: string;
    tags: string;
    categories: Category[];
}

const PROJECTS: ProjectItem[] = [
    {
        title: "iZone Occupancy Lift Analysis",
        href: "https://docs.google.com/presentation/d/1cy0LSJj-ROIcqIwyKNtvWNI522USiKfPeUhhCBxw7K8/edit?usp=sharing",
        image: izoneImg,
        alt: "iZone Occupancy Lift Analysis Thumbnail",
        description:
            "Benchmarked Seasonal Naive, SARIMA, and Meta Prophet to forecast daily library occupancy, tuning Prophet to an MAE of 29.0. Used residual analysis to measure a statistically significant 24.6% occupancy lift from hosted events, and shipped a Streamlit dashboard.",
        tags: "Python • Statistical Testing • Meta Prophet • Time Series Forecasting • Streamlit",
        categories: ["stats"],
    },
    {
        title: "MoMo E-Wallet User Retention Analysis",
        href: "https://drive.google.com/file/d/1cmVBTSDRTpyWhW3QpXzUGk-qdaY8HTZ2/view?usp=drive_link",
        image: momoImg,
        alt: "MoMo Project Thumbnail",
        description:
            "Evaluated a cashback loyalty program using cohort analysis, boosting user retention by 15%. Reduced cashback costs by 20% while maintaining engagement.",
        tags: "Python • Pandas • Cohort Analysis • Retention • Matplotlib",
        categories: ["analytics"],
    },
    {
        title: "Customer RFM Segmentation",
        href: "https://drive.google.com/file/d/1LmgZIkVwof00Ay1Q9-tHq8djQrcla2UQ/view?usp=drive_link",
        image: segmentImg,
        alt: "Segmentation Project Thumbnail",
        description:
            "Analyzed 1M+ transaction rows to extract purchasing patterns and implemented RFM segmentation to target high-value users.",
        tags: "SQL • RFM • Customer Analytics • Data Segmentation",
        categories: ["analytics"],
    },
    {
        title: "Highlands Brand Awareness Analysis",
        href: "https://drive.google.com/file/d/1y5yJUgiqm5IC2vN0EcgXtQGAppaFnvMB/view?usp=drive_link",
        image: brandImg,
        alt: "Highlands Project Thumbnail",
        description:
            "Cleaned and integrated survey data across multiple sources to build customer profiles and identify churn patterns. Built a churn prediction model using XGBoost (98% accuracy), enabling targeted retention strategies.",
        tags: "Data Cleaning • ER Diagram • PowerBI/Tableau • Churn Prediction",
        categories: ["analytics"],
    },
    {
        title: "Wikipedia Web Traffic Prediction",
        href: "https://docs.google.com/presentation/d/1jd9ClCVJZwb1UnJZon7eVeIp6hLnyMBd63L5uYVJ8rI/edit?slide=id.g4dfce81f19_0_45#slide=id.g4dfce81f19_0_45",
        image: wikipediaImg,
        alt: "Wikipedia Web Traffic Prediction Thumbnail",
        description:
            "Compared five forecasting models (Moving Average, SARIMA, Exponential Smoothing, XGBoost, and LSTM) on 100K+ daily Wikipedia page views. Lag, rolling, and autocorrelation features made a per-page LSTM the most accurate (RMSE 0.6460, SMAPE 47.56%).",
        tags: "Python • Time Series Forecasting • XGBoost • LSTM • Feature Engineering",
        categories: ["modeling"],
    },
    {
        title: "Credit Score Classification",
        href: "https://medium.com/@andy.dlbn/credit-score-classification-with-machine-learning-261085770c10",
        image: creditImg,
        alt: "Credit Classification Thumbnail",
        description:
            "Built an ML pipeline that raised credit score classification accuracy from 62% to 76% using XGBoost. Improved Poor-class precision from 0.62 to 0.76 with PCA and cross-validation.",
        tags: "Python • scikit-learn • XGBoost • PCA • Keras",
        categories: ["modeling", "finance"],
    },
    {
        title: "Insurance Premium Regression",
        href: "https://medium.com/@andy.dlbn/predicting-insurance-premiums-with-lasso-regression-and-feature-engineering-pipeline-afed8686e343",
        image: insuranceImg,
        alt: "Insurance Project Thumbnail",
        description:
            "Built a regression pipeline for insurance premium prediction using feature engineering, target encoding, and Lasso regression. Achieved an RMSLE of 1.1666 on the test set by tuning hyperparameters with GridSearch CV.",
        tags: "Python • scikit-learn • Lasso • GridSearchCV • Feature-Engine",
        categories: ["modeling", "finance"],
    },
    {
        title: "Productivity Time Classification",
        href: "https://medium.com/@andy.dlbn/productive-time-classification-24994a37f98b",
        image: productivityImg,
        alt: "Productivity Project Thumbnail",
        description:
            "Predicted optimal productivity windows from sleep and work patterns using the Dispatchers’ Daily Log dataset. Applied ANOVA and chi-squared tests for feature selection, and boosted accuracy to 58% with SMOTE and Random Forest.",
        tags: "Python • ANOVA • Chi-Squared Tests • Random Forest • SMOTE",
        categories: ["modeling"],
    },
    {
        title: "Tech Stock Volatility Forecasting",
        href: "https://docs.google.com/presentation/d/19vCj9rL7qkdheMiEF-9yWvCKIxeJhCng1cqwA0_yOMU/edit?usp=sharing",
        image: garchImg,
        alt: "Volatility Forecasting Thumbnail",
        description:
            "Compared GARCH, GJR-GARCH, and GARCH-X models on 10 years of returns for 10 tech stocks. Found GARCH-X best forecasts out-of-sample volatility for 9 of 10 stocks by QLIKE.",
        tags: "Python • GARCH • Time Series • Volatility Forecasting",
        categories: ["modeling", "finance"],
    },
    {
        title: "iZone Occupancy Dashboard",
        href: "https://izone-2026-stats.streamlit.app/",
        image: izoneDashImg,
        alt: "iZone Occupancy Dashboard Thumbnail",
        description:
            "Interactive Streamlit + Plotly dashboard that turns raw CSV uploads into a unified annual report, combining event registrations, Occuspace occupancy logs, and Meta social media stats into KPIs, traffic heatmaps, and engagement analytics.",
        tags: "Streamlit • Plotly • Pandas • Interactive Dashboard • Data Visualization",
        categories: ["analytics"],
    },
    {
        title: "Vietcombank Power BI Dashboard",
        href: "https://drive.google.com/file/d/1AZzGANebeL16pBIFqJFd7xM081ZaQyJJ/view?usp=drive_link",
        image: vcbImg,
        alt: "VCB Project Thumbnail",
        description:
            "Built a Power BI dashboard for 100K+ banking records and identified cross-selling opportunities. Improved data accuracy by 25% through Power Query transformations.",
        tags: "Power BI • Power Query • Data Cleaning • Dashboarding",
        categories: ["analytics"],
    },
];

function Project() {
    const [activeTab, setActiveTab] = useState<TabValue>("all");

    const visibleProjects =
        activeTab === "all"
            ? PROJECTS
            : PROJECTS.filter((project) =>
                  project.categories.includes(activeTab as Category)
              );

    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>

            <div className="project-tabs">
                {TABS.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => setActiveTab(tab.value)}
                        className={activeTab === tab.value ? "active" : ""}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="projects-section">
                <div className="projects-grid">
                    {visibleProjects.map((project) => (
                        <div className="project" key={project.title}>
                            <a href={project.href} target="_blank" rel="noreferrer">
                                <img
                                    src={project.image}
                                    className="project-thumbnail"
                                    alt={project.alt}
                                />
                                <h2>{project.title}</h2>
                            </a>
                            <p>{project.description}</p>
                            <p className="tags">{project.tags}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;
