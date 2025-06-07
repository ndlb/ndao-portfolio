// import React from "react";
// import '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
// import Chip from '@mui/material/Chip';
// import '../assets/styles/Expertise.scss';

// const labelsFirst = [
//     "React",
//     "TypeScript",
//     "JavaScript",
//     "HTML5",
//     "CSS3",
//     "SASS",
//     "Flask",
//     "Python",
//     "SQL",
//     "PostgreSQL",
//     "Postman"
// ];

// const labelsSecond = [
//     "Git",
//     "GitHub Actions",
//     "Docker",
//     "AWS",
//     "Azure",
//     "Linux",
//     "Snowflake",
//     "Pandas",
//     "Selenium",
// ];

// const labelsThird = [
//     "OpenAI",
//     "Groq",
//     "LangChain",
//     "Qdrant",
//     "Hugging Face",
//     "LlamaIndex",
//     "Streamlit",
// ];

// function Expertise() {
//     return (
//     <div className="container" id="expertise">
//         <div className="skills-container">
//             <h1>Expertise</h1>
//             <div className="skills-grid">
//                 <div className="skill">
//                     <FontAwesomeIcon icon={faReact} size="3x"/>
//                     <h3>Full Stack Web Development</h3>
//                     <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
//                     <div className="flex-chips">
//                         <span className="chip-title">Tech stack:</span>
//                         {labelsFirst.map((label, index) => (
//                             <Chip key={index} className='chip' label={label} />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="skill">
//                     <FontAwesomeIcon icon={faDocker} size="3x"/>
//                     <h3>DevOps & Automation</h3>
//                     <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
//                     <div className="flex-chips">
//                         <span className="chip-title">Tech stack:</span>
//                         {labelsSecond.map((label, index) => (
//                             <Chip key={index} className='chip' label={label} />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="skill">
//                     <FontAwesomeIcon icon={faPython} size="3x"/>
//                     <h3>GenAI & LLM</h3>
//                     <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
//                     <div className="flex-chips">
//                         <span className="chip-title">Tech stack:</span>
//                         {labelsThird.map((label, index) => (
//                             <Chip key={index} className='chip' label={label} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     );
// }

// export default Expertise;

import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faTable, faFlask } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
"Python", "Pandas", "NumPy", "Seaborn", "Matplotlib",
"SQL", "PostgreSQL", "Excel", "Tableau", "Power BI"
];

const labelsSecond = [
"Metabase", "Git", "VS Code", "Jupyter Notebook", 
"Power Query", "Pivot Tables", "VLOOKUP"
];

const labelsThird = [
"Scikit-learn", "Statsmodels", "R", "Stata",
"Machine Learning Models", "Hypothesis Testing", 
"Statistical Inference"
];

function Expertise() {
return (
    <div className="container" id="expertise">
    <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

        <div className="skill">
            <FontAwesomeIcon icon={faChartLine} size="3x"/>
            <h3>Data Analysis & Visualization</h3>
            <p>Experienced in wrangling and visualizing datasets using Python and SQL to uncover trends, patterns, and actionable insights.</p>
            <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {labelsFirst.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
            ))}
            </div>
        </div>

        <div className="skill">
            <FontAwesomeIcon icon={faTable} size="3x"/>
            <h3>Business Intelligence & Reporting</h3>
            <p>Skilled in creating dashboards and automated reports to support marketing, operations, and product decisions.</p>
            <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {labelsSecond.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
            ))}
            </div>
        </div>

        <div className="skill">
            <FontAwesomeIcon icon={faFlask} size="3x"/>
            <h3>Applied Statistics & Machine Learning</h3>
            <p>Used statistical inference and predictive models to analyze customer behavior, campaign impact, and financial performance.</p>
            <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {labelsThird.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
            ))}
            </div>
        </div>

        </div>
    </div>
    </div>
);
}

export default Expertise;
