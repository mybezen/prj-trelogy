import mainImage from "../assets/culture.webp"; // Your image path here

const MainSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-white">
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center">
        {/* Image is placed in the background with lower z-index */}
        <h1 className="mb-8 text-5xl font-bold text-black">
          Jakarta, Indonesia
        </h1>
        <img
          src={mainImage}
          alt="Cultural Celebration"
          className="w-full max-w-[800px] object-contain opacity-50"
        />
      </div>
    </section>
  );
};

export default MainSection;
