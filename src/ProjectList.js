import { useState } from "react";
import ProjectCard from "./ProjectCard";
// import projects from "./projects";

export default function ProjectList({ projects, setSelectedPhase }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
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
      <h1> All Project </h1>
      <div className="filters">
        <button onClick={() => setSelectedPhase("")}>All</button>
        <button onClick={() => setSelectedPhase("1")}>
          Phase 1 <br></br>
          {"(html/css) "}
        </button>
        <button onClick={() => setSelectedPhase("2")}>
          Phase 2 <br></br>
          {"(JavaScript) "}
        </button>
        <button onClick={() => setSelectedPhase("3")}>
          Phase 3 <br></br>
          {"(FrontEnd) "}
        </button>
        <button onClick={() => setSelectedPhase("4")}>
          Phase 4 <br></br>
          {"(BackEnd) "}
        </button>
        <button onClick={() => setSelectedPhase("5")}>
          Phase 5 <br></br>
          {"(FullStack) "}
        </button>
      </div>
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={handleChange}
      />
      <ul className="cards">{renderProjects}</ul>
    </section>
  );
}
