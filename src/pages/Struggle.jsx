import HeaderBg from "../assets/Heading.svg"; // Import background image for second section
import { FooterWithSocialLinks } from "../components/Footer";
import CenteredNavbar from "../components/Navbar";

function StrugglePages() {
  return (
    <div className="">
      <div className="relative">
        <CenteredNavbar />
      </div>

      {/* Section Pertama with Gradient Overlay */}
      <section
        className="relative h-[70vh] w-full bg-cover bg-center z-50"
        style={{ backgroundImage: `url(${HeaderBg})` }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-6xl px-6 mx-auto lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            Perjuangan Singkat Sumpah Pemuda
          </h1>
          <div className="pl-4 border-l-4 border-white">
            <p className="leading-relaxed text-white lg:text-lg">
              Perjuangan menuju Sumpah Pemuda merupakan proses panjang yang
              dilalui oleh kaum muda Indonesia dalam upaya membangun kesadaran
              nasionalisme dan persatuan di tengah penjajahan kolonial Belanda.
              Sebelum tercapainya Sumpah Pemuda pada tahun 1928, ada beberapa
              tonggak penting yang mengawali pergerakan pemuda Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Section Kedua with Bottom Gradient */}
      <section className="relative py-16 bg-center bg-cover -z-50 bg-gradient-to-b from-black to-red-600">
        {/* Gradient overlay for this section */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-600 via-transparent to-transparent opacity-90"></div>

        <div className="relative z-10 max-w-6xl px-6 mx-auto lg:px-12">
          {/* Judul Section */}
          <div className="border-b-4 border-white">
            <p className="text-white text-6xltext-center lg:text-lg">
              Nilai Nilai Sumpah Pemuda
            </p>
          </div>

          {/* Deskripsi Section */}
          <p className="mb-8 italic text-center text-white lg:text-lg">
            Nilai-nilai yang terkandung dalam Sumpah Pemuda mencerminkan
            semangat persatuan, kebersamaan, dan cinta tanah air yang menjadi
            dasar perjuangan para pemuda Indonesia dalam memperjuangkan
            kemerdekaan.
          </p>

          {/* Daftar Nilai-nilai */}
          <ul className="space-y-2 text-lg text-white list-disc list-inside lg:text-xl">
            <li>Cinta Bangsa dan Tanah Air</li>
            <li>Persatuan</li>
            <li>Sikap Rela Berkorban</li>
            <li>Semangat Gotong Royong</li>
            <li>Menerima dan Menghargai Perbedaan</li>
            <li>Mengutamakan Kepentingan Bangsa</li>
            <li>Nilai Semangat Persaudaraan</li>
          </ul>
        </div>
      </section>

      <section className="h-[700px]"></section>
      <div>
        <FooterWithSocialLinks/>
      </div>
    </div>
  );
}

export default StrugglePages;
