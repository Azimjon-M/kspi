import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactPaginate from "react-paginate";
import TextTranslate from "../TextTranslate";
import Breadcrumb from "../Breadcrumb";
import APIYangilik from "../../services/yangilik";
import { useSelector } from "react-redux";
import Logo from "../../assets/icons/logo.png";

const NewsPage = () => {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [title, setTitle] = useState("");

  const [news, setNews] = useState(null);
  const [newsOne, setNewsOne] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 12;
  const pagesVisited = pageNumber * itemsPerPage;

  const getData = useCallback(async () => {
    try {
      await APIYangilik.get().then((res) => {
        const sortedData = res.data.sort((a, b) => {
          return new Date(b.sana) - new Date(a.sana);
        });
        setNews(sortedData);
        setNewsOne(res.data.slice(pagesVisited, pagesVisited + itemsPerPage));
      });
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }, [pagesVisited, setNews, setNewsOne]);

  // replace
  useEffect(() => {
    Aos.init();
    getData();
  }, [pagesVisited, getData]);

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

  const pageCount = Math.ceil((news && news.length) / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
    <div className="px-5 py-3 md:px-10 lg:px-20 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="news" /> },
          ]}
        />
      </div>

      <div className="my-1 md:my-3">
        <h2 className="text-xl md:text-3xl font-semibold my-2 text-[#5f4fa1] text-center">
          <TextTranslate id="newsHeading" />
        </h2>
      </div>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto"
        data-aos="zoom-in-down"
      >
        {newsOne &&
          newsOne.map((item, idx) => (
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

      <ReactPaginate
        className="flex justify-center items-center gap-2"
        previousLabel={"«"}
        nextLabel={"»"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination flex justify-center p-0 my-5 mx-0"}
        previousLinkClassName={"pagination__link hover:bg-[#eee] font-bold"}
        nextLinkClassName={"pagination__link hover:bg-[#eee] font-bold"}
        disabledClassName={"pagination__link--disabled color-[#888]"}
        activeClassName={
          "pagination__link--active bg-[#5f4fa1] border rounded text-white py-1 px-2"
        }
      />
    </div>
  );
};

export default NewsPage;
