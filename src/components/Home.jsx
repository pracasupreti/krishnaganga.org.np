import React from 'react'
import Carousel from './Carousel'
// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Home() {
    let post = [
        {
            title: "Standard Medical Test",
            imgSrc: "src/assets/carousel/Standard-Medical-Test.jpg",
            alt: "Standard Medical Test",
            description: "Standard medical tests are done to ensure the candidate is mentally and physically fit."
        },
        {
            title: "Psychiatrist Assessments",
            imgSrc: "src/assets/carousel/Phychiatrist-Assessments.jpg",
            alt: "Psychiatrist Assessments",
            description: "Psychiatrist assessments are conducted to gather information about the candidate."
        },
        {
            title: "Psychological Evaluation",
            imgSrc: "src/assets/carousel/Phychological-Evaluation.jpg",
            alt: "Psychological Evaluation",
            description: "Psychological evaluations are done periodically to ensure the candidate is on the right path."
        },
        {
            title: "AA / NA 12 Step Program",
            imgSrc: "src/assets/carousel/AA--NA-12-Step-Program.jpg",
            alt: "AA / NA 12 Step Program",
            description: "AA/NA 12-step programs help candidates overcome addiction."
        },
        {
            title: "REBT (A form of Psychotherapy)",
            imgSrc: "src/assets/carousel/REBT.jpg",
            alt: "REBT (A form of Psychotherapy)",
            description: "REBT, a form of psychotherapy, helps candidates overcome addiction."
        },
        {
            title: "Management of Emotions & Feelings",
            imgSrc: "src/assets/carousel/management-of-emotions-and-.jpg",
            alt: "Management of Emotions & Feelings",
            description: "Candidates are taught how to manage their emotions and feelings effectively."
        },
        {
            title: "Family Counselling",
            imgSrc: "src/assets/carousel/familycounselling-banner.jpg",
            alt: "Family Counselling",
            description: "Counseling helps individuals and families understand and support each other."
        },
        {
            title: "Behaviour Therapy",
            imgSrc: "src/assets/carousel/Behaviour-Therapy.jpg",
            alt: "Behaviour Therapy",
            description: "Behavior therapy helps prevent relapse and promotes positive behavior changes."
        },
        {
            title: "Relapse Prevention Program",
            imgSrc: "src/assets/carousel/Relapse-Prevention-Program.jpg",
            alt: "Relapse Prevention Program",
            description: "Relapse prevention programs help reduce the risk of returning to self-destructive behavior."
        }
    ]

    let treatmentData = [
        {
            image: "src/assets/treatment/personal.jpg",
            alt: "Personal Treatment",
            heading: "Tailored to personal history, family history, and circumstances",
            description:
                "Our program focuses on physical and mental recovery, self-evaluation, self-esteem, and self-confidence to support clients in abstaining from addiction and leading a happy life. We adhere strictly to a key essence of family support throughout the program."
        },
        {
            image: "src/assets/treatment/behaviour-therapy-footer.jpg",
            alt: "Personalized treatment, evidence-based approach, and skill development.",
            heading: "Personalized, evidence-based, and skill-building.",
            description:
                "Our program is tailored to each person, using proven methods to support their recovery. We focus on building essential skills that help clients handle life's challenges and maintain lasting sobriety. With personalized care and practical tools, we guide individuals toward a stronger, more positive future."
        },
        {
            image: "src/assets/treatment/Relapse.jpg",
            alt: "Relapse Prevention Program",
            heading: "Personalized Approach, Family Involvement, Contextual Focus",
            description:
                "Our program offers a personalized recovery plan tailored to each individual's unique needs. We emphasize strong family involvement to create a supportive recovery environment. By focusing on personal and family history, we ensure a comprehensive and lasting approach to overcoming addiction."
        }
    ];

    return (
        <>  
            <Carousel />
            <section className='container mx-auto my-[60px]'>
                <h2 className='text-center text-3xl font-bold mb-6'>
                    <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}>Dedicated team of counsellor, psychologist, psychiatrist & other team of Doctors</span>
                </h2>

                <div className='mx-auto lg:w-full mt-[60px]'>
                    <Swiper
                        // install Swiper modules
                        modules={[Pagination, A11y, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto play every 5 sec
                    >
                        {post.map((a) => (
                            <SwiperSlide className='mb-[40px] w-full group'>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-center text-[17px] h-[60px] lg:h-[20px]'>{a.title}</p>
                                    <div className='w-full overflow-hidden rounded-lg'>
                                        <img className='lg:h-[245px] mx-auto group-hover:scale-105 duration-500 w-full' src={a.imgSrc} alt={a.alt} />
                                    </div>
                                    <p className='text-[#333] text-wrap'>Relapse prevention programs can help reduce the risk of a return to self-destructive behavior.</p>
                                </div>
                            </SwiperSlide>
                        ))}
                        <style jsx global>
  {`
    

    /* Ensure pagination bullets are yellow */
    .swiper-pagination-bullet {
      background-color: yellow !important;
    }
    
    /* Ensure active pagination bullet is yellow */
    .swiper-pagination-bullet-active {
      background-color: yellow !important;
    }
  `}
</style>
                    </Swiper>
                </div>
            </section>
            <section className='container mx-auto my-6 bg-[#fbfaf8] py-6'>
                <h2 className='text-center text-3xl font-bold mb-8'>
                    <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}>Rejuvenating Activities</span>
                </h2>

                <div className='lg:flex justify-between gap-20'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex gap-4'>
                            <img className='bg-[#ecc731] p-2 h-[60px] w-[60px] rounded-lg' src="src/assets/icon/megaphone.svg" alt="megaphone" />
                            <div>
                                <h2 className='text-[18px] font-bold'>Yoga & Meditation</h2>
                                <p className='text-[#838282]'>Yoga Meditation is the art and science of systematically observing, accepting, understanding, and training each of the levels of our being</p>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <img className='bg-[#ecc731] p-2 h-[60px] w-[60px] rounded-lg' src="src/assets/icon/user.svg" alt="user" />
                            <div>
                                <h2 className='text-[18px] font-bold'>Recreational Art / Craft / Music Therapy</h2>
                                <p className='text-[#838282]'>We understand that illness and medical procedures have the potential to cause anxiety and fear in person. To ease these feelings and help your family.</p>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <img className='bg-[#ecc731] p-2 h-[60px] w-[60px] rounded-lg' src="src/assets/icon/heart.svg" alt="heart" />
                            <div>
                                <h2 className='text-[18px] font-bold'>Well Equipped Library</h2>
                                <p className='text-[#838282]'>We have well equipped library which consists of various books on different sectors and subjects.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[1050px] lg:h-[312px] mt-8 lg:mt-0 h-[312px]'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qrQVdhSE-Vc" title="Anti-Drug Video: Popular" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </section>

            <section className='container mx-auto my-4'>
            <h2 className='font-[300] text-3xl h-[60px] text-center'>Our Treatment Procedures Programme & Methods</h2>
                <div className='lg:flex justify-between gap-[30px]'>
                    {treatmentData.map((post) => (
                        <div className='flex flex-col gap-4 relative lg:w-1/3 group mt-8 lg:mt-0'>
                            <div className='w-full overflow-hidden rounded-lg'>
                                <img className='h-[188px] group-hover:scale-105 duration-500 w-full' src={post.image} alt={post.alt} />
                            </div>
                            <h2 className='font-bold text-[22px] pe-3 h-[60px]'>{post.heading}</h2>
                            <p className='text-[#838282] text-justify'>{post.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home
