import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import TextTranslate from "../TextTranslate";
import APIElon from "../../services/elon";
import { FaCalendarAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { TiSocialInstagram } from "react-icons/ti";
import { useSelector } from "react-redux";

function ElonBatafsilCom() {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await APIElon.getById(id);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  const formatDate = (dateString, Lang) => {
    const yearLang = { year_uz: "yil", year_ru: "год", year_en: "year" };

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

    const weekDays = {
      uz: [
        "Dushanba",
        "Sheshanba",
        "Chorshanba",
        "Payshanba",
        "Juma",
        "Shanba",
        "Yakshanba",
      ],
      ru: [
        "Понедельник",
        "вторник",
        "среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "воскресенье",
      ],
      en: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    };

    const date = new Date(dateString);
    const day = date.getDate();
    const weekDay = weekDays[Lang][date.getDay()];
    const month = months[Lang][date.getMonth()];
    const year = date.getFullYear();

    return `${weekDay}, ${year}-${yearLang[`year_${Lang}`]} ${day}-${month}`;
  };

  return (
    <div className="bg-[#f4f4f4] pb-10">
      <div className="grid md:grid-cols-3 bg-[#2F2424] text-white py-10">
        <div></div>
        <div className="col-span-2 pl-8 xl:pl-20 2xl:pl-32">
          <p className="text-lg uppercase">{data && data[`field_${Lang}`]}</p>
          <h1 className="text-4xl">{data && data[`title_${Lang}`]}</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3">
        <div className="relative md:-top-28 shadow-xl">
          <div className="h-96 border border-white">
            <img
              src={data && data.rasm.replace(/^http:\/\//i, "https://")}
              className="w-full h-full object-center"
              alt=""
            />
          </div>
          <div className="p-8 bg-white">
            <p className="flex items-start">
              <FaCalendarAlt className="text-xl text-red-800 mt-1" />
              <span className="pl-4 text-xl">
                <span className="font-bold">
                  {data && formatDate(data.boshlanish_vaqti, Lang)}
                </span>
                <br />
                <span className="font-light">
                  {data?.boshlanish_vaqti.slice(11, 16)}
                </span>
              </span>
            </p>
            <p className="flex items-start mt-7">
              <FaLocationDot className="text-xl text-yellow-500 mt-1" />
              <span className="pl-4 text-xl">
                <span className="font-bold">
                  {data && data[`adress_${Lang}`]}
                </span>
              </span>
            </p>
            <p className="flex items-start mt-7">
              <IoShareSocial className="text-xl text-cyan-700 mt-1" />
              <span className="pl-4 text-xl">
                <span className="font-light">
                  <TextTranslate id="elonBatafsilBizningIjtimoiyTarmoqlar" />
                </span>
                <span className="flex gap-3 mt-3 text-2xl text-sky-800">
                  <a href="https://www.instagram.com/kspi_uz/">
                    <TiSocialInstagram className="hover:rotate-[360deg] duration-500 hover:scale-150" />
                  </a>
                  <FaYoutube className="hover:rotate-[360deg] duration-500 hover:scale-150" />
                  <FaTelegramPlane className="hover:rotate-[360deg] duration-500 hover:scale-150" />
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="md:col-span-2 pt-7 px-8 md:pl-8">
          <h1 className="text-3xl font-bold">
            <TextTranslate id="elonBatafsilTadbirTafsilotlari" />:
          </h1>
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: data && data[`detail_${Lang}`] }}
          ></p>
          {/* {data?.fayl_1?.trim() && (
            <a
              href={data && data.fayl_1}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Tanlov nizomi
            </a>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default ElonBatafsilCom;
