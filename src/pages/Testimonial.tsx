import HeaderStyle from "../components/HeaderStyle";

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
      <div className='flex pt-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='12px'
          viewBox='0 0 24 24'
          width='12px'
          fill='#daa520'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z' />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          enable-background='new 0 0 24 24'
          height='12px'
          viewBox='0 0 24 24'
          width='12px'
          fill='#daa520'
        >
          <g>
            <rect fill='none' height='24' width='24' />
          </g>
          <g>
            <path d='M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z' />
          </g>
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          enable-background='new 0 0 24 24'
          height='12px'
          viewBox='0 0 24 24'
          width='12px'
          fill='#daa520'
        >
          <g>
            <rect fill='none' height='24' width='24' />
          </g>
          <g>
            <path d='M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z' />
          </g>
        </svg>
      </div>
    </section>
  );
}
