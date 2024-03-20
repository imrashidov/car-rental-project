import Hero from "../../components/Hero/Hero.jsx";
import Book from "../../components/Book/Book.jsx";
import PlanTrip from "../../components/PlanTrip/PlanTrip.jsx";
import PickCar from "../../components/PickCar/PickCar.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Choose from "../../components/Choose/Choose.jsx";
import Testimonial from "../../components/Testimonial/Testimonial.jsx";
import Faq from "../../components/Faq/Faq.jsx";
import Download from "../../components/Download/Download.jsx";

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
