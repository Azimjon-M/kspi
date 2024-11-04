import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

import APIXalqaroHamkorlar from "../../services/xalqaroHamkorlar";

const animation = { duration: 20000, easing: (t) => t };

const Carousel = ({ data }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  // Rasm borligini tekshirib, mavjud rasmlarni filterlash
  const images = [
    data?.rasm_1,
    data?.rasm_2,
    data?.rasm_3,
    data?.rasm_4,
    data?.rasm_5,
  ].filter(Boolean); // null yoki undefined bo'lgan rasmlarni olib tashlaymiz

  // Agar hech qanday rasm bo'lmasa, Carousel bo'limini ko'rsatmaslik
  if (images.length === 0) return null;

  return (
    <div ref={sliderRef} className="keen-slider">
      {images.map((img, index) => (
        <div key={index} className="keen-slider__slide">
          <img src={img} alt={`Carousel Slide ${index + 1}`} className="carousel-image" />
        </div>
      ))}
    </div>
  );
};

function XalqaroHamkorlarBatafsilCom() {
  const { lang, id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await APIXalqaroHamkorlar.getById(id);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto shadow-2xl p-5">
      <div>
        <Carousel data={data} />
      </div>
      <div>
        <h1 className="sm:text-lg md:text-2xl text-sky-900 font-semibold mt-3">
          {data && data[`name_${lang}`]}
        </h1>
        <p className="md:text-lg pt-2 text-sky-800">
          {data && data[`body_${lang}`]}
        </p>
      </div>
    </div>
  );
}

export default XalqaroHamkorlarBatafsilCom;
