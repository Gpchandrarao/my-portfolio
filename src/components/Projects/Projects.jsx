import React from "react";
import "./Projects.css";
import projects from "../../data/projects.json";
import ProjectsCard from "./ProjectsCard";

function Projects() {
  return (
    <section className="project-container" id="projects">
      <h2 className="project-title">Projects</h2>
      <div className="project-content">
        {projects.map((eachProject, id) => {
          return <ProjectsCard eachProject={eachProject} key={id} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
