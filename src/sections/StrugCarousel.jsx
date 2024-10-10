import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Default carousel styles

function StrugCarousel() {
  return (
    <div className="overflow-hidden w-full min-h-40" data-aos="fade-up">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        showIndicators={false}
      >
        <div
          className="min-h-50 text-white md:ml-20 text-left md:w-full w-10/12 mx-auto"
          data-aos="fade-right"
        >
          <ul>
            <li className="flex items-center mb-3" data-aos="fade-in">
              <p className="bg-white bg-opacity-80 text-red-800 font-bold text-lg px-3 rounded-full py-0.5 mr-3">
                1
              </p>
              <p className="text:base md:text-xl">Cinta Bangsa dan Tanah Air</p>
            </li>
            <li className="flex items-center mb-3" data-aos="fade-in" data-aos-delay="100">
              <p className="bg-white bg-opacity-80 text-red-800 font-bold text-lg px-3 rounded-full py-0.5 mr-3">
                2
              </p>
              <p className="text:base md:text-xl">Persatuan</p>
            </li>
            <li className="flex items-center mb-3" data-aos="fade-in" data-aos-delay="200">
              <p className="bg-white bg-opacity-80 text-red-800 font-bold text-lg px-3 rounded-full py-0.5 mr-3">
                3
              </p>
              <p className="text:base md:text-xl">Menerima Dan Menghargai Perbedaan</p>
            </li>
            <li className="flex items-center mb-3" data-aos="fade-in" data-aos-delay="300">
              <p className="bg-white bg-opacity-80 text-red-800 font-bold text-lg px-3 rounded-full py-0.5 mr-3">
                4
              </p>
              <p className="text:base md:text-xl">Rela Berkorban</p>
            </li>
          </ul>
        </div>

        <div
          className="min-h-40 text-white md:ml-20 text-left md:w-full w-10/12 mx-auto"
          data-aos="fade-left"
        >
          <ul>
            <li className="flex items-center mb-3" data-aos="fade-in">
              <p className="bg-white bg-opacity-80 text-red-800 font-bold text-lg px-3 rounded-full py-0.5 mr-3">
                5
              </p>
              <p className="text:base md:text-xl">Mengutamakan Kepentingan Bangsa</p>
            </li>
            <li className="flex items-center mb-3" data-aos="fade-in" data-aos-delay="100">
              <p className="bg-white bg-opacity-80 text-red-800 font-bold text-lg px-3 rounded-full py-0.5 mr-3">
                6
              </p>
              <p className="text:base md:text-xl">Semangat Persaudaraan</p>
            </li>
            <li className="flex items-center mb-3" data-aos="fade-in" data-aos-delay="200">
              <p className="bg-white bg-opacity-80 text-red-800 font-bold text-lg px-3 rounded-full py-0.5 mr-3">
                7
              </p>
              <p className="text:base md:text-xl">Semangat Gotong Royong</p>
            </li>
          </ul>
        </div>
      </Carousel>
    </div>
  );
}

export default StrugCarousel;
