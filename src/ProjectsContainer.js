import React from "react";
import { useState, useEffect } from "react";
import ProjectList from "./ProjectList";
import ProjectForm from "./ProjectForm";
import ProjectEditForm from "./ProjectEditForm";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [search, setSearch] = useState("");
  const [projectToEdit, setProjectToEdit] = useState(null);

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
    setProjectToEdit(null);
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

  const onEditProject = (projectToEdit) => {
    setProjectToEdit(projectToEdit);
  };

  const onDeleteProject = (projectId) => {
    setProjects((projects) =>
      projects.filter((project) => project.id !== projectId)
    );
  };

  const renderForm = () => {
    if (projectToEdit) {
      return (
        <ProjectEditForm
          projectToEdit={projectToEdit}
          onUpdateProject={onUpdateProject}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <div>
      {renderForm()}
      <ProjectList
        projects={projects}
        setSelectedPhase={setSelectedPhase}
        onEditProject={onEditProject}
        onDeleteProject={onDeleteProject}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};

export default ProjectsContainer;
