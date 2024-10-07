import BuildingIcon from '../assets/BuildingImages/IC.png'
import BuildingIcon1 from '../assets/BuildingImages/KJB.png'
import BuildingIcon2 from '../assets/BuildingImages/OJB.png'

function PembuatanSections() {
  return (
    <div>
      {/* Proses Pembuatan Sumpah Pemuda Section */}

  <div className="text-center">
    <h2 className="mb-6 text-5xl kenarose text-[#F4D9D0]">Proses Pembuatan Sumpah Pemuda</h2>
  </div>

  <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
    {/* Text List */}
    <div className="w-full md:w-1/2">
      <ul className="list-decimal list-inside text-lg font-semibold space-y-3">
        <li>Rapat pertama di Gedung Katholieke Jongenlingen Bond (KJB)</li>
        <li>Rapat kedua di Gedung Oost-Java Bioscoop</li>
        <li>Rapat ketiga di Gedung Indonesische Clubgebouw</li>
      </ul>
    </div>

    {/* Image List */}
    <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Image Item 1 */}
  <div className="relative rounded-lg overflow-hidden group">
    <img
      src={BuildingIcon}
      alt="Gedung Katholieke Jongenlingen Bond"
      className="w-full h-full object-cover"
    />
    <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
      Gedung Katholieke Jongenlingen Bond
    </p>
  </div>

  {/* Image Item 2 */}
  <div className="relative rounded-lg overflow-hidden group">
    <img
      src={BuildingIcon1}
      alt="Gedung Oost-Java Bioscoop"
      className="w-full h-full object-cover"
    />
    <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
      Gedung Oost-Java Bioscoop
    </p>
  </div>

  {/* Image Item 3 */}
  <div className="relative rounded-lg overflow-hidden group">
    <img
      src={BuildingIcon2}
      alt="Gedung Indonesische Clubgebouw"
      className="w-full h-full object-cover"
    />
    <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
      Gedung Indonesische Clubgebouw
    </p>
  </div>
</div>
  </div>


    </div>
  )
}

export default PembuatanSections
