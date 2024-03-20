import "./Testimonial.css";
import testimonialsImg1 from "../../assets/images/testimonials/testimonials-img1.jpg";
import testimonialsImg2 from "../../assets/images/testimonials/testimonials-img2.jpg";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonials-title">
          <h4>Reviewed by People</h4>
          <h2>Client's Testimonials</h2>
          <p>
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="testimonials-boxes">
          <div className="testimonials-box1">
            <p>
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>
            <div className="testimonials-box__name">
              <div className="testimonials-box-name__profile">
                <img src={testimonialsImg1} alt="" />
                <span>
                  <h4>Travis Bickle</h4>
                  <p>New York</p>
                </span>
                <FaQuoteRight className="icon-quote" />
              </div>
            </div>
          </div>
          <div className="testimonials-box2">
            <p>
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!"
            </p>
            <div className="testimonials-box__name">
              <div className="testimonials-box-name__profile">
                <img src={testimonialsImg2} alt="" />
                <span>
                  <h4>Paul Walker</h4>
                  <p>California</p>
                </span>
                <FaQuoteRight className="icon-quote" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
