import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HeaderBg from "../assets/Heading.svg";
import { AccordionCustomIcon } from "../components/Accordion";
import PreLoader from "../components/PreLoad";
import GarudaScene from "../components/Three";
import CenteredNavbar from "../components/Navbar";
import { FooterWithSocialLinks } from "../components/Footer";
import ImageSection from "../sections/NewsSections";
import CapabSections from "../sections/CapabSections";
import BackgroundAudio from "../assets/audio/background.mp3";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Home() {
  // Reference to the audio element
  const audioRef = useRef(null);

  useEffect(() => {
    // Play the audio when the component is mounted
    if (audioRef.current) {
      audioRef.current.play();
    }
    // Initialize AOS
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <div className="overflow-hidden text-white">
      <PreLoader />

      {/* Audio Element */}
      <audio ref={audioRef} src={BackgroundAudio} loop autoPlay>
        Your browser does not support the audio element.
      </audio>

      <div
        className="bg-center bg-no-repeat bg-cover md:h-[18rem] h-[23rem]"
        style={{
          backgroundImage: `url(${HeaderBg})`,
        }}
        data-aos="fade-in"
      >
        <CenteredNavbar />

        <div className="px-4 mb-12 text-center" data-aos="fade-up">
          <h1
            className="mb-4 text-7xl lostar bg-gradient-to-r from-[#FFF3D0] to-[#FF9495] bg-clip-text text-transparent"
            data-aos="zoom-in"
          >
            SUMPAH PEMUDA
          </h1>
          <p
            className="mb-2 text-xl kenarose bg-gradient-to-r from-[#FFF3D0] to-[#FFFFFF] bg-clip-text text-transparent"
            data-aos="fade-right"
          >
            Jejak Pemuda
          </p>
          <p className="text-lg kenarose" data-aos="fade-left">
            28 Oktober 1928
          </p>
        </div>
      </div>

      <section
        className="w-full p-6 text-red-800 bg-white shadow-md"
        data-aos="fade-up"
      >
        <div className="text-white -mt-[5rem]">
          <div
            className="flex items-center justify-center py-3 mx-auto mb-12 rounded-full md:px-6"
            data-aos="flip-left"
          >
            <AccordionCustomIcon />
          </div>
        </div>

        <div
          className="flex flex-col-reverse items-start justify-between mx-auto md:flex-row max-w-7xl"
          data-aos="fade-up"
        >
          <div className="mb-8 md:w-1/2 md:mb-0 md:ml-20" data-aos="zoom-in">
            <h2 className="mb-4 text-5xl kenarose text-[#663A31]">
              Kenapa sih harus{" "}
              <span className="text-[#993623]">
                mengenal lebih dalam tentang Sumpah Pemuda?
              </span>
            </h2>
            <p
              className="mb-6 text-black plus-jakarta-sans-semibold"
              data-aos="fade-right"
            >
              Mengenal Sumpah Pemuda penting karena ia adalah tonggak persatuan
              Indonesia. Ikrar ini menekankan persatuan dalam keberagaman dan
              peran bahasa Indonesia sebagai pemersatu, menginspirasi semangat
              kebangsaan hingga kini.
            </p>
            <Link to="/strug">
              <button
                onClick="/strug"
                className="px-6 py-3 poppins-bold text-white hover:bg-[#da5237] duration-300 bg-[#993623] rounded-full"
                data-aos="fade-up"
              >
                Baca Selengkapnya
              </button>
            </Link>
          </div>
          <div className="w-full m-auto md:w-1/2 md:pl-8">
            <GarudaScene />
          </div>
        </div>
      </section>

      <section className="w-screen -mb-1">
        <CapabSections />
      </section>

      <div className="flex flex-col bg-gradient-to-r from-[#3B100C] to-[#A12B20]">
        <section
          className="flex items-center justify-center pt-5 mx-auto mb-[8vh]"
        >
          <ImageSection />
        </section>
      </div>

      <footer data-aos="fade-up">
        <FooterWithSocialLinks />
      </footer>
    </div>
  );
}

export default Home;
