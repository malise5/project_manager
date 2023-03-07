import React from "react";
import { useState, useEffect } from "react";
import ProjectList from "./ProjectList";
import ProjectForm from "./ProjectForm";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    let url = "http://localhost:3001/projects";
    if (selectedPhase) {
      url += "?phase=" + selectedPhase;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, [selectedPhase]);

  const onAddProject = (formdata) => {
    setProjects((projects) => [formdata, ...projects]);
  };

  return (
    <div>
      <ProjectForm onAddProject={onAddProject} />
      <ProjectList
        projects={projects}
        setSelectedPhase={setSelectedPhase}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};

export default ProjectsContainer;
