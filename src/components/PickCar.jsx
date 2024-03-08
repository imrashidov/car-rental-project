import carModels from "../data/CarModels";

const PickCar = () => {
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
              {carModels.map((carModel) => (
                <button key={carModel.id}>{carModel.title}</button>
              ))}
            </div>
          </div>
          <div className="car-content__car-image">
            <img src={carModels[0].img} alt={carModels[0].title} />
          </div>
          <div className="car-content__car-details">
            <div className="car-details__price">
              <span>${carModels[0].price}</span>
              <p>/ rent per day</p>
            </div>
            <div className="car-content__details">
              <div className="details">
                <div>
                  <span>Brand</span>
                  <span>{carModels[0].brand}</span>
                </div>
                <div>
                  <span>Model</span>
                  <span>{carModels[0].model}</span>
                </div>
                <div>
                  <span>Year</span>
                  <span>{carModels[0].year}</span>
                </div>
                <div>
                  <span>Doors</span>
                  <span>{carModels[0].doors}</span>
                </div>
                <div>
                  <span>AC</span>
                  <span>{carModels[0].ac}</span>
                </div>
                <div>
                  <span>Transmission</span>
                  <span>{carModels[0].transmission}</span>
                </div>
                <div>
                  <span>Fuel</span>
                  <span>{carModels[0].fuel}</span>
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
