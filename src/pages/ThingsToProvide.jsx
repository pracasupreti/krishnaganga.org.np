import React from 'react'

function ThingsToProvide() {
    return (
        <>
            <section className='container mx-auto my-8'>
                <h2 className='text-center text-3xl font-bold mb-8'>
                    <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}>Our Treatment</span>
                </h2>
                <ul className='list-disc text-[#888787]'>
                    <li>Client's proof of identity.</li>
                    <li>Letter by Doctor Advising him Rehabilitation for addiction.</li>
                    <li>Perfumes</li>
                    <li>Required clothing,</li>
                    <li>Foot Wear</li>
                    <li>Personal Kit (Shaving foam/ Cream, Bathing Soap, Shampoo, deodorant-sticks, any nonalcoholic creams only etc.). We will provide the same on requirement basis.</li>
                    <li>Any non-toxic food stuff which the client prefers to have otherwise he/she can ask for the requirements on regular basis.</li>
                </ul>
            </section>
        </>
    )
}

export default ThingsToProvide
