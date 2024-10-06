const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="text-3xl ">culture</div>
      <ul className="flex space-x-5 text-2xl">
        <li>
          <a href="#about" className="text-[#993623] plus-jakarta-sans">
            About us
          </a>
        </li>
        <li>
          <a href="#journey" className="text-[#993623] plus-jakarta-sans">
            Journey
          </a>
        </li>
        <li>
          <a href="#contact" className="text-[#993623] plus-jakarta-sans">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
