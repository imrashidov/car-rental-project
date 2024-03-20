import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import VehicleModels from "./pages/VehicleModels.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vehicle-models" element={<VehicleModels />} />
        <Route path="testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
