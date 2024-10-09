import Logo from '/assets/Logo.svg';

function CenteredNavbar() {
  return (
    <header className="relative flex justify-center p-4">
      <nav className="flex items-center justify-center max-w-md px-6 py-2 text-red-800 md:space-x-6 space-x-4 bg-white rounded-full bg-opacity-30 plus-jakarta-sans-bold">
        <img className="h-[4vh]" src={Logo}></img>
        <a href="/" className="hover:text-gray-200">
          Beranda
        </a>
        <a href="/ikrar" className="hover:text-gray-200">
          Pengikraran
        </a>
        <a href="/blog" className="hover:text-gray-200">
          Blog
        </a>
        <a href="/kontak" className="hover:text-gray-200">
          Kontak
        </a>
      </nav>
    </header>
  );
}

export default CenteredNavbar;
