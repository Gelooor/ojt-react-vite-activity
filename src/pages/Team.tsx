import HeaderStyle from "../components/HeaderStyle";

import team_1 from "../assets/images/team-img1.png";
import team_2 from "../assets/images/team-img2.png";
import team_3 from "../assets/images/team-img3.png";

export default function Team() {
  const containerStyle1 =
    "flex flex-col justify-center gap-3 border-2 border-gray-200 border-solid pb-4 hover:shadow-xl";
  const containerStyle2 =
    "flex flex-col items-center justify-center gap-2 px-14 sm:px-4";

  return (
    <section
      id='team'
      className='px-12 py-28 font-poppins uppercase text-center sm:px-40'
    >
      <HeaderStyle color={"gray-400"} text={"Professional"} size={"base"} />
      <HeaderStyle color={"yellow-500"} text={"Our Team"} size={"4xl"} />

      <div className='flex flex-col items-center justify-center gap-10 sm:flex-row pt-10'>
        <div className={containerStyle1}>
          <img src={team_1} alt='' />
          <div className={containerStyle2}>
            <p className='font-bold'>Paul Narch</p>
            <p>Barber</p>
          </div>
        </div>
        <div className={containerStyle1}>
          <img src={team_2} alt='' />
          <div className={containerStyle2}>
            <p className='font-bold'>Steven Josephin</p>
            <p>Barber</p>
          </div>
        </div>
        <div className={containerStyle1}>
          <img src={team_3} alt='' />
          <div className={containerStyle2}>
            <p className='font-bold'>Alexander David</p>
            <p>Shaver</p>
          </div>
        </div>
      </div>
    </section>
  );
}
