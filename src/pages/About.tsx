import HeaderStyle from "../components/HeaderStyle";
import ButtonStyle from "../components/ButtonStyle";

import aboutImage from "../assets/images/1.png";

export default function AboutSection() {
  return (
    <section
      id='about'
      className='text-left px-12 py-28 flex flex-col gap-10 justify-center items-center text-sm text-gray-500 sm:flex-row sm:px-40'
    >
      <div className='flex flex-col gap-10 sm:w-[50%]'>
        <div>
          <HeaderStyle
            color={"gray-400"}
            text={"The Unique Story"}
            size={"base"}
          />
          <HeaderStyle
            color={"yellow-500"}
            text={"50 Years of Experience"}
            size={"4xl"}
          />
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium.
        </p>

        <ButtonStyle color={"yellow-500"} hoverColor={"gray-800"} />
      </div>
      <img className='sm:w-[50%]' src={aboutImage} alt='' />
    </section>
  );
}
