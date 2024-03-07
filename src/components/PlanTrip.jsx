import planCar from "../assets/plan-car.png";
import planOperator from "../assets/plan-operator.png";
import planDrive from "../assets/plan-drive.png";

const PlanTrip = () => {
  const planData = [
    {
      id: 1,
      img: planCar,
      title: "Select Car",
      desc: "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs",
    },
    {
      id: 2,
      img: planOperator,
      title: "Contact Operator",
      desc: "Our knowledgeable and friendly operators are always ready to help with any questions or concerns",
    },
    {
      id: 3,
      img: planDrive,
      title: "Let's Drive",
      desc: "Whether you're hitting the open road, we've got you covered with our wide range of cars",
    },
  ];

  return (
    <section id="plan" className="plan-section">
      <div className="plan-container">
        <h3>Plan your trip now</h3>
        <h1>Quick & easy car rental</h1>
        <div>
          <div className="plan-box">
            {planData.map((plan) => (
              <div key={plan.id}>
                <img src={plan.img} alt="" />
                <h5>{plan.title}</h5>
                <p>{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTrip;
