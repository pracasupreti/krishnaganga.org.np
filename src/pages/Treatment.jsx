import React from 'react'

function Treatment() {
  return (
    <>
      <section className='container mx-auto my-8'>
        <div className='flex flex-col gap-8'>
          <h2 className='text-center text-3xl font-bold'>
            <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}>Our Treatment</span>
          </h2>

          <p className='text-[#888787] text-justify'>We take utmost care of sensitive issues of the client to respect their anonymity and personal dignity.</p>

          <p className='text-[#888787] text-justify'>We assure you that we will leave no stone unturned in helping a client recover from his addiction in our treatment program.After a Preliminary history taking he/she will be admitted for the acute detoxification program. Once he/she recovers from the withdrawals he/she will have to attend classes with others. And at the same time he/she will be following the 12 step program and REBT (a form of psychotherapy).Every Client will have an individualized program under supervision of the clinical psychologist and psychiatrist. This program including the acute withdrawal will be for a period of 4 months.</p>

          <p className='text-[#888787] text-justify'>It is tailored with reference to personal history, family history, circumstances that lead to addiction, addictive substances (s), gender, physical health and other variables for effective approach. This is a renowned methodology of recovery with human values and principles.</p>
        </div>
      </section>
    </>
  )
}

export default Treatment
