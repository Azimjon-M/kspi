import React, { useRef, useState } from "react";
import TextTranslate from "../TextTranslate";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import { RiDoubleQuotesL } from "react-icons/ri";
import { LuCopyCheck } from "react-icons/lu";
import { GoChecklist } from "react-icons/go";

import mainVid from "../../assets/images/1.JPG";
import ttjTalabalari from "../../assets/images/1.JPG";
import ttjKompus from "../../assets/images/1.JPG";
import ttjXona from "../../assets/images/1.JPG";
import ttj8Mart from "../../assets/images/1.JPG";
import AlisherAbduraximovTTJ from "../../assets/images/1.JPG";

function TalabalarTurarJoyiCom() {
  const [isVisible, setIsVisible] = useState(false);
  const mainRef = useRef(null);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <div>
      {/* video about the institute */}
      <div className="relative">
        <video
          ref={mainRef}
          id="mainVideo"
          className="h-[50vh] md:h-[80vh] lg:h-[100vh] object-cover object-center w-full -z-1"
          src={mainVid}
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-zinc-900 opacity-35"></div>
      </div>

      {/* Leader's opinion */}
      <h1 className="text-2xl md:text-4xl font-bold text-center text-[#004269] mt-5 md:mt-20">
        <TextTranslate id="ttjTitle" />
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-12">
        <div className="flex justify-center">
          <img
            src={AlisherAbduraximovTTJ}
            className="w-60 md:w-72 h-60 md:h-72 rounded-full"
            alt=""
          />
        </div>
        <div className="md:pr-20 text-center md:text-start">
          <RiDoubleQuotesL className="text-6xl text-gray-300" />
          <p className="text-lg text-gray-600 font-bold mt-3">
            <TextTranslate id="ttjRaxbarText" />
          </p>
          <p className="mt-2 text-amber-800 italic">
            <TextTranslate id="ttjRaxbarName" />
          </p>
        </div>
      </div>

      {/* TTJ statistics */}
      <div className="bg-[#F2F2F2] overflow-y-scroll py-14 mt-20">
        <div className="max-w-4xl mx-auto">
          <VisibilitySensor onChange={handleVisibilityChange}>
            <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:mx-0">
              <div className="border-b-4 md:border-b-0 md:border-r-4 border-[#004269] p-7">
                <div className="bg-[#004269] text-center">
                  <p className="text-2xl text-white font-bold py-2">
                    <TextTranslate id="ttjStatisticTitle" />
                  </p>
                </div>
                <p className="num text-5xl font-bold text-center text-[#EB7D46] mt-4">
                  {isVisible && <CountUp end={1938} duration={4} />}
                </p>
                <p className="text-xl text-center font-bold mt-3">
                  <TextTranslate id="ttjStatisticTalaba" />
                </p>
              </div>
              <div className="border-b-4 md:border-b-0 md:border-r-4 border-[#004269] p-7">
                <div className="bg-[#004269] text-center">
                  <p className="text-2xl text-white font-bold py-2">
                    <TextTranslate id="ttjStatisticTitle" />
                  </p>
                </div>
                <p
                  id="counter"
                  className="num text-5xl font-bold text-center text-[#EB7D46] mt-4"
                >
                  {isVisible && <CountUp end={402} duration={5} />}
                </p>
                <p className="text-xl text-center font-bold mt-3">
                  <TextTranslate id="ttjStatisticXona" />
                </p>
              </div>
              <div className="p-7">
                <div className="bg-[#004269] text-center">
                  <p className="text-2xl text-white font-bold py-2">
                    <TextTranslate id="ttjStatisticTitle" />
                  </p>
                </div>
                <p className="num text-5xl font-bold text-center text-[#EB7D46] mt-4">
                  {isVisible && <CountUp end={4} duration={6} />}
                </p>
                <p className="text-xl text-center font-bold mt-3">
                  <TextTranslate id="ttjStatisticBino" />
                </p>
              </div>
            </div>
          </VisibilitySensor>
        </div>
      </div>

      {/* TTJ compus */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#004269] mt-5 md:mt-20">
          <TextTranslate id="ttjBizningKompus" />
        </h1>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
          <div className="z-10 mx-6 md:mx-0">
            <img
              src={ttjKompus}
              className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
              alt=""
            />
          </div>
          <div className="bg-[#F2F2F2] p-10 md:pl-28 md:pr-16 md:py-20 -mt-6 md:mt-0 md:-ml-16">
            <h3 className="text-2xl md:text-3xl font-medium">
              <TextTranslate id="ttjKompus" />
            </h3>
            <p className="text-md md:text-xl mt-3">
              <TextTranslate id="ttjKompusText" />
            </p>
          </div>
        </div>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
          <div className="z-10 mx-6 md:mx-0 md:order-last">
            <img
              src={ttjXona}
              className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
              alt=""
            />
          </div>
          <div className="bg-[#F2F2F2] p-10 md:pl-16 md:pr-28 md:py-20 -mt-6 md:mt-0 md:-mr-16">
            <h3 className="text-2xl md:text-3xl font-medium">
              <TextTranslate id="ttjBizningSharoitlarimiz" />
            </h3>
            <p className="text-md md:text-xl mt-3">
              <TextTranslate id="ttjBizningSharoitlarimizText" />
            </p>
          </div>
        </div>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
          <div className="bg-red-300 z-10 mx-6 md:mx-0 shadow-2xl">
            <img
              src={ttj8Mart}
              className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
              alt=""
            />
          </div>
          <div className="bg-[#F2F2F2] p-10 md:pl-28 md:pr-20 md:py-20 -mt-6 md:mt-0 md:-ml-16">
            <h3 className="text-2xl md:text-3xl font-medium">
              <TextTranslate id="ttjTadbirlar" />
            </h3>
            <p className="text-md md:text-xl mt-3">
            <TextTranslate id="ttjTadbirlarText" />
            </p>
          </div>
        </div>
      </div>

      {/* Image students  */}
      <div className="max-full my-20 md:mt-32">
        <img
          className="w-full max-h-[600px]"
          src={ttjTalabalari}
          alt="TTJ Talabalari"
        />
      </div>
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#004269] mt-5">
        <TextTranslate id="ttjUchunArizaTopshirish" />
        </h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 my-16">
          <div className="text-center">
            <a
              href="https://my.gov.uz/oz/service/870"
              className="inline-block bg-[#F2F2F2] rounded-full p-5 shadow-lg border border-sky-700 group hover:bg-sky-700"
            >
              <LuCopyCheck className="text-5xl text-sky-700 group-hover:text-sky-50" />
            </a>
            <p className="text-xl font-bold text-gray-600 mt-5">
            <TextTranslate id="ttjBoshlangichKursUchun" />
            </p>
          </div>
          <div className="text-center mt-10 md:mt-0">
            <a
              href="https://ttj.kspi.uz/"
              className="inline-block bg-[#F2F2F2] rounded-full p-5 shadow-lg border border-sky-700 group hover:bg-sky-700"
            >
              <GoChecklist className="text-5xl text-sky-700 group-hover:text-sky-50" />
            </a>
            <p className="text-xl font-bold text-gray-600 mt-5">
            <TextTranslate id="ttjYuqoriKurslarUchun" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalabalarTurarJoyiCom;
