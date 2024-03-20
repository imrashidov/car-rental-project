import "./HeroPages.css";
import { Link } from "react-router-dom";

const HeroPages = ({ name }) => {
  return (
    <section id="heroPages" className="heroPages-section">
      <div className="heroPage">
        <div className="heroPage__overlay"></div>
        <div className="container">
          <div className="heroPage__text">
            <h3>{name}</h3>
            <p>
              <Link to="/">Home</Link> / {name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPages;
