import React, { useState } from "react";

import HeaderStyle from "../components/HeaderStyle";
import Card from "../components/Card";

import service_1 from "../assets/images/service-1.png";
import service_2 from "../assets/images/service-2.png";
import service_3 from "../assets/images/service-3.png";

import { Iinformation } from "../interface/Types";

export default function Service() {
  const [activeCard, setActiveCard] = useState<Iinformation[]>([
    {
      id: 1,
      imgUrl: service_1,
      name: "Classic Haircut",
      isActive: false,
    },
    {
      id: 2,
      imgUrl: service_2,
      name: "Clipper Cut",
      isActive: false,
    },
    {
      id: 3,
      imgUrl: service_3,
      name: "Razoe Shaver",
      isActive: false,
    },
  ]);

  const toggleActiveCard = (index: number) => {
    setActiveCard((prev: Iinformation[]) => [
      ...prev.map((elem, i) => {
        if (i === index) {
          return {
            ...elem,
            isActive: !elem.isActive,
          };
        }
        return {
          ...elem,
          isActive: false,
        };
      }),
    ]);
  };

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
        {activeCard.map((information: Iinformation, index: number) => {
          return (
            <Card
              key={index}
              informations={information}
              index={index}
              toggleActiveCard={toggleActiveCard}
            />
          );
        })}
      </div>
    </section>
  );
}
