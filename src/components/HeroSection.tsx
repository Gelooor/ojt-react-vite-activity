export default function HeroSection() {
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
        <button className='transparent-button'>Learn More</button>
        <button className='transparent-button'>Contact Us</button>
      </div>
    </section>
  );
}
