import HeroPages from "../components/HeroPages/HeroPages.jsx";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import BookBanner from "../components/BookBanner/BookBanner.jsx";

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
