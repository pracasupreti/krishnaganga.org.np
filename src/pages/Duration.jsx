import React from 'react'

function Duration() {
  return (
    <>
      <section className='container mx-auto my-8'>
        <div className='flex flex-col gap-8'>
        <h2 className='text-center text-3xl font-bold'>
            <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}>Time Required</span>
          </h2>

          <p className='text-[#888787] text-justify'>Minimum Period required for treatment is 90 to 120 days and may be extended if required ( if required is in strong denial, dual diagnosed or with any psychiatric issues).</p>
        </div>
      </section>
    </>
  )
}

export default Duration