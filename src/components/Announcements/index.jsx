// components/Announcements.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TextTranslate from "../TextTranslate";
import APIElon from "../../services/elon";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const Announcements = () => {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [titleKey, setTitleKey] = useState("title_uz");
  const [announcements, setAnnouncements] = useState([]);
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1 },
      },
    },
  });

  useEffect(() => {
    APIElon.get()
      .then((res) => {
        const sorted = res.data.sort(
          (a, b) => new Date(b.sana) - new Date(a.sana)
        );
        setAnnouncements(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const langMap = { uz: "title_uz", ru: "title_ru", en: "title_en" };
    setTitleKey(langMap[Lang] || "title_uz");
  }, [Lang]);

  const formatDate = (dateString) => {
    const months = {
      uz: [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentyabr",
        "Oktyabr",
        "Noyabr",
        "Dekabr",
      ],
      ru: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      en: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
    const date = new Date(dateString);
    return `${date.getDate()} ${
      months[Lang]?.[date.getMonth()] || ""
    } ${date.getFullYear()}`;
  };

  return (
    <div className="bg-[#f5f5f5] py-5">
      <h1 className="text-xl md:text-4xl font-semibold text-center text-[#5f4fa1] mb-3">
        <TextTranslate id="elonTitle" />
      </h1>
      <div className="relative w-[100px] h-[3px] bg-[#5f4fa1] mx-auto mb-10 flex items-center justify-center">
        <span className="absolute w-4 h-4 rounded-full bg-[#5f4fa1]"></span>
        <span className="absolute w-1 h-1 rounded-full bg-white"></span>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {announcements.map((item) => (
          <Link
            to={`/elonBatafsil/${item.id}`}
            key={item.id}
            className="keen-slider__slide relative overflow-hidden group shadow hover:shadow-xl transition-all duration-300"
          >
            <img
              src={item.rasm?.replace(/^http:\/\//, "https://")}
              alt={item[titleKey]}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-[#5f4fa1b1] opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg md:text-xl 2xl:text-2xl font-semibold line-clamp-2">
                {item[titleKey]}
              </h3>
              <p className="text-xs mt-1">
                {formatDate(item.boshlanish_vaqti)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
