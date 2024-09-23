import { BreadcrumbsWithIcon } from "../components/Breadcrumbs";
import ScrollB from "../components/ScrollBox";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content that grows to push the footer down */}
      <div className="flex-grow">
        <BreadcrumbsWithIcon />
        <h1>Hello World</h1>
      </div>

      {/* Footer */}
      <footer className="bg-teal-500 w-full h-24 flex items-center justify-center">
        <p>Footer Content</p>
      </footer>
      <div>
        <ScrollB />
      </div> 
    </div>
  );
}

export default Home;
