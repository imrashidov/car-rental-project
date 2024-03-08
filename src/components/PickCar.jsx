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
          <div className="car-models"></div>
          <div className="car-image"></div>
          <div className="car-details"></div>
        </div>
      </div>
    </section>
  );
};

export default PickCar;
