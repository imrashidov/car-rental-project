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
                <h3 key={carModel.id}>{carModel.title}</h3>
              ))}
            </div>
          </div>
          <div className="car-content__car-image">
            <img src={carModels[0].img} alt="" />
          </div>
          <div className="car-content__car-details">
            <div className="car-details__price">
              <span>${carModels[0].price}</span>
              <p>/ rent per day</p>
            </div>
            <table>
              <tbody>
                <tr>
                  <td>Brand:</td>
                  <td>{carModels[0].brand}</td>
                </tr>
                <tr>
                  <td>Model:</td>
                  <td>{carModels[0].model}</td>
                </tr>
                <tr>
                  <td>Year:</td>
                  <td>{carModels[0].year}</td>
                </tr>
                <tr>
                  <td>Doors:</td>
                  <td>{carModels[0].doors}</td>
                </tr>
                <tr>
                  <td>AC:</td>
                  <td>{carModels[0].ac}</td>
                </tr>
                <tr>
                  <td>Transmission:</td>
                  <td>{carModels[0].transmission}</td>
                </tr>
                <tr>
                  <td>Fuel:</td>
                  <td>{carModels[0].fuel}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickCar;
