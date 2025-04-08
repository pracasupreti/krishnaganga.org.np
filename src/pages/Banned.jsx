import React from 'react'

function Banned() {
  let banned = [
    {
      id: 1,
      item: "Cell phones",
      src: "src/assets/svg-icon/cellphone.svg",
      alt: "Cell Phones",
      description: "Not allowed to avoid distractions and maintain rehabilitation focus."
    },
    {
      id: 2,
      item: "Laptops",
      src: "src/assets/svg-icon/laptop.svg",
      alt: "Laptops",
      description: "Restricted to ensure digital detox and prevent outside influence."
    },
    {
      id: 3,
      item: "Perfumes",
      src: "src/assets/svg-icon/perfume.svg",
      alt: "Perfumes",
      description: "May contain alcohol or irritants; not allowed in premises."
    },
    {
      id: 4,
      item: "After shave lotions",
      src: "src/assets/svg-icon/after-shave.svg",
      alt: "After shave lotions",
      description: "Often alcohol-based, hence strictly prohibited for all residents."
    },
    {
      id: 5,
      item: "Cameras",
      src: "src/assets/svg-icon/camera.svg",
      alt: "Cameras",
      description: "To protect privacy and confidentiality of all residing clients."
    },
    {
      id: 6,
      item: "Rajors",
      src: "src/assets/svg-icon/rajor.svg",
      alt: "Rajors",
      description: "Sharp objects banned for safety and self-harm prevention."
    },
    {
      id: 7,
      item: "Currency",
      src: "src/assets/svg-icon/currency.svg",
      alt: "Currency",
      description: "Possession of cash is not permitted within rehabilitation center."
    },
    {
      id: 8,
      item: "Video Games",
      src: "src/assets/svg-icon/video-games.svg",
      alt: "Video Games",
      description: "Discouraged to prevent addiction transfer and maintain mental clarity."
    },
    {
      id: 9,
      item: "Jewelry",
      src: "src/assets/svg-icon/jewelry.svg",
      alt: "jewelry",
      description: "Not allowed to avoid loss, theft, or unnecessary distraction."
    },
    {
      id: 10,
      item: "Medication",
      src: "src/assets/svg-icon/capsule.svg",
      alt: "capsule",
      description: "Unauthorized medication prohibited for safety and health compliance reasons."
    }
  ];

  return (
    <>
      <section className="container mx-auto my-12 px-4">
        <h2 className="text-center text-3xl font-bold mb-10">
          <span className="inline-block pb-2" style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1", }}>
            Banned Items
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 mx-auto">
          {banned.map((a) => (
            <div className="bg-white shadow-lg rounded-2xl p-2 w-[250px] mx-auto  transition duration-300 ease-in-out transform  flex flex-col gap-4 flex-wrap items-center text-center">
              <img src={a.src} alt={a.alt} className="h-[90px] w-[90px] mb-4 transition-transform duration-300 " />
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">{a.item}</h3>
              <p className="text-sm text-gray-600 px-3">{a.description}</p>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}

export default Banned
