import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [recentProjects, setRecentProjects] = useState([]);

  useEffect(() => {
    // fetch the 3 most recently added projects from json-server
    fetch("http://localhost:3001/projects?_sort=id&_order=desc&_limit=3")
      .then((r) => r.json())
      .then((recentProjects) => {
        setRecentProjects(recentProjects);
      });
  }, []);

  return (
    <section className="box home-container">
      <h1 className="home-title">Welcome to ProExtreme Tracking App</h1>
      <p className="home-description">Manages all My projects in one place.</p>
      <h3>Recent Projects:</h3>
      {recentProjects.map((project) => (
        <div key={project.id} className="latest">
          <p>{project.name}</p>
        </div>
      ))}
      <div style={{ margin: "1rem 0" }}>
        <Link className="button" to="/projects">
          View All Projects
        </Link>
      </div>
    </section>
  );
}

export default Home;
