import React from "react";
import ProjectList from "./ProjectList";
import ProjectNewForm from "./ProjectNewForm";
import { useState } from "react";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  const loadProjects = () => {
    fetch("http://localhost:4000/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  };

  return (
    <div>
      <ProjectNewForm />
      <ProjectList projects={projects} loadProjects={loadProjects} />
    </div>
  );
};

export default ProjectsContainer;
