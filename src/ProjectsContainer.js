import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectList from "./ProjectList";
import ProjectForm from "./ProjectForm";
import ProjectEditForm from "./ProjectEditForm";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    let url = "http://localhost:3001/projects";
    if (selectedPhase && search) {
      url += `?phase=${selectedPhase}&q=${search}`;
    } else if (selectedPhase) {
      url += `?phase=${selectedPhase}`;
    } else if (search) {
      url += `?q=${search}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, [selectedPhase, search]);

  const onAddProject = (formdata) => {
    setProjects((projects) => [formdata, ...projects]);
  };

  const onUpdateProject = (updatedProject) => {
    setProjects((projects) => {
      return projects.map((originalProject) => {
        if (originalProject.id === updatedProject.id) {
          return updatedProject;
        } else {
          return originalProject;
        }
      });
    });
  };

  const onDeleteProject = (projectId) => {
    setProjects((projects) =>
      projects.filter((project) => project.id !== projectId)
    );
  };

  return (
    <Switch>
      <Route exact path="/projects">
        <ProjectList
          projects={projects}
          setSelectedPhase={setSelectedPhase}
          onUpdateProject={onUpdateProject}
          onDeleteProject={onDeleteProject}
          search={search}
          setSearch={setSearch}
        />
      </Route>
      <Route path="/projects/new">
        <ProjectForm onAddProject={onAddProject} />
      </Route>
      <Route path="/projects/:id/edit">
        <ProjectEditForm onUpdateProject={onUpdateProject} />
      </Route>
    </Switch>
  );
};

export default ProjectsContainer;
