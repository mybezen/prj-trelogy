import CenteredNavbar from "../components/Navbar";
import BlogFeatures from "../sections/BlogFeatures";

function BlogPage() {
  return (
    <div className="">
      <header className="h-[24vh] bg-[#D9D9D9]">
        <CenteredNavbar />
      </header>
      {/* Section Features */}
      <div>
        <BlogFeatures />
      </div>
    </div>
  );
}

export default BlogPage;
