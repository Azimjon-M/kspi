import React from "react";
import { useState, useEffect } from "react";
import TextTranslate from "../TextTranslate";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoPlayOutline, IoClose } from "react-icons/io5";
import APIFikr from "../../services/fikr";
import { useSelector } from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { Link } from "react-router-dom";

function WarmThoughts() {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isVideoPlay, setIsVideoPlay] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [fikrlar, setFikrlar] = useState(null);

    // GET
    const loadPost = async () => {
      try {
        await APIFikr.get()
          .then((res) => {
            setFikrlar(res.data.reverse());
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      loadPost();
    }, []);

  const handleClick = (videoId) => {
    setSelectedVideoId(videoId);
    setIsVideoVisible(true);
    setIsVideoPlay(true);
  };

  const handleClose = () => {
    setSelectedVideoId(null);
    setIsVideoVisible(false);
    setIsVideoPlay(false);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto my-8 md:my-16">
        <h1 className="text-xl md:text-3xl font-bold text-[#004269] text-center my-4">
          <TextTranslate id="warmThoughtsTitile" />
        </h1>
        <div className="hidden md:block p-5 my-12">
          <div className="grid grid-cols-3 gap-2">
            {fikrlar &&
              fikrlar.map((fikr) => {
                return (
                  <div className="max-h-[730px] relative group" key={fikr.id}>
                    <div className="before:content-[' ']  group-hover:before:opacity-100 before:opacity-0 before:transition-opacity before:duration-[350] before:z-[2] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:pointer-events-none before:bg-gradient-to-t from-black via-transparent to-transparent after:content-[' '] after:w-[calc(100%-20px)] after:h-[calc(100%-20px)] group-hover:after:opacity-100 after:opacity-0 after:z-[2] after:absolute after:top-[1.5%] after:left-[2.5%] after:border-solid after:border after:border-gray-400 after:pointer-events-none after:transition-opacity after:duration-[350]">
                      <div className="w-full h-full group-hover:opacity-0 object-contain">
                        <img
                          src={fikr.rasm.replace(/^http:\/\//i, 'https://')}
                          alt="Aquielle"
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                    <video
                      className="w-fill h-full absolute top-0 left-0 group-hover:opacity-100 opacity-0"
                      playsInline
                      loop
                      muted
                      autoPlay
                    >
                      <source src={fikr.video.replace(/^http:\/\//i, 'https://')} type="video/mp4" />
                    </video>
                    <Link
                      onClick={() => handleClick(fikr.id)}
                      className="w-full group absolute bottom-0 left-0 z-[4] px-5 py-6 translate-y-[-5%] group-hover:translate-y-[0] opacity-0 group-hover:opacity-100 transition-transform duration-[400] ease-linear"
                    >
                      <span
                        onClick={() => handleClick(fikr.id)}
                        className="flex justify-center items-center w-16 h-16 mx-auto rounded-full text-3xl border border-gray-800 hover:border-yellow-500 bg-yellow-500 hover:bg-zinc-900 hover:text-yellow-500 font-bold"
                      >
                        <IoPlayOutline />
                      </span>
                      <span className="block text-white text-[1.18rem] leading-[1.2] font-normal text-center mt-5">
                        {fikr[`text_${Lang}`]}
                      </span>
                      <span className="block text-white text-[0.875rem] leading-[1.26] font-normal text-center mt-3">
                        {fikr[`talaba_${Lang}`]}
                      </span>
                    </Link>
                    {selectedVideoId === fikr.id && (
                      <div
                        className="w-full h-full absolute top-0 left-0"
                        style={{ zIndex: isVideoVisible ? "5" : "-1" }}
                      >
                        <iframe
                          width="100%"
                          height="100%"
                          src={fikr.link}
                          title="YouTube video player"
                          frameborder="0"
                          allow={isVideoPlay ? "autoplay=1" : ""}
                          allowfullscreen
                        ></iframe>
                      </div>
                    )}
                    {selectedVideoId === fikr.id && (
                      <button
                        className="absolute top-2 right-2 z-[6] border border-gray-800 hover:border-yellow-500 bg-yellow-500 hover:bg-zinc-900 hover:text-yellow-500 text-lg px-2 py-1 rounded-md"
                        onClick={handleClose}
                      >
                        <IoClose />
                      </button>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="md:hidden">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="h-[439px] max-w-[246px] mt-5"
          >
            {fikrlar &&
              fikrlar.map((fikr) => {
                return (
                  <SwiperSlide className="relative group w-full" key={fikr.id}>
                    <div className="before:content-[' ']  group-hover:before:opacity-100 before:opacity-0 before:transition-opacity before:duration-[350] before:z-[2] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:pointer-events-none before:bg-gradient-to-t from-black via-transparent to-transparent ">
                      <div className="w-full h-full group-hover:opacity-0">
                        <img
                          src={fikr.rasm.replace(/^http:\/\//i, 'https://')}
                          alt="Aquielle"
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                    <video
                      className="w-fill h-full absolute top-0 left-0 group-hover:opacity-100 opacity-0"
                      playsInline
                      loop
                      muted
                      autoPlay
                    >
                      <source src={fikr.video.replace(/^http:\/\//i, 'https://')} type="video/mp4" />
                    </video>
                    <Link
                      onClick={() => handleClick(fikr.id)}
                      className="w-full group absolute bottom-0 left-0 z-[4] px-5 py-6"
                    >
                      <span
                        onClick={() => handleClick(fikr.id)}
                        className="flex justify-center items-center w-14 h-14 mx-auto rounded-full text-2xl border border-gray-800 hover:border-yellow-500 bg-yellow-500 hover:bg-zinc-900 hover:text-yellow-500 font-bold"
                      >
                        <IoPlayOutline />
                      </span>
                      <span className="block text-white text-[1rem] leading-[1.2] font-normal text-center mt-5">
                        {fikr[`text_${Lang}`]}
                      </span>
                      <span className="block text-white text-[0.875rem] leading-[1.31] font-normal text-center mt-3">
                        {fikr.name}
                      </span>
                    </Link>
                    {selectedVideoId === fikr.id && (
                      <div
                        className="w-full h-full absolute top-0 left-0"
                        style={{ zIndex: isVideoVisible ? "5" : "-1" }}
                      >
                        <iframe
                          width="100%"
                          height="100%"
                          src={fikr.link}
                          title="YouTube video player"
                          frameborder="0"
                          allow={isVideoPlay ? "autoplay=1" : ""}
                          allowfullscreen
                        ></iframe>
                      </div>
                    )}
                    {selectedVideoId === fikr.id && (
                      <button
                        className="absolute top-2 right-2 z-[6] border border-gray-800 hover:border-yellow-500 bg-yellow-500 hover:bg-zinc-900 hover:text-yellow-500 text-lg px-2 py-1 rounded-md"
                        onClick={handleClose}
                      >
                        <IoClose />
                      </button>
                    )}
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default WarmThoughts;
