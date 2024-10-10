import Logo from "/assets/LogoWithText.svg";
import CapabCarousel from "../sections/CapabCarousel";

function CapabSections() {
  return (
    <div>
      {/* Bagian desktop */}
      <div
        className="bg-gradient-to-r from-[#3B100C] to-[#A12B20] py-6 md:flex hidden justify-center h-full"
        data-aos="fade-up" // Animasi fade-up untuk div besar ini
      >
        <div className="flex flex-col items-center justify-between w-full max-w-5xl space-x-12 plus-jakarta-sans-semibold md:flex-row">
          <div className="flex items-center" data-aos="zoom-in">
            {/* Animasi zoom-in untuk logo */}
            <img src={Logo} alt="Jejak Pemuda" className="" />
          </div>

          <div className="relative flex items-center space-x-2" data-aos="fade-right">
            {/* Animasi fade-right untuk teks pertama */}
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="text-sm text-white">
              Krisis makna Sumpah Pemuda pada anak muda
            </div>
            <div className="absolute h-10 transform -translate-y-1/2 border-l border-white left-full top-1/2"></div>{" "}
          </div>

          <div className="relative flex items-center space-x-2" data-aos="fade-right">
            {/* Animasi fade-right untuk teks kedua */}
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="text-sm text-white">
              Krisis makna Sumpah Pemuda pada bahasa Indonesia
            </div>
            <div className="absolute h-10 transform -translate-y-1/2 border-l border-white left-full top-1/2"></div>{" "}
          </div>

          <div className="flex items-center space-x-2" data-aos="fade-right">
            {/* Animasi fade-right untuk teks ketiga */}
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="text-sm text-white">
              Krisis makna Sumpah Pemuda pada masyarakat Indonesia
            </div>
          </div>
        </div>
      </div>

      {/* Bagian mobile */}
      <div className="bg-gradient-to-r from-[#3B100C] to-[#A12B20] md:hidden flex">
        <div className="flex items-center w-1/4 ml-2" data-aos="zoom-in">
          {/* Animasi zoom-in untuk logo pada tampilan mobile */}
          <img src={Logo} alt="Jejak Pemuda" className="w-full" />
        </div>
        <div className="w-3/4" data-aos="fade-left">
          {/* Animasi fade-left untuk carousel */}
          <CapabCarousel />
        </div>
      </div>
    </div>
  );
}

export default CapabSections;
