import React, { useState } from 'react';

function Faq() {
    const [open, setOpen] = useState(null);

    const handleOpen = (index) => {
        setOpen(open === index ? null : index);
    };

    // FAQ data
    const faqData = [
        { question: "1. What services does Krishna Ganga Rehabilitation Center provide?", answer: "We offer professional rehabilitation services including addiction recovery, mental health counseling, physical therapy, and holistic healing practices." },
        { question: "2. Who can receive treatment at your center?", answer: "Our center is open to individuals struggling with substance abuse, mental health issues, or in need of physical rehabilitation, regardless of age or background." },
        { question: "3. Is the treatment residential or outpatient?", answer: "We provide both residential (in-patient) and outpatient treatment programs based on the needs and preferences of the client." },
        { question: "4. What is the duration of the rehabilitation program?", answer: "Program duration varies depending on the individual's condition. Typically, treatment can last from 30 to 90 days, with follow-up sessions for long-term recovery support." },
        { question: "5. Is the treatment confidential?", answer: "Yes, we maintain complete confidentiality regarding all patient information and treatment details." },
        { question: "6. Can family members visit the patient during treatment?", answer: "Yes, we encourage family involvement in the treatment process to support the patient's recovery." },
        { question: "7. Are there any age restrictions for admission?", answer: "We do not have any specific age restrictions. Our center is open to people of all ages, depending on the nature of their treatment." },
        { question: "8. Can patients continue their work or education while in treatment?", answer: "Patients may be able to continue their work or education, depending on their treatment plan. We offer flexible programs to accommodate their needs." },
        { question: "9. How can I get in touch with the center for more information?", answer: "You can contact us through our website, or call our helpline number at +1-800-123-4567 for further assistance." },
        { question: "10. Do you offer therapy for mental health conditions?", answer: "Yes, we offer therapy and counseling services for various mental health conditions, including anxiety, depression, PTSD, and more." },
        { question: "11. Is your center accredited or licensed?", answer: "Yes, we are fully accredited and licensed by relevant regulatory bodies to provide high-quality rehabilitation services." },
        { question: "12. Do you offer group therapy sessions?", answer: "Yes, we offer both individual and group therapy sessions to promote peer support and encourage shared healing experiences." },
        { question: "13. What types of therapy do you provide?", answer: "We provide a variety of therapeutic services, including cognitive behavioral therapy (CBT), dialectical behavior therapy (DBT), art therapy, and family therapy." },
    ];

    return (
        <section className="container mx-auto my-8 px-8">
            <div className="flex flex-col gap-8">
                <h2 className="text-center text-3xl font-bold mb-8">
                    <span className="pb-1" style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}>FAQs</span>
                </h2>

                <div id="accordion-collapse" className='flex flex-col gap-6 text-left'>
                    {faqData.map((a, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg">
                            <h2>
                                <button
                                    type="button"
                                    onClick={() => handleOpen(index)}
                                    className="flex items-center justify-between w-full p-5 font-medium text-gray-500"
                                    aria-expanded={open === index ? "true" : "false"}
                                    aria-controls={`accordion-collapse-body-${index}`}
                                >
                                    <span className='text-left'>{a.question}</span>
                                    <svg
                                        className={`w-3 h-3 ${open === index ? 'rotate-180' : ''}`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                </button>
                            </h2>

                            {open === index && (
                                <div>
                                    <hr className="border-t border-gray-200" />
                                    <div className="p-5">
                                        <p className="text-gray-400">{a.answer}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;
