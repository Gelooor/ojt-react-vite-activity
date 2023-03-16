import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import TopConctactInformation from "./TopConctactInformation";

export default function Header() {
  return (
    <header className='bg-top bg-hero bg-110 bg-black bg-no-repeat xl:bg-right-top'>
      <TopConctactInformation />
      <Navigation />
      <HeroSection />
    </header>
  );
}
