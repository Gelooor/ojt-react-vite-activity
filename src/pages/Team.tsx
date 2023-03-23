import { useState } from "react";

import HeaderStyle from "../components/HeaderStyle";
import Card from "../components/Card";

import team_1 from "../assets/images/team-img1.png";
import team_2 from "../assets/images/team-img2.png";
import team_3 from "../assets/images/team-img3.png";

import { Iinformation } from "../interface/Types";

export default function Team() {
  const [activeCard, setActiveCard] = useState([
    {
      id: 1,
      imgUrl: team_1,
      name: "Paul Narch",
      job: "Barber",
      isActive: false,
    },
    {
      id: 2,
      imgUrl: team_2,
      name: "Steven Joseph",
      job: "Barber",
      isActive: false,
    },
    {
      id: 3,
      imgUrl: team_3,
      name: "Alexander David",
      job: "Shaver",
      isActive: false,
    },
  ]);

  console.log(typeof activeCard[1].job);

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
      id='team'
      className='px-12 py-28 font-poppins uppercase text-center sm:px-40'
    >
      <HeaderStyle color={"gray-400"} text={"Professional"} size={"base"} />
      <HeaderStyle color={"yellow-500"} text={"Our Team"} size={"4xl"} />

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
