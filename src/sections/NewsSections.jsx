import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Default carousel stylesimport "./carouselCustom.css"; // Custom styles
import SlideIcon1 from "../assets/BuildingImages/IC.png";
import SliderIcon1 from "../assets/SliderImages/Ikrar.png";
import SlideIcon2 from "../assets/BuildingImages/OJB.png";
import SliderIcon2 from "../assets/SliderImages/Blog.png";
import SlideIcon3 from "../assets/BuildingImages/JJB.jpg";

function ImageSection() {
  return (
    <div className="flex items-center mx-1 md:w-10/12 md:mx-0">
      <div className="flex flex-col w-5/12 md:items-end">
        <div className="md:w-[300px] md:h-[215px] overflow-hidden rounded-lg ml-2 mb-2">
          <img
            src={SlideIcon1}
            alt="Lorong Zaman"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="md:w-[300px] md:h-[215px] overflow-hidden rounded-lg ml-2">
          <img
            src={SlideIcon2}
            alt="Kolom"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="md:w-[37.5rem] overflow-hidden rounded-lg m-2 w-7/12">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showStatus={false}
          showIndicators={true}
        >
          <div className="w-full h-[46.25vh]">
            <img
              src={SliderIcon1}
              alt="Pablo Neruda 1"
              className="object-cover w-full h-full bg-top"
            />
            <a href="/ikrar" className="legend">
              Halaman Pengikraran
            </a>
          </div>
          <div className="w-full h-[46.25vh]">
            <img
              src={SliderIcon2}
              alt="Pablo Neruda 2"
              className="object-cover w-full h-full bg-top"
            />
            <a href="/blog" className="legend -mt-52">
              Halaman Blog
            </a>
          </div>
          <div className="w-full h-[46.25vh]">
            <img
              src={SlideIcon3}
              alt="Pablo Neruda 3"
              className="object-cover w-full h-full bg-center"
            />
            <a href="/strug" className="legend">
              Diplomat & Poet
            </a>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ImageSection;
