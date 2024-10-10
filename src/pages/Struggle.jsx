import HeaderBg from "../assets/Heading.svg"; // Import background image for second section
import CenteredNavbar from "../components/Navbar";
import StrugBg from "../assets/strug-bg.jpg";
import StrugCarousel from "../sections/StrugCarousel";
import MuseumScene from "../components/Museum";
import TimelineSections from "../sections/TimelineSections";
import TimelineBg from "../assets/timeline-bg.svg";
import { FooterWithSocialLinks } from "../components/Footer";

function StrugglePages() {
  return (
    <div className="">
      <section
        className="md:h-[100vh] h-screen bg-cover bg-top"
        style={{ backgroundImage: `url(${StrugBg})` }}
      >
        <div className="absolute md:h-[100vh] h-screen inset-0 bg-gradient-to-t from-red-800 to-transparent"></div>
        <CenteredNavbar />
        <div className="flex items-center w-full h-screen">
          <div className="z-10 md:w-9/12 w-full md:mx-auto mt-16 mx-5 md:mt-0">
            <h1 className="mb-6 ml-5 md:ml-0 text-3xl text-left text-white kenarose lg:text-5xl">
              Perjuangan Singkat Sumpah Pemuda
            </h1>
            <p className="px-4 mx-4 text-base md:text-xl text-white border-l-4 border-white plus-jakarta-sans-semibold">
              Perjuangan menuju Sumpah Pemuda merupakan proses panjang yang
              dilalui oleh kaum muda Indonesia dalam upaya membangun kesadaran
              nasionalisme dan persatuan di tengah penjajahan kolonial Belanda.
              Sebelum tercapainya Sumpah Pemuda pada tahun 1928, ada beberapa
              tonggak penting yang mengawali pergerakan pemuda Indonesia.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-screen px-8 md:px-0 pt-20 text-white bg-red-800">
        <div className="absolute inset-0 z-10 h-full pointer-events-none bg-gradient-to-b from-red-800 via-red-800/70 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 z-10 h-32 pointer-events-none bg-gradient-to-t from-red-800 to-transparent"></div>

        <div
          className="flex flex-col items-center justify-center h-full bg-top bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${TimelineBg})`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="relative z-20 mb-6 text-4xl md:text-3xl text-center kenarose lg:text-5xl">
            Perjalanan
          </h1>
          <div className="relative z-20 w-full max-w-4xl">
            <TimelineSections />
          </div>
        </div>
      </section>

      <section
        className="relative w-full h-screen bg-center bg-cover pb-10 md:pb-0"
        style={{ backgroundImage: `url(${HeaderBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-red-800 to-transparent"></div>

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center w-full h-full">
          <div className="w-full md:w-7/12 px-5 md:ml-14">
            <div className="">
              <h1 className="text-3xl md:text-4xl font-bold text-white md:mt-0 mt-5">
                Nilai-nilai Sumpah Pemuda
              </h1>
              <p className="mt-4 text-base md:text-xl text-white md:mx-0 mx-0.5">
                Nilai-nilai yang terkandung dalam Sumpah Pemuda mencerminkan
                semangat persatuan, kebersamaan, dan cinta tanah air yang
                menjadi dasar perjuangan para pemuda Indonesia dalam mencapai
                kemerdekaan.
              </p>
            </div>
            <div className="w-full md:w-9/12 mt-10">
              <StrugCarousel />
            </div>
          </div>
          <div className="w-full md:w-5/12 h-64 md:mr-14">
            <MuseumScene />
          </div>
        </div>
      </section>

      <footer className="rounded-t-xl">
        <FooterWithSocialLinks />
      </footer>
    </div>
  );
}

export default StrugglePages;
