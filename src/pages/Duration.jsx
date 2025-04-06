import React from 'react';

function Duration() {
  return (
    <section className="container mx-auto my-12 px-4">
      <div className="flex flex-col gap-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          <span className="pb-1" style={{ borderBottom: '4px solid transparent', borderImage: 'linear-gradient(to right, red, yellow, blue) 1',}}>
            Treatment Duration & Process
          </span>
        </h2>

        <div className="bg-white shadow-md rounded-xl p-6 text-lg leading-relaxed space-y-6">
          <p>
            At <strong>Krishna Ganga Rehabilitation Centre</strong>, we understand that recovery is a journey, not a race. Our treatment programs are designed with the patient’s long-term well-being in mind.
          </p>

          <div className="bg-gray-100 rounded-lg p-4 border-l-4 border-blue-500">
            <p className="text-blue-800 font-medium">
              <strong>Minimum Treatment Duration:</strong> 90 to 120 days
            </p>
            <p className="text-gray-700 mt-2">
              This time frame ensures that patients receive comprehensive care, engage fully with the 12-step recovery program, and begin the process of reintegration into daily life.
            </p>
          </div>

          <p>
            <strong>Why might the treatment be extended?</strong>  <br />
            In some cases, an extended stay may be necessary for deeper healing and sustained recovery. Extension is considered when:
          </p>

          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>The patient is in strong denial of addiction</li>
            <li>The patient is dual-diagnosed (addiction with another mental health issue)</li>
            <li>There are underlying or severe psychiatric conditions</li>
            <li>The patient requires additional support in therapy or social reintegration</li>
          </ul>

          <p>
            Every individual is different, and so is their healing process. Our dedicated team of counselors, psychologists, psychiatrists, and medical professionals monitor each patient closely to recommend the most effective treatment plan.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Duration;
