import React from 'react'
import Crousel from './Crousel'

function Home() {
  return (
    <>
        <Crousel/>
      <section className='container mx-auto my-[60px]'>
      <h2 className='text-center text-3xl font-bold'>
        <span style={{borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, green, yellow) 1"}}>Dedicated team of counsellor, psychologist, psychiatrist & other team of Doctors</span>
        </h2>

      </section>
    </>
  )
}

export default Home
