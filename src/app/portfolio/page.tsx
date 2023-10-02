"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import MainLayout from "@/layouts/MainLayout";
import Image from 'next/image';
import cover from "@/assets/fbCover.jpg"
import img from "@/assets/Banner.png"
import Link from 'next/link';
import FoodLogo from "@/assets/portfolio/FoodLogo.jpg"
import OfficeCusotmIcon from "@/assets/portfolio/OfficeCusotmIcon.jpg"
import QFOODLogo from "@/assets/portfolio/QFOODLogo.jpg"
import VANDURELogo from "@/assets/portfolio/VANDURELogo.jpg"
import customIcons from "@/assets/portfolio/customIcons.jpg"
import customIcons2 from "@/assets/portfolio/customIcons2.jpg"
import customIcons3 from "@/assets/portfolio/customIcons3.jpg"
import customIcons4 from "@/assets/portfolio/customIcons4.jpg"
import funnelLogo from "@/assets/portfolio/funnelLogo.jpg"
import teddyLogo from "@/assets/portfolio/teddyLogo.jpg"
import winterIcon from "@/assets/portfolio/winterIcon.jpg"

const page = () => {

    interface PortfolioItem {
        id: number;
        imageUrl: any; 
        title: string;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fullscreenImage, setFullscreenImage] = useState<PortfolioItem | null>(null);
    
    const bannerStyle = {
        backgroundImage: `url(${cover.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // height: '200px', // Adjust the height as needed
    };

    const portfolioItems: PortfolioItem[] = [
        { id: 1, imageUrl: FoodLogo, title: 'Food Logo' },
        { id: 2, imageUrl: OfficeCusotmIcon, title: 'Office Cusotm Icons' },
        { id: 3, imageUrl: QFOODLogo, title: 'QFOOD Logo' },
        { id: 1, imageUrl: VANDURELogo, title: 'VANDURE Logo' },
        { id: 2, imageUrl: customIcons, title: 'Custom Icons' },
        { id: 3, imageUrl: customIcons2, title: 'Custom Icons' },
        { id: 1, imageUrl: customIcons3, title: 'Custom Icons' },
        { id: 2, imageUrl: customIcons4, title: 'Custom Icons' },
        { id: 3, imageUrl: funnelLogo, title: 'Funnels Logo' },
        { id: 1, imageUrl: teddyLogo, title: 'Teddy Logo' },
        { id: 2, imageUrl: winterIcon, title: 'Winter Icon' }
        // Add more items as needed
    ];

    const openFullscreenImage = (item: any) => {
        setFullscreenImage(item);
    };

    const closeFullscreenImage = () => {
        setFullscreenImage(null);
    };
    return (
        <div>
            <MainLayout>
                <div>
                    <Head>
                        <title>Our Portfolio - Your Company</title>
                    </Head>
                    <div className="">
                        <div className="container mx-auto py-12 px-4">
                            <div className='w-full h-[200px] lg:h-[500px] '
                                style={bannerStyle}
                            >
                            </div>
                            <div className='h-full flex items-center'>
                                <h2 className="text-center my-10 md:max-w-md max-w-xs mx-auto md:text-5xl text-4xl font-extrabold border-b-8 border-b-warning"
                                >Our Portfolio</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {portfolioItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="relative cursor-pointer rounded-lg shadow-md"
                                        onClick={() => openFullscreenImage(item)}
                                    >
                                        <Image
                                            src={item.imageUrl.src}
                                            alt={item.title}
                                            width={1000}
                                            height={600}
                                            className="w-full rounded-lg transition-transform transform hover:scale-105"
                                        />
                                        <div className="absolute inset-0 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 hover:bg-opacity-80">
                                            <p className="text-white text-lg font-semibold">{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='my-6 flex justify-center'>
                                <button className='btn bg-blue-600 text-white text-xl font-bold'>
                                    <Link href={"https://www.behance.net/Tanjirul16"} target='blank'>Find More.</Link>
                                </button>
                            </div>
                            {fullscreenImage && (
                                <div
                                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
                                    onClick={closeFullscreenImage}
                                >
                                    <div className="max-w-screen-lg w-full">
                                        <Image
                                            src={fullscreenImage.imageUrl.src}
                                            alt={fullscreenImage.title}
                                            width={1000}
                                            height={1000}
                                            className="w-full h-auto"
                                        />
                                        <p className="text-white text-xl font-semibold text-center mt-4">
                                            {fullscreenImage.title}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
};

export default page;