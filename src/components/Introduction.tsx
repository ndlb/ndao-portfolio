import React from "react";
import '../assets/styles/Introduction.scss';

const Introduction: React.FC = () => {
  return (
    <div className="introduction-container" id="introduction">
      <div className="introduction-content">
        <h1>Introduction</h1>
        <div className="introduction-block">
          <h3>Hi, I'm Andy Dao</h3>
          <p>
            I’m a Data Science and Financial Economics senior at the University of Rochester
            who loves answering the question behind every metric: <em>did this actually move the
            needle?</em> I focus on statistical analysis and experimentation, measuring impact with
            real rigor (for example, finding a statistically significant 24.6% lift in space usage
            from hosted events), and on building machine learning models to predict behavior, risk,
            and demand.
          </p>
          <p>
            Just as importantly, I turn that analysis into decisions: defining and tracking the right
            product metrics, running cohort and retention analyses, and shipping interactive dashboards
            that help teams act. I’m looking for product data science roles where I can pair sharp
            statistical thinking with clear communication to move the numbers that matter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
