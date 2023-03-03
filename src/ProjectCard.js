export default function ProjectCard({ project }) {
  // const {id, name, about, phase, link, image} = project
  // console.log(project);
  return (
    <li className="card">
      <figure className="image">
        <img src={project.image} alt={project.name} />
        <button className="claps">
          <span>👏</span>
          {0}
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
      </footer>
    </li>
  );
}
