'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
const Navbar = () => {
    const [router, setRouter] = useState(""); // State to store the current path

    useEffect(() => {
        // Update the current path when the component mounts
        setRouter(window.location.pathname);
    }, []);
    const activeNavStyle = 'border-b-4 border-yellow-400'
    const menu = <React.Fragment>
        <li className={`font-bold ${router === '/' ? activeNavStyle : ''}`}><Link href={'/'}>Home</Link></li>
        <li className={`font-bold ${router === '/services' ? activeNavStyle : ''}`}><Link href={'/services'}>Services</Link></li>
        {/* <li className={`font-bold ${router === '/pricing' ? activeNavStyle : ''}`}><Link href={'/pricing'}>Pricing</Link></li> */}
        <li className={`font-bold ${router === '/testimonials' ? activeNavStyle : ''}`}><Link href={'/testimonials'}>Testimonials</Link></li>
        <li className={`font-bold ${router === '/portfolio' ? activeNavStyle : ''}`}><Link href={'/portfolio'}>Portfolio</Link></li>
        <li className={`font-bold ${router === '/about' ? activeNavStyle : ''}`}><Link href={'/about'}>About Us</Link></li>
        <li className={`font-bold ${router === '/contact' ? activeNavStyle : ''}`}><Link href={'/contact'}>Contact Us</Link></li>
    </React.Fragment>
    return (
        <div>
            <div className="md:navbar">
                <div className="md:navbar-start flex justify-between">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link href={'/'} className=" hidden md:block btn pt-2 bg-black hover:bg-gray-900 shadow-md">
                        <Image src={logo.src} alt="logo" width={100} height={100} />
                    </Link>
                    <div className="mt-4 pe-4 md:hidden">
                        <Link href={'/'} className="btn bg-black hover:bg-gray-900 shadow-md">
                            <Image src={logo.src} alt="logo" width={100} height={100} />
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:flex w-full justify-end">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                    <Link className="btn btn-sm shadow-md bg-white font-bold" href={'/'}>Hire Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;