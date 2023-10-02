import Image from "next/image";
import bg from "@/assets/fbProfile.jpg"
import Link from "next/link";
const LetsTalk = () => {
    return (
        <div className="min-h-screen w-full mx-auto">
            <h2 className="text-center my-10 md:max-w-md max-w-sm mx-auto md:text-6xl text-5xl font-extrabold border-b-8 border-b-warning"
            >{"Let's Talk"}</h2>
            <div>
                <div className="flex px-4 md:px-0 flex-col justify-between w-full mx-auto lg:flex-row-reverse">
                    <Image src={bg.src}
                        alt="hero image"
                        height={2000}
                        width={2000}
                        className="w-md md:w-[600px] rounded-lg shadow-2xl" />
                    <div className="md:w-1/2 md:grid content-center">
                        <h1 className="text-4xl my-6 md:m-0 md:text-5xl font-bold">Let Me Help You Grow Your Business.</h1>
                        <div className="w-full flex mt-6 justify-center md:justify-start">
                            <button className="btn btn-lg text-xl shadow-lg font-bold"><Link href={'/contact'}>{"Contact With Us >"}</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetsTalk;