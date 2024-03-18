import background from "../assets/background.png";
import heroCar from "../assets/home-car.png";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const Hero = () => {
  const iconStyle = { color: "red" };
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <img src={background} alt="Background" className="hero-background" />
        <div className="hero-content">
          <div className="hero-content-text">
            <h1>Plan your trip now</h1>
            <p className="hero-content-subtitle">
              Save <span>big</span> with our
              <br />
              car rental
            </p>
            <p className="hero-content-description">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              <br />
              flexible pick-up options and much more.
            </p>
            <div className="hero-content-btn">
              <button href="/" className="hero-content-btn-booking">
                Book Ride <FaRegCheckCircle className="icon-btn" />
              </button>
              <button href="/" className="hero-content-btn-learn-more">
                Learn More <FaChevronRight className="icon-btn" />
              </button>
            </div>
          </div>
          <img src={heroCar} alt="Red Car Photo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
