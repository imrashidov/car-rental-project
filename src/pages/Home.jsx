import Hero from "../components/Hero.jsx";
import Book from "../components/Book.jsx";
import PlanTrip from "../components/PlanTrip.jsx";
import PickCar from "../components/PickCar.jsx";
import Banner from "../components/Banner.jsx";
import Choose from "../components/Choose.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Faq from "../components/Faq.jsx";
import Download from "../components/Download.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <Book />
      <PlanTrip />
      <PickCar />
      <Banner />
      <Choose />
      <Testimonial />
      <Faq />
      <Download />
    </div>
  );
};

export default Home;
