import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Default carousel stylesimport "./carouselCustom.css"; // Custom styles
import SlideIcon1 from '../assets/BuildingImages/IC.png';
import SlideIcon2 from '../assets/BuildingImages/OJB.png';
import SlideIcon3 from '../assets/BuildingImages/JJB.jpg';

function ImageSection() {
  return (
    <div className="flex items-center w-full mx-1 md:mx-0">
      <div className="flex flex-col w-5/12 md:items-end">
        <div className="md:w-[300px] md:h-[200px] overflow-hidden rounded-lg ml-2 mb-2">
          <img
            src={SlideIcon1}
            alt="Lorong Zaman"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-[300px] md:h-[200px] overflow-hidden rounded-lg ml-2">
          <img
            src={SlideIcon2}
            alt="Kolom"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="md:w-[37.5rem] md:h-[25.625rem] overflow-hidden rounded-lg m-2 w-7/12">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showStatus={false}
          showIndicators={true}
        >
          <div className="w-full h-full">
            <img
              src={SlideIcon1}
              alt="Pablo Neruda 1"
              className="w-full h-full object-cover bg-center"
            />
            <p className="legend">Jejak Pablo Neruda di Jakarta</p>
          </div>
          <div className="w-full h-full">
            <img
              src={SlideIcon2}
              alt="Pablo Neruda 2"
              className="w-full h-full object-cover bg-center"
            />
            <p className="legend">Pablo Journey</p>
          </div>
          <div className="w-full h-full">
            <img
              src={SlideIcon3}
              alt="Pablo Neruda 3"
              className="w-full h-full object-cover bg-center"
            />
            <p className="legend">Diplomat & Poet</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ImageSection;
