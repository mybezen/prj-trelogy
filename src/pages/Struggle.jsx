import HeadStrugIcon from "../assets/HeadStrug.png";
import CenteredNavbar from "../components/Navbar";

function StrugglePages() {
  return (
    <div className="">
      <div className="relative">
        <CenteredNavbar />
      </div>
      <section
        className="relative h-[70vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${HeadStrugIcon})` }}
      >
        {/* Overlay hitam transparan */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Konten teks di atas background */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-6xl px-6 mx-auto lg:px-12">
          {/* Judul besar */}
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            Perjuangan Singkat Sumpah Pemuda
          </h1>

          {/* Garis vertikal kecil di samping teks */}
          <div className="pl-4 border-l-4 border-white">
            {/* Deskripsi */}
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
      <section className="bg-[#F4D9D0] h-[700px]"></section>
      <section className="h-[700px]"></section>
    </div>
  );
}

export default StrugglePages;
