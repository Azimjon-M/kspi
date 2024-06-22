import React from "react";
import { Link } from "react-router-dom";
// import { Typewriter } from "react-simple-typewriter";
import TextTranslate from "../TextTranslate";

function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-0 my-24">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold font-source text-center text-[#004269]">
          <TextTranslate id="bizningMaqsadimiz" />
        </h1>
      </div>
      <div className="px-2 md:px-10 xl:px-0">
        <p className="text-xl md:text-[2rem] font-light font_source md:leading-[3.5rem] text-center my-10">
          <TextTranslate id="bizHaqimizda" />
          {/* <Typewriter
            words={[]}
            typeSpeed={50}
            delaySpeed={1000}
          /> */}
        </p>
      </div>
      <div className="flex justify-center">
        <Link
          to="/institut-haqida"
          className="text-lg md:text-2xl bg-slate-100 text-cyan-900 font-bold active:border border-slate-100 px-10 md:px-28 py-2 md:py-4 rounded-xl"
        >
          <TextTranslate id="bizHaqimizdaKoproq" />
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
