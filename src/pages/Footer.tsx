import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <BrowserRouter>
      <footer className='py-12 text-white bg-black font-poppins text-xs flex flex-col gap-2 text-center'>
        <p className='font-crimsonText uppercase text-yellow-500 text-5xl'>
          Barbers
        </p>

        <div className='flex flex-col gap-6'>
          <nav>
            <ul className='flex flex-col gap-1 justify-center px-6 sm:flex-row sm:gap-3'>
              <div className='flex justify-between sm:justify-center gap-3'>
                <li className='hover:text-yellow-500'>
                  <HashLink to='#' smooth>
                    Home
                  </HashLink>
                </li>
                <li className='hover:text-yellow-500'>
                  <HashLink to='#about' smooth>
                    About Us
                  </HashLink>
                </li>
                <li className='hover:text-yellow-500'>
                  <HashLink to='#service' smooth>
                    Services
                  </HashLink>
                </li>
                <li className='hover:text-yellow-500'>
                  <HashLink to='#testimonial' smooth>
                    Testimonials
                  </HashLink>
                </li>
                <li className='hover:text-yellow-500'>
                  <HashLink to='#team' smooth>
                    Our Team
                  </HashLink>
                </li>
              </div>
              <li className='hover:text-yellow-500'>
                <HashLink to='#contact' smooth>
                  Contact Us
                </HashLink>
              </li>
            </ul>
          </nav>

          <div className='flex gap-5 justify-center items-center'>
            <svg
              version='1.2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 7 13'
              width='7'
              height='13'
            >
              <defs>
                <image
                  width='7'
                  height='13'
                  id='img4'
                  href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAANCAMAAABSF4SHAAAAAXNSR0IB2cksfwAAAGZQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgdCtPDAAAACJ0Uk5TAE/Q8faUD/+5M7hLLRlaZ7zWrqNMmb1/LAxjMnw2hi/ydlOv21MAAABHSURBVHicbck1AoAwAMXQoB8v7lLuf0nanSxvCBCEUZxAKlcGuVSUFdRSA5hW6npD6LcGxkmalxU2aXefQzr/vKTb+1j7wgea5wOH3hSuAAAAAABJRU5ErkJggg=='
                />
              </defs>
              <style></style>
              <use href='#img4' x='0' y='0' />
            </svg>
            <svg
              version='1.2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 13 10'
              width='13'
              height='10'
            >
              <defs>
                <image
                  width='13'
                  height='10'
                  id='img5'
                  href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAKCAMAAABYMCT2AAAAAXNSR0IB2cksfwAAAIdQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUggdwpkAAAAC10Uk5TAAIVnjgXlS7K/80nA8uXJO5mz8aBJRr+hIePH7f8ThExUR6c6lRTodbjtG8OUOgZTAAAAGFJREFUeJwtiu0aQmAQRLe8YooKEer1HaL7vz67m/mxe84zQ3QgydEx+t2Tx9fH+SIWhLjSDcBdywiIEzY8UrbsiT25lMUu5Uu3bxXLZKq6+VvL1vVWefjojMZp/i7rT3ADFx4FhEky2DwAAAAASUVORK5CYII='
                />
              </defs>
              <style></style>
              <use href='#img5' x='0' y='0' />
            </svg>
            <svg
              version='1.2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 13 13'
              width='13'
              height='13'
            >
              <defs>
                <image
                  width='13'
                  height='13'
                  id='img6'
                  href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAMAAABFNRROAAAAAXNSR0IB2cksfwAAAJZQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgvnIzMwAAADJ0Uk5TSq5pAP8kvNwRBn6OjUmqpi950sdl7GDL6Gv3ZIdX1PVEuvRsTsDybela3ZC2pLU3iKyYJqq0AAAAbUlEQVR4nE3MWQ6CUBQE0atdiOCsqCgqDjg/p/1vjgQCWH8n6bRZq606A7xGHfxuIwX6W4a9vgbD0XgynUWyOSikbGFLYq1gnWzAr7SVdqSV9tKBY6ETZNKZS6FrrVv5eZceYE/3UubeH+nrfjnoOwgRaxO+NwAAAABJRU5ErkJggg=='
                />
              </defs>
              <style></style>
              <use href='#img6' x='0' y='0' />
            </svg>
          </div>

          <p className='sm:pt-3'>Barbers © 2018. All Rights Reserved.</p>
        </div>
      </footer>
    </BrowserRouter>
  );
}
