import React, { useRef, useEffect, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const ProfessorFikr = () => {
  const sliderContainerRef = useRef(null);
  const [sliderInstance, setSliderInstance] = useState(null);

  useEffect(() => {
    if (sliderContainerRef.current) {
      const slider = new KeenSlider(sliderContainerRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      });

      setSliderInstance(slider);

      return () => slider.destroy();
    }
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Xorijlik professorlar fikri
          </h2>
          <p className="mt-4 text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            veritatis illo placeat harum porro optio fugit a culpa sunt id!
          </p>
        </div>

        {/* Slider */}
        <div ref={sliderContainerRef} className="keen-slider">
          <div className="keen-slider__slide p-6 bg-white shadow-lg rounded-lg">
            <blockquote className="flex flex-col justify-between h-full">
              <div>
                <p className="mt-4 text-2xl font-bold text-blue-600">
                  Hayot sdiocncksjodn ksjdn
                </p>
                <p className="mt-4 text-gray-700">
                  ucv ibhhijhhbhjkbn kildfvjbn ikfbnvkljvnki hihnvv
                  nvkcjnijofhviojvfh kjfnvijfh vorivn kjcvnsdkl;jhn sdoiosduiofh
                  diuofhsdkj vnsdfiuohbsdiuopf hsvniousdhvfsuio dp dhsdiou h
                </p>
              </div>
              <footer className="mt-4 text-sm font-medium text-gray-700">
                &mdash; Azamjon Yodgorov
              </footer>
            </blockquote>
          </div>
          <div className="keen-slider__slide p-6 bg-white shadow-lg rounded-lg">
            <blockquote className="flex flex-col justify-between h-full">
              <div>
                <p className="mt-4 text-2xl font-bold text-blue-600">
                  Stayin' Alive
                </p>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                  veritatis ut ducimus dolorem dolores iusto facilis cumque
                  molestias labore. Optio molestias beatae reprehenderit cum!
                  Illo totam cumque minima ad quisquam!s … Where are they?
                </p>
              </div>
              <footer className="mt-4 text-sm font-medium text-gray-700">
                &mdash; Orifxon Tuychiev
              </footer>
            </blockquote>
          </div>
          <div className="keen-slider__slide p-6 bg-white shadow-lg rounded-lg">
            <blockquote className="flex flex-col justify-between h-full">
              <div>
                <p className="mt-4 text-2xl font-bold text-blue-600">
                  Stayin' Alive
                </p>
                <p className="mt-4 text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat sequi nemo quaerat animi consequatur consectetur
                  corrupti, vero modi architecto minus, accusamus enim error
                  recusandae delectus ut laboriosam odit. Iste, odio.
                </p>
              </div>
              <footer className="mt-4 text-sm font-medium text-gray-700">
                &mdash; Azimjon Meliboev
              </footer>
            </blockquote>
          </div>
          {/* Qo'shimcha slayderlar qo'shilishi mumkin */}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={() => sliderInstance && sliderInstance.prev()}
            className="rounded-full border border-blue-600 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
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
            onClick={() => sliderInstance && sliderInstance.next()}
            className="rounded-full border border-blue-600 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
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

export default ProfessorFikr;
