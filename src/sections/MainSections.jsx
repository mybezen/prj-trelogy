import { useState } from "react";
import BannerIcon from "../assets/Banner.png";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-pink-50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="text-xl text-red-400 plus-jakarta-sans">Logo</div>
          <nav className="hidden space-x-6 md:flex">
            <a
              href="#"
              className="text-red-400 plus-jakarta-sans hover:text-red-500"
            >
              Home
            </a>
            <a
              href="#"
              className="text-red-400 plus-jakarta-sans hover:text-red-500"
            >
              About
            </a>
            <a
              href="#"
              className="text-red-400 plus-jakarta-sans hover:text-red-500"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-red-400 plus-jakarta-sans hover:text-red-500"
            >
              Contact
            </a>
          </nav>
          <button
            className="text-red-400 md:hidden hover:text-red-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
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
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 text-red-400 hover:bg-red-100">
            Home
          </a>
          <a href="#" className="block px-4 py-2 text-red-400 hover:bg-red-100">
            About
          </a>
          <a href="#" className="block px-4 py-2 text-red-400 hover:bg-red-100">
            Blog
          </a>
          <a href="#" className="block px-4 py-2 text-red-400 hover:bg-red-100">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

function Banner() {
  return (
    <div className="relative h-64 bg-red-700">
      <img
        src={BannerIcon}
        alt="Banner"
        className="object-cover w-full h-full"
      />
    </div>
  );
}

function Content() {
  return (
    <main className="container px-4 py-8 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Welcome to Our Website</h1>
      <p className="mb-4">
        This is where your main content will go. You can add more sections,
        paragraphs, images, or any other content you need.
      </p>
    </main>
  );
}

function MainSection() {
  return (
    <>
      <Header />
      <Banner />
      <Content />
    </>
  );
}

export { MainSection, Header, Banner, Content };
