import React from 'react'

function Fee() {
  return (
    <>
      <section className='mx-auto container my-8'>
        <div className='flex flex-col gap-8'>
          <h2 className='text-center text-3xl font-bold'>
            <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}>Fee Structure</span>
          </h2>
          <div className='flex flex-col gap-2'>
            <p className='text-[#5c5c5c] text-justify'>The treatment charges per month are as under:.</p>
            <p className='text-[#888787] text-justify'>Rs. 85,000 per month (Rupees Eighty- five thousand only) Rs 15,000/- for 1st month only (Rupees Ten Thousand Only) which includes:</p>
            <ul className='list-disc text-[#888787] ms-5'>
              <li>Medical Examinations</li>
              <li>Detoxification charges (Withdrawal management)</li>
              <li>Welcome Kit (Literature to Client and family)</li>
            </ul>
            <p className='text-[#888787] text-justify'>Rs 10,000 per month (Rupees Five Thousand only-Accountable) for his personal expenses which includes for his toiletries, laundry, saloon, Fruits, Juices, Biscuits, Chocolates Cigarettes etc. In case the amount exceeds Rs. 10000/- it will be informed to the family.</p>

          </div>

          <p className='text-[#888787] text-justify'>This includes for foreign candidates also</p>

          <p className='text-[#888787] text-justify text-[14px]'>Taxes as applicable.</p>

        </div>
      </section>
    </>
  )
}

export default Fee
