 import React from 'react';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1d1839] px-6 py-10 overflow-hidden">
      
      {/* MAIN CONTAINER: Mobile pe Column (Reverse), Desktop pe Row */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl w-full gap-10">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left z-10">
          <h3 className="text-white text-xl md:text-3xl font-medium mb-2">Hello, it's Me</h3>
          <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            Dev <span className="text-cyan-500">Jatin</span>
          </h1>
          <h2 className="text-white text-2xl md:text-4xl font-semibold mb-6">
            And I'm a <span className="text-cyan-500">Frontend Developer</span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
            I specialize in building high-performance, responsive, and visually stunning 
            web interfaces using React and modern CSS. Let's turn your ideas into reality.
          </p>

          {/* Responsive Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
            <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 py-3 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all active:scale-95">
              Download CV
            </button>
            <button className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold px-8 py-3 rounded-xl transition-all">
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE: Floating & Responsive Fix */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Outer Glow Circle */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
          
          <div 
            className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full border-4 border-cyan-500/50 bg-center bg-cover shadow-[0_0_50px_rgba(6,182,212,0.2)] animate-[float_4s_ease-in-out_infinite]"
            style={{ 
                backgroundImage: `url("/@.jpeg")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
          >
            {/* Pulsating Ping Effect */}
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500 animate-ping opacity-10"></div>
          </div>
        </div>

      </div>

      {/* Animation Definition (If not in tailwind.config.js) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
      `}} />
    </section>
  );
}

export default Hero;