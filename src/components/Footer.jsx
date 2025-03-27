import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-[#32302f] p-4'>
        <section className='container mx-auto lg:flex justify-between text-[#8f8b89] text-sm'>
          <div className='flex-col gap-4 flex'>
            <h2 className='text-[#ecc731] text-[28px] font-bold'><em>About Us</em></h2>
            <p>Situated in the heart city of Biratnagar, HOPE TRUST, Krishna Ganga Drug & Alcohol Deaddiction & Rehabilitation Center</p>
            <div className='flex flex-col gap-2'>
              <p className='flex gap-2'><img className='bg-[#8f8b89] rounded h-[20px] w-[20px]' src="src/assets/icon/home.svg" alt="home" />Janapath Tole, Biratnagar, Nepal</p>
              <a href='tel:+977 21471609' className='flex gap-2 hover:text-[#ccc]'><img className='bg-[#8f8b89] rounded h-[20px] w-[20px]' src="src/assets/icon/phone.svg" alt="phone" />+977 21 471609</a>
              <a href='mailto:krishnaganga@gmail.com' className='flex gap-2 hover:text-[#ccc]'><img className='bg-[#8f8b89] rounded h-[20px] w-[20px]' src="src/assets/icon/envelope.svg" alt="envelope" />krishnaganga@gmail.com</a>
            </div>
          </div>
          <div>
            <h3 className='text-white text-[24px] mb-5'>Useful Links</h3>
            <div className='flex flex-col gap-2'>
            <a className='hover:text-[#ccc]' href="https://neurohospital.com.np/" target='_blank'>Neuro Hospital,Biratnagar</a>
            <a className='hover:text-[#ccc]' href="https://www.swc.org.np/" target='_blank'>Social Welfare Council</a>
            <a className='hover:text-[#ccc]' href="https://ncb.nepalpolice.gov.np/" target='_blank'>Narcotics Control Bureau</a>
            <a className='hover:text-[#ccc]' href="https://www.mofa.gov.np/" target='_blank'>Ministry of Foreign Affairs</a>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer
