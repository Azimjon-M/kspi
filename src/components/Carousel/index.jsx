import React, { useState, useEffect, useCallback } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import CarouselImg from "../../assets/images/carousel1.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [CarouselImg, CarouselImg, CarouselImg, CarouselImg];

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = useCallback(() => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  }, [currentIndex, images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full overflow-hidden h-[95vh]">
      <img
        src={images[currentIndex]}
        alt="carousel"
        className="w-full h-full object-cover transition-all duration-700"
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#797B7D] hover:bg-[#797B7D]/50 p-2 rounded-full shadow"
      >
        <FaArrowLeft className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#797B7D] hover:bg-[#797B7D]/50 p-2 rounded-full shadow"
      >
        <FaArrowRight className="text-white" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full cursor-pointer bg-white transition-all duration-300 w-1 h-1 ${
              index === currentIndex ? "outline-4 outline-offset-4 outline-double outline-[#5f4fa1]" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
