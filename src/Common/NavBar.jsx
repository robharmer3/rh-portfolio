import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <ul id="nav-bar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skill Set</Link>
        </li>
      </ul>
    </nav>
  );
}
