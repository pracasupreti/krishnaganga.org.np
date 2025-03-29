import React from 'react'

function Banned() {
  return (
    <>
      <section className='container mx-auto my-8'>
                <h2 className='text-center text-3xl font-bold mb-8'>
                    <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}>Banned Items</span>
                </h2>
                <ul className='list-disc text-[#888787] ms-5'>
                    <li>Cell phones</li>
                    <li>Laptops</li>
                    <li>Perfumes</li>
                    <li>After shave lotions</li>
                    <li>Cameras</li>
                    <li>Rajors</li>
                    <li>Currency</li>
                    <li>Video Games</li>
                    <li>Valuable like gold or any other precious metal or stones, Ring, Jewelry.</li>
                    <li>Medication without prescription-(even prescribed medication has to be accepted by our team of doctors for the reason client safety.</li>
                </ul>
            </section>
    </>
  )
}

export default Banned
