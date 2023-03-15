import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navigation() {
  return (
    <BrowserRouter>
      <section>
        <nav className='flex justify-between items-center px-12 py-6 bg-white/5 sm:px-40'>
          <p className='uppercase text-yellow-500 text-3xl font-crimsonText'>
            Barber
          </p>
          <svg
            className='sm:hidden'
            xmlns='http://www.w3.org/2000/svg'
            height='32px'
            viewBox='0 0 24 24'
            width='32px'
            fill='#FFFFFF'
          >
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
          </svg>
          <ul className='hidden text-white text-xs justify-between gap-5 sm:flex'>
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
            <li className='hover:text-yellow-500'>
              <HashLink to='#contact' smooth>
                Contact Us
              </HashLink>
            </li>
          </ul>
        </nav>
      </section>
    </BrowserRouter>
  );
}
