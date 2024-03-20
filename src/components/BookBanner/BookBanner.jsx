import "./BookBanner.css";
import { IoCallOutline } from "react-icons/io5";

const BookBanner = () => {
  return (
    <div className="book-banner">
      <div className="book-banner__overlay"></div>
      <div className="container">
        <div className="book-banner__text">
          <h3>Book a car by getting in touch with us</h3>
          <span>
            <IoCallOutline className="book-banner__logo" />
            <h3>(123) 456-7869</h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookBanner;
