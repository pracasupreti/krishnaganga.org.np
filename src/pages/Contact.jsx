import React from 'react'

function Contact() {
  return (
    <>
      <section className='container mx-auto my-8 px-8'>
        <div className='flex flex-col gap-8'>
          <h2 className='text-center text-3xl font-bold mb-8'>
            <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}>Contact</span>
          </h2>
          <div className='lg:flex gap-8'>
            <div className='w-full lg:w-[65%] h-[400px] border-e px-4'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7144.126503763646!2d87.273179!3d26.45369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef744541d01bd3%3A0x57b7ceeeaf08f255!2sJanpath%20Tole%2C%20Biratnagar%2056613%2C%20Nepal!5e0!3m2!1sen!2sus!4v1743670673702!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className=' flex flex-col gap-4 lg:mt-0 mt-6'>
              <h2 className='font-[300] w-full text-2xl'>Get In Touch</h2>
              <div className='flex gap-2'>
                {/* <div className='flex flex-col gap-2'>
                  <p className='flex gap-1'>Address</p>
                  <p className='flex gap-1'>E-mail</p>
                  <p className='flex gap-1'>Tel</p>
                  <p className='flex gap-1'>Fax</p>
                </div> */}
                {/* <div>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                </div> */}
                <div className='flex flex-col gap-[18px] pt-[3px]'>
                  
                  
                  
                  
                </div>
                <div className='flex flex-col gap-[10px] text-[18px]'>
                  <p className='flex gap-2 items-center'><img src="src/assets/icon/geo.svg" className='w-[20px]' alt="geo-alt" /><span>Janapath Tole,Biratnagar,Nepal</span></p>
                  <p className='flex gap-2 items-center'><img src="src/assets/icon/envelope.svg" className='w-[20px]' alt="envelope" /><span>krishnaganga@gmail.com</span></p>
                  <p className='flex gap-2 items-center'><img src="src/assets/icon/phone.svg" className='w-[20px]' alt="phone" /><span>+977 021-471609</span></p>
                  <p className='flex gap-2 items-center'><img src="src/assets/icon/fax.svg" className='w-[20px]' alt="fax" /><span>021-471609</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact
