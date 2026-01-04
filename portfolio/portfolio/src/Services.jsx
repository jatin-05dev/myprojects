 import React from 'react';

function Services() {
    const serviceList = [
        {
            title: "Frontend Development",
            desc: "Creating responsive, high-performance websites using React, Tailwind, and modern JavaScript for a seamless user experience.",
            icon: "💻"
        },
        {
            title: "Backend Solutions",
            desc: "Building scalable server-side applications and APIs using Node.js and Express with robust database management.",
            icon: "⚙️"
        },
        {
            title: "UI/UX Optimization",
            desc: "Turning complex requirements into intuitive designs that are visually stunning and easy to navigate.",
            icon: "🎨"
        }
    ];

    return (
        <div className="py-20 min-h-screen">
            <h1 className="text-white text-5xl font-bold text-center mb-16">
                My <span className="text-cyan-500 underline decoration-cyan-500/30">Services</span>
            </h1>

            {/* Container for Cards */}
            <div className="flex flex-wrap justify-center gap-50 px-10">
                {serviceList.map((service, index) => (
                    <div 
                        key={index}
                        className="group relative h-96 w-80 bg-indigo-950/40 border border-indigo-900/50 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.4)] hover:border-cyan-500 overflow-hidden"
                    >
                        {/* Background Decorative Glow */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>

                        <div className="text-5xl mb-6">{service.icon}</div>
                        
                        <h1 className="text-white text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                            {service.title}
                        </h1>
                        
                        <p className="text-gray-300 leading-relaxed text-sm mb-6">
                            {service.desc}
                        </p>

                        <button className="absolute bottom-8 left-8 bg-cyan-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-cyan-400 hover:scale-105 active:scale-95 shadow-lg">
                            Read More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;