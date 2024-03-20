import HeroPages from "../components/HeroPages.jsx";
import Testimonial from "../components/Testimonial.jsx";
import BookBanner from "../components/BookBanner.jsx";

const Testimonials = () => {
  return (
    <section id="testimonials-page">
      <HeroPages name="Testimonials" />
      <Testimonial />
      <BookBanner />
    </section>
  );
};
export default Testimonials;
