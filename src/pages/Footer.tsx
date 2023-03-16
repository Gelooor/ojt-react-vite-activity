import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import FacebookLogo from "../components/FacebookLogo";
import TwitterLogo from "../components/TwitterLogo";
import LinkedInLogo from "../components/LinkedInLogo";

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
            <FacebookLogo />
            <TwitterLogo />
            <LinkedInLogo />
          </div>

          <p className='sm:pt-3'>Barbers © 2018. All Rights Reserved.</p>
        </div>
      </footer>
    </BrowserRouter>
  );
}
