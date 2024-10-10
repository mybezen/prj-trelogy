import { CarouselCustomArrows } from "../components/CardCarousel";
import TogetherIcon from "/assets/ContactBG.png";
import { FooterWithSocialLinks } from "../components/Footer";
import CenteredNavbar from "../components/Navbar";

function ContactPage() {
  return (
    <div className="bg-white">
      <div
        className="relative flex flex-col items-center"
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        {/* Background Image with Gradient Mask */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${TogetherIcon})`,
            borderBottomLeftRadius: "5%",
            borderBottomRightRadius: "5%",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#8F181D]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000]"></div>

          {/* Navbar Positioned Inside the Background */}
          <div className="absolute top-0 left-0 w-full z-20">
            <CenteredNavbar />
          </div>
        </div>

        {/* Content */}
        <h1 className="relative z-10 pt-5 mt-20 text-5xl kenarose text-[#F4D9D0]">
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
