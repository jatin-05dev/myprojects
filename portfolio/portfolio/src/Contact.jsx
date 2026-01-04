 import React from 'react';

function Contact() {
  return (
    <section className="bg-[#1d1839] py-20 px-6 min-h-screen">
      <h1 className="text-white font-bold text-5xl text-center mb-16">
        Contact <span className="text-cyan-500">Me</span>
      </h1>

      {/* MAIN CONTAINER: Mobile pe Column, Desktop pe Row */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 justify-center items-start">
        
        {/* LEFT CONTENT: Text and Info */}
        <div className="flex-1 w-full text-center lg:text-left">
          <h2 className="text-white text-4xl font-bold mb-6">Let's work together</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-10 max-w-2xl">
            I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. 
            Feel free to reach out to me through the form or my direct contact details below.
          </p>

          <div className="space-y-6">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-cyan-500 text-2xl">📧</span>
              <h3 className="text-white text-xl font-medium">jatindev214@gmail.com</h3>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-cyan-500 text-2xl">📞</span>
              <h3 className="text-white text-xl font-medium">+91 7470411400</h3>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT: Styled Form */}
        <div className="flex-1 w-full bg-[#1a143d] p-8 md:p-10 rounded-[30px] border border-indigo-900 shadow-2xl">
          <form className="flex flex-col gap-5">
            <input 
              className="bg-indigo-900/40 text-white h-14 w-full px-6 rounded-2xl border border-indigo-700 outline-none focus:border-cyan-500 transition-all" 
              placeholder="Enter Your Name" 
              type="text" 
            />
            <input 
              className="bg-indigo-900/40 text-white h-14 w-full px-6 rounded-2xl border border-indigo-700 outline-none focus:border-cyan-500 transition-all" 
              placeholder="Enter Your Email" 
              type="email" 
            />
            <input 
              className="bg-indigo-900/40 text-white h-14 w-full px-6 rounded-2xl border border-indigo-700 outline-none focus:border-cyan-500 transition-all" 
              placeholder="Enter Your Subjects" 
              type="text" 
            />
            <textarea 
              className="bg-indigo-900/40 text-white h-40 w-full px-6 py-4 rounded-2xl border border-indigo-700 outline-none focus:border-cyan-500 transition-all resize-none" 
              placeholder="Enter your message"
            ></textarea>

            <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 w-full rounded-2xl shadow-lg transition-all active:scale-95 mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-indigo-900 pt-10 pb-5">
        <p className="text-gray-400 text-center text-sm md:text-base tracking-wide">
          Designed with <span className="text-red-500">❤️</span> by <span className="text-cyan-500 font-bold">Jatin</span> @ 2026
        </p>
      </footer>
    </section>
  );
}

export default Contact;













