import { CarouselCustomArrows } from "../components/CardCarousel";
import TogetherIcon from "../assets/TogethIcon.svg";
import { FooterWithSocialLinks } from "../components/Footer";
import CenteredNavbar from "../components/Navbar";

function ContactPage() {
  return (
    <div className="bg-white">
      <header>
        <CenteredNavbar />
      </header>
      <div
        className="relative flex flex-col items-center mt-4"
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        {/* Background Image with Gradient Mask */}
        <div
          className="absolute inset-0 bg-center bg-cover "
          style={{
            backgroundImage: `url(${TogetherIcon})`,
            borderBottomLeftRadius: "5%",
            borderBottomRightRadius: "5%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        </div>

        {/* Content */}
        <h1 className="relative z-10 pt-5 mt-20 text-5xl poppins-bold text-zinc-800">
          Our Team
        </h1>
        <div className="relative z-10 flex justify-center w-full pt-[7rem] h-screen -mt-24">
          <CarouselCustomArrows />
        </div>
        <div className="relative w-full">
          <FooterWithSocialLinks />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
