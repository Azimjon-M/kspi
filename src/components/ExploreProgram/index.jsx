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
      title: <TextTranslate id="qoshma"/>,
      content: <TextTranslate id="qoshmaTavsif"/>,
      img: dasturUchun,
      link: "https://sinov.kspi.uz",
    },
    {
      id: 1,
      title: <TextTranslate id="oqish"/>,
      content: <TextTranslate id="oqishTavsif"/>,
      img: dasturUchun1,
      link: "https://transfer.edu.uz/uz",
    },
    {
      id: 2,
      title: <TextTranslate id="magistratura"/>,
      content: <TextTranslate id="magistraturaTavsif"/>,
      img: bakalavr,
      link: "/abiturient-magistratura",
    },
    {
      id: 3,
      title: <TextTranslate id="abiturient"/>,
      content: <TextTranslate id="abiturientTavsif"/>,
      img: abiturient,
      link: "/abiturient-bakalavriat",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-5 md:my-16">
      <h2 className="text-center text-4xl text-[#004269] mb-10 font-semibold">
        <TextTranslate id="bizningDastur"/>
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {data.map((item) => (
          <div
            className="card max-w-80 h-[450px] object-cover shadow-md hover:shadow-xl hover:-translate-y-1 mx-auto transition-transform ease-in-out duration-300 bg-white"
            key={item.id}
          >
            <figure className="relative">
              <img
                className="h-[320px] object-cover object-center"
                src={item.img}
                alt="Shoes"
              />
              <div className="absolute bottom-0 w-full h-1 bg-[#004269]"></div>
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title text-[#004269]">{item.title}</h2>
              <p className="line-clamp-2">{item.content}</p>
              <div className="card-actions justify-start">
                <Link
                  to={item.link}
                  className="border-[#004269] px-6 py-2 rounded-2xl text-white bg-[#004269]"
                  target="blank"
                >
                  <TextTranslate id="batafsil" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreProgram;
