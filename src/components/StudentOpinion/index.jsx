import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import APIStudentOpinion from "../../services/studentOpinion";
import { useSelector } from "react-redux";

function StudentOpinion() {
  const [data, setData] = useState(null);
  const Lang = useSelector((state) => state.reducerLang.isLang);

  const getData = () => {
    APIStudentOpinion.get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
    Aos.init();
  }, []);

  return (
    <div className="bg-slate-100 overflow-hidden">
      {data &&
        data.map((item) => (
          <div
            className="max-w-7xl mx-auto py-10 sm:py-28 px-6 flex flex-col md:flex-row md:relative"
            key={item.id}
          >
            <RiDoubleQuotesL className="md:text-[130px] absolute top-5 left-1 z-10 text-[#3786b4] hidden md:block" />
            <div
              className="md:w-1/2 md:h-[420px] md:mb-12 md:shadow-2xl md:rounded-2xl"
              data-aos="fade-right"
            >
              <img
                className="w-full h-full object-cover md:rounded-2xl rounded-t-2xl"
                src={item?.talaba_rasm}
                alt="Talaba rasmi"
              />
            </div>
            <div
              className="md:w-1/2 md:h-[420px] bg-white md:absolute md:mt-12 right-6 md:rounded-2xl md:shadow-2xl rounded-b-2xl px-5 md:px-8 lg:px-16 py-5 md:py-8 lg:py-12"
              data-aos="fade-left"
            >
              <p className="text-md md:text-xl lg:text-2xl text-[#004269]">
                {item[`talaba_coment_${Lang}`]}
              </p>
              <div className="mt-4 md:mt-10">
                <h3 className="font-bold md:text-lg uppercase text-right text-[#3786b4] ">
                  {item[`talaba_ism_${Lang}`]}
                </h3>
                <p className="text-sm text-gray-500 font-bold text-right">
                  {item[`talaba_inferior_${Lang}`]}
                </p>
              </div>
            </div>
            <RiDoubleQuotesR className="md:text-[130px] absolute bottom-5 right-5 text-[#256488] hidden md:block" />
          </div>
        ))}
    </div>
  );
}

export default StudentOpinion;
