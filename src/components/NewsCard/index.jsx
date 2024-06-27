import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import APIYangilik from "../../services/yangilik";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import TextTranslate from "../TextTranslate";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const NewsCard = () => {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const res = await APIYangilik.getById(id);
        setNews(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news data:", error);
        setLoading(false);
      }
    };
    loadNews();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:px-5 xl:px-10 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="news" />, link: "/yangiliklar" },
            { text: <TextTranslate id="new" /> },
          ]}
        />
      </div>

      <div className="py-5 max-w-7xl mx-auto">
        <div className="col-span-3">
          {/* TITLE */}
          <h2 className="text-xl text-[#004269] lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center mb-5">
            {news && news[`title_${Lang}`]}
          </h2>

          {/* IMAGES */}
          <div className="relative mb-5">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {news.rasm_1 && (
                <SwiperSlide>
                  <img
                    src={news.rasm_1.replace(/^http:\/\//i, "https://")}
                    alt="news"
                  />
                </SwiperSlide>
              )}
              {news.rasm_2 && (
                <SwiperSlide>
                  <img
                    src={news.rasm_2.replace(/^http:\/\//i, "https://")}
                    alt="news"
                  />
                </SwiperSlide>
              )}
              {news.rasm_3 && (
                <SwiperSlide>
                  <img
                    src={news.rasm_3.replace(/^http:\/\//i, "https://")}
                    alt="news"
                  />
                </SwiperSlide>
              )}
              {news.rasm_4 && (
                <SwiperSlide>
                  <img
                    src={news.rasm_4.replace(/^http:\/\//i, "https://")}
                    alt="news"
                  />
                </SwiperSlide>
              )}
              {news.rasm_5 && (
                <SwiperSlide>
                  <img
                    src={news.rasm_5.replace(/^http:\/\//i, "https://")}
                    alt="news"
                  />
                </SwiperSlide>
              )}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {news.rasm_1 && (
                <SwiperSlide>
                  <img
                    src={news.rasm_1.replace(/^http:\/\//i, "https://")}
                    alt="news"
                  />
                </SwiperSlide>
              )}
              {news.rasm_2 && (
                <SwiperSlide>
                  <img
                    src={news.rasm_2.replace(/^http:\/\//i, "https://")}
                    alt="news"
                  />
                </SwiperSlide>
              )}
              {news.rasm_3 && (
                <SwiperSlide>
                  <img
                    src={news.rasm_3.replace(/^http:\/\//i, "https://")}
                    alt="news"
                  />
                </SwiperSlide>
              )}
              {news.rasm_4 && (
                <SwiperSlide>
                  <img
                    src={news.rasm_4.replace(/^http:\/\//i, "https://")}
                    alt="news"
                  />
                </SwiperSlide>
              )}
              {news.rasm_5 && (
                <SwiperSlide>
                  <img
                    src={news.rasm_5.replace(/^http:\/\//i, "https://")}
                    alt="news"
                  />
                </SwiperSlide>
              )}
            </Swiper>
          </div>

          {/* SUBTITLE */}
          <h2
            className={`${
              news && news.subtitle_uz ? "" : "hidden"
            } text-lg text-[#004269] xl:text-2xl 2xl:text-3xl font-bold text-center mt-3 mb-5`}
          >
            {news && news[`subtitle_${Lang}`]}
          </h2>

          {/* PARAGRAPH */}
          <div className="px-2 mb-5">
            <div className="content-item">
              <p
                className="mb-3"
                dangerouslySetInnerHTML={{ __html: news[`body_${Lang}`] }}
              ></p>
              <div>
                {news?.fayl_1 && (
                  <a
                    href={news.fayl_1}
                    target="blank"
                    className="cursor-pointer"
                  >
                    <TextTranslate id="tuzilmaShakliYuklash" /> ...
                  </a>
                )}
                {news?.fayl_2 && (
                  <a
                    href={news.fayl_2}
                    target="blank"
                    className="cursor-pointer"
                  >
                    <TextTranslate id="yuklash" /> ...
                  </a>
                )}
                {news?.fayl_3 && (
                  <a
                    href={news.fayl_3}
                    target="blank"
                    className="cursor-pointer"
                  >
                    <TextTranslate id="yuklash" /> ...
                  </a>
                )}
                {news?.fayl_4 && (
                  <a
                    href={news.fayl_4}
                    target="blank"
                    className="cursor-pointer"
                  >
                    <TextTranslate id="yuklash" /> ...
                  </a>
                )}
                {news?.fayl_5 && (
                  <a
                    href={news.fayl_5}
                    target="blank"
                    className="cursor-pointer"
                  >
                    <TextTranslate id="yuklash" /> ...
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
