"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroImage from '@/assets/HeroShape.png';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="min-h-screen lg:pt-10 w-full container mx-auto">
            <div className="md:flex flex-col justify-between lg:flex-row-reverse">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }} // Adjust the duration as needed
                    className="w-md md:w-[600px] floating-image">
                    <Image src={HeroImage.src} alt="hero image" height={2000} width={2000} />
                </motion.div>
                <div className="grid content-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }} // Adjust the duration as needed
                    >
                        <h1
                            className="text-4xl md:text-[48px] text-center text-gray-700 md:text-start font-extrabold uppercase">
                            <span className="text-7xl text-black md:text-[98px]">Growth</span>
                            <br /> And Good Design{' '}
                        </h1>
                        <p
                            className="py-6 font-bold text-xl text-center md:text-start md:text-3xl">
                            Design Your Brand With Grafx Design Studio.
                        </p>
                        <div className="w-full flex justify-center md:justify-start">
                            <button
                                className="btn btn-lg text-xl shadow-lg font-bold">
                                <Link href={'/services'}>{'Services >'}</Link>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
