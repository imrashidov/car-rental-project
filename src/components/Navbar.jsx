import { Link } from "react-router-dom";
import logo from "../assets/nav-logo.png";
import NavLinks from "../data/NavLinks.jsx";

const Navbar = ({ title }) => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-img">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="navbar-links">
          {NavLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="navbar-btn">
          <a href="/" className="navbar-btn-sign-in">
            Sign In
          </a>
          <a href="/" className="navbar-btn-register">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
