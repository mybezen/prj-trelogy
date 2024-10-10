import HeaderBg from "../assets/Heading.svg"; // Import background image for second section
import CenteredNavbar from "../components/Navbar";
import StrugBg from "../assets/strug-bg.jpg";
import StrugCarousel from "../sections/StrugCarousel";
import MuseumScene from "../components/Museum";
import TimelineSections from "../sections/TimelineSections";

function StrugglePages() {
  return (
    <div className="">
      <section
        className="md:h-[100vh] h-44 bg-cover bg-top"
        style={{ backgroundImage: `url(${StrugBg})` }}
      >
        <div className="absolute md:h-[100vh] h-56 inset-0 bg-gradient-to-t from-red-800 to-transparent"></div>
        <CenteredNavbar />
        <div className="w-full h-screen flex items-center">
          <div className="w-9/12 mx-auto z-10">
            <h1 className="kenarose mb-6 text-3xl lg:text-5xl text-left text-white">
              Perjuangan Singkat Sumpah Pemuda
            </h1>
            <p className="plus-jakarta-sans-semibold text-white text-xl px-4 border-l-4 border-white mx-4">
              Perjuangan menuju Sumpah Pemuda merupakan proses panjang yang
              dilalui oleh kaum muda Indonesia dalam upaya membangun kesadaran
              nasionalisme dan persatuan di tengah penjajahan kolonial Belanda.
              Sebelum tercapainya Sumpah Pemuda pada tahun 1928, ada beberapa
              tonggak penting yang mengawali pergerakan pemuda Indonesia.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen bg-red-800 pt-20 text-white px-20">
        <h1 className="kenarose mb-6 text-3xl lg:text-5xl text-center">
          Perjalanan
        </h1>
        <TimelineSections />
      </section>

      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${HeaderBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-red-800 to-transparent"></div>

        <div className="relative z-10 flex w-full h-full items-center">
          <div className="w-7/12 px-5 ml-14">
            <div className="">
              <h1 className="text-white text-4xl font-bold">
                Nilai-nilai Sumpah Pemuda
              </h1>
              <p className="text-white mt-4 text-xl">
                Nilai-nilai yang terkandung dalam Sumpah Pemuda mencerminkan
                semangat persatuan, kebersamaan, dan cinta tanah air yang
                menjadi dasar perjuangan para pemuda Indonesia dalam mencapai
                kemerdekaan.
              </p>
            </div>
            <div className="w-9/12 mt-10">
              <StrugCarousel />
            </div>
          </div>
          <div className="w-5/12 h-64 mr-14">
            <MuseumScene />
          </div>
        </div>
      </section>
    </div>
  );
}

export default StrugglePages;
