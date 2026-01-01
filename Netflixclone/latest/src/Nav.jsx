 import logo from "./assets/N/IN.jpg";
import logo1 from "./assets/N/Netflix.png";

function Nav() {
  return (
    <div
      className="relative h-195 bg-cover bg-center"
      style={{ backgroundImage: `url(${logo})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <nav className="relative z-10">
        <ul className="flex justify-around items-center">
          <li>
            <img className="h-20" src={logo1} alt="" />
          </li>

          <div className="flex gap-5 py-5">
            <li>
              <button className="px-5 py-2 rounded-sm bg-orange-700 text-white">
                English
              </button>
            </li>
            <li>
              <button className="px-5 py-2 rounded-sm bg-orange-700 text-white">
                Sign out
              </button>
            </li>
          </div>
        </ul>
      </nav>
 <div className="relative text-center mt-40">
    <h1 className="text-white font-bold text-6xl">Ulimited movies,<br /> shows and more</h1>
    <br />
    <p className="text-white font-bold text-2xl">Starts at 149.cancel any time</p>
 </div>
<br />
<div className="flex justify-center">
 <button className="relative px-15 py-4 rounded-sm bg-orange-700 text-white">
                
    <p className="text-2xl font-bold">Finish sign up</p>
              </button>
     </div> 
    </div>
  );
}

export default Nav;
