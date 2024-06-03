import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PortfolioChris } from "./pages/portfolio";
import { BarberShop } from "./pages/barberShop/barberShop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioChris />} />
        <Route path="/barbershop" element={<BarberShop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
