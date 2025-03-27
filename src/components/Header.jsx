import React from 'react'

function Header() {
  return (
    <>
      <section className='bg-[#26211d]'>
        <section>
          {/* <ul>
            <li><img src="src\assets\icon\facebook.svg" alt="facebook" /></li>
            <li><img src="src\assets\icon\google-plus.svg" alt="google-plus" /></li>
            <li><img src="src\assets\icon\twitter.svg" alt="twitter" /></li>
            <li><img src="src\assets\icon\linkedin.svg" alt="linkedin" /></li>
            <li><img src="src\assets\icon\pinterest.svg" alt="pinterest" /></li>
          </ul> */}
        </section>
        <header className='bg-[#ecc731] text-white p-2'>
          <section className='container mx-auto flex items-center justify-content-between'>
          <div>
            <img src="src/assets/logo/krishna-ganga-logo.png" alt="Krishna Ganga Drugs & Alcohol Deaddiction & Rehabilitation Center" />
          </div>
          <ul className='flex gap-4 uppercase'>
            <li>home</li>
            <li>about</li>
            <li>treatment</li>
            <li>fee</li>
            <li>banned items</li>
            <li>duration</li>
            <li>contact</li>
          </ul>
          <form action="#">
            <input type="text" className='' />
          </form>
          </section>
       
        </header>
      </section>
    </>
  )
}

export default Header
