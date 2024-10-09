import Logo from '/assets/LogoWithText.svg';

function CapabSections() {
  return (
    <div className="bg-gradient-to-r from-[#3B100C] to-[#A12B20] py-6 flex justify-center h-full ">
      <div className="flex items-center justify-between space-x-12 w-full max-w-5xl">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Jejak Pemuda" className="" /> {/* Adjusted logo size */}
        </div>

        {/* Crisis 1 */}
        <div className="flex items-center space-x-2 relative">
          <div className="bg-white h-2 w-2 rounded-full"></div>
          <div className="text-white text-sm">Krisis makna sumpah pemuda pada anak muda</div>
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 h-10 border-l border-white"></div> {/* Vertical Line */}
        </div>

        {/* Crisis 2 */}
        <div className="flex items-center space-x-2 relative">
          <div className="bg-white h-2 w-2 rounded-full"></div>
          <div className="text-white text-sm">Krisis makna sumpah pemuda pada bahasa indonesia</div>
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 h-10 border-l border-white"></div> {/* Vertical Line */}
        </div>

        {/* Crisis 3 */}
        <div className="flex items-center space-x-2">
          <div className="bg-white h-2 w-2 rounded-full"></div>
          <div className="text-white text-sm">Krisis makna sumpah pemuda pada masyarakat indonesia</div>
        </div>
      </div>
    </div>
  );
}

export default CapabSections;
