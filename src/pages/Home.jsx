import { Link } from 'react-router-dom';
import HeaderBg from '../assets/Heading.svg';
import { AccordionCustomIcon } from '../components/Accordion';
import PreLoader from '../components/PreLoad';
import GarudaScene from '../components/Three';

function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-red-800">
    <PreLoader/>
      <div
        className="bg-center bg-no-repeat bg-cover h-[18rem]"
        style={{
          backgroundImage: `url(${HeaderBg})`, // Set the background image
        }}
      >
        {/* Your content here */}
        <header className="flex justify-center p-4">
          <nav className="flex items-center max-w-md px-6 py-2 space-x-6 bg-white rounded-full bg-opacity-20 plus-jakarta-sans-bold">
            <a href="#" className="hover:text-gray-200">
              Home
            </a>
            <a href="#" className="hover:text-gray-200">
              About
            </a>
            <a href="#" className="hover:text-gray-200">
              Blog
            </a>
            <a href="#" className="hover:text-gray-200">
              Contact
            </a>
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
          </nav>
        </header>

        <div className="px-4 mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold lostar">SUMPAH PEMUDA</h1>
          <p className="mb-2 text-xl kenarose">Peintagons</p>
          <p className="text-lg kenarose">28 Oktober 1928</p>
        </div>
      </div>

      <section className="w-full p-6 text-red-800 bg-pink-100 shadow-md">
        <div className="text-white -mt-[5rem]">
          <div className="flex items-center mx-auto justify-center px-6 py-3 mb-12 rounded-full">
            {/* <button className="flex items-center px-6 py-3 text-white bg-red-800 rounded-full"> */}
            <AccordionCustomIcon />
          </div>
        </div>

        <div className="flex flex-col items-start justify-between mx-auto md:flex-row max-w-7xl">
          <div className="mb-8 md:w-1/2 md:mb-0 md:ml-20">
            <h2 className="mb-4 text-5xl kenarose text-[#663A31]">
              Kenapa sih harus <span className='text-[#993623]'>
              mengenal lebih dalam tentang Sumpah Pemuda ?
              </span>
            </h2>
            <p className="mb-6 text-black plus-jakarta-sans-semibold">
              Mengenal Sumpah Pemuda penting karena ia adalah tonggak persatuan
              Indonesia. Ikrar ini menekankan persatuan dalam keberagaman dan
              peran bahasa Indonesia sebagai pemersatu, menginspirasi semangat
              kebangsaan hingga kini.
            </p>
          <Link to='/ikrar'>
            <button  onClick="/ikrar" className="px-6 py-3 poppins-bold text-[#FFF3D0] bg-[#993623] rounded-full">
              Baca Selengkapnya
            </button>
          </Link>
          
          </div>
          <div className="md:w-1/2 md:pl-8">
            <GarudaScene />
          </div>
        </div>
      </section>

      <footer className="p-4 mt-8 text-center bg-red-800">INI FOOTER</footer>
    </div>
  );
}

export default Home;
