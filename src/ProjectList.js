import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projects";

export default function ProjectList() {
  const [search, setSearch] = useState("");

  const hanleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchQuery = projects.filter((project) => {
    return (
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.about.toLowerCase().includes(search.toLowerCase())
    );
  });

  const renderProjects = searchQuery.map((project) => {
    return <ProjectCard key={project.id} project={project} />;
  });

  return (
    <section>
      <h1> All Project</h1>
      <div className="filters">
        <button>All</button>
        <button>Phase1</button>
        <button>Phase2</button>
        <button>Phase3</button>
        <button>Phase4</button>
        <button>Phase5</button>
      </div>
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={hanleChange}
      />
      <ul className="cards">{renderProjects}</ul>
    </section>
  );
}
