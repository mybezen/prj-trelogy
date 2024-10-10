import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CapabCarousel() {
  return (
    <div className="overflow-hidden w-full min-h-40">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        showIndicators={true}
      >
        <div className="min-h-40 flex items-center">
          <p>Krisis makna Sumpah Pemuda pada anak muda</p>
        </div>

        <div className="w-full min-h-40 flex items-center">
          Krisis makna Sumpah Pemuda pada bahasa Indonesia
        </div>

        <div className="w-full min-h-40 flex items-center">
          Krisis makna Sumpah Pemuda pada masyarakat Indonesia
        </div>
      </Carousel>
    </div>
  );
}

export default CapabCarousel;
