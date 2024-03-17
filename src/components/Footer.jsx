import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <ul className="footer-content__1">
            <li>
              <span>CAR</span>
            </li>
            <li>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li>
              <IoIosCall />
              <a href="tel:123456789">(123)-456-789</a>
            </li>
            <li>
              <IoIosMail />
              <a href="mailto:contact@faridrashidov.com">
                contact@faridrashidov.com
              </a>
            </li>
            <li>Design by XpeedStudio</li>
          </ul>
          <ul className="footer-content__2">
            <li>COMPANY</li>
            <li>
              <a href="#">New York</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">How we work</a>
            </li>
          </ul>
          <ul className="footer-content__3">
            <li>WORKING HOURS</li>
            <li>Mon - Fri: 9:00 AM - 9:00 PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>
          <ul className="footer-content__4">
            <li>SUBSCRIPTION</li>
            <li>Subscribe your Email address for latest news & updates.</li>
            <li>
              <input type="email" placeholder="Enter Email Address" />
            </li>
            <li>
              <button>Submit</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
