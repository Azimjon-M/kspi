import React, { useRef, useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import APIProfessorlarFikri from "../../services/xalqaroProfessorFikri";
import TextTranslate from "../TextTranslate";
import Breadcrumb from "../Breadcrumb";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const XalqaroProfessorFikr = () => {
  const isLang = useSelector((state) => state.reducerLang.isLang);
  const sliderContainerRef = useRef(null);
  const [sliderInstance, setSliderInstance] = useState(null);
  const [data, setData] = useState([]);

  // Professor fikrlari ma'lumotlarini olish
  const getData = useCallback(async () => {
    try {
      const response = await APIProfessorlarFikri.get();
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (sliderContainerRef.current) {
      const slider = new KeenSlider(sliderContainerRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.2,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 1,
              spacing: 32,
            },
          },
        },
      });

      setSliderInstance(slider);

      return () => slider.destroy();
    }
  }, [data]);

  return (
    <section className="bg-gray-50 px-5 py-3 md:px-10 lg:px-20 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full mb-5 ">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="faoliyat" /> },
            { text: <TextTranslate id="professorFikri" /> },
          ]}
        />
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center my-1 md:my-3">
          <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269] text-center">
            <TextTranslate id="professorFikri" />
          </h2>
        </div>

        {/* Slider */}
        <div ref={sliderContainerRef} className="keen-slider">
          {/* Item */}
          {data.map((item) => (
            <div key={item.id} className="flex keen-slider__slide">
              <div className="mt-6 md:mt-14 md:flex">
                <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                  <img
                    src={item.rasm}
                    alt="profile"
                    className="w-full h-full flex-shrink-0 object-cover shadow-lg rounded"
                  />
                  <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                      alt="commas"
                    />
                  </div>
                  <a
                    className="absolute right-3 bottom-3 bg-opacity-80 border-2 w-12 h-12 rounded-lg flex items-center justify-center bg-transparent cursor-pointer hover:bg-gray-50 hover:border-indigo-300 overflow-hidden transition-colors duration-300"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 29 29"
                      className="w-8 h-8 fill-current text-indigo-100 hover:text-indigo-300 transition-colors duration-300"
                    >
                      <path d="M6.568 27.002c-.49 0-.98-.127-1.429-.383a2.857 2.857 0 0 1-1.461-2.512V4.892c0-1.053.546-1.992 1.461-2.512.914-.521 2-.51 2.905.029l16.142 9.608c.883.526 1.411 1.454 1.411 2.483s-.528 1.957-1.411 2.483L8.045 26.591a2.884 2.884 0 0 1-1.477.411zM6.572 4a.922.922 0 0 0-.445.119.873.873 0 0 0-.45.773v19.216c0 .467.314.696.45.773a.873.873 0 0 0 .895-.009l16.141-9.608c.392-.233.435-.612.435-.764s-.042-.531-.435-.764L7.021 4.128A.858.858 0 0 0 6.572 4z"></path>
                    </svg>
                  </a>
                </div>
                <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                  <div>
                    <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                      {item[`title_${isLang}`]}
                    </h1>
                    <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                      {item[`fikr_${isLang}`]}
                    </p>
                  </div>
                  <div className="md:mt-0 mt-8">
                    <p className="text-base font-medium leading-4 text-gray-800">
                      {item[`fish_${isLang}`]}
                    </p>
                    <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                      {item[`lavozim_${isLang}`]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className={`flex justify-center mt-8 gap-4 ${!data.length && "hidden"}`}>
          <button
            onClick={() => sliderInstance?.prev()}
            className="rounded-full border border-[#004269] p-3 text-[#004269] transition hover:bg-[#004269] hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={() => sliderInstance?.next()}
            className="rounded-full border border-[#004269] p-3 text-[#004269] transition hover:bg-[#004269] hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default XalqaroProfessorFikr;
