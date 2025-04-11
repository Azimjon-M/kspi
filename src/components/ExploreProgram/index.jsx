import React from "react";
import { Link } from "react-router-dom";
import dasturUchun from "../../assets/images/qoshma.jpg";
import dasturUchun1 from "../../assets/images/oqish.jpg";
import abiturient from "../../assets/images/magistr.jpg";
import bakalavr from "../../assets/images/abiturient.jpg";
import TextTranslate from "../TextTranslate/index";

const ExploreProgram = () => {
  const data = [
    {
      id: 0,
      title: <TextTranslate id="qoshma" />,
      content: <TextTranslate id="qoshmaTavsif" />,
      img: dasturUchun,
      link: "https://sinov.kspi.uz",
    },
    {
      id: 1,
      title: <TextTranslate id="oqish" />,
      content: <TextTranslate id="oqishTavsif" />,
      img: dasturUchun1,
      link: "https://transfer.edu.uz/uz",
    },
    {
      id: 2,
      title: <TextTranslate id="magistratura" />,
      content: <TextTranslate id="magistraturaTavsif" />,
      img: bakalavr,
      link: "/abiturient-magistratura",
    },
    {
      id: 3,
      title: <TextTranslate id="abiturient" />,
      content: <TextTranslate id="abiturientTavsif" />,
      img: abiturient,
      link: "/abiturient-bakalavriat",
    },
  ];

  return (
    <div className="bg-white p-4 md:pb-16">
      <h2 className="text-center text-xl md:text-3xl text-[#5f4fa1] mb-10 font-semibold">
        <TextTranslate id="bizningDastur" />
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.map((item, index) => (
          <Link
            href="#"
            className={`${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            } flex items-center max-w-[538px] h-[150px] md:h-[170px] lg:h-[210px] bg-[#f5f5f2] border border-gray-200 rounded-lg shadow-sm md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}
          >
            <img
              className={`object-cover w-[130px] md:w-[150px] lg:w-[187px] h-full ${
                index % 2 !== 0 ? "rounded-r-lg" : "rounded-l-lg"
              }`}
              src={item.img}
              alt={item.title}
            />
            <div className="w-full flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-md lg:text-xl font-bold tracking-tight text-[#5f4fa1] dark:text-white">
                {item.title}
              </h5>
              <p className="mb-3 text-sm md:text-md font-medium text-[#222222] dark:text-gray-400">
                {item.content}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreProgram;
