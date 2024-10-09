import CenteredNavbar from "../components/Navbar";
import BlogFeatures from "../sections/BlogFeatures";
import HeadingBG from '../assets/BlogImages/HeadingBG.png';

function BlogPage() {
  return (
    <div className="">
      <header className="h-[48vh] bg-cover bg-center" style={{ backgroundImage: `url(${HeadingBG})` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-opacity-10 to-opacity-100 "></div>
        <CenteredNavbar />
      </header>
      {/* Section Features */}
      <div className="">
        <BlogFeatures />
      </div>
    </div>
  );
}

export default BlogPage;
