export default function HeroSection() {
  const buttonStyle =
    "font-poppins uppercase w-36 h-10 rounded-3xl border-2 border-solid text-white border-transparent border-white hover:bg-yellow-500 hover:border-yellow-500";
  return (
    <section className='text-white text-left px-12 py-60 flex flex-col gap-2 sm:pl-40'>
      <h1 className='font-crimsonText text-4xl'>
        Quality Barber <span className='block sm:inline'>Shop</span>
      </h1>

      <p className='font-poppins text-xs sm:w-[35%]'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className='flex flex-col gap-2 pt-2 sm:flex-row'>
        <button className={buttonStyle}>Learn More</button>
        <button className={buttonStyle}>Contact Us</button>
      </div>
    </section>
  );
}
