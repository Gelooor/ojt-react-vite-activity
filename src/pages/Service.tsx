import React, { useState } from "react";

import HeaderStyle from "../components/HeaderStyle";
import Card from "../components/Card";

import service_1 from "../assets/images/service-1.png";
import service_2 from "../assets/images/service-2.png";
import service_3 from "../assets/images/service-3.png";

export default function Service() {
  const service = [
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
      id: 1,
      imgUrl: service_3,
      name: "Razoe Shaver",
      isActive: false,
    },
  ];

  // const ``information = [
  //   [service_1, "Classic Haircut"],
  //   [service_2, "Clipper Cut"],
  //   [service_3, "Razoe Shaver"],
  // ];

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

      <Card informations={service} />
    </section>
  );
}
