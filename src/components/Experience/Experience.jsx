import React from "react";
import "./Experience.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

function Experience() {
  return (
    <section className="experience-container" id="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-content">
        <div className="experience-skills">
          {skills.map((eachSkills, id) => {
            return (
              <div key={id} className="experience-skill">
                <div className="experience-skill-img-container">
                  <img
                    src={getImageUrl(eachSkills.imageSrc)}
                    alt={eachSkills.title}
                  />
                </div>
                <p>{eachSkills.title}</p>
              </div>
            );
          })}
        </div>
        <ul className="experience-history">
          {history.map((history, id) => {
            return (
              <li key={id} className="experience-history-item">
                <img
                  src={getImageUrl(history.imageSrc)}
                  alt={`${history.organisation} logo`}
                />
                <div className="experience-history-details">
                  <h3>{`${history.role}${history.organisation}`}</h3>
                  <p>{`${history.startDate}${history.endDate}`}</p>
                  <ul>
                    {history.experiences.map((eachExperiences, id) => {
                      return <li key={id}>{eachExperiences}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
