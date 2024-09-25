// import { StickyNavbar } from "../components/Navbar";
import Footer from "../components/Footer";
import PreLoader from "../components/PreLoad";
import { MainSection } from "../sections/MainSections";

function Home() {
  return (
    <>
      <PreLoader />
      {/* <div className="flex flex-col min-h-screen bg-[#EAE6E3]"> */}
      <div className="flex flex-col">
        {/* <StickyNavbar />
        <div className="flex items-center justify-center my-auto text-center">
          <h1 className="text-[4rem] poppins-bold"> Hello World </h1>
        </div> */}
        <MainSection />
        <Footer />
      </div>
    </>
  );
}

export default Home;
