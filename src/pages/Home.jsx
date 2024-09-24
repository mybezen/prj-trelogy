import { BreadcrumbsWithIcon } from "../components/Breadcrumbs";
import { NavbarWithMegaMenu } from "../components/Navbar";
import ScrollB from "../components/ScrollBox";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EAE6E3]">
      <NavbarWithMegaMenu />
      {/* Main content that grows to push the footer down */}
      <div className="items-center justify-center flex-grow">
        <BreadcrumbsWithIcon />
        <h1>Hello World</h1>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-center w-full h-24 bg-teal-500">
        <p>Footer Content</p>
      </footer>
      <div>
        <ScrollB />
      </div>
    </div>
  );
}

export default Home;
