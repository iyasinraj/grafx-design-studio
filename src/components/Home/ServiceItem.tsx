'use client'

const ServiceItem = ({ item }: any) => {
    return (
        <div
            className="shadow-xl mb-4 rounded-md h-40 md:m-0 transition-transform transform ease-in-out duration-700 hover:scale-150 hover:z-10"
            style={{
                backgroundImage: `url(${item.img.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="bg-black rounded-md bg-opacity-60 flex items-center justify-center h-full">
                <h2 className="text-xl text-white font-bold">{item.title}</h2>
            </div>
        </div>
    );
};

export default ServiceItem;

