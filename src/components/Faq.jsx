import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const Faq = () => {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "faq-box__answer-active" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "faq-box__question-active" : "";
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-content">
          <div className="faq-content__title">
            <h4>FAQ</h4>
            <h2>Frequently Asked Questions</h2>
            <p>
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
          <div className="faq-content__questions">
            <div className="faq-box">
              <div
                id="q1"
                onClick={() => openQ("q1")}
                className={`faq-box__question  ${getClassQuestion("q1")}`}
              >
                1. What is special about comparing rental car deals?{" "}
                <IoChevronDown className="faq-chevron" />
              </div>
              <div
                id="q1"
                onClick={() => openQ("q1")}
                className={`faq-box__answer ${getClassAnswer("q1")}`}
              >
                <p>
                  Comparing rental car deals is important as it helps find the
                  best deal that fits your budget and requirements, ensuring you
                  get the most value for your money. By comparing various
                  options, you can find deals that offer lower prices,
                  additional services, or better car models. You can find car
                  rental deals by researching online and comparing prices from
                  different rental companies.
                </p>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q2"
                onClick={() => openQ("q2")}
                className={`faq-box__question ${getClassQuestion("q2")}`}
              >
                2. How do I find the car rental deals?{" "}
                <IoChevronDown className="faq-chevron" />
              </div>
              <div
                id="q2"
                onClick={() => openQ("q2")}
                className={`faq-box__answer ${getClassAnswer("q2")}`}
              >
                <p>
                  You can find car rental deals by researching online and
                  comparing prices from different rental companies. Websites
                  such as Expedia, Kayak, and Travelocity allow you to compare
                  prices and view available rental options. It is also
                  recommended to sign up for email newsletters and follow rental
                  car companies on social media to be informed of any special
                  deals or promotions.
                </p>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q3"
                onClick={() => openQ("q3")}
                className={`faq-box__question ${getClassQuestion("q3")}`}
              >
                3. How do I find such low rental car prices?{" "}
                <IoChevronDown className="faq-chevron" />
              </div>
              <div
                id="q3"
                onClick={() => openQ("q3")}
                className={`faq-box__answer ${getClassAnswer("q3")}`}
              >
                <p>
                  Book in advance: Booking your rental car ahead of time can
                  often result in lower prices. Compare prices from multiple
                  companies: Use websites like Kayak, Expedia, or Travelocity to
                  compare prices from multiple rental car companies. Look for
                  discount codes and coupons: Search for discount codes and
                  coupons that you can use to lower the rental price. Renting
                  from an off-airport location can sometimes result in lower
                  prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
