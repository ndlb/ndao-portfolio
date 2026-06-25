import React from "react";
import momoImg from "../assets/images/momo.png";
import vcbImg from "../assets/images/vcb.png";
import segmentImg from "../assets/images/segmentation.png";
import creditImg from "../assets/images/credit.png";
import churnImg from "../assets/images/churn.png";
import garchImg from "../assets/images/garch.png";
import "../assets/styles/Project.scss";
function Project() {
    return (
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
        <div className="project">
            <a href="https://github.com/ndlb/Momo-Analytics/blob/main/Momo%20Analytics.pdf" target="_blank" rel="noreferrer">
            <img src={momoImg} className="project-thumbnail" alt="MoMo Project Thumbnail" />
            <h2>MoMo E-Wallet User Retention Analysis</h2>
            </a>
            <p>
            Evaluated a cashback loyalty program using cohort analysis, boosting user retention by 15%.
            Reduced cashback costs by 20% while maintaining engagement.
            </p>
            <p className="tags">Python • Pandas • Cohort Analysis • Matplotlib</p>
        </div>
        <div className="project">
            <a href="https://github.com/ndlb/VCB-Customer-Service" target="_blank" rel="noreferrer">
            <img src={vcbImg} className="project-thumbnail" alt="VCB Project Thumbnail" />
            <h2>Vietcombank Power BI Dashboard</h2>
            </a>
            <p>
            Built a Power BI dashboard for 100K+ banking records and identified cross-selling opportunities.
            Improved data accuracy by 25% through Power Query transformations.
            </p>
            <p className="tags">Power BI • Power Query • Data Cleaning • Dashboarding</p>
        </div>
        <div className="project">
            <a href="https://github.com/ndlb/Customer-360-Segmentation" target="_blank" rel="noreferrer">
            <img src={segmentImg} className="project-thumbnail" alt="Segmentation Project Thumbnail" />
            <h2>🛒 Customer 360 Segmentation</h2>
            </a>
            <p>
            Analyzed 1M+ transaction rows to extract purchasing patterns and implemented RFM segmentation to target high-value users.
            </p>
            <p className="tags">SQL • RFM • Customer Analytics • Data Segmentation</p>
        </div>
        <div className="project">
            <a href="https://github.com/ndlb/Credit_Classify/Credit_Classify_Modeling.ipynb" target="_blank" rel="noreferrer">
            <img src={creditImg} className="project-thumbnail" alt="Credit Classification Thumbnail" />
            <h2>Credit Score Classification</h2>
            </a>
            <p>
            Built an ML pipeline that raised credit score classification accuracy from 62% to 76% using XGBoost.
            Improved Poor-class precision from 0.62 to 0.76 with PCA and cross-validation.
            </p>
            <p className="tags">Python • scikit-learn • XGBoost • PCA • Keras</p>
        </div>
        <div className="project">
            <a href="https://github.com/ndlb/Churn-Analysis" target="_blank" rel="noreferrer">
            <img src={churnImg} className="project-thumbnail" alt="Churn Project Thumbnail" />
            <h2>Telecoms Churn Analysis</h2>
            </a>
            <p>
            Built a logistic regression model with 80% accuracy to predict churn.
            Identified key churn drivers and informed retention strategy.
            </p>
            <p className="tags">Python • Logistic Regression • Churn Modeling • Data Visualization</p>
        </div>
        <div className="project">
            <a href="https://docs.google.com/presentation/d/19vCj9rL7qkdheMiEF-9yWvCKIxeJhCng1cqwA0_yOMU/edit?usp=sharing" target="_blank" rel="noreferrer">
            <img src={garchImg} className="project-thumbnail" alt="Volatility Forecasting Thumbnail" />
            <h2>Tech Stock Volatility Forecasting</h2>
            </a>
            <p>
            Compared GARCH, GJR-GARCH, and GARCH-X models on 10 years of returns for 10 tech stocks.
            Found GARCH-X best forecasts out-of-sample volatility for 9 of 10 stocks by QLIKE.
            </p>
            <p className="tags">Python • GARCH • Time Series • Volatility Forecasting</p>
        </div>
        </div>
    </div>
    );
}
export default Project;
