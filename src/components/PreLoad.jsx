import { useEffect } from "react";
import { preLoaderAnim } from "../animations/animations";

function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader h-[100vh] w-100% bg-slate-400 backdrop-blur-sm text-white fixed bottom-0 left-0 right-0 z-55 flex justify-center items-center overflow-hidden z-50 ">
      <div className="flex items-center justify-between overflow-hidden text-xl text-white texts-container h-60px w-280px poppins-bold">
        {/* Text Container */}
        <span>JejakPemuda</span>
      </div>
    </div>
  );
}

export default PreLoader;
