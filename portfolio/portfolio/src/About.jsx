 function About() {
  return (
    <>
      {/* MAIN FLEX CONTAINER */}
      <div className="flex justify-around items-center px-10 py-16 pb-45 pt-63">

       

        {/* RIGHT CIRCLE */}
        <div className="bg-amber-50 h-100 w-100 rounded-full"></div>


         {/* LEFT CONTENT */}
        <div>
          <h1 className="text-white text-6xl">About  <span className="text-cyan-500">Me</span></h1>
          <br />
          

          <h1 className="text-white text-3xl font-bold">frontend developer</h1>
          
          <br />

          <p className="text-white max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem debitis totam quia praesentium iure incidunt amet iste.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis ducimus impedit fugit provident doloribus facere deleniti, repellendus voluptate eaque esse nesciunt minima reprehenderit ipsum accusamus repellat suscipit iusto dolorem necessitatibus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa possimus nemo quae excepturi suscipit! Atque ab facilis, rem iusto saepe quas ad necessitatibus veniam hic. Doloribus obcaecati doloremque dolorum commodi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem optio, quidem illum aliquid modi iste placeat velit asperiores voluptate consectetur, quo et esse delectus. Sed odit quod recusandae voluptate adipisci!
          </p>

          <br />

          <button className="bg-blue-500 text-white px-6 py-2 rounded-xl">
            Many more..
          </button>
        </div>

      </div>
    </>
  );
}

export default About;
