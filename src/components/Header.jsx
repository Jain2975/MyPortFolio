import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">My Portfolio</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/OffTopic">Off-Topic</Link>
        <a href="/resume.pdf" download className="resume-link">Resume</a>
      </nav>
    </header>
  );
}

export default Header;
