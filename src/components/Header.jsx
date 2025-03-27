import React from 'react'

function Header() {
  return (
    <>
      <section className='bg-[#26211d]'>
        <section className='container mx-auto flex justify-between p-2'>
          <ul className='flex gap-2'>
            <li><img className='w-[25px] h-[25px]' src="src\assets\icon\facebook.svg" alt="facebook" /></li>
            <li><img className='w-[25px] h-[25px]' src="src\assets\icon\google-plus.svg" alt="google-plus" /></li>
            <li><img className='w-[25px] h-[25px]' src="src\assets\icon\twitter.svg" alt="twitter" /></li>
            <li><img className='w-[25px] h-[25px]' src="src\assets\icon\linkedin.svg" alt="linkedin" /></li>
            <li><img className='w-[25px] h-[25px]' src="src\assets\icon\pinterest.svg" alt="pinterest" /></li>
          </ul>
          <div className='uppercase text-white'>
            <a href="#" className='border px-4 py-2 hover:bg-[#ecc731] me-2'>Donate us</a>
            <a href="#" className='border px-4 py-2 hover:bg-[#ecc731]'>Volunteer</a>
          </div>
        </section>
        <header className='bg-[#ecc731] p-2'>
          <section className='container mx-auto flex items-center justify-between'>
          <div>
            <img src="src/assets/logo/krishna-ganga-logo.png" alt="Krishna Ganga Drugs & Alcohol Deaddiction & Rehabilitation Center" />
          </div>
          <ul className='flex gap-4 uppercase text-black font-medium text-[16px]'>
            <li className='hover:font-bold'>home</li>
            <li  className='hover:font-bold'>about</li>
            <li  className='hover:font-bold'>treatment</li>
            <li  className='hover:font-bold'>fee</li>
            <li  className='hover:font-bold'>banned items</li>
            <li  className='hover:font-bold'>duration</li>
            <li  className='hover:font-bold'>contact</li>
          </ul>
          <form action="#" className='flex'>
            <input type="text" className='p-2 w-[300px] outline-none border bg-[#ecc731]' />
            <img src="src/assets/icon/search-icon.svg" alt="search-icon" className='h-[25px] w-[25px] relative top-2 left-[-30px]'/>
          </form>
          </section>
       
        </header>
      </section>
    </>
  )
}

export default Header
