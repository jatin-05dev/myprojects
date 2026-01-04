import './Skill.css'
 function Skill() {
  return (
    <>
      <h1 className="text-white text-5xl text-center">
        My <span className="text-cyan-500">Skills</span>

      </h1>
      <br />
      <br />

            <h1 className="text-white font-bold text-center">
        I am frontend developer and what can i do <span className="text-cyan-500">Skills</span>
        
      </h1>

      <section className="container">

        <div className="flex-container"> {/* Spacing ke liye naya wrapper */}
          
          {/* HTML Chart */}
          <figure className="chart" data-percent="75">
            <figcaption className="text-blue-950">HTML</figcaption>
            <img className="html" src="https://dl.dropboxusercontent.com/s/68gv23q4y5qyq52/html5.svg" alt="html" />
            <svg width="200" height="200">
              <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" />
            </svg>
          </figure>


          {/* CSS Chart */}
          <figure className="chart" data-percent="75">
            <figcaption className="text-blue-950">CSS</figcaption>
            <img className="css" src="https://dl.dropboxusercontent.com/s/gftbpqje9h2jvlv/css3.svg" alt="css" />
            <svg width="200" height="200">
              <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" />
            </svg>
          </figure>

          {/* Javascript Chart */}
          <figure className="chart" data-percent="50">
            <figcaption className="text-blue-950">Javascript</figcaption>
            <img className="javascript" src="https://dl.dropboxusercontent.com/s/jsp3rsberc4q650/javascript.svg" alt="js" />
            <svg width="200" height="200">
              <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" />
            </svg>
          </figure>

          {/* Node.js Chart */}
          <figure className="chart" data-percent="25">
            <figcaption className="text-blue-950">Node</figcaption>
            <img className="node" src="https://dl.dropboxusercontent.com/s/v28zws1p38tjph2/node.png" alt="node" />
            <svg width="200" height="200">
              <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" />
            </svg>
          </figure>

        </div>

      </section>
    </>
  );
}

export default Skill;