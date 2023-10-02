"use client"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TestimonialCard from "./TestimonialCard";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {

    const testimonials = [
        {
            name: "Kamal Chohan",
            position: "CFO",
            organization: "Chohan Real Estate Group Inc",
            comment: "Sami went above and beyond to get everything exactly how I wanted. His response time was quick and informative. He understood my needs and at times I felt confident enough to allow him to make the design choices if I wasn’t sure. I highly recommend Sami if you want to work with someone who is professional, patient, supportive, and gets the job done on time. I just wish the review section could display all the work he has done for me. If you want to see examples, visit my website/social media accounts. Thanks Sami and I look forward to working with you again!",
        },
        {
            name: "James Alexandre",
            position: "From",
            organization: "Fort landerdale, Florida",
            comment: "Absolutely fantastic work very Depressive. The seller worked with us in creating a color match theme logo and went over and above over and above to ensure color matcouldn't much worked he made amendments to ensure we are happy after item was delivered. Could not recommend enough. Will use again!",
        },
        {
            name: "Mihaela Atkinson",
            position: "Owner",
            organization: "Mihaela -Dog sitting & Pet Care Services",
            comment: "Incredibly quick, understood what I was looking for and offered many options. I look forward to working with you again. I will be recommending you to in my network. Thank you so much.",
        },
        {
            name: "Kamal Chohan",
            position: "CFO",
            organization: "Chohan Real Estate Group Inc",
            comment: "Sami went above and beyond to get everything exactly how I wanted. His response time was quick and informative. He understood my needs and at times I felt confident enough to allow him to make the design choices if I wasn’t sure. I highly recommend Sami if you want to work with someone who is professional, patient, supportive, and gets the job done on time. I just wish the review section could display all the work he has done for me. If you want to see examples, visit my website/social media accounts. Thanks Sami and I look forward to working with you again!",
        },
        {
            name: "James Alexandre",
            position: "From",
            organization: "Fort landerdale, Florida",
            comment: "Absolutely fantastic work very Depressive. The seller worked with us in creating a color match theme logo and went over and above over and above to ensure color matcouldn't much worked he made amendments to ensure we are happy after item was delivered. Could not recommend enough. Will use again!",
        },
        {
            name: "Mihaela Atkinson",
            position: "Owner",
            organization: "Mihaela -Dog sitting & Pet Care Services",
            comment: "Incredibly quick, understood what I was looking for and offered many options. I look forward to working with you again. I will be recommending you to in my network. Thank you so much.",
        },
    ];

    return (
        <div className="min-h-screen w-full mx-auto lg:mt-32">
            <h2 className="text-center my-10 md:max-w-md max-w-sm mx-auto md:text-6xl text-5xl font-extrabold border-b-8 border-b-warning">
                Testimonials
            </h2>
            <div className="px-4 lg:mt-20 h-full md:px-0">
                <h3 className="my-4 text-center md:text-start md:my-8 font-bold text-lg md:text-3xl">
                    What My Clients Say
                </h3>
                <div className="h-[700px] md:h-[750px]">
                    <Swiper
                        className="mySwiper h-[650px] md:h-[650px]"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        spaceBetween={20}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        modules={[Pagination, Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}

                    >

                        {testimonials.map((testimonial, i) => (
                            <SwiperSlide key={i} >
                                <TestimonialCard testimonial={testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div >
    );
};

export default Testimonials;