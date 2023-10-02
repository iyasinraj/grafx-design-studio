import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import Link from "next/link";

const page = () => {
    return (
        <MainLayout>
            <div>
                <Head>
                    <title>Contact Us - Grafx-Design-Studio</title>
                </Head>
                <div className="">
                    <div className="container mx-auto py-12 px-4">
                        <h2
                            className="text-center my-10 md:max-w-md max-w-xs mx-auto md:text-5xl text-4xl font-extrabold border-b-8 border-b-warning"
                        >
                            Contact With Us
                        </h2>
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 pr-8 flex items-center">
                                <div>
                                    <p className="text-lg text-justify md:text-2xl mb-6">
                                        {" We'd love to hear from you. Whether you have questions, feedback, or just want to say hello, feel free to get in touch."}
                                    </p>

                                    <div className="text-lg md:text-xl font-bold text-gray-600 mb-6">
                                        <div className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 me-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                            <Link href={"tel:+8801521516734"}> +8801521516734</Link>
                                        </div>

                                        <div className="flex my-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 me-4">
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                            </svg>
                                            <Link href={"https://wa.me/+8801521516734"}> +8801521516734</Link>
                                        </div>

                                        <div className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 me-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                            <Link href={"mailto:tanjirulislamsami@gmail.com"}>tanjirulislamsami@gmail.com</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 mt-8 lg:mt-0">
                                {/* Replace the link below with your Google Maps embedded link */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.6697081938413!2d90.41636491430017!3d23.810331593199755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72dd26d81ef%3A0x3ee18da537f455f8!2sDhaka%20Division!5e0!3m2!1sen!2sbd!4v1633766237344!5m2!1sen!2sbd"
                                    width="100%"
                                    height="500"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </div>
                        <div className="mt-12 md:flex w-full flex-row-reverse">
                            <div className="w-full flex justify-center items-center">
                                <h3 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-6">
                                    Send your message to us.
                                </h3>
                            </div>
                            <form className="w-full shadow-lg p-4 rounded-lg">
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-600 text-lg mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full p-2 border rounded-lg"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-600 text-lg mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full p-2 border rounded-lg"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="message"
                                        className="block text-gray-600 text-lg mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows= {4}
                                        className="w-full p-2 border rounded-lg"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default page;