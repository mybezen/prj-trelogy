import { useEffect, useRef } from "react";
import CenteredNavbar from "../components/Navbar";
import SumpahPemudaTabs from "../components/Tab";
import PembuatanSections from "../sections/PembuatanSections";
import VoiceSections from "../sections/VoiceSections";
import HeaderBg from "../assets/Heading.svg";
import { FooterWithSocialLinks } from "../components/Footer";
import BackgroundAudio from "../assets/audio/background.mp3"; // Import background audio
import TextScene from "../components/TextThree";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function SumpahPemuda() {
  const backgroundAudioRef = useRef(null); // Referensi untuk background audio

  // Play background audio saat halaman dimuat
  useEffect(() => {
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.play();
    }
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  // Fungsi untuk menjeda atau melanjutkan background audio
  const toggleBackgroundAudio = (pause) => {
    if (backgroundAudioRef.current) {
      if (pause) {
        backgroundAudioRef.current.pause();
      } else {
        backgroundAudioRef.current.play();
      }
    }
  };

  return (
    <div>
      <main className="mx-auto">
        <section
          // ganti md:h kalo kekecilan
          className="w-full h-[110vh] md:h-[40rem] px-6 py-3 bg-center bg-no-repeat bg-cover lg:px-20 md:py-8"
          style={{
            backgroundImage: `url(${HeaderBg})`,
          }}
        >
          <CenteredNavbar />
          <div className="flex mt-24 flex-col-reverse md:flex-row">
            <div className="md:w-7/12 w-full">
              <h1 className="kenarose mb-6 text-3xl lg:text-5xl font-extrabold text-left bg-gradient-to-r from-[#FFF3D0] to-[#FF9495] bg-clip-text text-transparent">
                Rumusan Kongres
              </h1>

              <p className="mx-3 mb-6 text-sm leading-relaxed text-left text-white md:text-lg md:mr-20 plus-jakarta-sans-semibold">
                Rumusan Kongres Sumpah Pemuda yang diadakan pada tahun 1928
                dirumuskan oleh Mohammad Yamin saat Mr. Sunario sedang berpidato
                di sesi terakhir kongres. Yamin menyampaikan gagasan kepada
                Soegondo bahwa ia memiliki formulasi yang lebih elegan untuk
                keputusan kongres. Setelah mendapat persetujuan dari Soegondo
                dan peserta lainnya, rumusan tersebut akhirnya dibacakan oleh
                Soegondo dan dijelaskan lebih lanjut oleh Yamin. Rumusan ini
                kemudian dikenal sebagai Sumpah Pemuda, yang berisi tiga poin
                utama: pengakuan akan satu tanah air, satu bangsa, dan satu
                bahasa, yaitu Indonesia.
              </p>
            </div>
            <div className="flex items-center justify-center md:w-5/12 w-full -mt-32">
              <TextScene />
            </div>
          </div>
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
          <VoiceSections toggleBackgroundAudio={toggleBackgroundAudio} />{" "}
          {/* Pass the function */}
        </section>
      </main>
      <div>
        <FooterWithSocialLinks />
      </div>

      {/* Background audio player */}
      <audio ref={backgroundAudioRef} src={BackgroundAudio} loop />
    </div>
  );
}

export default SumpahPemuda;
