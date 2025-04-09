import React from 'react';

function Fee() {
  return (
    <section className="mx-auto container my-12 px-8">
      <div className="flex flex-col gap-8">
        <h2 className="text-center text-3xl font-bold">
          <span
            className="pb-1"
            style={{
              borderBottom: '4px solid transparent',
              borderImage: 'linear-gradient(to right, red, yellow, blue) 1',
            }}
          >
            Fee Structure
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* First Month Fee Card */}
          <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-[#ed1b24]">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              First Month Fee
            </h3>
            <p className="text-2xl font-bold text-blue-900 mb-4">
              Rs. 110,000
            </p>
            <ul className="text-[#5c5c5c] list-disc ms-5 space-y-2 text-sm">
              <li>Treatment Charges: Rs. 85,000</li>
              <li>
                One-time Additional: Rs. 15,000 (Includes:
                <ul className="list-disc ms-5">
                  <li>Medical Examinations</li>
                  <li>Detoxification (Withdrawal management)</li>
                  <li>Welcome Kit for Client & Family</li>
                </ul>
              </li>
              <li>
                Personal Expenses (Accountable): Rs. 10,000  
                <ul className="list-disc ms-5">
                  <li>Toiletries, Laundry, Saloon</li>
                  <li>Fruits, Juices, Biscuits, Chocolates</li>
                  <li>Cigarettes (if applicable)</li>
                </ul>
              </li>
            </ul>
            <p className="text-[#888787] mt-4 text-sm italic">
              * If expenses exceed Rs. 10,000, the family will be informed.
            </p>
          </div>

          {/* Monthly Fee Card */}
          <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-[#475e87]">
            <h3 className="text-xl font-semibold text-red-500 mb-3">
              Monthly Fee (After 1st Month)
            </h3>
            <p className="text-2xl font-bold text-red-700 mb-4">
              Rs. 95,000 / month
            </p>
            <ul className="text-[#5c5c5c] list-disc ms-5 space-y-2 text-sm">
              <li>Treatment Charges: Rs. 85,000</li>
              <li>
                Personal Expenses (Accountable): Rs. 10,000  
                <ul className="list-disc ms-5">
                  <li>Toiletries, Laundry, Saloon</li>
                  <li>Fruits, Juices, Biscuits, Chocolates</li>
                  <li>Cigarettes (if applicable)</li>
                </ul>
              </li>
            </ul>
            <p className="text-[#888787] mt-4 text-sm italic">
              * Consistent care and support throughout the treatment.
            </p>
          </div>
        </div>

        <p className="text-[#888787] text-justify mt-6">
          This fee structure is applicable for both Nepalese and foreign candidates.
        </p>

        <p className="text-[#888787] text-justify text-sm">
          🧾 Taxes as applicable will be added as per government regulations.
        </p>
      </div>
    </section>
  );
}

export default Fee;
