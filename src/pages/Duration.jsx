import React from 'react';

function Duration() {
  return (
    <section className="container mx-auto my-16 px-4 md:px-8">
      <div className="flex flex-col gap-10">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-bold">
          <span
            className="pb-1"
            style={{
              borderBottom: '4px solid transparent',
              borderImage: 'linear-gradient(to right, red, yellow, blue) 1',
            }}
          >
            Treatment Duration & Process
          </span>
        </h2>

        {/* Main Card */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 text-[1.05rem] leading-relaxed space-y-10 text-gray-800 border border-gray-100">

          {/* Intro */}
          <p>
            At <strong className="text-blue-600 font-semibold">Krishna Ganga Rehabilitation Centre</strong>, we understand that recovery is a journey—not a race. Our treatment programs are designed with the patient’s long-term well-being in mind, focusing on holistic healing and sustainable recovery.
          </p>

          {/* Duration Box */}
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 border-l-4 border-blue-600 p-6 rounded-2xl shadow-inner space-y-5">
            <p className="text-blue-900 font-bold text-xl">
              Minimum Treatment Duration:
            </p>

            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div>
              <img src="src/assets/icon/90 days.svg" alt="90_days" className="w-24 h-24 object-contain" />
              <p className='text-center text-2xl font-bold text-blue-900'>90 Days</p>
              </div>
              <div>
              <img src="src/assets/icon/120 days.svg" alt="120_days" className="w-24 h-24 object-contain" />
              <p className='text-center text-2xl font-bold text-blue-900'>120 Days</p>
              </div>
            </div>

            <p className="text-gray-700">
              This time frame ensures patients receive comprehensive care, fully engage with the 12-step recovery program, and begin reintegration into daily life with confidence and support.
            </p>
          </div>

          {/* Why Extended? */}
          <div>
            <p className="text-lg font-semibold text-blue-700 mb-2">
              Why might the treatment be extended?
            </p>
            <p className="mb-4">
              In some cases, an extended stay is necessary to allow for deeper healing and sustainable recovery. This decision is made carefully based on individual patient needs:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Persistent denial of addiction</li>
              <li>Dual diagnosis (addiction + another mental health issue)</li>
              <li>Underlying or severe psychiatric conditions</li>
              <li>Need for extended therapy or support in social reintegration</li>
            </ul>
          </div>

          {/* Closing */}
          <p>
            Every individual is unique—and so is their healing journey. Our dedicated team of counselors, psychologists, psychiatrists, and medical professionals monitor each patient closely to tailor the most effective, compassionate, and lasting treatment plan possible.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Duration;
