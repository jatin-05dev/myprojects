 import React from 'react';

function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1d1839] px-6 py-20 overflow-hidden">
      
      {/* MAIN CONTAINER: Mobile pe Column, Desktop pe Row */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-12 lg:gap-20">

        {/* LEFT IMAGE: About section mein image aksar pehle aati hai responsive mein */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Background Glow Effect */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
          
          <div 
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full border-4 border-cyan-500/40 bg-center bg-cover shadow-[0_0_50px_rgba(6,182,212,0.2)] animate-float"
            style={{ 
              backgroundImage: `url("/@.jpeg")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          >
            {/* Overlay Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 scale-110"></div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-cyan-500">Me</span>
          </h1>
          
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 tracking-wide">
            Frontend Developer!
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
            I'm a passionate developer who loves creating interactive and user-friendly 
            web applications. With a strong foundation in modern frontend technologies, 
            I focus on writing clean, efficient code and delivering high-quality 
            digital experiences. 
            <br /><br />
            Whether it's a complex React application or a simple landing page, 
            I ensure every project is responsive, accessible, and visually appealing. 
            Let's build something amazing together!
          </p>

          <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-10 py-3 rounded-2xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95">
            Read More
          </button>
        </div>

      </div>

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatAbout {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        .animate-float {
          animation: floatAbout 5s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}

export default About;