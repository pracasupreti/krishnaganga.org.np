import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Faq() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <>
            <section className='container mx-auto my-8 px-8'>
                <div className='flex flex-col gap-8'>
                    <h2 className='text-center text-3xl font-bold mb-8'>
                        <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}>Faq</span>
                    </h2>
                    <div className='text-left'>
                    <Accordion open={open === 1}>
                        <AccordionHeader className='text-[18px]' onClick={() => handleOpen(1)}>1. What services does Krishna Ganga Rehabilitation Center provide?</AccordionHeader>
                        <AccordionBody>
                        We offer professional rehabilitation services including addiction recovery, mental health counseling, physical therapy, and holistic healing practices.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                        <AccordionHeader className='text-[18px]' onClick={() => handleOpen(2)}>
                        2. Who can receive treatment at your center?
                        </AccordionHeader>
                        <AccordionBody>
                        Our center is open to individuals struggling with substance abuse, mental health issues, or in need of physical rehabilitation, regardless of age or background.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                        <AccordionHeader className='text-[18px]' onClick={() => handleOpen(3)}>
                        3. Is the treatment residential or outpatient?
                        </AccordionHeader>
                        <AccordionBody>
                        We provide both residential (in-patient) and outpatient treatment programs based on the needs and preferences of the client.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4}>
                        <AccordionHeader className='text-[18px]' onClick={() => handleOpen(4)}>
                        4. What is the duration of the rehabilitation program?
                        </AccordionHeader>
                        <AccordionBody>
                        Program duration varies depending on the individual's condition. Typically, treatment can last from 30 to 90 days, with follow-up sessions for long-term recovery support.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5}>
                        <AccordionHeader className='text-[18px]' onClick={() => handleOpen(5)}>
                        5. Is the treatment confidential?
                        </AccordionHeader>
                        <AccordionBody>
                        Yes, we maintain complete confidentiality regarding all patient information and treatment details.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 6}>
                        <AccordionHeader className='text-[18px]' onClick={() => handleOpen(6)}>
                        6. Do you offer detox services?
                        </AccordionHeader>
                        <AccordionBody>
                        Yes, we provide medically supervised detoxification as the first step for individuals with substance dependency.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 7}>
                        <AccordionHeader className='text-[18px]' onClick={() => handleOpen(7)}>
                        7. Are family members allowed to visit or be involved in therapy?
                        </AccordionHeader>
                        <AccordionBody>
                        Yes, family involvement is encouraged and we offer family counseling and visitation at appropriate times during the program.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 8}>
                        <AccordionHeader className='text-[18px]' onClick={() => handleOpen(8)}>
                        8. How much does the rehabilitation program cost?
                        </AccordionHeader>
                        <AccordionBody>
                        The cost depends on the program type and duration. Please contact our administrative team for detailed pricing information and possible financial assistance.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 9}>
                        <AccordionHeader className='text-[18px]' onClick={() => handleOpen(9)}>
                        9. Do you accept insurance?
                        </AccordionHeader>
                        <AccordionBody>
                        Yes, we work with several insurance providers. Kindly provide your insurance details so we can verify coverage.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 10}>
                        <AccordionHeader className='text-[18px]' onClick={() => handleOpen(10)}>
                        10. What should I bring if I am admitted to the center?
                        </AccordionHeader>
                        <AccordionBody>
                        We will provide a checklist, but generally, you should bring comfortable clothes, personal hygiene items, prescribed medications, and important identification documents.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 11}>
                        <AccordionHeader className='text-[18px]' onClick={() => handleOpen(11)}>
                        11. How can I refer someone to the center?
                        </AccordionHeader>
                        <AccordionBody>
                        You can contact our office directly or fill out the referral form on our website. Our staff will get in touch for an assessment.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 12}>
                        <AccordionHeader className='text-[18px]' onClick={() => handleOpen(12)}>
                        12. What kind of therapies do you use?
                        </AccordionHeader>
                        <AccordionBody>
                        We use evidence-based therapies like Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), group therapy, individual counseling, yoga, meditation, and more.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 13}>
                        <AccordionHeader className='text-[18px]' onClick={() => handleOpen(13)}>
                        13. Is aftercare support available?
                        </AccordionHeader>
                        <AccordionBody>
                        Yes, we offer aftercare programs including support groups, counseling, and relapse prevention strategies to help maintain long-term recovery.
                        </AccordionBody>
                    </Accordion>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Faq
