import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import fikr from "../../assets/images/1.JPG"
import TextTranslate from "../TextTranslate/index";

function StudentOpinion() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto py-10 sm:py-28 px-6 flex flex-col md:flex-row md:relative">
        <RiDoubleQuotesL className="md:text-[130px] absolute top-5 left-1 z-10 text-[#3786b4] hidden md:block" />
        <div
          className="md:w-1/2 md:h-[420px] md:mb-12 md:shadow-2xl md:rounded-2xl"
          data-aos="fade-right"
        >
          <img
            className="w-full h-full object-cover md:rounded-2xl rounded-t-2xl"
            src={fikr}
            alt=""
          />
        </div>
        <div
          className="md:w-1/2 md:h-[420px] bg-white md:absolute md:mt-12 right-6 md:rounded-2xl md:shadow-2xl rounded-b-2xl px-5 md:px-8 lg:px-16 py-5 md:py-8 lg:py-12"
          data-aos="fade-left"
        >
          <p className="text-md md:text-xl lg:text-2xl text-[#004269]">
          <TextTranslate id="talabaFikri" />
          </p>
          <div className="mt-4 md:mt-10">
            <h3 className="font-bold md:text-lg uppercase text-right text-[#3786b4] ">
            <TextTranslate id="talabaFikriIsm" />
            </h3>
            <p className="text-sm text-gray-500 font-bold text-right">
            <TextTranslate id="talabaFikriNomzodligi" />
            </p>
          </div>
        </div>
        <RiDoubleQuotesR className="md:text-[130px] absolute bottom-5 right-5 text-[#256488] hidden md:block" />
      </div>
    </div>
  );
}

export default StudentOpinion;
