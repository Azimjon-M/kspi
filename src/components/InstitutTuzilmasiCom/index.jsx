import React from "react";
import TextTranslate from "../TextTranslate";
import Breadcrumb from "../Breadcrumb";
import insTuz1 from "../../assets/images/1.JPG";
import insTuz2 from "../../assets/images/1.JPG";
import { Link } from "react-router-dom";
import insTuzilmasi from "../../assets/pdf/insTuzilmasi.pdf";

const InstitutTuzilmasiCom = () => {
  return (
    <div className="px-5 py-3 md:px-10 mb-3 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="tuzilma" /> },
          ]}
        />
      </div>
      <div className="max-w-7xl mx-auto mb-3">
          {/* News heading */}
          <div className="my-1 md:my-3">
            <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269] text-center">
            <TextTranslate id="tuzilma" />
            </h2>
          </div>
        <div className="mb-3">
          <img
            className="w-full"
            src={insTuz1}
            alt="Institut tuzilmasi rasmi"
          />
          <img
            className="w-full"
            src={insTuz2}
            alt="Institut tuzilmasi rasmi"
          />
        </div>
        <div className="border-2 border-[#004269] flex items-center justify-between rounded p-2">
          <div className="font-semibold md:text-lg lg:text-xl">
          <TextTranslate id="tuzilmaShakli" />
          </div>
          <Link
            to={insTuzilmasi}
            target="blank"
            className="btn bg-[#004269] hover:bg-white hover:border-[#004269] hover:text-[#004269] text-white"
          >
            <TextTranslate id="tuzilmaShakliYuklash" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstitutTuzilmasiCom;
