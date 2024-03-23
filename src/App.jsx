import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import VehicleModels from "./pages/VehicleModels/VehicleModels.jsx";
import Testimonials from "./pages/Testimonials/Testimonials.jsx";
import OurTeam from "./pages/OurTeam/OurTeam.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vehicle-models" element={<VehicleModels />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
