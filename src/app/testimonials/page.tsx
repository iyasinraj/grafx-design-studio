import Testimonials from "@/components/Home/Testimonials";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";

const page = () => {
    return (
        <div>
            <Head>
                <title>Testimonials || grafx-design-studio-2023</title>
            </Head>
            <MainLayout>
                <Testimonials />
                <div className="px-4 mb-10 h-full md:px-0">
                    <h3 className="my-4 text-center md:text-start md:my-8 font-bold text-lg md:text-3xl">
                        Reviews from my Clients
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">

                        <iframe
                            className="rounded-md shadow-lg"
                            src="https://www.youtube.com/embed/QkqnjpFkcDI"
                            width="100%"
                            height="400"
                            title="Testimonial from Natalie Reyna"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>

                        <iframe
                            className="rounded-md shadow-lg"
                            src="https://www.youtube.com/embed/nTCx8QwUmgc"
                            width="100%"
                            height="400"
                            title="Review from gary"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>

                        <iframe
                            className="rounded-md shadow-lg"
                            src="https://www.youtube.com/embed/XCLik3Jal6k"
                            width="100%"
                            height="400"
                            title="Testimonial from Sean Van Zant."
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>

                        <iframe
                            className="rounded-md shadow-lg"
                            src="https://www.youtube.com/embed/IQyg3lLah9Q"
                            width="100%"
                            height="400"
                            title="Testimonial from Kamal Chohan."
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
};

export default page;