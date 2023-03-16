export default function Ad() {
  return (
    <section className='flex flex-col gap-3 px-3 py-12 bg-ad bg-black bg-no-repeat bg-center text-white font-poppins text-center'>
      <div>
        <h2 className='font-crimsonText uppercase text-yellow-500 text-2xl sm:text-4xl'>
          Get Flat 25% Discount!
        </h2>
        <p className='text-xs'>
          Get Flat 25% Discount on every sunday of December. Use the promo code
          below.
        </p>
      </div>
      <p className='text-3xl font-crimsonText'>#BARBEARDS</p>
      <button className='self-center uppercase w-72 h-10 rounded-3xl border-2 border-solid bg-yellow-500 border-yellow-500 hover:bg-gray-800 hover:border-gray-800'>
        Make an appointment now
      </button>
    </section>
  );
}
