import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Default carousel stylesimport "./carouselCustom.css"; // Custom styles
import SlideIcon1 from '../assets/BuildingImages/IC.png';
import SlideIcon2 from '../assets/BuildingImages/OJB.png';
import SlideIcon3 from '../assets/BuildingImages/JJB.jpg';

function StrugCarousel() {
  return (
    <div className="overflow-hidden w-full min-h-40">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        showIndicators={false}
      >
        <div className="min-h-50 text-white ml-20">
          <ul>
            <li className="flex items-center mb-3">
              <p className="bg-white bg-opacity-80 text-red-800 font-bold text-lg px-3 rounded-full py-0.5 mr-3">
                1
              </p>
              <p className="text-xl">Cinta Bangsa dan Tanah Air</p>
            </li>
            <li className="flex items-center mb-3">
              <p className="bg-white bg-opacity-80 text-red-800 font-bold text-lg px-3 rounded-full py-0.5 mr-3">
                2
              </p>
              <p className="text-xl">Persatuan</p>
            </li>
            <li className="flex items-center mb-3">
              <p className="bg-white bg-opacity-80 text-red-800 font-bold text-lg px-3 rounded-full py-0.5 mr-3">
                3
              </p>
              <p className="text-xl">Menerima Dan Menghargai Perbedaan</p>
            </li>
            <li className="flex items-center mb-3">
              <p className="bg-white bg-opacity-80 text-red-800 font-bold text-lg px-3 rounded-full py-0.5 mr-3">
                4
              </p>
              <p className="text-xl">Rela Berkorban</p>
            </li>
          </ul>
        </div>

        <div className="w-full min-h-40 text-white ml-20">
          <ul>
            <li className="flex items-center mb-3">
              <p className="bg-white bg-opacity-80 text-red-800 font-bold text-lg px-3 rounded-full py-0.5 mr-3">
                5
              </p>
              <p className="text-xl">Mengutamakan Kepentingan Bangsa</p>
            </li>
            <li className="flex items-center mb-3">
              <p className="bg-white bg-opacity-80 text-red-800 font-bold text-lg px-3 rounded-full py-0.5 mr-3">
                6
              </p>
              <p className="text-xl">Semangat Persaudaraan</p>
            </li>
            <li className="flex items-center mb-3">
              <p className="bg-white bg-opacity-80 text-red-800 font-bold text-lg px-3 rounded-full py-0.5 mr-3">
                7
              </p>
              <p className="text-xl">Semangat Gotong Royong</p>
            </li>
          </ul>
        </div>
      </Carousel>
    </div>
  );
}

export default StrugCarousel;
