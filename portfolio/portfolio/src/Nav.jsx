 function Nav() {

  function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
  }

  return (
    <div className="bg-indigo-900 py-3 px-5">
      <nav className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">PORTFOLIO</h1>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="text-white text-3xl md:hidden"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-white gap-10">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SKILL</li>
          <li>SERVICES</li>
          <li>CONTACT</li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <ul
        id="mobileMenu"
        className="hidden md:hidden flex flex-col text-white gap-4 mt-4"
      >
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SKILL</li>
        <li>SERVICES</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}

export default Nav;
