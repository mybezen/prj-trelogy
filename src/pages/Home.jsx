import { Link } from "react-router-dom";
import HeaderBg from "../assets/Heading.svg";
import { AccordionCustomIcon } from "../components/Accordion";
import PreLoader from "../components/PreLoad";
import GarudaScene from "../components/Three";
import CenteredNavbar from "../components/Navbar";
import { FooterWithSitemap } from "../components/Footer";
import ImageSection from "../sections/NewsSections";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden text-white bg-red-800">
      <PreLoader />
      <div
        className="bg-center bg-no-repeat bg-cover md:h-[18rem] h-[23rem]"
        style={{
          backgroundImage: `url(${HeaderBg})`,
        }}
      >
        <CenteredNavbar />

        <div className="px-4 mb-12 text-center">
          <h1 className="mb-4 text-7xl lostar bg-gradient-to-r from-[#FFF3D0] to-[#FF9495] bg-clip-text text-transparent">
            SUMPAH PEMUDA
          </h1>
          <p className="mb-2 text-xl kenarose bg-gradient-to-r from-[#FFF3D0] to-[#FFFFFF] bg-clip-text text-transparent">
            Jejak Pemuda
          </p>
          <p className="text-lg kenarose">28 Oktober 1928</p>
        </div>
      </div>

      <section className="w-full p-6 text-red-800 bg-white shadow-md">
        <div className="text-white -mt-[5rem]">
          <div className="flex items-center justify-center py-3 mx-auto mb-12 rounded-full md:px-6">
            <AccordionCustomIcon />
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between mx-auto md:flex-row max-w-7xl">
          <div className="mb-8 md:w-1/2 md:mb-0 md:ml-20">
            <h2 className="mb-4 text-5xl kenarose text-[#663A31]">
              Kenapa sih harus{" "}
              <span className="text-[#993623]">
                mengenal lebih dalam tentang Sumpah Pemuda?
              </span>
            </h2>
            <p className="mb-6 text-black plus-jakarta-sans-semibold">
              Mengenal Sumpah Pemuda penting karena ia adalah tonggak persatuan
              Indonesia. Ikrar ini menekankan persatuan dalam keberagaman dan
              peran bahasa Indonesia sebagai pemersatu, menginspirasi semangat
              kebangsaan hingga kini.
            </p>
            <Link to="/ikrar">
              <button
                onClick="/ikrar"
                className="px-6 py-3 poppins-bold text-white hover:bg-[#da5237] duration-300 bg-[#993623] rounded-full"
              >
                Baca Selengkapnya
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <GarudaScene />
          </div>
        </div>
      </section>
      <section className="h-[12rem] bg-[#f2f2f2] w-screen"></section>

      <section className="flex items-center justify-center pt-5 mx-auto">
        <ImageSection />
      </section>

      <FooterWithSitemap />
    </div>
  );
}

export default Home;
