import HeaderStyle from "../components/HeaderStyle";
import TeamCard from "../components/TeamCard";

import team_1 from "../assets/images/team-img1.png";
import team_2 from "../assets/images/team-img2.png";
import team_3 from "../assets/images/team-img3.png";

export default function Team() {
  return (
    <section
      id='team'
      className='px-12 py-28 font-poppins uppercase text-center sm:px-40'
    >
      <HeaderStyle color={"gray-400"} text={"Professional"} size={"base"} />
      <HeaderStyle color={"yellow-500"} text={"Our Team"} size={"4xl"} />

      <div className='flex flex-col items-center justify-center gap-10 sm:flex-row pt-10'>
        {[
          [team_1, "Paul Narch", "Barber"],
          [team_2, "Steven Joseph", "Barber"],
          [team_3, "Alexander David", "Shaver"],
        ].map(([url, name, job]) => (
          <TeamCard imageUrl={url} name={name} job={job} />
        ))}
      </div>
    </section>
  );
}
