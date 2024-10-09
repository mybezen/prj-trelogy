function CenteredNavbar() {
  return (
    <header className="relative flex justify-center p-4">
      <nav className="flex items-center max-w-md px-6 py-2 space-x-6 bg-white rounded-full bg-opacity-20 plus-jakarta-sans-bold">
        <a href="/" className="hover:text-gray-200">
          Beranda
        </a>
        <a href="/ikrar" className="hover:text-gray-200">
          Tentang
        </a>
        <a href="/strug" className="hover:text-gray-200">
          Blog
        </a>
        <a href="#" className="hover:text-gray-200">
          Kontak
        </a>
        <a href="/">
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
        </a>
      </nav>
    </header>
  );
}

export default CenteredNavbar;
