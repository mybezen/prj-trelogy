/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import VinylImage from '../assets/VinylImage.png'; // Gambar vinyl yang diunggah
import AudioFile from '../assets/audio/sumpah_pemuda.mp3'; // File audio yang akan diimport
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const VoiceSections = ({ toggleBackgroundAudio }) => {
  const audioRef = useRef(null); // Referensi untuk audio player
  const [isPlaying, setIsPlaying] = useState(false); // State untuk status play/pause
  const [audioDuration, setAudioDuration] = useState('0:00'); // State untuk durasi audio

  // Fungsi untuk handle play dan pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        toggleBackgroundAudio(false); // Resume background audio
      } else {
        audioRef.current.play();
        toggleBackgroundAudio(true); // Pause background audio
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Fungsi untuk mengambil durasi audio saat file dimuat
  const handleLoadedMetadata = () => {
    const duration = audioRef.current.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60)
      .toString()
      .padStart(2, '0');
    setAudioDuration(`${minutes}:${seconds}`);
  };

  return (
    <section className="flex md:flex-row flex-col justify-center items-center py-12 space-x-12" data-aos="fade-up">
      {/* Vinyl dan Audio Player */}
      <div className="flex flex-col items-center" data-aos="zoom-in">
        {/* Vinyl Image with rotation animation */}
        <div
          className={`-mb-[4rem] w-64 h-64 ${
            isPlaying ? 'animate-spin-slow' : ''
          }`}
        >
          <img
            src={VinylImage}
            alt="Vinyl"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Audio Controls */}
        <div className="z-20 bg-gradient-to-b from-[#130D2C] to-[#271A5E] text-white rounded-lg p-4 md:w-[24vw] w-[18rem] flex flex-col items-center" data-aos="fade-right">
          <p className="poppins-bold md:text-lg text-xl md:mb-2 mb-0.5">
            Sumpah Pemuda
          </p>
          <p className="md:text-sm text-base poppins-bold">
            Prof. Mohammad Yamin
          </p>

          {/* Controls */}
          <div className="flex justify-center items-center md:mt-4 mt-2 space-x-4">
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
            <audio
              ref={audioRef}
              src={AudioFile}
              onLoadedMetadata={handleLoadedMetadata}
            />
            <span className="md:text-sm text-base">{audioDuration}</span>{' '}
            {/* Durasi audio */}
          </div>
        </div>
      </div>

      {/* Isi Sumpah Pemuda */}
      <div className="md:mt-0 mt-10" data-aos="fade-left">
        <h2 className="text-[#8E2820] kenarose text-3xl mb-6">
          Isi Sumpah Pemuda
        </h2>
        <ol className="list-decimal list-inside md:mr-0 mr-10 plus-jakarta-sans-bold text-[#8E2820] text-lg space-y-4">
          <li>
            Kami poetra dan poetri Indonesia, mengakoe bertoempah darah jang
            satoe, tanah air Indonesia.
          </li>
          <li>
            Kami poetra dan poetri Indonesia mengakoe berbangsa jang satoe,
            bangsa Indonesia.
          </li>
          <li>
            Kami poetra dan poetri Indonesia mendjoendjoeng bahasa persatoean,
            bahasa Indonesia.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default VoiceSections;
