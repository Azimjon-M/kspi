import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import TextTranslate from "../TextTranslate";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import APIProfessorsOpinion from "../../services/studentOpinion";
import Play from "../../assets/icons/play.png";
import Professor1 from "../../assets/images/prof1.png";
import Professor2 from "../../assets/images/prof2.png";
import Professor3 from "../../assets/images/prof3.png";
import Professor4 from "../../assets/images/prof1.png";
import Professor5 from "../../assets/images/prof2.png";
import Professor6 from "../../assets/images/prof3.png";

function ProfessorsOpinion() {
  const fikrlar = [
    {
      id: 1,
      video: "https://www.youtube.com/embed/7izzQ3nsCWM?si=OkrXcxfFcpCxmuxR",
      rasm: Professor1,
    },
    {
      id: 2,
      video: "https://www.youtube.com/embed/7izzQ3nsCWM?si=OkrXcxfFcpCxmuxR",
      rasm: Professor2,
    },
    {
      id: 3,
      video: "https://www.youtube.com/embed/7izzQ3nsCWM?si=OkrXcxfFcpCxmuxR",
      rasm: Professor3,
    },
    {
      id: 4,
      video: "https://www.youtube.com/embed/7izzQ3nsCWM?si=OkrXcxfFcpCxmuxR",
      rasm: Professor4,
    },
    {
      id: 5,
      video: "https://www.youtube.com/embed/7izzQ3nsCWM?si=OkrXcxfFcpCxmuxR",
      rasm: Professor5,
    },
    {
      id: 6,
      video: "https://www.youtube.com/embed/7izzQ3nsCWM?si=OkrXcxfFcpCxmuxR",
      rasm: Professor6,
    },
  ];
  // const [data, setData] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 4.3,
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
          perView: 1.2,
          spacing: 8,
        },
      },
    },
  });

  useEffect(() => {
    // getData();
    Aos.init();
  }, []);

  // const getData = () => {
  //   APIProfessorsOpinion.get()
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // };

  const handlePlayClick = (videoId) => {
    setActiveVideo(videoId); // Video ID'ni saqlaymiz
  };

  // Carouselga oldinga va orqaga o'tish uchun funksiyalar
  const goToPrev = () => slider.current?.prev();
  const goToNext = () => slider.current?.next();

  return (
    <div className="overflow-hidden bg-white pt-12">
      <h1 className="text-xl md:text-3xl font-semibold text-[#5f4fa1] text-center mb-8">
        <TextTranslate id="warmThoughtsTitile" />
      </h1>

      <div ref={sliderRef} className="keen-slider relative">
        <button
          onClick={goToPrev}
          className="absolute left-1 top-[50%] transform -translate-y-[50%] text-2xl hover:bg-[#707070]/50 text-[#fff]/60 hover:text-white p-2 rounded-full z-10"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-1 top-[50%] transform -translate-y-[50%] text-2xl hover:bg-[#707070]/50 text-[#fff]/60 hover:text-white p-2 rounded-full z-10"
        >
          <FaAngleRight />
        </button>
        {fikrlar.map((item) => (
          <div className="keen-slider__slide" key={item.id}>
            <div className="h-full bg-white shadow-md rounded-2xl overflow-hidden flex flex-col">
              <div className="relative w-full h-56">
                {activeVideo === item.id ? (
                  <iframe
                    className="w-full h-full"
                    // src={`https://www.youtube.com/embed/${item?.video_id}?autoplay=1`}
                    src={item.video}
                    allow="autoplay; encrypted-media"
                    title={`${item.id}`} // Unikal title
                    frameBorder="0"
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={item?.rasm}
                      alt="Professor"
                    />
                    <button
                      onClick={() => handlePlayClick(item.id)}
                      className="absolute inset-0 m-auto w-16 h-16 rounded-full text-white flex items-center justify-center text-2xl"
                    >
                      <img src={Play} alt="Play icon" />
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
