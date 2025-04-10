import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Arrow icons
import APIProfessorsOpinion from "../../services/studentOpinion";

function ProfessorsOpinion() {
  const [data, setData] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null); // Video faollashtirish uchun state

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1,
          spacing: 8,
        },
      },
    },
  });

  useEffect(() => {
    getData();
    Aos.init();
  }, []);

  const getData = () => {
    APIProfessorsOpinion.get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const handlePlayClick = (videoId) => {
    setActiveVideo(videoId); // Video ID'ni saqlaymiz
  };

  // Carouselga oldinga va orqaga o'tish uchun funksiyalar
  const goToPrev = () => slider.current?.prev();
  const goToNext = () => slider.current?.next();

  return (
    <div className="overflow-hidden bg-white py-12">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={goToPrev}
          className="text-2xl bg-blue-500 text-white p-2 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <h2 className="text-2xl font-semibold">Professor's Opinion</h2>
        <button
          onClick={goToNext}
          className="text-2xl bg-blue-500 text-white p-2 rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>

      <div ref={sliderRef} className="keen-slider max-w-7xl mx-auto px-4">
        {data.map((item) => (
          <div className="keen-slider__slide" key={item.id}>
            <div className="h-full bg-white shadow-md rounded-2xl overflow-hidden flex flex-col">
              <div className="relative w-full h-64 md:h-[400px]">
                {activeVideo === item.id ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${item?.video_id}?autoplay=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={`${item.id}`} // Unikal title
                  ></iframe>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={item?.professor_image}
                      alt="Professor"
                    />
                    <button
                      onClick={() => handlePlayClick(item.id)}
                      className="absolute inset-0 m-auto w-16 h-16 bg-[#3786b4] rounded-full text-white flex items-center justify-center text-2xl"
                    >
                      ▶️
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfessorsOpinion;
