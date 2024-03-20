import "./Contact.css";
import HeroPages from "../../components/HeroPages/HeroPages.jsx";
import BookBanner from "../../components/BookBanner/BookBanner.jsx";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FiNavigation } from "react-icons/fi";
import { SlEnvolopeLetter } from "react-icons/sl";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <HeroPages name="Contact" />
      <div className="container">
        <div className="contact-container">
          <div className="contact-container__text">
            <h3>Need additional information?</h3>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <a href="tel:123456789">
              <IoIosCall /> (123) -456-789
            </a>
            <a href="mailto:contact@faridrashidov.com">
              <IoIosMail />
              carrental@gmail.com
            </a>
            <a href="https://www.google.com/maps/place/Bak%C4%B1/data=!4m2!3m1!1s0x40307d6bd6211cf9:0x343f6b5e7ae56c6b?sa=X&ved=1t:242&ictx=111">
              <FiNavigation /> Baku, Azerbaijan
            </a>
          </div>
          <div className="contact-container__form">
            <form>
              <label>
                Full Name <b>*</b>
              </label>
              <input type="text" placeholder='E.g: "Farid Rashidov"' />
              <label>
                Email <b>*</b>
              </label>
              <input type="email" placeholder="youremail@example.com" />
              <label>
                Tell us about it <b>*</b>
              </label>
              <textarea rows="6" placeholder="Write here..."></textarea>
              <button type="submit">
                <SlEnvolopeLetter /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <BookBanner />
    </section>
  );
};

export default Contact;
