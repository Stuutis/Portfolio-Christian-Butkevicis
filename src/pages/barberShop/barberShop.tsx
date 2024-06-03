import { About } from "../../components/barberShopComponnents/about/about";
import { HomeCarousel } from "../../components/barberShopComponnents/carousel/home-carousel";
import { ServicesCarousel } from "../../components/barberShopComponnents/carousel/services-carousel";
import { Navigation } from "../../components/barberShopComponnents/navigation/navigation";
import { ContactFooter } from "../../components/barberShopComponnents/footer/contact-footer";
import { Portfolio } from "../../components/barberShopComponnents/portfolio/portfolio";

export function BarberShop() {
  return (
    <div className="bg-bg-custom text-text-custom" id="home">
      <Navigation />
      <HomeCarousel />
      <About />
      <ServicesCarousel />
      <Portfolio />
      <ContactFooter />
    </div>
  );
}
