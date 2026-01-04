 import React from 'react';

function Project() {
    return (
        <div className="min-h-screen bg-[#1d1839] py-20">
            <h1 className="text-white text-5xl text-center font-bold mb-10">
                My <span className="text-cyan-500">Projects</span>
            </h1>

            {/* Main Flex Container */}
            <div className="flex justify-center flex-wrap gap-10 pt-10 px-10">
                
                {/* 1. Space Travel Project */}
                <div className="group w-[380px] bg-indigo-950 rounded-[30px] overflow-hidden border-b-8 border-cyan-500 hover:-translate-y-3 transition-all duration-300 shadow-2xl">
                    {/* Project Image */}
                    <div className="h-48 w-full overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=60" 
                            alt="Space Travel" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-8">
                        <span className="text-cyan-400 font-bold text-sm tracking-widest uppercase">Figma Design</span>
                        <h2 className="text-white text-3xl font-bold mt-2">Space Travel UI</h2>
                        <p className="text-gray-300 mt-4 leading-relaxed">
                            Futuristic adventure booking interface design with galaxy-themed visuals.
                        </p>
                        <button className="bg-blue-600 text-white px-8 py-2 rounded-full mt-6 font-bold hover:bg-blue-500 transition-all shadow-lg">
                            View Case Study
                        </button>
                    </div>
                </div>

                {/* 2. Adventure Booking Project */}
                <div className="group w-[380px] bg-indigo-950 rounded-[30px] overflow-hidden border-b-8 border-pink-500 hover:-translate-y-3 transition-all duration-300 shadow-2xl">
                    {/* Project Image */}
                    <div className="h-48 w-full overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=500&q=60" 
                            alt="Adventure Booking" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-8">
                        <span className="text-pink-400 font-bold text-sm tracking-widest uppercase">HTML / CSS / JS</span>
                        <h2 className="text-white text-3xl font-bold mt-2">Adventure Booking</h2>
                        <p className="text-gray-300 mt-4 leading-relaxed">
                            Booking engine for trekkers with real-time destination search and smooth UI.
                        </p>
                        <button className="bg-blue-600 text-white px-8 py-2 rounded-full mt-6 font-bold hover:bg-blue-500 transition-all shadow-lg">
                            Live Demo
                        </button>
                    </div>
                </div>

                {/* 3. Netflix Clone Project */}
                <div className="group w-[380px] bg-indigo-950 rounded-[30px] overflow-hidden border-b-8 border-red-600 hover:-translate-y-3 transition-all duration-300 shadow-2xl">
                    {/* Project Image */}
                    <div className="h-48 w-full overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=500&q=60" 
                            alt="Netflix Clone" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-8">
                        <span className="text-red-500 font-bold text-sm tracking-widest uppercase">React JS</span>
                        <h2 className="text-white text-3xl font-bold mt-2">Netflix Clone</h2>
                        <p className="text-gray-300 mt-4 leading-relaxed">
                            Full movie dashboard using TMDB API with dynamic rows and trailer previews.
                        </p>
                        <button className="bg-blue-600 text-white px-8 py-2 rounded-full mt-6 font-bold hover:bg-blue-500 transition-all shadow-lg">
                            Get Source Code
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Project;