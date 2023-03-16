import HeaderStyle from "../components/HeaderStyle";
import Ellipse from "../components/Ellipse";
import EllipseFilled from "../components/EllipseFilled";

export default function Testimonial() {
  return (
    <section
      id='testimonial'
      className='bg-black bg-testimonial bg-left bg-no-repeat bg-55 text-gray-300 text-left p-12 flex flex-col gap-1 sm:bg-right sm:px-40'
    >
      <div>
        <HeaderStyle
          color={"white"}
          text={"1000+ Happy Clients"}
          size={"base"}
        />
        <HeaderStyle color={"yellow-500"} text={"Testimonials"} size={"4xl"} />
      </div>
      <p className='text-xs font-poppins drop-shadow-lg sm:w-[50%]'>
        “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla. ”
      </p>
      <p className='text-xs pt-4 font-poppins'>
        John Doe , CEO Microsoft <time className='block'>July 17, 2018</time>
      </p>
      <div className='flex pt-4 gap-0.5'>
        <Ellipse height='12px' width='12px' />
        <EllipseFilled height='12px' width='12px' />
        <EllipseFilled height='12px' width='12px' />
      </div>
    </section>
  );
}
