import HeaderBg from '../assets/Heading.svg'
import LandingIcon from '../assets/LandingIcon.png'; // Import the image at the top
import { AccordionCustomIcon } from '../components/Accordion';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-red-800  text-white">

      <div className="bg-cover bg-no-repeat bg-center h-532" style={{
        backgroundImage: `url(${HeaderBg})`, // Set the background image
      }}>
        {/* Your content here */}
        <header className="p-4 flex justify-center">
          <nav className="bg-white bg-opacity-20 rounded-full px-6 py-2 flex items-center space-x-6 max-w-md plus-jakarta-sans-bold">
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="#" className="hover:text-gray-200">About</a>
            <a href="#" className="hover:text-gray-200">Blog</a>
            <a href="#" className="hover:text-gray-200">Contact</a>
          </nav>
        </header>

        <div className="text-center mb-12 px-4">
          <h1 className="text-5xl font-bold mb-4 lostar">SUMPAH PEMUDA</h1>
          <p className="text-xl mb-2 kenarose">Lorem ipsum dolot sir amet</p>
          <p className="text-lg kenarose">28 Oktober 1928</p>
        </div>

        <div className="flex justify-center mb-12 px-6 py-3 rounded-full items-center">
          {/* <button className="bg-red-800 text-white px-6 py-3 rounded-full flex items-center"> */}
            <AccordionCustomIcon />

        </div>
      </div>

        <section className="bg-pink-100 p-6 shadow-md text-red-800 w-full">
          <div className="flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 plus-jakarta-sans-bold">
                Kenapa sih harus mengenal lebih dalam tentang Sumpah Pemuda ?
              </h2>
              <p className="mb-6 text-gray-700">
                Mengenal Sumpah Pemuda penting karena ia adalah tonggak persatuan Indonesia. Ikrar ini menekankan persatuan dalam keberagaman dan peran bahasa Indonesia sebagai pemersatu, menginspirasi semangat kebangsaan hingga kini.
              </p>
              <button className="bg-red-700 text-white px-6 py-3 rounded-full">
                Baca Selengkapnya
              </button>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <img src={LandingIcon} alt="Illustration of a person holding an Indonesian flag" className="w-full rounded-lg shadow-md"/>
            </div>
          </div>
        </section>


      <footer className="bg-red-800 p-4 text-center mt-8">
        INI FOOTER
      </footer>
    </div>
  );
}

export default Home;