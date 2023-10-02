import Image from "next/image";
import img from "@/assets/user.png"

const TestimonialCard = ({ testimonial }: any) => {

  return (
    <div className="rounded-lg h-[600px] md:h[550px] flex flex-col w-full shadow-md p-6">
      <div className="avatar flex justify-center">
        <div className="w-16 rounded-full">

          <Image src={img.src}
          alt="avatar"
          height={1000}
          width={1000} />

        </div>
      </div>
      <div className="text-xl text-center font-semibold">{testimonial.name}</div>
      <div className="text-lg text-center font-semibold">{testimonial.organization}</div>
      <div className="mt-4">
        <p className="text-start text-gray-600 text-[60px]">“</p>
        <p className="text-justify -my-8 py-0">{testimonial.comment}</p>
        <p className="text-end text-gray-600 mt-10 text-[60px]">”</p>
      </div>
    </div>
  );
};

export default TestimonialCard;