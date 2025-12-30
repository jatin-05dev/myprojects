 function Hero() {
  return (
    <>
      {/* MAIN FLEX CONTAINER */}
      <div className="flex justify-around items-center px-10 py-16 pt-36">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-white text-4xl">Hello, it's Me</h1>
          <h1 className="text-white text-6xl font-bold">Dev Jatin</h1>
          <h1 className="text-white text-4xl">
            And I'm a <span className="text-cyan-500">Frontend Developer</span>
          </h1>

          <br />

          <p className="text-white max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem debitis totam quia praesentium iure incidunt amet iste.
          </p>

          <br />

          <button className="bg-blue-500 text-white px-6 py-2 rounded-xl">
            Many more..
          </button>
        </div>

        {/* RIGHT CIRCLE */}
        <div className="bg-amber-50 h-100 w-100 rounded-full"></div>

      </div>
    </>
  );
}

export default Hero;
