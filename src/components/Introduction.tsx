import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Introduction.scss';

const Introduction: React.FC = () => {
  return (
    <div className="introduction-container" id="introduction">
      <div className="introduction-content">
        <h1>Introduction</h1>
        <div className="introduction-block">
          <h3>Hi, I'm Andy Dao</h3>
          <p>
            I’m a Data Science and Financial Economics junior at the University of Rochester
            with a passion for transforming data into clear, actionable insights. From analyzing
            financial risk to evaluating user retention and building dashboards for
            marketing and operations, I enjoy applying statistics and communication to solve
            real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
