import React from 'react'

function Contact() {
  return (
    <>
      <section className='container mx-auto my-8'>
        <div className='flex flex-col gap-8'>
          <h2 className='text-center text-3xl font-bold mb-8'>
            <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}>Contact</span>
          </h2>
          <div className='lg:flex gap-8'>
            <div className='w-full lg:w-[65%] h-[400px] border-e px-4'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7144.126503763646!2d87.273179!3d26.45369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef744541d01bd3%3A0x57b7ceeeaf08f255!2sJanpath%20Tole%2C%20Biratnagar%2056613%2C%20Nepal!5e0!3m2!1sen!2sus!4v1743670673702!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className=' flex flex-col gap-4'>
              <h2 className='font-[300] w-full text-2xl'>Get In Touch</h2>
              <p>Address : Janapath Tole,Biratnagar,Nepal</p>
              <p>E-mail : krishnaganga@gmail.com</p>
              <p>
                Tel : +977 021-471609</p>
              <p>Fax : 021- 471609</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
