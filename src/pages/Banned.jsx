import React from 'react'

function Banned() {
  let banned=[
    {
      id: 1,
      item: "Cell phones",
      src: "src/assets/banned-items/cellphone.svg",
      alt: "Cell Phones"
    },
    {
      id: 2,
      item: "Laptops",
      src: "src/assets/banned-items/laptop.svg",
      alt: "Laptops"
    },
    {
      id: 1,
      item: "Perfumes",
      src: "src/assets/banned-items/perfume.svg",
      alt: "Perfumes"
    },
    {
      id: 1,
      item: "After shave lotions",
      src: "src/assets/banned-items/after-shave.svg",
      alt: "After shave lotions"
    },
    {
      id: 1,
      item: "Cameras",
      src: "src/assets/banned-items/camera.svg",
      alt: "Cameras"
    },
    {
      id: 1,
      item: "Rajors",
      src: "src/assets/banned-items/rajor.svg",
      alt: "Rajors"
    },
    {
      id: 1,
      item: "Currency",
      src: "src/assets/banned-items/currency.svg",
      alt: "Currency"
    },
    {
      id: 1,
      item: "Video Games",
      src: "src/assets/banned-items/video-games.svg",
      alt: "Video Games"
    },
    {
      id: 1,
      item: "Valuables (gold, jewelry, precious metals/stones).",
      src: "src/assets/banned-items/jewelry.svg",
      alt: "jewelry"
    },
    {
      id: 1,
      item: "Medication (without approval).",
      src: "src/assets/banned-items/capsule.svg",
      alt: "capsule"
    },
  ]
  return (
    <>
      <section className='container mx-auto my-8'>
                <h2 className='text-center text-3xl font-bold mb-8'>
                    <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}>Banned Items</span>
                </h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2 lg:w-[900px] gap-y-6 lg:mx-auto'>
                  {banned.map((a)=>(
                    <div className='shadow-2xl w-[200px] group mx-auto rounded-xl p-2'>
                    <img className='h-[100px] w-[100px] mx-auto overflow-hidden duration-300 group-hover:scale-105' src={a.src} alt={a.alt} />
                    <h2 className='text-[#333] text-center'>{a.item}</h2>
                  </div>
                  ))}
                </div>
            </section>
    </>
  )
}

export default Banned
