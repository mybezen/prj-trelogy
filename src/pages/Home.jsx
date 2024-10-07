import HeaderBg from '../assets/Heading.svg';
import { AccordionCustomIcon } from '../components/Accordion';
import GarudaScene from '../components/Three';

function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-red-800">
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
          </nav>
        </header>

        <div className="px-4 mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold lostar">SUMPAH PEMUDA</h1>
          <p className="mb-2 text-xl kenarose">Lorem ipsum dolot sir amet</p>
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
            <h2 className="mb-4 text-3xl font-bold plus-jakarta-sans-bold">
              Kenapa sih harus mengenal lebih dalam tentang Sumpah Pemuda ?
            </h2>
            <p className="mb-6 text-gray-700">
              Mengenal Sumpah Pemuda penting karena ia adalah tonggak persatuan
              Indonesia. Ikrar ini menekankan persatuan dalam keberagaman dan
              peran bahasa Indonesia sebagai pemersatu, menginspirasi semangat
              kebangsaan hingga kini.
            </p>
            <button className="px-6 py-3 text-white bg-red-700 rounded-full">
              Baca Selengkapnya
            </button>
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
