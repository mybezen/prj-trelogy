import CenteredNavbar from '../components/Navbar';
import BlogFeatures from '../sections/BlogFeatures';
import HeadingBG from '../assets/BlogImages/HeadingBG.png';

function BlogPage() {
  return (
    <div className="">
      <header
        className="md:h-[73vh] h-44 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeadingBG})` }}
      >
        <div className="absolute md:h-[73vh] h-56 inset-0 bg-gradient-to-t from-white to-transparent"></div>
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
