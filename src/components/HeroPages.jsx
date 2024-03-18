import { Link } from "react-router-dom";

const HeroPages = ({ name }) => {
  return (
    <section id="heroPages" className="heroPages-section">
      <div className="heroPages-bg">
        <div className="heroPages-text">
          <h3>{name}</h3>
          <p>
            <Link to="/">Home</Link> / {name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroPages;
