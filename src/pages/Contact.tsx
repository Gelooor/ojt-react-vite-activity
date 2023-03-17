import HeaderStyle from "../components/HeaderStyle";
import MapPointer from "../assets/svg/MapPointer";
import Smartphone from "../assets/svg/Smartphone";
import CloseEnvelope from "../assets/svg/CloseEnvelope";
import ButtonStyle from "../components/ButtonStyle";

export default function Contact(): JSX.Element {
  return (
    <section
      id='contact'
      className='flex flex-col gap-10 text-gray-500 py-28 font-poppins text-xs text-center sm:gap-5'
    >
      <div>
        <HeaderStyle color={"gray-400"} text={"Contact Us"} size={"base"} />
        <HeaderStyle
          color={"yellow-500"}
          text={"Make an Appointment"}
          size={"4xl"}
        />
      </div>
      <div className='flex flex-col sm:flex-row sm:px-40 gap-10'>
        <div className='flex flex-col gap-8 px-12 text-left sm:w-1/2 sm:p-0'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className='flex flex-col gap-8 sm:flex-row'>
            <ul className='flex flex-col gap-3'>
              <p className='font-bold text-center sm:text-left'>
                Contact Information:
              </p>
              {[
                [<MapPointer />, "123 Your Address Here"],
                [<Smartphone />, "(046) 123 - 456"],
                [<CloseEnvelope />, "youremail@gmail.com"],
              ].map(([svg, text]) => (
                <li className='flex gap-3 items-center'>
                  {svg}
                  <p>{text}</p>
                </li>
              ))}
            </ul>

            <ul className='flex flex-col gap-3'>
              <p className='font-bold text-center sm:text-left'>
                Working Hours:
              </p>
              {[
                ["Monday to Friday", "9 AM - 6 PM"],
                ["Saturday", "9 AM - 5 PM"],
                ["Sunday", "9 AM - 12 NN"],
              ].map(([day, time]) => (
                <li className='flex gap-5 justify-between'>
                  <time>{day}</time>
                  <time>{time}</time>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex flex-col gap-3 px-12 text-left sm:w-1/2 sm:p-0'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <form className='flex flex-col gap-2' action=''>
            <div className='flex gap-2'>
              <input
                className='border-gray-200 border-2 p-1 w-1/2'
                type='text'
                placeholder='Name'
              />
              <input
                className='border-gray-200 border-2 p-1 w-1/2'
                type='text'
                placeholder='Phone Number'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <input
                className='border-gray-200 border-2 p-1'
                type='text'
                placeholder='Email Address'
              />
              <input
                className='border-gray-200 border-2 px-1 py-3'
                type='text'
                placeholder='Message'
              />
              <div className='self-end'>
                <ButtonStyle
                  color='yellow-500'
                  hoverColor='gray-800'
                  text='Submit'
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
