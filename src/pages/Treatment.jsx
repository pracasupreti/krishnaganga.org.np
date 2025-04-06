import React from 'react';

function Treatment() {
  return (
    <>
      <section className="container mx-auto my-12 px-4">
        <div className="flex flex-col gap-10">
          {/* Heading */}
          <h2 className="text-center text-3xl font-bold">
            <span
              className="pb-1"
              style={{
                borderBottom: '4px solid transparent',
                borderImage: 'linear-gradient(to right, red, yellow, blue) 1',
              }}
            >
              Our Treatment
            </span>
          </h2>

          {/* Section 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-[#444]">
              Respecting Privacy & Dignity
            </h3>
            <p className="text-[#888787] text-justify">
              We take utmost care of sensitive issues of the client to respect
              their anonymity and personal dignity.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-[#444]">
              Comprehensive Recovery Process
            </h3>
            <p className="text-[#888787] text-justify">
              We assure you that we will leave no stone unturned in helping a
              client recover from his addiction through our treatment program.
              After a preliminary history taking, the client will be admitted
              for an acute detoxification program. Once the withdrawal symptoms
              subside, he/she will attend therapeutic classes alongside others.
            </p>
            <p className="text-[#888787] text-justify">
              Simultaneously, the client will follow the 12-step recovery
              program and engage in REBT (Rational Emotive Behavior Therapy), a
              form of psychotherapy. Each client undergoes a personalized
              treatment plan, supervised by a clinical psychologist and
              psychiatrist. The entire program, including withdrawal management,
              spans approximately 4 months.
            </p>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-[#444]">
              Individualized Care Plan
            </h3>
            <p className="text-[#888787] text-justify">
              Each treatment plan is tailored with reference to personal
              history, family background, the circumstances leading to
              addiction, type of substances used, gender, physical health, and
              other key variables. This personalized approach ensures a more
              effective and human-centric recovery experience.
            </p>
            <p className="text-[#888787] text-justify">
              This renowned methodology integrates therapeutic principles with
              core human values, offering every client a chance to heal with
              dignity and hope.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Treatment;
