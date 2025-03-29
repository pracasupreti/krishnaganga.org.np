import React from 'react'
import Carousel from './Carousel'
// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Home() {
    return (
        <>
            <Carousel />
            <section className='container mx-auto my-[60px]'>
                <h2 className='text-center text-3xl font-bold mb-6'>
                    <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, green, yellow) 1" }}>Dedicated team of counsellor, psychologist, psychiatrist & other team of Doctors</span>
                </h2>

                <div className='mx-auto lg:w-[1100px] mt-[60px]'>
                    <Swiper
                        // install Swiper modules
                        modules={[Pagination, A11y, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto play every 5 sec
                    >
                        <SwiperSlide className='mb-6'>
                            <div className='flex flex-col gap-4 w-[360px]'>
                                <p className='text-center text-[17px]'>Standard Medical Test</p>
                                <img className='w-full h-[245px] mx-auto' src="src/assets/crousel/Standard-Medical-Test.jpg" alt="Standard Medical Test" />
                                <p className='text-[#333]'>Standard medical tests are done to ensure the candidate is mentally and physically fit.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-6'>
                            <div className='flex flex-col gap-4 w-[360px]'>
                                <p className='text-center text-[17px]'>Phychiatrist Assessments</p>
                                <img className='w-full h-[245px] mx-auto' src="src/assets/crousel/Phychiatrist-Assessments.jpg" alt="Phychiatrist Assessments" />
                                <p className='text-[#333]'>Phychiatrist assessments is done to gather the information about the candidate.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-6'>
                            <div className='flex flex-col gap-4 w-[360px]'>
                                <p className='text-center text-[17px]'>Phychological Evaluation
                                </p>
                                <img className='w-full h-[245px] mx-auto' src="src/assets/crousel/Phychological-Evaluation.jpg" alt="Phychological Evaluation" />
                                <p className='text-[#333]'>Phychological Evaluation is done under timely basis to ensure the cadidate is in right direction.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-6'>
                            <div className='flex flex-col gap-4 w-[360px]'>
                                <p className='text-center text-[17px]'>AA / NA 12 Step Program</p>
                                <img className='w-full h-[245px] mx-auto' src="src/assets/crousel/AA--NA-12-Step-Program.jpg" alt="AA / NA 12 Step Program" />
                                <p className='text-[#333]'>AA/NA 12 step programme is the one of the programme to help the cadidate.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-6'>
                            <div className='flex flex-col gap-4 w-[360px]'>
                                <p className='text-center text-[17px]'>REBT ( A form of Psychotherapy )</p>
                                <img className='w-full h-[245px] mx-auto' src="src/assets/crousel/REBT.jpg" alt="REBT ( A form of Psychotherapy )" />
                                <p className='text-[#333]'>In here we use different form of Psychotherapy REBT helps the candidate to overcome the addiction.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-6'>
                            <div className='flex flex-col gap-4 w-[360px]'>
                                <p className='text-center text-[17px]'>Management of Emotions & Feelings</p>
                                <img className='w-full h-[245px] mx-auto' src="src/assets/crousel/management-of-emotions-and-.jpg" alt="Standard Medical Test" />
                                <p className='text-[#333]'>Here we also teach the candidate to manage the emotions and feelings.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-6'>
                            <div className='flex flex-col gap-4'>
                                <p className='text-center text-[17px]'>Family Counselling</p>
                                <img className='w-full lg:h-[245px] mx-auto' src="src/assets/crousel/familycounselling-banner.jpg" alt="Family Counselling" />
                                <p className='text-[#333] text-wrap'>Counselling is the best possible way to understand and to make the person understand.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-6'>
                            <div className='flex flex-col gap-4'>
                                <p className='text-center text-[17px]'>Behaviour Therapy</p>
                                <img className='w-full lg:h-[245px] mx-auto' src="src/assets/crousel/Behaviour-Therapy.jpg" alt="Behaviour Therapy" />
                                <p className='text-[#333] text-wrap'>Relapse prevention programs can help reduce the risk of a return to self-destructive behavior.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-6 w-full'>
                            <div className='flex flex-col gap-4'>
                                <p className='text-center text-[17px]'>Relapse Prevention Program</p>
                                <img className='w-full lg:h-[245px] mx-auto' src="src/assets/crousel/Relapse-Prevention-Program.jpg" alt="Relapse Prevention Program" />
                                <p className='text-[#333] text-wrap'>Relapse prevention programs can help reduce the risk of a return to self-destructive behavior.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className='container mx-auto my-6 bg-[#fbfaf8] py-6'>
                <h2 className='text-center text-3xl font-bold mb-8'>
                    <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, green, yellow) 1" }}>Rejuvenating Activities</span>
                </h2>

                <div className='lg:flex justify-between gap-20'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex gap-4'>
                            <img className='bg-[#ecc731] p-2 h-[60px] w-[60px]' src="src\assets\icon\megaphone.svg" alt="megaphone" />
                            <div>
                                <h2 className='text-[18px] font-bold'>Yoga & Meditation</h2>
                                <p className='text-[#838282]'>Yoga Meditation is the art and science of systematically observing, accepting, understanding, and training each of the levels of our being</p>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <img className='bg-[#ecc731] p-2 h-[60px] w-[60px]' src="src\assets\icon\user.svg" alt="user" />
                            <div>
                                <h2 className='text-[18px] font-bold'>Recreational Art / Craft / Music Therapy</h2>
                                <p className='text-[#838282]'>We understand that illness and medical procedures have the potential to cause anxiety and fear in person. To ease these feelings and help your family.</p>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <img className='bg-[#ecc731] p-2 h-[60px] w-[60px]' src="src\assets\icon\heart.svg" alt="heart" />
                            <div>
                                <h2 className='text-[18px] font-bold'>Well Equipped Library</h2>
                                <p className='text-[#838282]'>We have well equipped library which consists of various books on different sectors and subjects.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <iframe width="555" height="312" src="https://www.youtube.com/embed/qrQVdhSE-Vc" title="Anti-Drug Video: Popular" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </section>

            <section className='container mx-auto my-4'>
                <div className='lg:flex justify-between gap-[30px]'>
                    <div className='flex flex-col gap-4 relative lg:w-1/3'>
                        <h2 className='font-[300] text-3xl h-[60px]'>Our Treatment Procedures & Methods</h2>
                        <img className='h-[188px] w-full' src="src\assets\treatment\personal.jpg" alt="personal" />
                        <h2 className='font-bold text-[24px] pe-3 h-[60px]'>Tailord with reference to personal history, family history, circumtances</h2>
                        <p className='text-[#838282] text-justify'>Our program deals with physical recovery, mental recovery, self evalution, self esteem, self confidence to support the client to abstain from addiction and to lead a happy life. Key essence in family program which we adhere to very strictly.</p>
                    </div>

                    <div className='flex flex-col gap-4 relative lg:w-1/3'>
                        <h2 className='font-[300] text-3xl h-[60px]'>Programme</h2>
                        <img className='h-[188px] w-full' src="src\assets\treatment\behaviour-therapy-footer.jpg" alt="Behaviour Therapy" />
                        <h2 className='font-bold text-[24px] pe-3 h-[60px]'>Behaviour Therapy</h2>
                        <p className='text-[#838282] text-justify'>Behaviour Therapy,here helps the person to look more specific ,and teaches how the behaviour influences the environment.</p>
                    </div>

                    <div className='flex flex-col gap-4 relative lg:w-1/3'>
                        <h2 className='font-[300] text-3xl h-[60px]'>&nbsp;</h2>
                        <img className='h-[188px] w-full' src="src\assets\treatment\Relapse.jpg" alt="Relapse Prevention Program" />
                        <h2 className='font-bold text-[24px] pe-3 h-[60px]'>Relapse Prevention Program</h2>
                        <p className='text-[#838282] text-justify'>Relapse prevention programs can help reduce the risk of a return to self-destructive behavior.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
