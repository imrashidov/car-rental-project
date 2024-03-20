import PlanTrip from "../components/PlanTrip/PlanTrip.jsx";
import HeroPages from "../components/HeroPages/HeroPages.jsx";
import BookBanner from "../components/BookBanner/BookBanner.jsx";
import aboutMain from "../assets/images/about/about-main.jpg";
import aboutImg1 from "../assets/images/about/about-types.png";
import aboutImg2 from "../assets/images/about/about-rental.png";
import aboutImg3 from "../assets/images/about/about-repair.png";

const About = () => {
  return (
    <section id="about" className="about-section">
      <HeroPages name="About" />
      <div className="container">
        <div className="about-main">
          <img src={aboutMain} alt="About Main" className="about-main__img" />
          <div className="about-main__text">
            <h4>About Company</h4>
            <h2>You start the engine and your adventure begins</h2>
            <p>
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="about-main__text-icons">
              <div className="about-main__text-icons-box">
                <img src={aboutImg1} alt="" />
                <span>
                  <h4>12</h4>
                  <p>Car Types</p>
                </span>
              </div>
              <div className="about-main__text-icons-box">
                <img src={aboutImg2} alt="" />
                <span>
                  <h4>72</h4>
                  <p>Rental Outlets</p>
                </span>
              </div>
              <div className="about-main__text-icons-box">
                <img src={aboutImg3} alt="" />
                <span>
                  <h4>94</h4>
                  <p>Repair Shop</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <PlanTrip />
      </div>
      <BookBanner />
    </section>
  );
};

export default About;
