import car320 from "../assets/images/pick-car/car-320.jpg";
import carA1 from "../assets/images/pick-car/car-a1.jpg";
import carCamry from "../assets/images/pick-car/car-camry.jpg";
import carGlk from "../assets/images/pick-car/car-glk.jpg";
import carGolf from "../assets/images/pick-car/car-golf.jpg";
import carPassat from "../assets/images/pick-car/car-passat.jpg";
import vehicle320 from "../assets/images/vehicle-models/vehicle-bmw.png";
import vehicleA1 from "../assets/images/vehicle-models/vehicle-audi.png";
import vehicleCamry from "../assets/images/vehicle-models/vehicle-camry.png";
import vehicleGolf from "../assets/images/vehicle-models/vehicle-golf.png";
import vehicleGlk from "../assets/images/vehicle-models/vehicle-mercedes.png";
import vehiclePassat from "../assets/images/vehicle-models/vehicle-passat.png";

const carModels = [
  {
    id: 1,
    title: "Audi A1 S-Line",
    img: carA1,
    img2: vehicleA1,
    price: 45,
    brand: "Audi",
    model: "A1",
    year: 2012,
    doors: "4/5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Gasoline",
  },
  {
    id: 2,
    title: "VW Golf 6",
    img: carGolf,
    img2: vehicleGolf,
    price: 37,
    brand: "Volkswagen",
    model: "Golf 6",
    year: 2008,
    doors: "4/5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },
  {
    id: 3,
    title: "Toyota Camry",
    img: carCamry,
    img2: vehicleCamry,
    price: 30,
    brand: "Toyota",
    model: "Camry",
    year: 2006,
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Hybrid",
  },
  {
    id: 4,
    title: "BMW 320 ModernLine",
    img: car320,
    img2: vehicle320,
    price: 35,
    brand: "BMW",
    model: "320",
    year: 2012,
    doors: "4/5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },
  {
    id: 5,
    title: "Mercedes-Benz GLK",
    img: carGlk,
    img2: vehicleGlk,
    price: 50,
    brand: "Mercedes",
    model: "GLK",
    year: 2006,
    doors: "4/5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },
  {
    id: 6,
    title: "VW Passat CC",
    img: carPassat,
    img2: vehiclePassat,
    price: 25,
    brand: "Volkswagen",
    model: "Passat CC",
    year: 2008,
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
  },
];

export default carModels;
