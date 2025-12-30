 function Contact() {
  return (
    <>
      <div className="flex">
        <div className="h-150 w-200 px-6">
            <h1 className="text-white font-bold text-2xl text-center">Contact <span className="text-cyan-200">Me</span></h1>
            <br />
            <br />
            <h1 className="text-white">Let's work together</h1>
            <br />
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aperiam, voluptatem id aspernatur magni molestias voluptates explicabo adipisci quam eum optio obcaecati assumenda corrupti dolorem possimus, excepturi ut veniam odio Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veniam asperiores unde officia magni sed ea laborum architecto iste! Minus sit quod suscipit perspiciatis cupiditate officia modi aut adipisci accusamus..</p>
            <br />
            <br />

            <h1 className="text-white">jatindev214@gmail.com</h1>
            <h1 className="text-white">7470411400</h1>


        </div>
        <div className="h-150 w-200 px-25">
            <input className="bg-neutral-500 h-12 w-150 px-5" placeholder="Enter Your Name" type="text" />
            <br />
            <br />
            <input className="bg-neutral-500 h-12 w-150 px-5" placeholder="Enter Your Email" type="text" />
            <br />
            <br />
            <input className="bg-neutral-500 h-12 w-150 px-5" placeholder="Enter Your Subjects" type="text" />
            <br />
            <br />
          <textarea className="bg-neutral-500 h-40 w-150 px-5 py-2" placeholder="Enter your message"></textarea>
          <br />
          <br />
          <br />

           <button className="bg-blue-500 text-white px-6 py-2 w-150 rounded-3xl">
                        Submit
                    </button>






        </div>
      </div>

      <footer className="bg-blue-950 py-3">
        <p className="text-white text-center">Discover with love by jatin @ 2026</p>

      </footer>
    </>
  );
}

export default Contact;
