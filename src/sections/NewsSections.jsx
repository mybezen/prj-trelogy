import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Default carousel styles
import SlideIcon1 from "../assets/BlogImages/Features1.png";
import SliderIcon1 from "../assets/SliderImages/banner1.png";
import SlideIcon2 from "../assets/BlogImages/Features2.jpg";
import SliderIcon2 from "../assets/SliderImages/banner2.png";
import SlideIcon3 from "../assets/SliderImages/banner3.png";

function ImageSection() {
  return (
    <div className="flex items-center md:flex-row flex-col mt-7 md:mt-0 mx-3 md:mx-0">
      <div className="flex flex-col md:w-5/12 w-full md:items-end">
        <div
          className="md:w-[400px] md:h-[200px] overflow-hidden rounded-lg md:ml-5 mb-5"
          data-aos="fade-up" // Animasi fade-up untuk gambar pertama
        >
          <a href="/blog">
            <img
              src={SlideIcon1}
              alt="Lorong Zaman"
              className="object-cover w-full h-full"
            />
          </a>
        </div>

        <div
          className="md:w-[400px] md:h-[200px] overflow-hidden rounded-lg md:ml-5"
          data-aos="fade-up" // Animasi fade-up untuk gambar kedua
          data-aos-delay="200" // Menambahkan delay agar animasi tidak bersamaan
        >
          <a href="/blog">
            <img
              src={SlideIcon2}
              alt="Kolom"
              className="object-cover w-full h-full"
            />
          </a>
        </div>
      </div>

      <div
        className="md:w-[37.5rem] overflow-hidden rounded-lg m-5 w-full"
        data-aos="zoom-in" // Animasi zoom-in untuk carousel
      >
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
            <a href="/kontak" className="legend">
              Kontak Kami
            </a>
          </div>
          <div className="w-full md:h-[420px] h-[250px]">
            <img
              src={SliderIcon2}
              alt="Pablo Neruda 2"
              className="object-cover w-full h-full bg-top"
            />
            <a href="/ikrar" className="legend -mt-52">
              Pengikraran Sumpah Pemuda
            </a>
          </div>
          <div className="w-full md:h-[420px] h-[250px]">
            <img
              src={SlideIcon3}
              alt="Pablo Neruda 3"
              className="object-cover w-full h-full bg-center"
            />
            <a href="/strug" className="legend">
              Perjuangan Singkat
            </a>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ImageSection;
