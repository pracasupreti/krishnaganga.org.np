import React from 'react'

function ThingsToProvide() {
    let ttp=[
        {
          id: 1,
          item: "Client's proof of identity.",
          src: "src/assets/svg-icon/cellphone.svg",
          alt: "id-card"
        },
        {
          id: 2,
          item: "Letter by Doctor Advising him Rehabilitation for addiction.",
          src: "src/assets/svg-icon/health-report.svg",
          alt: "health report"
        },
        {
          id: 3,
          item: "Perfumes",
          src: "src/assets/svg-icon/perfume.svg",
          alt: "Perfumes"
        },
        {
          id: 4,
          item: "Required clothing,",
          src: "src/assets/svg-icon/clothes.svg",
          alt: "Required clothing,"
        },
        {
          id: 5,
          item: "Foot Wear",
          src: "src/assets/svg-icon/footwear.svg",
          alt: "Foot Wear"
        },
        {
          id: 6,
          item: "Personal Kit (Shaving foam/ Cream, Bathing Soap, Shampoo, deodorant-sticks, any nonalcoholic creams only etc.). We will provide the same on requirement basis.",
          src: "src/assets/svg-icon/personal-kit.svg",
          alt: "personal-kit"
        },
        {
          id: 7,
          item: "Any non-toxic food stuff which the client prefers to have otherwise he/she can ask for the requirements on regular basis.",
          src: "src/assets/svg-icon/healthy-food.svg",
          alt: "halthy-food"
        }
      ]
    return (
        <>
          <section className='container mx-auto my-8'>
                <h2 className='text-center text-3xl font-bold mb-8'>
                    <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}>YOU SHOULD CARRY THE MENTIONED BELOW</span>
                </h2>
                <div className='grid lg:grid-cols-3 grid-cols-2 gap-2 lg:w-[900px] gap-y-6 lg:mx-auto'>
                  {ttp.map((a)=>(
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

export default ThingsToProvide
