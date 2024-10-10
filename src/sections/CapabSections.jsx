import Logo from "/assets/LogoWithText.svg";
import CapabCarousel from "../sections/CapabCarousel";

function CapabSections() {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-[#3B100C] to-[#A12B20] py-6 md:flex hidden justify-center h-full">
        <div className="flex items-center justify-between flex-col md:flex-row space-x-12 w-full max-w-5xl">
          <div className="flex items-center">
            <img src={Logo} alt="Jejak Pemuda" className="" />
          </div>

          <div className="flex items-center space-x-2 relative">
            <div className="bg-white h-2 w-2 rounded-full"></div>
            <div className="text-white text-sm">
              Krisis makna Sumpah Pemuda pada anak muda
            </div>
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 h-10 border-l border-white"></div>{" "}
          </div>

          <div className="flex items-center space-x-2 relative">
            <div className="bg-white h-2 w-2 rounded-full"></div>
            <div className="text-white text-sm">
              Krisis makna Sumpah Pemuda pada bahasa Indonesia
            </div>
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 h-10 border-l border-white"></div>{" "}
          </div>

          <div className="flex items-center space-x-2">
            <div className="bg-white h-2 w-2 rounded-full"></div>
            <div className="text-white text-sm">
              Krisis makna Sumpah Pemuda pada masyarakat Indonesia
            </div>
          </div>
        </div>
      </div>

      {/* tampilan hp */}
      <div className="bg-gradient-to-r from-[#3B100C] to-[#A12B20] md:hidden flex">
        <div className="flex items-center w-1/4 ml-2">
          <img src={Logo} alt="Jejak Pemuda" className="w-full" />
        </div>
        <div className="w-3/4">
          <CapabCarousel />
        </div>
      </div>
    </div>
  );
}

export default CapabSections;
