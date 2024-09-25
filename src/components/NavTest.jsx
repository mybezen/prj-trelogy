const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="text-3xl font-bold">culture</div>
      <ul className="flex space-x-8">
        <li>
          <a href="#about" className="text-gray-700">
            About us
          </a>
        </li>
        <li>
          <a href="#journey" className="text-gray-700">
            Journey
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-700">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
