import React from "react";
import { Link } from "react-router-dom";

const QabulCom = () => {
  return (
    <div className="md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <h2 className="text-xl md:text-2xl text-center font-bold my-2 text-[#004269]">
        Baholash mezonlari
      </h2>
      <div className="text-center p-5 font-semibold text-md">
        Yaqin kunlarda ma'lumot joylanadi.!
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-between md:px-5 xl:px-14 md:text-lg xl:text-2xl mb-5">
        <div className="font-semibold mb-3 text-center text-md">
          DTM saytiga kirib online hujjat topshirishingiz mumkin
        </div>
        <Link
          to="https://uzbmb.uz/page/qabul2023"
          className="btn bg-[#004269] hover:bg-[#004580] text-white"
        >
          Saytga o'tish
        </Link>
      </div>
    </div>
  );
};

export default QabulCom;
