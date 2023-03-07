import React from "react";
import { useState, useEffect } from "react";
import ProjectList from "./ProjectList";
import ProjectForm from "./ProjectForm";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = () => {
      fetch("http://localhost:3001/projects")
        .then((response) => response.json())
        .then((data) => {
          setProjects(data);
        });
    };
    loadProjects();
  });

  const onAddProject = (formdata) => {
    setProjects((projects) => [formdata, ...projects]);
  };

  return (
    <div>
      <ProjectForm onAddProject={onAddProject} />
      <ProjectList projects={projects} />
    </div>
  );
};

export default ProjectsContainer;
