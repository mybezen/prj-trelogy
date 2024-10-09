import CenteredNavbar from '../components/Navbar';
import SumpahPemudaTabs from '../components/Tab';
import PembuatanSections from '../sections/PembuatanSections';
import VoiceSections from '../sections/VoiceSections';
import HeaderBg from '../assets/Heading.svg';
import { FooterWithSocialLinks } from '../components/Footer';

function SumpahPemuda() {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover md:h-[29rem] h-[32rem]"
      style={{
        backgroundImage: `url(${HeaderBg})`, // Set the background image
      }}
    >
      {/* Navigation */}
      <CenteredNavbar />

      {/* Main Content */}
      <main className="mx-auto md:py-8">
        {/* Rumusan Kongres Section */}
        <section className="w-full px-6 py-3 bg-center bg-no-repeat bg-cover rounded-lg md:mb-8 lg:px-12 md:py-8">
          <h1 className="kenarose mb-6 text-3xl lg:text-5xl font-extrabold text-left bg-gradient-to-r from-[#FFF3D0] to-[#FF9495] bg-clip-text text-transparent">
            Rumusan Kongres
          </h1>

          <p className="mx-3 mb-6 text-sm leading-relaxed text-left text-white lg:text-lg md:mx-0 plus-jakarta-sans-semibold">
            Rumusan Kongres Sumpah Pemuda yang diadakan pada tahun 1928
            dirumuskan oleh Mohammad Yamin saat Mr. Sunario sedang berpidato di
            sesi terakhir kongres. Yamin menyampaikan gagasan kepada Soegondo
            bahwa ia memiliki formulasi yang lebih elegan untuk keputusan
            kongres. Setelah mendapat persetujuan dari Soegondo dan peserta
            lainnya, rumusan tersebut akhirnya dibacakan oleh Soegondo dan
            dijelaskan lebih lanjut oleh Yamin. Rumusan ini kemudian dikenal
            sebagai Sumpah Pemuda, yang berisi tiga poin utama: pengakuan akan
            satu tanah air, satu bangsa, dan satu bahasa, yaitu Indonesia.
          </p>
        </section>

        <section className="bg-[#F4D9D0] pt-6 md:pt-0">
          <div className="relative md:-top-8 flex justify-center items-center rounded-3xl shadow-lg w-11/12 md:w-1/2 h-20 mx-auto bg-[#8E2820] kenarose md:text-4xl text-2xl text-[#F4D9D0] md:p-4">
            <span className="text-center">Pengikrar Sumpah Pemuda</span>
          </div>
          <div>
            <SumpahPemudaTabs />
          </div>
        </section>

        {/* Proses Pembuatan Sumpah Pemuda Section */}
        <section
          className="py-8 mb-0 text-white bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/assets/HeaderBG.png')" }}
        >
          <PembuatanSections />
        </section>

        {/* Isi Sumpah Pemuda Section */}
        <section className="bg-[#F4D9D0]">
          <VoiceSections />
        </section>
      </main>
      <div>
        <FooterWithSocialLinks/>
      </div>
    </div>
  );
}

export default SumpahPemuda;
