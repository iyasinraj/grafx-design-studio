import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import img from "@/assets/fbProfile.jpg"
import Link from "next/link";
import Head from "next/head";

const page = () => {
    return (
        <div>
            <Head>
                <title>about || grafx-design-studio-2023</title>
            </Head>
            <MainLayout>
                <div className="p-8">
                    <h1
                        className="text-center my-10 md:max-w-lg max-w-sm mx-auto md:text-6xl text-5xl font-extrabold border-b-8 border-b-warning"
                    >About Us</h1>
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2">
                            <Image
                                src={img.src}
                                alt="logo"
                                width={600}
                                height={400}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 flex items-center">
                            <p className="mb-4 text-xl md:text-2xl font-semibold text-justify">
                                At <span className="font-bold text-green-800"><Link href={"/"}>Grafx-Design-Studio</Link></span>, 
                                we are the creative minds behind unforgettable designs. 
                                Our passion for design and dedication to craftsmanship drive us to provide exceptional visual solutions. 
                                With a team of experienced designers, we specialize in a wide range of services, including logo design, 
                                icon creation, brand guidelines, T-shirt and banner design, business cards, image retouching, package design, 
                                book covers, and custom design projects. We believe that design has the power to transform businesses, 
                                and {"we're"} here to bring your vision to life. 
                                Our commitment to detail and customer satisfaction makes us the ideal partner for your creative journey. 
                                Explore our <span className="font-bold text-green-800"><Link href={"/portfolio"}>portfolio</Link></span> and {"let's"} collaborate to make your brand stand out in {"today's"} competitive market.
                            </p>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
};

export default page;