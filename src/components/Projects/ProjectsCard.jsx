import React from "react";
import { getImageUrl } from "../../utils";
import "./ProjectsCard.css";

const ProjectsCard = ({
  eachProject: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className="projectscard-container">
      <img
        className="projectscard-imge"
        src={getImageUrl(imageSrc)}
        alt={`image of${title}`}
      />
      <h3 className="projectscard-title">{title}</h3>
      <p className="projectscard-description">{description}</p>
      <ul className="projectscard-skills">
        {skills.map((eachSkills, id) => {
          return (
            <li key={id} className="projectscard-skill">
              {eachSkills}
            </li>
          );
        })}
      </ul>
      <div className="projectscard-links">
        <a href={demo} className="projectscard-link">
          Demo
        </a>
        <a href={source} className="projectscard-link">
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
