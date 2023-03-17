import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import MenuBurger from "../assets/svg/MenuBurger";

export default function Navigation() {
  return (
    <BrowserRouter>
      <section>
        <nav className='flex justify-between items-center px-12 py-6 bg-white/5 sm:px-40'>
          <p className='uppercase text-yellow-500 text-3xl font-crimsonText'>
            Barber
          </p>
          <MenuBurger />
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
