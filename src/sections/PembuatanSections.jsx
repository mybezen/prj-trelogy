import BuildingIcon from '../assets/BuildingImages/IC.png';
import BuildingIcon1 from '../assets/BuildingImages/KJB.png';
import BuildingIcon2 from '../assets/BuildingImages/OJB.png';

function PembuatanSections() {
  return (
    <div>
      {/* Proses Pembuatan Sumpah Pemuda Section */}

      <div className="text-center">
        <h2 className="mb-6 md:text-5xl text-2xl mx-4 md:mx-0 kenarose text-[#F4D9D0]">
          Proses Pembuatan Sumpah Pemuda
        </h2>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text List */}
        <div className="w-full md:w-1/2">
          <ul className="list-decimal mx-5 md:mx-0 list-inside kenarose md:text-3xl font-sans space-y-3">
            <li>Rapat pertama di Gedung Katholieke Jongenlingen Bond (KJB)</li>
            <li>Rapat kedua di Gedung Oost-Java Bioscoop</li>
            <li>Rapat ketiga di Gedung Indonesische Clubgebouw</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 flex gap-2 md:px-0 px-4">
          <div className="w-5/12 flex flex-col gap-2">
            <div
              className="relative rounded-lg overflow-hidden group w-full h-1/2 bg-center bg-cover"
              style={{
                backgroundImage: `url(${BuildingIcon2})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
              <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                Gedung Oost-Java Bioscoop
              </p>
            </div>
            <div
              className="relative rounded-lg overflow-hidden group w-full h-1/2 bg-cover bg-center"
              style={{ backgroundImage: `url(${BuildingIcon})` }}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
              <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                Gedung Indonesische Clubgebouw
              </p>
            </div>
          </div>
          <div
            className="relative rounded-lg group w-7/12 overflow-hidden h-96 bg-cover bg-left"
            style={{ backgroundImage: `url(${BuildingIcon1})` }}
          >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
            <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-3 px-2 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              Gedung Katholieke Jongenlingen Bond
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PembuatanSections;
