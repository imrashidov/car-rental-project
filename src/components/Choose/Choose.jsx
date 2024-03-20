import React from "react";
import chooseMain from "../../assets/images/choose/choose-main.png";
import chooseData from "../../data/ChooseData";
import { FaChevronRight } from "react-icons/fa";

const Choose = () => {
  return (
    <section id="choose" className="choose-section">
      <div className="container">
        <div className="choose-main">
          <img
            src={chooseMain}
            alt="Image of cars"
            className="choose-main__image"
          />
          <div className="text-container">
            <div className="text-container__left">
              <h4>Why Choose Us</h4>
              <h2>Best valued deals you will ever find</h2>
              <p>
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <button>
                Find Details <FaChevronRight className="icon-chevron" />
              </button>
            </div>
            <div className="text-container__right">
              {chooseData.map((item) => (
                <div key={item.id} className="text-container__right-box">
                  <img src={item.img} alt={item.title} />
                  <div className="text-container__right-box-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
