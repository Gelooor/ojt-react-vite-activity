import HeaderStyle from "../components/HeaderStyle";
import ServiceCard from "../components/ServiceCard";

import service_1 from "../assets/images/service-1.png";
import service_2 from "../assets/images/service-2.png";
import service_3 from "../assets/images/service-3.png";

export default function Service() {
  return (
    <section
      id='service'
      className='px-12 py-28 bg-gray-100 text-center font-poppins sm:px-40'
    >
      <HeaderStyle
        color={"gray-400"}
        text={"Nothing But The Best"}
        size={"base"}
      />
      <HeaderStyle color={"yellow-500"} text={"Our Services"} size={"4xl"} />

      <div className='flex flex-col items-center justify-center gap-10 sm:flex-row pt-10'>
        {[
          [service_1, "Classic Haircut"],
          [service_2, "Clipper Cut"],
          [service_3, "Razoe Shaver"],
        ].map(([url, text], index) => (
          <ServiceCard key={index} imageUrl={url} haircut={text} />
        ))}
      </div>
    </section>
  );
}
