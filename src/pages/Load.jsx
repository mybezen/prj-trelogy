import PreLoader from "../components/PreLoad";

function Load() {
  return (
    <>
      <PreLoader />
      <div className="min-h-screen text-white bg-red-800">
        {/* Navigation */}
        <nav className="max-w-md p-2 mx-auto mt-4 bg-white rounded-full bg-opacity-20">
          <ul className="flex justify-around">
            <li>
              <a href="#" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Contact
              </a>
            </li>
            <li>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="container px-4 py-8 mx-auto">
          {/* Rumusan Kongres Section */}
          <section className="mb-12">
            <h1 className="mb-4 text-4xl font-bold">Rumusan Kongres</h1>
            <p className="mb-4">
              Rumusan Kongres Sumpah Pemuda ditulis oleh Mohammad Yamin pada
              secarik kertas saat Mr. Sunario berpidato di sesi terakhir
              kongres. Yamin membisikkan kepada Soegondo bahwa ia memiliki
              formulasi yang lebih elegan untuk keputusan kongres. Soegondo
              setuju dan meminta persetujuan dari peserta lain. Sumpah tersebut
              awalnya dibacakan oleh Soegondo dan dijelaskan lebih lanjut oleh
              Yamin.
            </p>
            <p className="font-bold">INI MASIH KEPANJANGAN</p>
          </section>

          {/* Pengikrar Sumpah Pemuda Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Pengikrar Sumpah Pemuda</h2>
            <div className="flex justify-between mb-8">
              <button className="px-6 py-2 text-white bg-red-700 rounded-full">
                Soegondo .D
              </button>
              <button className="px-6 py-2 text-white bg-red-700 rounded-full">
                R. M. Joko .M
              </button>
              <button className="px-6 py-2 text-white bg-red-700 rounded-full">
                M. Yamin
              </button>
              <button className="px-6 py-2 text-white bg-red-700 rounded-full">
                Amir .S
              </button>
            </div>
            <div className="flex items-start">
              <div className="w-1/4 mr-4">
                <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>{" "}
                {/* Placeholder for image */}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">
                  Soegondo Djojopoespito
                </h3>
                <p className="mb-2">
                  Tokoh penting dalam sejarah pergerakan nasional Indonesia. Ia
                  dikenal sebagai ketua Kongres Pemuda II yang melahirkan Sumpah
                  Pemuda pada 28 Oktober 1928.
                </p>
                <p>Tempat, Tanggal Lahir : 22 Februari 1905, Tuban</p>
                <p>Wafat : April 1978, Yogyakarta</p>
              </div>
            </div>
          </section>

          {/* Proses Pembuatan Sumpah Pemuda Section */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              Proses Pembuatan Sumpah Pemuda
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-48 bg-gray-300 rounded-lg"></div>{" "}
              {/* Placeholder for image */}
              <div className="w-full h-48 bg-gray-300 rounded-lg"></div>{" "}
              {/* Placeholder for image */}
              <div className="w-full h-48 bg-gray-300 rounded-lg"></div>{" "}
              {/* Placeholder for image */}
              <div className="w-full h-48 bg-gray-300 rounded-lg"></div>{" "}
              {/* Placeholder for image */}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Load;
