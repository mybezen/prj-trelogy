import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Default carousel stylesimport "./carouselCustom.css"; // Custom styles
import SlideIcon1 from "../assets/BuildingImages/IC.png";
import SlideIcon2 from "../assets/BuildingImages/OJB.png";
import SlideIcon3 from "../assets/BuildingImages/JJB.jpg";

function ImageSection() {
  return (
    <div className="flex items-center">
      {/* Left column with fixed width and height */}
      <div className="flex flex-col">
        {/* Top left image with fixed size and cover */}
        <div className="bg-gray-200 w-[300px] h-[200px] overflow-hidden rounded-lg ml-2 mb-2">
          <img
            src={SlideIcon1} // Replace with your image
            alt="Lorong Zaman"
            className="w-full h-full object-cover"
          />
          <p className="text-center text-sm font-semibold mt-2">Lorong Zaman</p>
        </div>

        {/* Bottom left image with fixed size and cover */}
        <div className="bg-gray-200 w-[300px] h-[200px] overflow-hidden rounded-lg ml-2">
          <img
            src={SlideIcon2} // Replace with your image
            alt="Kolom"
            className="w-full h-full object-cover"
          />
          <p className="text-center text-sm font-semibold mt-2">Kolom</p>
        </div>
      </div>

      {/* Right column - Carousel with fixed width and height */}
      <div className="bg-gray-200 w-[37.5rem] h-[25.625rem] overflow-hidden rounded-lg m-2">
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
              className="w-full h-full object-cover"
            />
            <p className="legend">Jejak Pablo Neruda di Jakarta</p>
          </div>
          <div className="w-full h-full">
            <img
              src={SlideIcon2}
              alt="Pablo Neruda 2"
              className="w-full h-full object-cover"
            />
            <p className="legend">Pablo Journey</p>
          </div>
          <div className="w-full h-full">
            <img
              src={SlideIcon3}
              alt="Pablo Neruda 3"
              className="w-full h-full object-cover"
            />
            <p className="legend">Diplomat & Poet</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ImageSection;
