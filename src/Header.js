import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className="branding">
        <Link to="/">
          <span className="logo">{"//"}</span>
          Proj<span className="logo">Extreme</span>
        </Link>
      </h1>
      <nav>
        <div className="navigation">
          <NavLink className="button" exact to="/">
            Home
          </NavLink>
          <NavLink className="button" exact to="/projects">
            All Projects
          </NavLink>
          <NavLink className="button" to="/projects/new">
            Add Project
          </NavLink>
          <NavLink className="button" to="/about">
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
