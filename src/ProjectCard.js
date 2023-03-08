import { FaPencilAlt, FaTrash } from "react-icons/fa";

export default function ProjectCard({
  project,
  onEditProject,
  onDeleteProject,
  onUpdateProject,
}) {
  // const {id, name, about, phase, link, image} = project
  // console.log(project);

  const handleClap = () => {
    const newClapCount = project.claps + 1;
    fetch(`http://localhost:3001/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ claps: newClapCount }),
    })
      .then((res) => res.json())
      .then(onUpdateProject);
  };

  const handleEditClick = () => {
    onEditProject(project);
  };
  const handleDeleteClick = () => {
    //optimistic Delete
    // if (window.confirm("Are you sure you want to delete this project?")) {
    //   fetch(`http://localhost:3001/projects/${project.id}`, {
    //     method: "DELETE",
    //   });
    // }
    // onDeleteProject(project.id);
    //pessimistic Delete
    if (window.confirm("Are you sure you want to delete this project?")) {
      fetch(`http://localhost:3001/projects/${project.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          onDeleteProject(project.id);
        }
      });
    }
  };

  return (
    <li className="card">
      <figure className="image">
        <img src={project.image} alt={project.name} />
        <button onClick={handleClap} className="claps">
          👏{project.claps}
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
