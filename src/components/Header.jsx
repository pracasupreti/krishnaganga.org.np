import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Fee from '../pages/Fee';
import Duration from '../pages/Duration';
import Banned from '../pages/Banned';
import Treatment from '../pages/Treatment';
import ThingsToProvide from '../pages/ThingsToProvide';
import Donate from '../pages/Donate';
import Volunteer from '../pages/Volunteer';
import ScrollToTop from './ScrollToTop';
import Faq from '../pages/Faq';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <section className='bg-[#26211d]'>
        <section className='container mx-auto flex justify-between p-2 items-center'>
          <div>
          <a href='tel:+977 21471609' className='flex gap-2 text-[#ccc]'><img className='h-[20px] w-[20px] invert pt-[5px]' src="src/assets/icon/phone.svg" alt="phone" />+977 21 471609</a>
          </div>
          <ul className='flex gap-4'>
            <li><a href="#"><img className='w-[25px] h-[25px]' src="src/assets/icon/facebook.svg" alt="facebook" /></a></li>
            <li><a href="#"><img className='w-[25px] h-[25px]' src="src/assets/icon/twitter.svg" alt="twitter" /></a></li>
            <li><a href="#"><img className='w-[25px] h-[25px]' src="src/assets/icon/linkedin.svg" alt="linkedin" /></a></li>
          </ul>
        </section>
        </section>
        <header className='bg-[#ecc731] p-1 sticky top-0 shadow-md z-50'>
          <section className='container mx-auto flex items-center justify-between px-0'>
            <div>
              <Link to={'/'}>
                <img src="src/assets/logo/krishna-ganga-logo.png" alt="Krishna Ganga Drugs & Alcohol Deaddiction & Rehabilitation Center" />
              </Link>
            </div>

            {/* Hamburger Menu */}
            <div className="lg:hidden">
              <button onClick={toggleMenu}>
                <img className='h-[30px] w-[30px]' src="src/assets/icon/hamburger.svg" alt="hamburger" />
              </button>
            </div>

            {/* Navigation Links (Desktop) */}
            <ul className='lg:flex gap-7 capitalize text-black font-bold text-[18px] hidden'>
              <li className="relative">
                <Link className="relative pb-1 text-black transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ed1b24] before:transition-all before:duration-300 hover:before:w-full" to={'/'}>Home</Link>
              </li>
              <li className="relative">
                <Link className="relative pb-1 text-black transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ed1b24] before:transition-all before:duration-300 hover:before:w-full" to={'/about'}>about</Link>
              </li>
              <li className="relative group">
                <Link className="relative pb-1 text-black transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ed1b24] before:transition-all before:duration-300 hover:before:w-full" to={'/treatment'}>
                  treatment
                </Link>
                {/* Dropdown Menu */}
                <ul className="absolute left-0 top-[25px] hidden group-hover:block bg-[#ecc731] text-black rounded shadow-md">
                  <li>
                    <Link to="/things-to-provide" className="block px-1 py-1 text-center ms-[-8px] hover:text-[#ed1b24] transition-all lg:w-[170px]">
                      Things to Provide
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative">
                <Link className="relative pb-1 text-black transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ed1b24] before:transition-all before:duration-300 hover:before:w-full" to={'/fee'}>fee</Link>
              </li>
              <li className="relative">
                <Link className="relative pb-1 text-black transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ed1b24] before:transition-all before:duration-300 hover:before:w-full" to={'/banned-items'}>banned items</Link>
              </li>
              <li className="relative">
                <Link className="relative pb-1 text-black transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ed1b24] before:transition-all before:duration-300 hover:before:w-full" to={'/duration'}>duration</Link>
              </li>
              <li className="relative">
                <Link className="relative pb-1 text-black transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ed1b24] before:transition-all before:duration-300 hover:before:w-full" to={'/contact'}>contact</Link>
              </li>
              <li className="relative">
                <Link className="relative pb-1 text-black transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ed1b24] before:transition-all before:duration-300 hover:before:w-full" to={'/faq'}>faq</Link>
              </li>
            </ul>

            <div className='uppercase text-white hidden lg:flex flex-wrap ms-4 gap-y-2'>
              <Link to={'/donate'} className='px-4 py-2 hover:bg-[#465e88] bg-[#ed1b24] me-2 ease-in duration-200 font-bold'>Donate us</Link>
              <Link to={'/volunteer'} className='px-4 py-2 hover:bg-[#465e88] bg-[#ed1b24] ease-in duration-200'>Volunteer</Link>
            </div>
          </section>
        </header>
      

      {/* Mobile Menu (Right Slide-in) */}
      <div className={`fixed top-0 right-0 lg:hidden w-[250px] h-full bg-[#ecc731] z-50 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-between p-4">
          {/* Close button on the top right corner */}
          <button onClick={toggleMenu}>
            <img className='h-[30px] w-[30px]' src="src/assets/icon/cross.svg" alt="cross" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col gap-4 text-black text-[18px] font-bold px-4">
          <li><Link to={'/'} className="py-2 hover:text-[#ed1b24]">Home</Link></li>
          <li><Link to={'/about'} className="py-2 hover:text-[#ed1b24]">About</Link></li>
          <li><Link to={'/treatment'} className="py-2 hover:text-[#ed1b24]">Treatment</Link></li>
          <li><Link to={'/things-to-provide'} className="py-2 hover:text-[#ed1b24] ms-4">Things To Provide</Link></li>
          <li><Link to={'/fee'} className="py-2 hover:text-[#ed1b24]">Fee</Link></li>
          <li><Link to={'/banned-items'} className="py-2 hover:text-[#ed1b24]">Banned Items</Link></li>
          <li><Link to={'/duration'} className="py-2 hover:text-[#ed1b24]">Duration</Link></li>
          <li><Link to={'/contact'} className="py-2 hover:text-[#ed1b24]">Contact</Link></li>
          <li><Link to={'/faq'} className="py-2 hover:text-[#ed1b24]">Faq</Link></li>
          <li><Link to={'/donate'} className='px-2 py-1 hover:bg-[#465e88] bg-[#ed1b24] me-2 ease-in duration-200 font-bold'>Donate us</Link></li>
          <li><Link to={'/volunteer'} className='px-2 py-1 hover:bg-[#465e88] bg-[#ed1b24] ease-in duration-200'>Volunteer</Link></li>
        </ul>

      </div>

      <ScrollToTop/>
      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/fee' element={<Fee />} />
        <Route path='/duration' element={<Duration />} />
        <Route path='/banned-items' element={<Banned />} />
        <Route path='/treatment' element={<Treatment />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/things-to-provide' element={<ThingsToProvide />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
}

export default Header;
