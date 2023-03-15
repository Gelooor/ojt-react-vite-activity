import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import TopConctactInformation from "./TopConctactInformation";

export default function Header() {
  return (
    <header className='bg-top bg-hero bg-110'>
      <TopConctactInformation />
      <Navigation />
      <HeroSection />
    </header>
  );
}
