import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import logo from "../../assets/nav-logo.png";
import NavLinks from "../../data/NavLinks";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleMenuClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <nav>
      {/* Mobile */}
      <div className={`navbar-slider ${isClicked ? "navbar-slider-open" : ""}`}>
        {isClicked && (
          <div>
            <IoMdClose onClick={handleMenuClick} />
            <ul>
              {NavLinks.map((item) => {
                return (
                  <li key={item.link}>
                    <Link to={item.link} onClick={handleMenuClick}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="navbar-slider_btn">
              <button href="/" className="navbar-btn-sign-in">
                Sign In
              </button>
              <button href="/" className="navbar-btn-register">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Desktop */}
      <div className="navbar">
        <div className="navbar-img">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="navbar-links">
          {NavLinks.map((item) => {
            return (
              <li key={item.link}>
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
        <div className="navbar-menu" onClick={handleMenuClick}>
          <IoMdMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
