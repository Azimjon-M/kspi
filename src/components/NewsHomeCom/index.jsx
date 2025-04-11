import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Logo from "../../assets/icons/logo.png";
import TextTranslate from "../TextTranslate";
import APIYangilik from "../../services/yangilik";
import { useSelector } from "react-redux";

const NewsHome = () => {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [title, setTitle] = useState("");
  const [news, setNews] = useState(null);
  useEffect(() => {
    Aos.init();
    const loadPost = async () => {
      try {
        await APIYangilik.get()
          .then((res) => {
            const sortedData = res.data.sort((a, b) => {
              return new Date(b.sana) - new Date(a.sana);
            });

            setNews(sortedData.slice(0, 6));
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };

    loadPost();
  }, []);

  useEffect(() => {
    switch (Lang) {
      case "uz":
        setTitle("title_uz");

        break;
      case "ru":
        setTitle("title_ru");
        break;
      case "en":
        setTitle("title_en");
        break;

      default:
        setTitle("title_uz");
        break;
    }
  }, [Lang]);

  const formatDate = (dateString, Lang) => {
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
    const month = months[Lang][date.getMonth()];

    return `${month}`;
  };

  return (
    <div className="px-5 py-16 md:px-10 lg:px-20 xl:px-0 max-w-7xl mx-auto">
      <div className="md:flex md:items-center justify-between">
        {/* News heading */}
        <div className="mx-auto my-1 md:my-3">
          <h2 className="text-xl md:text-3xl font-semibold text-[#5f4fa1]">
            <TextTranslate id="newsHeading" />
          </h2>
        </div>
      </div>
      {/* News items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch overflow-hidden">
        {news &&
          news.map((item, idx) => (
            <Link
              className="inline-block mb-3"
              to={`/yangiliklar/${item.id}`}
              key={idx}
            >
              <div
                className="h-full md:p-4 max-w-sm lg:max-w-xs xl:max-w-md mx-auto group/item hover:cursor-pointer"
                data-aos="fade-left"
              >
                <div className="relative flex h-full dark:bg-gray-800 shadow-md hover:shadow-lg flex-col group/edit border border-[#e5e5e5] overflow-hidden">
                  <div className="absolute inset-0 group-hover/item:bg-[#5f4fa1]/50 duration-300"></div>
                  <div className="flex items-center relative group-hover/item:-z-10">
                    <img
                      className="w-full md:h-56 object-cover"
                      src={item.rasm_1?.replace(/^http:\/\//i, "https://")}
                      alt="Sunset in the mountains"
                    />
                    <div className="absolute top-1 -left-1 h-8 w-24 bg-[#5f4fa1] text-center flex items-center px-2 shadow-[-4px_-4px_0px_rgba(95,79,161,0.698)] translate-x-1 translate-y-1">
                      <img
                        src={Logo}
                        alt="Logo icon"
                        width={22}
                        className="mr-1"
                      />
                      <span className="text-white text-xs font-primaryRegular leading-3">
                        Qo'qon davlat universiteti
                      </span>
                    </div>
                  </div>
                  {/* News title */}
                  <div className="grid grid-cols-5 px-1 py-2 bg-[#f2f2f2]">
                    <div className="col-span-1 border-r border-[#707070]">
                      <div className="text-center flex flex-col text-sm rounded-b-md">
                        <span className="text-[#5f4fa1] text-lg">
                          {item.sana.slice(8, 10)}
                        </span>
                        <span className="text-[#5f4fa1]">
                          {/* {item.sana.slice(5, 7)} */}
                          {formatDate(item.sana, Lang)}
                        </span>
                        <span className="text-[#5f4fa1]">
                          {item.sana.slice(0, 4)}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-4 p-2">
                      <h2 className="line-clamp-2 min-h-[3rem] leading-snug font-semibold text-base dark:text-gray-300 line">
                        {item[title]}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default NewsHome;
