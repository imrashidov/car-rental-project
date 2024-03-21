import "./Book.css";
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const Book = () => {
  return (
    <section id="book" className="book-section">
      <div className="container">
        <div className="book-content">
          <h1>Book a car</h1>
          <div className="book-form">
            <form>
              <div className="book-form-select">
                <label>
                  <FaCar /> Select Your Car Type <b>*</b>
                </label>
                <select>
                  <option>Select your type</option>
                  <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                  <option value="VW Golf 6">VW Golf 6</option>
                  <option value="Toyota Camry">Toyota Camry</option>
                  <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                  <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                  <option value="VW Passat CC">VW Passat CC</option>
                </select>
              </div>
              <div className="book-form-select">
                <label>
                  <FaLocationDot /> Pick-up <b>*</b>
                </label>
                <select>
                  <option>Select pick-up location</option>
                  <option value="Baku">Baku</option>
                  <option value="Sumgait">Sumgait</option>
                  <option value="Khirdalan">Khirdalan</option>
                  <option value="Jabrayil">Jabrayil</option>
                  <option value="Shaki">Shaki</option>
                </select>
              </div>
              <div className="book-form-select">
                <label>
                  <FaLocationDot /> Drop-off <b>*</b>
                </label>
                <select>
                  <option>Select drop-off location</option>
                  <option value="Baku">Baku</option>
                  <option value="Sumgait">Sumgait</option>
                  <option value="Khirdalan">Khirdalan</option>
                  <option value="Jabrayil">Jabrayil</option>
                  <option value="Shaki">Shaki</option>
                </select>
              </div>
              <div className="book-form-time">
                <label>
                  <FaCalendarAlt /> Pick-up <b>*</b>
                </label>
                <input type="date" id="pickTime" />
              </div>
              <div className="book-form-time">
                <label>
                  <FaCalendarAlt /> Drop-off <b>*</b>
                </label>
                <input type="date" id="dropTime" />
              </div>
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
