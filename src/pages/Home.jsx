import Hero from "../components/Hero.jsx";
import Book from "../components/Book.jsx";
import PlanTrip from "../components/PlanTrip.jsx";
import PickCar from "../components/PickCar.jsx";
import Banner from "../components/Banner.jsx";
import Choose from "../components/Choose.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Faq from "../components/Faq.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <Book />
      <PlanTrip />
      <PickCar />
      <Banner />
      <Choose />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
