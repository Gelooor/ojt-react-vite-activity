import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import TopConctactInformation from "../components/TopConctactInformation";

export default function Header() {
  return (
    <header className='bg-top bg-hero bg-110 bg-black bg-no-repeat xl:bg-right-top'>
      <TopConctactInformation />
      <Navigation />
      <HeroSection />
    </header>
  );
}
