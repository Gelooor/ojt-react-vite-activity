import TopConctactInformation from "./TopConctactInformation";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";

import BgHero from "../assets/images/hero-bg.png";

export default function Header() {
  return (
    <header
      className='bg-top bg-110'
      style={{ backgroundImage: `url(${BgHero})` }}
    >
      <TopConctactInformation />
      <Navigation />
      <HeroSection />
    </header>
  );
}
