import { useEffect } from "react"
import { preLoaderAnim } from "../animations/animations";


function PreLoader() {

  useEffect (() => {
    preLoaderAnim();

  }, []);

  return (
    <div className="preloader h-[100vh] w-100% bg-black text-white fixed bottom-0 left-0 right-0 z-55 flex justify-center items-center overflow-hidden ">
     <div className="texts-container flex items-center justify-between h-60px w-280px poppins-bold text-xl overflow-hidden text-white"> 
     {/* Text Container */}
        <span>Peintagons</span>   

     </div>
    </div>
  )
}

export default PreLoader
