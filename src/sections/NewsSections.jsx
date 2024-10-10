import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Default carousel stylesimport "./carouselCustom.css"; // Custom styles
import SlideIcon1 from "../assets/SliderImages/banner1.png";
import SliderIcon1 from "../assets/SliderImages/Ikrar.png";
import SlideIcon2 from "../assets/SliderImages/banner2.png";
import SliderIcon2 from "../assets/SliderImages/Blog.png";
import SlideIcon3 from "../assets/BuildingImages/JJB.jpg";

function ImageSection() {
  return (
    <div className="flex items-center md:flex-row flex-col mt-7 md:mt-0 mx-3 md:mx-0">
      <div className="flex flex-col md:w-5/12 w-full md:items-end">
        <div className="md:w-[400px] md:h-[200px] overflow-hidden rounded-lg md:ml-5 mb-5">
          <a href="/kontak">
            <img
              src={SlideIcon1}
              alt="Lorong Zaman"
              className="object-cover w-full h-full"
            />
          </a>
        </div>

        <div className="md:w-[400px] md:h-[200px] overflow-hidden rounded-lg md:ml-5">
          <a href="/ikrar">
            <img
              src={SlideIcon2}
              alt="Kolom"
              className="object-cover w-full h-full"
            />
          </a>
        </div>
      </div>

      <div className="md:w-[37.5rem] overflow-hidden rounded-lg m-5 w-full">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showStatus={false}
          showIndicators={true}
        >
          <div className="w-full md:h-[420px] h-[250px]">
            <img
              src={SliderIcon1}
              alt="Pablo Neruda 1"
              className="object-cover w-full h-full bg-top"
            />
            <a href="/ikrar" className="legend">
              Halaman Pengikraran
            </a>
          </div>
          <div className="w-full md:h-[420px] h-[250px]">
            <img
              src={SliderIcon2}
              alt="Pablo Neruda 2"
              className="object-cover w-full h-full bg-top"
            />
            <a href="/blog" className="legend -mt-52">
              Halaman Blog
            </a>
          </div>
          <div className="w-full md:h-[420px] h-[250px]">
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
