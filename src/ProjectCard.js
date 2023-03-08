import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useState } from "react";

export default function ProjectCard({
  project,
  onEditProject,
  onDeleteProject,
}) {
  // const {id, name, about, phase, link, image} = project
  // console.log(project);
  const [clapCount, setClapCount] = useState(0);
  const handleClap = () => setClapCount((clapCount) => clapCount + 1);

  const handleEditClick = () => {
    onEditProject(project);
  };
  const handleDeleteClick = () => {
    onDeleteProject(project.id);
  };

  return (
    <li className="card">
      <figure className="image">
        <img src={project.image} alt={project.name} />
        <button onClick={handleClap} className="claps">
          👏{clapCount}
        </button>
      </figure>
      <section className="details">
        <h4>{project.name}</h4>
        <p>{project.about}</p>
        <p>
          <a href={project.link}>Project-Demo</a>
        </p>
      </section>
      <footer className="extra">
        <span className="badge blue"> {`Phase ${project.phase}`} </span>
        <div className="manage">
          <button onClick={handleEditClick}>
            <FaPencilAlt />
          </button>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
}
