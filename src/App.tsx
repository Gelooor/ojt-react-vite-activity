// import "./App.css";

import Header from "./pages/Header";
import About from "./pages/About";
import Service from "./pages/Service";
import Testimonial from "./pages/Testimonial";
import Team from "./pages/Team";
import Ad from "./pages/Ad";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

import bgMap from "./assets/images/map.png";

export default function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <About />
        <Service />
        <Testimonial />
        <Team />
        <Ad />
        <Contact />
      </main>
      <div
        style={{ backgroundImage: `url(${bgMap})` }}
        className='h-28 bg-center sm:h-96'
      ></div>
      <Footer />
    </div>
  );
}
