import { useState } from "react";
import SoegondoIcon from "../assets/TabsImages/soegondo.png";
import JokoIcon from "../assets/TabsImages/Djoko.jpg";
import YaminIcon from "../assets/TabsImages/Yamin.jpg";
import AmirIcon from "../assets/TabsImages/Amir.jpg";

const SumpahPemudaTabs = () => {
  const [activeTab, setActiveTab] = useState("Soegondo .D");
  const [fadeTransition, setFadeTransition] = useState(false); // State for animation

  const tabs = [
    {
      name: "Soegondo .D",
      image: SoegondoIcon,
      content: {
        description:
          "Soegondo Djojopoespito (1905–1978) adalah ketua Kongres Pemuda II yang melahirkan Sumpah Pemuda  pada tahun 1928. Lahir di Tuban, Jawa Timur, ia aktif dalam organisasi PPPI dan berperan besar dalam menyatukan pemuda Indonesia untuk memperjuangkan kemerdekaan. Setelah kemerdekaan, Soegondo berkiprah di BPUPKI dan berbagai kegiatan politik. Ia wafat pada 23 April 1978, dikenang sebagai tokoh penting dalam sejarah persatuan bangsa.",
        birthDate: "Tempat, Tanggal Lahir : 22 Februari 1905, Tuban",
        deathDate: "Wafat : April 1978, Yogyakarta",
      },
    },
    {
      name: "R. M. Joko .M",
      image: JokoIcon,
      content: {
        description:
          "Joko Marsaid adalah tokoh pergerakan nasional yang berperan dalam Perhimpunan Indonesia dan ikut serta dalam Kongres Pemuda II tahun 1928, yang menghasilkan Sumpah Pemuda. Bersama tokoh-tokoh lainnya, ia membantu memperkuat semangat persatuan bangsa Indonesia. Meski kurang dikenal, kontribusinya penting dalam perjuangan menuju kemerdekaan.",
        birthDate: "Tempat, Tanggal lahir : Malang, 29 Mei 1903",
        deathDate: "Wafat : 29 Mei 1969",
      },
    },
    {
      name: "M. Yamin",
      image: YaminIcon,
      content: {
        description:
          "Muhammad Yamin (1903–1962) adalah seorang sastrawan, sejarawan, dan politisi Indonesia. Lahir di Talawi, Sumatera Barat, ia berperan penting dalam pergerakan kebangsaan. Karyanya seperti 'Tanah Air' (1922) menjadi tonggak sastra nasional. Yamin aktif di Kongres Pemuda II tahun 1928, berperan dalam lahirnya Sumpah Pemuda, serta mengusulkan bahasa Indonesia sebagai bahasa persatuan. Sebagai anggota BPUPKI, ia turut menyusun dasar negara dan mengusulkan konsep Pancasila. Yamin juga pernah menjabat sebagai Menteri Kehakiman dan Menteri Pendidikan. Ia wafat pada 17 Oktober 1962, meninggalkan warisan penting dalam sejarah nasional.",
        birthDate: "Tempat, Tanggal lahir : Sawahlunto, 23 Agustus 1903",
        deathDate: "Wafat : Jakarta, 17 Oktober 1962",
      },
    },
    {
      name: "Amir .S",
      image: AmirIcon,
      content: {
        description:
          "Amir Sjarifuddin (lahir 27 April 1907 di Medan) adalah politisi dan aktivis yang berperan penting dalam perjuangan kemerdekaan Indonesia. Ia terlibat dalam Kongres Pemuda II sebagai bendahara dan aktif di organisasi seperti Jong Batak dan Partindo. Amir menjabat sebagai Menteri Pertahanan dan Perdana Menteri Indonesia, serta memimpin delegasi dalam perundingan Renville 1947. Namun, ia terlibat dalam Peristiwa Madiun 1948, yang berujung pada penangkapannya dan eksekusi pada 20 Desember 1948. Peranannya dalam politik Indonesia meninggalkan jejak bersejarah dalam perjuangan bangsa.",
        birthDate: "Tempat, Tanggal lahir : Medan, 27 April 1907",
        deathDate: "Wafat : Surakarta, 19 Desember 1948",
      },
    },
  ];

  const activeTabData = tabs.find((tab) => tab.name === activeTab);

  const handleTabClick = (tabName) => {
    setFadeTransition(true);
    setTimeout(() => {
      setActiveTab(tabName);
      setFadeTransition(false);
    }, 300);
  };

  return (
    <div className="w-full p-4 mx-auto md:w-8/12">
      <div className="bg-[#8E2820] rounded-lg md:rounded-3xl p-2 md:p-4 md:px-[13rem] mb-4 flex justify-center gap-2 md:gap-4 w-full mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabClick(tab.name)}
            className={`inline-block px-3 py-1.5 md:text-[20px] text-[15px] md:text-base md:px-4 md:py-3 md:rounded-2xl flex-1 rounded-md kenarose ${
              activeTab === tab.name
                ? "bg-[#C9A194] text-[#8E2820]"
                : "bg-[#F4D9D0] text-[#8E2820]"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* <div className="bg-[#8E2820] rounded-lg md:rounded-3xl p-2 md:p-4 mb-4 flex justify-center gap-2 md:gap-4 w-full mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabClick(tab.name)}
            className={`inline-block w-full md:w-auto px-8 py-1.5 md:px-12 md:py-2 text-[15px] md:text-[20px] rounded-md md:rounded-2xl kenarose ${
              activeTab === tab.name
                ? "bg-[#C9A194] text-[#8E2820]"
                : "bg-[#F4D9D0] text-[#8E2820]"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div> */}

      {activeTabData ? (
        <div
          className={`flex flex-col md:flex-row border rounded-lg p-4 transition-opacity transform border-none my-10 ${
            fadeTransition ? "opacity-0 scale-95" : "opacity-100 scale-100"
          } duration-300 ease-in-out`}
        >
          <div
            className="w-full md:w-1/3 h-[18rem] md:h-[25rem] rounded-lg flex justify-center overflow-hidden items-center bg-cover bg-center mb-4 md:mb-0"
            style={{ backgroundImage: `url(${activeTabData.image})` }}
          ></div>

          <div className="w-full font-medium md:w-2/3 md:pl-4">
            <h2 className="text-2xl md:text-4xl kenarose text-[#8E2820] mb-2">
              {activeTabData.name}
            </h2>
            <p className="text-base md:text-xl text-[#8E2820] font-sans mb-5 border-l-4 border-[#8E2820] pl-3">
              {activeTabData.content.description}
            </p>
            <p className="text-base md:text-xl text-[#8E2820] font-sans mb-1">
              {activeTabData.content.birthDate}
            </p>
            <p className="text-base md:text-xl text-[#8E2820] font-sans">
              {activeTabData.content.deathDate}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-red-500">No data found for the selected tab</div>
      )}
    </div>
  );
};

export default SumpahPemudaTabs;
