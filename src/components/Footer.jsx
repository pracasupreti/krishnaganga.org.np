import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-[#32302f] p-4'>
        <section className='container mx-auto lg:flex gap-10 text-[#8f8b89] text-sm'>
          <div className='flex-col gap-4 flex'>
            <h2 className='text-[#ecc731] text-[30px] font-bold'><em>About Us</em></h2>
            <p className='text-justify'>Situated in the heart city of Biratnagar, HOPE TRUST, Krishna Ganga Drug & Alcohol Deaddiction & Rehabilitation Center</p>
            <div className='flex flex-col gap-2'>
              <p className='flex gap-2'><img className='bg-[#8f8b89] rounded h-[20px] w-[20px]' src="src/assets/icon/home.svg" alt="home" />Janapath Tole, Biratnagar, Nepal</p>
              <a href='tel:+977 21471609' className='flex gap-2 hover:text-[#ccc]'><img className='bg-[#8f8b89] rounded h-[20px] w-[20px]' src="src/assets/icon/phone.svg" alt="phone" />+977 21 471609</a>
              <a href='mailto:krishnaganga@gmail.com' className='flex gap-2 hover:text-[#ccc]'><img className='bg-[#8f8b89] rounded h-[20px] w-[20px]' src="src/assets/icon/envelope-1.svg" alt="envelope" />krishnaganga@gmail.com</a>
            </div>
          </div>
          <div>
            <h3 className='text-white text-[30px] mb-5'>Useful Links</h3>
            <div className='flex flex-col gap-2 lg:w-[220px]'>
            <a className='hover:text-[#ccc]' href="https://neurohospital.com.np/" target='_blank'>Neuro Hospital,Biratnagar</a>
            <a className='hover:text-[#ccc]' href="https://www.swc.org.np/" target='_blank'>Social Welfare Council</a>
            <a className='hover:text-[#ccc]' href="https://ncb.nepalpolice.gov.np/" target='_blank'>Narcotics Control Bureau</a>
            <a className='hover:text-[#ccc]' href="https://www.mofa.gov.np/" target='_blank'>Ministry of Foreign Affairs</a>
            </div>
          </div>
          <div className='w-full'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7144.126503763646!2d87.273179!3d26.45369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef744541d01bd3%3A0x57b7ceeeaf08f255!2sJanpath%20Tole%2C%20Biratnagar%2056613%2C%20Nepal!5e0!3m2!1sen!2sus!4v1743088161667!5m2!1sen!2sus" width={655} height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </section>
      </footer>
      <section className='bg-[#2a2928] py-5 px-3'>
        <div className='lg:flex justify-between container mx-auto text-[#cccc] text-[15px]'>
          <p>© Copyright 2025, All Rights Reserved by Krishna Ganga HOPE TRUST.</p>
          <p>Technology Partner :<a href='https://sriyog.com/consulting' className='hover:text-[#ccc]'> SRIYOG Consulting, Kathmandu</a></p>
          </div>
        </section>
    </>
  )
}

export default Footer
