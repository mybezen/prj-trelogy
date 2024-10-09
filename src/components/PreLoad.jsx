import { useEffect } from 'react';
import { preLoaderAnim } from '../animations/animations';
import Logo from '/assets/Logo.svg';

function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader h-[100vh] w-100% bg-gradient-to-t from-[#8E2820] to-[#F4D9D0] text-white fixed bottom-0 left-0 right-0 z-55 flex justify-center items-center overflow-hidden z-50 ">
      <div className="flex items-center md:justify-between justify-center overflow-hidden text-6xl texts-container h-60px w-280px kenarose flex-wrap">
        {/* Text Container */}
        <img src={Logo}></img>
        <span className="text-[#F4D9D0] mt-10 md:mt-0 md:ml-10">
          Jejak <br></br>
          <span className="text-[#B84027]">Pemuda</span>
        </span>
      </div>
    </div>
  );
}

export default PreLoader;
