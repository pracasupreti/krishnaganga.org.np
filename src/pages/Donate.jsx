import React from 'react'

function Donate() {
  return (
    <>
      <section className='container mx-auto my-8'>
        <div className='flex flex-col gap-8'>
          <h2 className='text-center text-3xl font-bold'>
            <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}><span className='font-[400]'>We need you,</span> Help us around</span>
          </h2>

          <img src="src/assets/image/Donate.jpg" alt="donate" />
        </div>
      </section>
    </>
  )
}

export default Donate
