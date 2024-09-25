// import { StickyNavbar } from "../components/Navbar";
import Navbar from "../components/NavTest";
import PreLoader from "../components/PreLoad";
import FormSection from "../sections/FormSections";
import MainSection from "../sections/MainSections";

function Home() {
  return (
    <>
      <PreLoader />
      {/* <div className="flex flex-col min-h-screen bg-[#EAE6E3]"> */}
      <div className="bg-white">
        {/* <StickyNavbar />
        <div className="flex items-center justify-center my-auto text-center">
          <h1 className="text-[4rem] poppins-bold"> Hello World </h1>
        </div> */}
        <Navbar />
        <MainSection />
        <FormSection />
      </div>
    </>
  );
}

export default Home;
