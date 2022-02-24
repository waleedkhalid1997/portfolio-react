import React from "react";
import Info from "./Info";
import Projects from "./Projects";
import { Link } from "react-router-dom";
export default function Home({ type }) {
  console.log(type, 'home')
  return (
    <div>
      <ul>
        <li>
          <Link to="/home/#info">Info</Link>
        </li>
        <li>
          <Link to="/home/#projects">Projects</Link>
        </li>
      </ul>
      {type === "Info" && <Info />}
      {type === "Projects" && <Projects />}
    </div>
  );
}
