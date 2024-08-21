import React from "react";
import TextTranslate from "../TextTranslate";
import { FaRegFilePdf } from "react-icons/fa6";
import ballar from "../../assets/pdf/ballari.pdf";
import qaydnoma from "../../assets/pdf/Qaydnoma.pdf";

function OtishBallariCom() {
  return (
    <div className="md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)] max-w-7xl mx-auto px-4 xl:px-0">
      <h2 className="text-xl md:text-2xl text-center font-bold my-5 text-[#004269]">
        O'tish ballari
      </h2>
      <div className="mb-2">
        <a
          href={ballar}
          target="blank"
          className="md:text-lg border-2 flex items-center p-2 bg-slate-200 text-sky-700"
        >
          <div className="mr-3">
            <FaRegFilePdf className="w-[20px] h-auto text-black" />
          </div>
          <TextTranslate id="abiBakalavrOtishBallar" />
        </a>
      </div>
      <div className="mb-2">
        <a
          href={qaydnoma}
          target="blank"
          className="md:text-lg border-2 flex items-center p-2 bg-slate-200 text-sky-700"
        >
          <div className="mr-3">
            <FaRegFilePdf className="w-[20px] h-auto text-black" />
          </div>
          2024–2025-o‘quv yili uchun Qoʻqon davlat pedagogika institutining bakalavriat ta’lim yo‘nalishlariga kirish test sinovlari qaydnomasi.
        </a>
      </div>
    </div>
  );
}

export default OtishBallariCom;
