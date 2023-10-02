import MainLayout from "@/layouts/MainLayout";
import img1 from "@/assets/LogoDesign.png"
import Image from "next/image";

const page = () => {

    const services = [
        { title: "Business Card", img: "/", price: 0 },
        { title: "Letterhead", img: "/", price: 0 },
        { title: "Tri - fold / Bi - fold", img: "/", price: 0 },
        { title: "Poster / Flyer", img: "/", price: 0 },
        { title: "Billboard Design", img: "/", price: 0 },
        { title: "Menu Card", img: "/", price: 0 },
        { title: "10 Line Icon Design", img: "/", price: 0 },
        { title: "Click able Email sign", img: "/", price: 0 },
        { title: "Web Banner", img: "/", price: 0 },
        { title: "Social Media Cover Design", img: "/", price: 0 },
        { title: "Social Media Post Design", img: "/", price: 0 },
        { title: "Blog Image Design", img: "/", price: 0 },
        { title: "Email Templates", img: "/", price: 0 },
        { title: "Email Signature", img: "/", price: 0 },
        { title: "Web Icon", img: "/", price: 0 },
        { title: "Web Ads", img: "/", price: 0 },
        { title: "Package Design", img: "/", price: 0 },
        { title: "Label / Sticker", img: "/", price: 0 },
        { title: "Tshirt Design", img: "/", price: 0 },
        { title: "Illustration", img: "/", price: 0 },
        { title: "Book Cover Design", img: "/", price: 0 },
        { title: "Book Layout", img: "/", price: 0 },
        { title: "PPT Presentation", img: "/", price: 0 },
        { title: "Infographics", img: "/", price: 0 }
    ]
    return (
        <div>
            <MainLayout>
                <div className="w-full mx-auto lg:mb-20">
                    <h2
                        className="text-center my-10 md:max-w-lg max-w-xs mx-auto md:text-5xl text-4xl font-extrabold border-b-8 border-b-warning"
                    >Our Services
                    </h2>
                    <div className="">
                        <div className="py-12 px-4">
                            <div className="w-full mx-auto shadow-lg p-4 my-4 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                                {services.map((service, i) => (
                                    <div key={i} className="">
                                        <div className="">
                                            <h2 className="md:text-xl font-bold flex items-center"
                                            ><svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg> {service.title} - Starting at ${service.price}
                                            </h2>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <h2 className="text-end md:text-2xl text-green-700 font-bold mt-4 me-4">No Hidden Charges!</h2>
                        </div>

                        {/* Plans */}
                        <div className="flex justify-center items-center my-10">
                            <div className="">
                                <div className="md:text-4xl font-extrabold text-center">
                                    <h1 className="text-2xl md:text-5xl">
                                        <span className="text-blue-700 tracking-wide">Logo Design </span>
                                        <span>Plans</span>
                                    </h1>
                                </div>
                                <div className="pt-24 grid gap-4 lg:flex lg:flex-row justify-center">
                                    {/* <!-- Basic Card --> */}
                                    <div className="w-96 p-8 bg-base-200 text-center rounded-3xl pr-16 shadow-xl">
                                        <h1 className="text-black font-bold text-2xl uppercase">Basic Plan</h1>
                                        <p className="pt-2 tracking-wide">
                                            <span className="text-gray-400 align-top">$ </span>
                                            <span className="text-3xl font-bold">150</span>
                                        </p>
                                        <hr className="mt-4 border-1" />
                                        <div className="pt-8">
                                            <p className="text-center font-bold">Logo Only</p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    <span className="text-black">3 Concepts</span>
                                                </span>
                                            </p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-black">Source File</span>
                                                </span>
                                            </p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-black">High Resolution</span>
                                                </span>
                                            </p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-black">Logo Transparency</span>
                                                </span>
                                            </p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-black">Unlimited Revisions</span>
                                                </span>
                                            </p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-black">3 Days Delivery</span>
                                                </span>
                                            </p>

                                            <a href="#" className="">
                                                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                                    <span className="font-medium">
                                                        Get Started
                                                    </span>
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!-- StartUp Card --> */}
                                    <div className="w-96 md:w-80 p-8 my-10 lg:my-0 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white lg:transform lg:scale-125">
                                        <h1 className="text-white font-bold text-2xl uppercase">Standard Plan</h1>
                                        <p className="pt-2 tracking-wide">
                                            <span className="text-gray-400 align-top">$ </span>
                                            <span className="text-3xl font-bold">250</span>
                                        </p>
                                        <hr className="mt-4 border-1 border-gray-600" />
                                        <div className="pt-8">
                                            <p className="text-center font-bold">Logo + Stationery</p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-white">3 Concepts</span>
                                                </span>
                                            </p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-white">Source File</span>
                                                </span>
                                            </p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-white">High Resolution</span>
                                                </span>
                                            </p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-white">Logo Transparency</span>
                                                </span>
                                            </p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-white">Unlimited Revisions</span>
                                                </span>
                                            </p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-white">5 Days Delivery</span>
                                                </span>
                                            </p>

                                            <a href="#" className="">
                                                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                                    <span className="font-medium">
                                                        Get Started
                                                    </span>
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!-- Enterprise Card --> */}
                                    <div className="w-96 p-8 bg-base-200 text-center rounded-3xl pl-16 shadow-xl">
                                        <h1 className="text-black font-bold text-2xl uppercase">Golden Plan</h1>
                                        <p className="pt-2 tracking-wide">
                                            <span className="text-gray-400 align-top">$ </span>
                                            <span className="text-3xl font-bold">350</span>
                                        </p>
                                        <hr className="mt-4 border-1" />
                                        <div className="pt-8">
                                            <p className="text-center font-bold">Logo + Stationery + Branding Guidelines</p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-black">3 Concepts</span>
                                                </span>
                                            </p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-black">Source File</span>
                                                </span>
                                            </p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-black">High Resolution</span>
                                                </span>
                                            </p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-black">Logo Transparency</span>
                                                </span>
                                            </p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-black">Unlimited Revisions</span>
                                                </span>
                                            </p>
                                            <p className="font-semibold text-gray-400 text-left">
                                                <span className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg> <span className="text-black">7 Days Delivery</span>
                                                </span>
                                            </p>

                                            <a href="#" className="">
                                                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                                    <span className="font-medium">
                                                        Get Started
                                                    </span>
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Socila Media Plans */}
                        <div className="flex flex-col items-center justify-center min-h-screen p-10 md:p-20">
                            <div className="md:text-4xl font-extrabold text-center">
                                <h1 className="text-2xl md:text-5xl">
                                    <span className="text-blue-700 tracking-wide">Social Media Pricing </span>
                                    <span>Plans</span>
                                </h1>
                            </div>
                            <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8">
                                {/* <!-- Tile 1 --> */}
                                <div className="flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg">
                                    <div className="flex flex-col items-center p-10 bg-blue-200">
                                        <span className="font-semibold">basic</span>
                                        <div className="flex items-center">
                                            <span className="text-3xl">$</span>
                                            <span className="text-5xl font-bold">100</span>
                                            <span className="text-2xl text-gray-500">/mo</span>
                                        </div>
                                    </div>
                                    <div className="p-10 font-bold">
                                        <ul>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span className="ml-2">10 Socila Media Banner</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span className="ml-2">Unlimited Revisions</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span className="ml-2">Live Support</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex px-10 pb-10 justfy-center">
                                        <button
                                            className="btn w-full">
                                            Get Started
                                        </button>
                                    </div>
                                </div>

                                {/* <!-- Tile 2 --> */}
                                <div className="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-110">
                                    <div className="flex flex-col items-center p-10 bg-green-200">
                                        <span className="font-semibold">Premium</span>
                                        <div className="flex items-center">
                                            <span className="text-3xl">$</span>
                                            <span className="text-6xl font-bold">400</span>
                                            <span className="text-2xl text-gray-500">/mo</span>
                                        </div>
                                    </div>
                                    <div className="p-10 font-bold">
                                        <ul>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span className="ml-2">50 Socila Media Banner</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span className="ml-2">Unlimited Revisions</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span className="ml-2">Live Support</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex px-10 pb-10 justfy-center">
                                        <button
                                            className="btn w-full">
                                            Get Started
                                        </button>
                                    </div>
                                </div>

                                {/* <!-- Tile 3 --> */}
                                <div className="flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mt-8 md:mt-19">
                                    <div className="flex flex-col items-center p-10 bg-blue-200">
                                        <span className="font-semibold">Ultimate</span>
                                        <div className="flex items-center">
                                            <span className="text-3xl">$</span>
                                            <span className="text-5xl font-bold">1000</span>
                                            <span className="text-2xl text-gray-500">/mo</span>
                                        </div>
                                    </div>
                                    <div className="p-10 font-bold">
                                        <ul>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span className="ml-2">100 Socila Media Banner</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span className="ml-2">Unlimited Revisions</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span className="ml-2">Live Support</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex px-10 pb-10 justfy-center">
                                        <button
                                            className="btn w-full">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout >
        </div >
    );
};

export default page;