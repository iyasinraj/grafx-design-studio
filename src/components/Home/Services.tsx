import React from 'react';
import ServiceItem from './ServiceItem';
import img1 from "@/assets/LogoDesign.png"
import img2 from "@/assets/IconDesign.png"
import img3 from "@/assets/brandGuidelines.png"
import img4 from "@/assets/TShirt.png"
import img5 from "@/assets/Banner.png"
import img6 from "@/assets/businessCard.png"
import img7 from "@/assets/PhotoRetouch.png"
import img8 from "@/assets/PackageDesign.png"
import img9 from "@/assets/bookCover.png"
import img10 from "@/assets/custom.png"

const Services = () => {
    const items = [
        { title: "logo Design", img: img1 },
        { title: "Icon Design", img: img2 },
        { title: "Brand Guideline", img: img3 },
        { title: "T-shirt Design", img: img4 },
        { title: "Banner / Cover Design", img: img5 },
        { title: "Business Card Design", img: img6 },
        { title: "Image Retouching", img: img7 },
        { title: "Package Design", img: img8 },
        { title: "Book cover Design", img: img9 },
        { title: "Custom Design", img: img10 }
    ]

    return (
        <div className="w-full mx-auto">
            <h2
                className="text-center my-10 md:max-w-lg max-w-sm mx-auto md:text-6xl text-5xl font-extrabold border-b-8 border-b-warning"
            >Our Services
            </h2>
            <div className='w-full mx-auto md:mt-20 px-4 md:p-0 md:grid md:grid-cols-5 md:gap-4'>
                {items.map((item, i) => <ServiceItem key={i} item={item} />)}
            </div>
        </div>
    );
};

export default Services;