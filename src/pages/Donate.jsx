import React from 'react';

function Donate() {
  return (
    <section className="container mx-auto my-12 px-4">
      <div className="flex flex-col gap-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          <span className="pb-1" style={{ borderBottom: '4px solid transparent', borderImage: 'linear-gradient(to right, red, yellow, blue) 1', }}><span className="font-[400]">We need you,</span> Help us around</span>
        </h2>
        <div className="bg-white shadow-lg p-6 rounded-xl flex flex-col gap-6 text-lg leading-relaxed">
          <p>
            At <strong>Krishna Ganga Drug and Alcohol Deaddiction and Rehabilitation Centre</strong>, we believe that <em>everyone deserves a second chance at life</em>. With your support, we can continue to provide life-changing rehabilitation services to individuals battling addiction.
          </p>
          <div className='lg:flex justify-between mb-0 lg:flex-row flex-col gap-6'>
            <div>
              <p>
                <span className='font-[600]'>Your donation helps us deliver:</span>
                <ul className="list-disc ml-6 mt-2 space-y-1 font-normal">
                  <li>Affordable treatment and residential care</li>
                  <li>Professional counseling, therapy, and medical services</li>
                  <li>Physical and mental wellness programs including yoga and fitness</li>
                  <li>Upgrades to essential medical and recreational equipment</li>
                </ul>
              </p>
              <br />
              <p>
                <strong>How You Can Help:</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>NPR 30,000</strong> – For One Person</li>
                  <li><strong>NPR 50,000</strong> – For Two Person</li>
                  <li><strong>NPR 100,000</strong> – For Five Person</li>
                </ul>
              </p>
            </div>
            <div>
              <img className='lg:w-[400px] lg:h-[400px] w-full' src="src/assets/image/Krishna Ganga Rehabilitation Center _ HOPE TRUST.png" alt="qr-code" />
            </div>
          </div>

          <p className="font-semibold">
            Whether it's a one-time donation or a monthly gift, your support transforms lives and restores hope.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Donate;
