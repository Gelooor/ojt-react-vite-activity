import HeaderStyle from "../components/HeaderStyle";

export default function Contact(): JSX.Element {
  const liStyle1 = "flex gap-3 items-center";
  const liStyle2 = "flex justify-between gap-5";
  const ulStyle = "flex flex-col gap-3";
  const inputStyle1 = "border-gray-200 border-2 p-1";
  const inputStyle2 = `${inputStyle1} w-1/2`;
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
            <ul className={ulStyle}>
              <p className='font-bold text-center sm:text-left'>
                Contact Information:
              </p>
              <li className={liStyle1}>
                <svg
                  version='1.2'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 9 13'
                  width='9'
                  height='13'
                >
                  <defs>
                    <image
                      width='9'
                      height='13'
                      id='img3'
                      href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAMAAABM3rQ0AAAAAXNSR0IB2cksfwAAAGxQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg+zge4AAAACR0Uk5TAGPN789me/+CJM56ySqI8u6MrOqrkq5VqZQzOtTaQcwZHIqkWqYkmwAAAFhJREFUeJwtzEcOgDAMRNGBABN6r6Fz/zviBP7CepItA/B8FYSQIto0EJNJmpE5CpayqFijoRK17NCTwziRMxZ+GWB12OTEOO32obzgYYFTdDlB88bfY8cL8FwDwfAFjb8AAAAASUVORK5CYII='
                    />
                  </defs>
                  <style></style>
                  <use href='#img3' x='0' y='0' />
                </svg>
                <p>123 Your Address here</p>
              </li>
              <li className={liStyle1}>
                <svg
                  version='1.2'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 9 13'
                  width='9'
                  height='13'
                >
                  <defs>
                    <image
                      width='9'
                      height='13'
                      id='img2'
                      href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAMAAABM3rQ0AAAAAXNSR0IB2cksfwAAAHhQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgttI+VgAAACh0Uk5TKdHplOfULZ7/jqG1sHaPd6yzwFQAS727bme4TLZtjKigoyzV89PXMOrHD5QAAABUSURBVHicjYvXDYAwEMUehHKhXELvPcD+G1LEAFiy5B8Dli2EcFwPPpGUkihAGMXMrHSCNMsfihJV/VbT/q7v7Ur0elCjGqYEMxHx7YJ1Mxvv5jgv3AQIs2sXcYYAAAAASUVORK5CYII='
                    />
                  </defs>
                  <style></style>
                  <use href='#img2' x='0' y='0' />
                </svg>
                <p>(046) 123 - 456</p>
              </li>
              <li className={liStyle1}>
                <svg
                  version='1.2'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 12 8'
                  width='12'
                  height='8'
                >
                  <defs>
                    <image
                      width='12'
                      height='8'
                      id='img1'
                      href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAMAAAD6Ou7DAAAAAXNSR0IB2cksfwAAAJBQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgHEPCYQAAADB0Uk5TPuj/8epBnWfs72iauzG6vbjyzEenqUbKpgCgoaL9iHfYVlPXeYX+lXt8k2CC+/heN2zqSgAAAF1JREFUeJwlzNkaQlAAReFtnQaRctAgGVJKit7/7XzxX62rJTmYCYulVmuXycbzxTbY/XsfhMgSxQkcjiesDJzTS5ZewSinKKtbfX80PMWrnQfvDn2+9HYYbE/zGwHBPgWZ3/pIFAAAAABJRU5ErkJggg=='
                    />
                  </defs>
                  <style></style>
                  <use href='#img1' x='0' y='0' />
                </svg>
                <p>youremail@gmail.com</p>
              </li>
            </ul>

            <ul className={ulStyle}>
              <p className='font-bold text-center sm:text-left'>
                Working Hours:
              </p>
              <li className={liStyle2}>
                <time>Monday to Friday</time> <time>9 AM - 6 PM</time>
              </li>
              <li className={liStyle2}>
                <time>Saturday</time> <time>9 AM - 5 PM</time>
              </li>
              <li className={liStyle2}>
                <time>Sunday</time> <time>9 AM - 12 NN</time>
              </li>
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
              <input className={inputStyle2} type='text' placeholder='Name' />
              <input
                className={inputStyle2}
                type='text'
                placeholder='Phone Number'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <input
                className={inputStyle1}
                type='text'
                placeholder='Email Address'
              />
              <input
                className='border-gray-200 border-2 px-1 py-3'
                type='text'
                placeholder='Message'
              />

              <input
                className='font-poppins uppercase w-36 h-10 rounded-3xl border-2 border-solid text-white bg-yellow-500 border-yellow-500 hover:bg-gray-800 hover:border-gray-800 self-end cursor-pointer'
                type='submit'
                value='Submit'
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
