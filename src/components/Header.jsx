import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Fee from '../pages/Fee'
import Duration from '../pages/Duration'
import Banned from '../pages/Banned'
import Treatment from '../pages/Treatment'

function Header() {
  return (
    <>
      <section className='bg-[#26211d]'>
        <section className='container mx-auto flex justify-between p-2 items-center'>
          <div>
            <a href='mailto:krishnaganga@gmail.com' className='flex gap-2 text-[#ccc] hover:text-[#eee]'><img className='p-1h-[20px] w-[20px]' src="src/assets/icon/envelope.svg" alt="envelope" />krishnaganga@gmail.com</a>
          </div>
          <ul className='flex gap-2'>
            <li><img className='w-[25px] h-[25px]' src="src\assets\icon\facebook.svg" alt="facebook" /></li>
            <li><img className='w-[25px] h-[25px]' src="src\assets\icon\google-plus.svg" alt="google-plus" /></li>
            <li><img className='w-[25px] h-[25px]' src="src\assets\icon\twitter.svg" alt="twitter" /></li>
            <li><img className='w-[25px] h-[25px]' src="src\assets\icon\linkedin.svg" alt="linkedin" /></li>
            <li><img className='w-[25px] h-[25px]' src="src\assets\icon\pinterest.svg" alt="pinterest" /></li>
          </ul>
        </section>
        <header className='bg-[#ecc731] p-2'>
          <section className='container mx-auto flex items-center justify-between'>
            <div>
              <Link to={'/'}>
              <img src="src/assets/logo/krishna-ganga-logo.png" alt="Krishna Ganga Drugs & Alcohol Deaddiction & Rehabilitation Center" />
              </Link>
            </div>

            <ul className='flex gap-7 capitalize text-black font-bold text-[18px]'>
              <li className="relative">
                <Link className="relative pb-1 text-black transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ed1b24] before:transition-all before:duration-300 hover:before:w-full" to={'/'}>Home</Link>
              </li>
              <li className="relative">
                <Link className="relative pb-1 text-black transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ed1b24] before:transition-all before:duration-300 hover:before:w-full" to={'/about'}>about</Link>
              </li>
              <li className="relative">
                <Link className="relative pb-1 text-black transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ed1b24] before:transition-all before:duration-300 hover:before:w-full" to={'/treatment'}>treatment</Link>
              </li>
              <li className="relative">
                <Link className="relative pb-1 text-black transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ed1b24] before:transition-all before:duration-300 hover:before:w-full" to={'/fee'}>fee</Link>
              </li>
              <li className="relative">
                <Link className="relative pb-1 text-black transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ed1b24] before:transition-all before:duration-300 hover:before:w-full" to={'/banned'}>banned items</Link>
              </li>
              <li className="relative">
                <Link className="relative pb-1 text-black transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ed1b24] before:transition-all before:duration-300 hover:before:w-full" to={'/duration'}>duration</Link>
              </li>
              <li className="relative">
                <Link className="relative pb-1 text-black transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ed1b24] before:transition-all before:duration-300 hover:before:w-full" to={'/contact'}>contact</Link>
              </li>
            </ul>

            <div className='uppercase text-white'>
              <a href="#" className='px-4 py-2 hover:bg-[#465e88] bg-[#ed1b24] me-2 ease-in duration-200 font-bold'>Donate us</a>
              <a href="#" className='px-4 py-2 hover:bg-[#465e88] bg-[#ed1b24] ease-in duration-200'>Volunteer</a>
            </div>
          </section>
        </header>
      </section>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/fee' element={<Fee />} />
        <Route path='/duration' element={<Duration />} />
        <Route path='/banned' element={<Banned />} />
        <Route path='/treatment' element={<Treatment />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default Header
