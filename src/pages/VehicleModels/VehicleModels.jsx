import "./VehicleModels.css";
import HeroPages from "../../components/HeroPages/HeroPages.jsx";
import BookBanner from "../../components/BookBanner/BookBanner.jsx";
import carModels from "../../data/CarModels.jsx";
import { IoStarOutline } from "react-icons/io5";

const VehicleModels = () => {
  return (
    <section id="vehicle-models" className="models-section">
      <HeroPages name="Vehicle Models" />
      <div className="container">
        <div className="models">
          {carModels.map((car) => (
            <div key={car.id} className="models-box">
              <img src={car.img2} alt={car.title} />
              <div className="models-box__desc">
                <div className="models-box__name-price">
                  <div className="models-box__name">
                    <p>{car.title}</p>
                    <span>
                      {[...Array(5)].map((_, i) => (
                        <IoStarOutline key={i} />
                      ))}
                    </span>{" "}
                  </div>
                  <div className="models-box__price">
                    <p>${car.price}</p> per day
                  </div>
                </div>
                <div className="models-box__details">
                  <span>{car.brand}</span>
                  <span>{car.transmission}</span>
                  <span>{car.doors}</span>
                  <span>{car.fuel}</span>
                </div>
                <button>Book Ride</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BookBanner />
    </section>
  );
};

export default VehicleModels;
