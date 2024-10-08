import { useState, useRef } from 'react';
import VinylImage from '../assets/VinylImage.png'; // Gambar vinyl yang diunggah
import AudioFile from '../assets/audio/sumpah_pemuda.mp3'; // File audio yang akan diimport
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


const VoiceSections = () => {
  const audioRef = useRef(null); // Referensi untuk audio player
  const [isPlaying, setIsPlaying] = useState(false); // State untuk status play/pause
  const [audioDuration, setAudioDuration] = useState("0:00"); // State untuk durasi audio

  // Fungsi untuk handle play dan pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Fungsi untuk mengambil durasi audio saat file dimuat
  const handleLoadedMetadata = () => {
    const duration = audioRef.current.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60).toString().padStart(2, "0");
    setAudioDuration(`${minutes}:${seconds}`);
  };

  return (
    <section className="flex justify-center items-center py-12 space-x-12">
      {/* Vinyl dan Audio Player */}
      <div className="flex flex-col items-center">
        {/* Vinyl Image with rotation animation */}
        <div className={`-mb-[4rem] w-64 h-64 ${isPlaying ? "animate-spin-slow" : ""}`}>
          <img
            src={VinylImage}
            alt="Vinyl"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Audio Controls */}
        <div className="z-20 bg-gradient-to-b from-[#130D2C] to-[#271A5E] text-white rounded-lg p-4 w-[24vw] flex flex-col items-center">
          <p className="poppins-bold text-lg mb-2">Sumpah Pemuda</p>
          <p className="text-sm poppins-bold">Prof. Mohammad Yamin</p>

          {/* Controls */}
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button
              onClick={togglePlay}
              className="w-10 h-10 bg-transparent text-white flex items-center justify-center"
            >
              {isPlaying ? (
                <FontAwesomeIcon icon={faPause} />
              ) : (
                <FontAwesomeIcon icon={faPlay} />
              )}

            </button>
            <audio ref={audioRef} src={AudioFile} onLoadedMetadata={handleLoadedMetadata} />
            <span className="text-sm">{audioDuration}</span> {/* Durasi audio */}
          </div>
        </div>
      </div>

      {/* Isi Sumpah Pemuda */}
      <div className="">
        <h2 className="text-[#8E2820] kenarose text-3xl mb-6">Isi Sumpah Pemuda</h2>
        <ol className="list-decimal list-inside plus-jakarta-sans-bold text-[#8E2820] text-lg space-y-4">
          <li>Kami poetra dan poetri Indonesia, mengakoe bertoempah darah jang satoe, tanah air Indonesia.</li>
          <li>Kami poetra dan poetri Indonesia mengakoe berbangsa jang satoe, bangsa Indonesia.</li>
          <li>Kami poetra dan poetri Indonesia mendjoendjoeng bahasa persatoean, bahasa Indonesia.</li>
        </ol>
      </div>
    </section>
  );
};

export default VoiceSections;
