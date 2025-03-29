import React from 'react'

function About() {
  return (
    <>
      <section className='container mx-auto my-8'>
        <div className='flex flex-col gap-7'>
        <h2 className='text-center text-3xl font-bold'>
          <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}>Who We Are</span>
        </h2>
        <p className='text-[#888787] text-justify'>Situated in the heart of city Biratnagar, HOPE TRUST, Krishna Ganga Drug and Alcohol Deaddiction and Rehabilitation Centre registered in Chief District Office, Morang and Ministry of Home Affairs and Social Welfare Nepal has facilities for 10 bedded Residential 12 steps program facilities with dedicated team of counsellor, psychologist, psychiatrist and other team of doctors. It is providing services to the people in around Eastern Region of Nepal and Neighboring India.</p>

        <p className='text-[#888787] text-justify'>The long term goal of this Rehab to provide Curative, preventive and promotive physical and mental health services to the people with efficiency, effectiveness and assurance with the context of equity and social justice. Though a small Rehab to focus properly to residents, it has all the ingredients to achieve the goal. This would invaluable input in teaching the medical students, Psychology students and psychiatrists on modern concept of Rehab care besides providing good services to the community.</p>

        <p className='text-[#888787] text-justify'>In krishnaganga we also emphasize on candidate physical and mental health.We do have TV hall,carpet,yoga mats and Treadmills.</p>

        <p className='text-[#888787] text-justify'>This Rehab in backed up by Neuro Cardio And Multi-Disciplinary Hospital, which has basic facilities for outdoor, indoor clinical services in different departments with latest CTA (CT Scan machine with Angiography), MRI , CATHLAB , CCU , ICU and Dialysis Machine. Special Wards, Deluxe Cabins and General Wards.</p>
        </div>
      </section>
    </>
  )
}

export default About
