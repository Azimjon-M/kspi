import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import callImg from "../../assets/images/1.JPG";
import TextTranslate from "../TextTranslate";

const AbiturientCallCom = () => {
  return (
    <div className="mb-8">
      <div className="relative">
        <img src={callImg} alt="Call-center" className="w-full" />
        <h3 className="absolute top-5 sm:top-10 md:top-14 lg:top-28 xl:top-32 w-56 md:w-96 lg:w-3/5 left-3 md:left-8 lg:left-20 font-semibold sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-7xl text-[#004269] text-center xl:text-start">
        <TextTranslate id="abiCall" />
        </h3>
      </div>
      <div className="px-5 xl:px-10">
        <h1 className="text-center text-2xl md:text-3xl xl:text-5xl font-semibold py-3 md:py-5 text-[#004269]">
        <TextTranslate id="abiCallTitle" />
        </h1>
        <div className="max-w-7xl md:grid md:grid-cols-2 xl:grid-cols-3 mx-auto md:px-3 2xl:px-0">
          <div className="xl:col-span-2 mb-5">
            <p className="mb-3 text-xl">
            <TextTranslate id="abiCallTavsif1" />
            </p>
            <p className="mb-3 text-xl">
            <TextTranslate id="abiCallTavsif2" />
            </p>
            <p className="text-xl">
            <TextTranslate id="abiCallTavsif3" />
            </p>
          </div>
          <div className="ml-auto">
            <ul className="border-2 p-5 border-[#004269] rounded text-center">
              <h4 className="font-semibold mb-3 text-2xl text-[#004269]">
              <TextTranslate id="abiCallRaqamlar" />:
              </h4>
              <li className="mb-2">
                <a
                  href="tel:+998735420641"
                  className="flex items-center justify-center text-xl hover:scale-110 duration-150"
                >
                  <LuPhoneCall className="mr-2 text-[#004269]" />
                  +998-73-249-38-38
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbiturientCallCom;
