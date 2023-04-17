import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../components/Logo/wordlogo.png";

function Nav() {
  return (
    <nav>
      <Link to="/" className="logo-link">
        <img src={logo} alt="Fosterfund logo" className="logo" />
      </Link>
      <div className="nav-links">
        <Link to="/" className="button-link">
          HOME
        </Link>
        <Link to="/projects" className="button-link">
          PROJECTS
        </Link>
        <Link to="/about" className="button-link">
          ABOUT
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
