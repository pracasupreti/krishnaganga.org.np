import React from 'react'

function ThingsToProvide() {
  let ttp = [
    {
      id: 1,
      item: "Identity",
      src: "src/assets/svg-icon/cellphone.svg",
      alt: "id-card",
      description: "Government-issued identity card to verify client details."
    },
    {
      id: 2,
      item: "Letter",
      src: "src/assets/svg-icon/health-report.svg",
      alt: "health report",
      description: "Doctor's recommendation confirming need for rehabilitation program."
    },
    {
      id: 3,
      item: "Perfumes",
      src: "src/assets/svg-icon/perfume.svg",
      alt: "Perfumes",
      description: "Personal fragrance products like body sprays or perfumes."
    },
    {
      id: 4,
      item: "Clothing",
      src: "src/assets/svg-icon/clothes.svg",
      alt: "Required clothing",
      description: "Essential clothes needed for daily use and comfort."
    },
    {
      id: 5,
      item: "Foot Wear",
      src: "src/assets/svg-icon/footwear.svg",
      alt: "Foot Wear",
      description: "Shoes or slippers for indoor and outdoor activities."
    },
    {
      id: 6,
      item: "Personal Kit",
      src: "src/assets/svg-icon/personal-kit.svg",
      alt: "personal-kit",
      description: "Basic hygiene products for personal grooming and cleanliness."
    },
    {
      id: 7,
      item: "Food",
      src: "src/assets/svg-icon/healthy-food.svg",
      alt: "halthy-food",
      description: "Safe food items preferred by the client during stay."
    }
  ];

  return (
    <>
      <section className="container mx-auto my-12 px-8">
        <h2 className="text-center text-3xl font-bold mb-10">
          <span className="inline-block pb-2" style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1", }}>
            YOU SHOULD CARRY THE MENTIONED BELOW
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 mx-auto">
          {ttp.map((a) => (
            <div className="bg-white shadow-lg rounded-2xl p-2 hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-[1.02] flex flex-col gap-4 items-center text-center flex-wrap w-[250px]  mx-auto">
              <img src={a.src} alt={a.alt} className="h-[90px] w-[90px] mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg font-semibold text-[#1a1a1a] px-3">{a.item}</h3>
              <p className="text-sm text-gray-600 px-3">{a.description}</p>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}

export default ThingsToProvide
