import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CapabCarousel() {
  return (
    <div className="overflow-hidden w-full">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        showIndicators={true}
      >
        <div className="w-full min-h-40 flex items-center justify-center">
          <p className="w-2/3">Krisis makna Sumpah Pemuda pada anak muda</p>
        </div>

        <div className="w-full min-h-40 flex items-center justify-center">
          <p className="w-2/3">Krisis makna Sumpah Pemuda pada bahasa Indonesia</p>
        </div>

        <div className="w-full min-h-40 flex items-center justify-center">
          <p className="w-2/3">Krisis makna Sumpah Pemuda pada masyarakat Indonesia</p>
        </div>
      </Carousel>
    </div>
  );
}

export default CapabCarousel;
