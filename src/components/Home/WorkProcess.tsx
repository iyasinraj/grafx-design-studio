const WorkProcess = () => {
    return (
        <div className="w-full mx-auto lg:mt-32">
            <h2
                className="text-center my-10 md:max-w-xl max-w-sm mx-auto md:text-6xl text-4xl font-extrabold border-b-8 border-b-warning"
            >How Does It Work
            </h2>
            <div className='px-4 md:px-0'>
                <h3 className="my-4 text-center md:text-start md:my-8 font-bold text-lg md:text-3xl"
                >{"We'll"} Just Go Through These 4 Easy Steps</h3>
                {/* steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
                    <div className="p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <div className="text-4xl font-bold">1_</div>
                        <div className="text-2xl font-bold mt-2">{"Let's"} Have a Quick Discussion</div>
                    </div>
                    <div className="p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <div className="text-4xl font-bold">2_</div>
                        <div className="text-2xl font-bold mt-2">Understanding Your Business</div>
                    </div>
                    <div className="p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <div className="text-4xl font-bold">3_</div>
                        <div className="text-2xl font-bold mt-2">Delivering the Strategy</div>
                    </div>
                    <div className="p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <div className="text-4xl font-bold">4_</div>
                        <div className="text-2xl font-bold mt-2">Now Enjoy the Results</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;