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
          "Tokoh penting dalam sejarah pergerakan nasional Indonesia. Ia dikenal sebagai ketua Kongres Pemuda I yang melahirkan Sumpah Pemuda pada 28 Oktober 1928.",
        birthDate: "Tempat, Tanggal Lahir: 22 Februari 1905, Tuban",
        deathDate: "Wafat: April 1978, Yogyakarta",
      },
    },
    {
      name: "R. M. Joko .M",
      image: JokoIcon,
      content: {
        description:
          "Pahlawan nasional yang berjuang melawan penjajahan Belanda, aktif di bidang politik dan pendidikan.",
        birthDate: "Tempat tanggal lahir : Malang, 29 Mei 1903",
        deathDate: "29 Mei 1969",
      },
    },
    {
      name: "M. Yamin",
      image: YaminIcon,
      content: {
        description:
          "Sastrawan, politisi, dan pencetus ide Pancasila, berperan penting dalam kemerdekaan Indonesia",
        birthDate: "Birth Date",
        deathDate: "Death Date",
      },
    },
    {
      name: "Amir .S",
      image: AmirIcon,
      content: {
        description:
          "Mantan Perdana Menteri Indonesia, pemimpin politik sayap kiri, dan pejuang kemerdekaan.",
        birthDate: "Birth Date",
        deathDate: "Death Date",
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
    <div className="w-full md:w-8/12 mx-auto p-4">
      <div className="bg-[#8E2820] rounded-lg md:rounded-3xl p-2 md:p-4 mb-4 flex justify-center gap-2 md:gap-4 w-full md:w-max mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabClick(tab.name)}
            className={`px-3 py-1.5 text-[15px] md:text-base md:px-4 md:py-2 md:rounded-2xl flex-1 kenarose ${
              activeTab === tab.name
                ? "bg-[#C9A194] text-[#8E2820]"
                : "bg-[#F4D9D0] text-[#8E2820]"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

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

          <div className="w-full md:w-2/3 md:pl-4 font-medium">
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
