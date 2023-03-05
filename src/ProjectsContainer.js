import React from "react";
import { useState } from "react";
import ProjectList from "./ProjectList";
import ProjectForm from "./ProjectForm";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  const loadProjects = () => {
    fetch("http://localhost:4000/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  };

  const onAddProject = (formdata) => {
    setProjects((projects) => [formdata, ...projects]);
  };

  return (
    <div>
      <ProjectForm onAddProject={onAddProject} />
      <ProjectList projects={projects} loadProjects={loadProjects} />
    </div>
  );
};

export default ProjectsContainer;
