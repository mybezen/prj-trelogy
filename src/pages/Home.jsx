import PreLoader from "../components/PreLoad";
import { SidebarWithBurgerMenu } from "../components/Sidebar";

function Home() {
  return (
    <>
      <PreLoader />
      <div className="flex flex-col min-h-screen bg-[#EAE6E3]">
        <SidebarWithBurgerMenu />
        {/* Main content that grows to push the footer down */}
        <div className="flex items-center justify-center my-auto text-center">
          <h1 className="text-[4rem] poppins-bold"> Hello World </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
