function CenteredNavbar() {
  return(
    <nav className="max-w-md p-2 mx-auto bg-white rounded-full bg-opacity-20 plus-jakarta-sans-bold">
    <ul className="flex justify-around">
      <li>
        <a href="#" className="hover:text-gray-200">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-gray-200">
          About
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-gray-200">
          Blog
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-gray-200">
          Contact
        </a>
      </li>
      <li>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </li>
    </ul>
  </nav>
  )
}

export default CenteredNavbar;