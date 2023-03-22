import HeaderStyle from "../components/HeaderStyle";
import Card from "../components/Card";

import team_1 from "../assets/images/team-img1.png";
import team_2 from "../assets/images/team-img2.png";
import team_3 from "../assets/images/team-img3.png";

export default function Team() {
  const team = [
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
  ];
  return (
    <section
      id='team'
      className='px-12 py-28 font-poppins uppercase text-center sm:px-40'
    >
      <HeaderStyle color={"gray-400"} text={"Professional"} size={"base"} />
      <HeaderStyle color={"yellow-500"} text={"Our Team"} size={"4xl"} />

      {/* <div className='flex flex-col items-center justify-center gap-10 sm:flex-row pt-10'> */}
      <Card informations={team} />
    </section>
  );
}
