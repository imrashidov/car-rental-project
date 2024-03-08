import { useState } from "react";
import carModels from "../data/CarModels";

const PickCar = () => {
  const [activeCar, setActiveCar] = useState(0);
  const car = carModels[activeCar];

  const handleActiveCar = (e) => {
    setActiveCar(e);
  };

  return (
    <section id="pick" className="pick-section">
      <div className="pick-container">
        <div className="pick-container__title">
          <h5>Vehicle Models</h5>
          <h1>Our rental fleet</h1>
          <p>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
        <div className="pick-container__car-content">
          <div className="car-content__car-models">
            <div className="car-models__title">
              {carModels.map((carModel, index) => (
                <button
                  key={carModel.id}
                  id={index}
                  onClick={(e) => handleActiveCar(e.target.id)}
                  className={activeCar == index ? "active" : ""}
                >
                  {carModel.title}
                </button>
              ))}
            </div>
          </div>
          <div className="car-content__car-image">
            <img src={car.img} alt={car.title} />
          </div>
          <div className="car-content__car-details">
            <div className="car-details__price">
              <span>${car.price}</span>
              <p>/ rent per day</p>
            </div>
            <div className="car-content__details">
              <div className="details">
                <div>
                  <span>Brand</span>
                  <span>{car.brand}</span>
                </div>
                <div>
                  <span>Model</span>
                  <span>{car.model}</span>
                </div>
                <div>
                  <span>Year</span>
                  <span>{car.year}</span>
                </div>
                <div>
                  <span>Doors</span>
                  <span>{car.doors}</span>
                </div>
                <div>
                  <span>AC</span>
                  <span>{car.ac}</span>
                </div>
                <div>
                  <span>Transmission</span>
                  <span>{car.transmission}</span>
                </div>
                <div>
                  <span>Fuel</span>
                  <span>{car.fuel}</span>
                </div>
              </div>
            </div>
            <button>Reserve now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickCar;
