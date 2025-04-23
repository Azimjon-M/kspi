import React from "react";
import Breadcrumb from "../Breadcrumb";
import TextTranslate from "../TextTranslate";

const RektoratRahbar = () => {
  return (
    <div className="mb-10">
      <div className="bg-[#EEF3F8]">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: "Rahbariyat", link: "/rektorat" },
            { text: "Rektor" },
          ]}
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[40px] leading-[100%] font-bold px-4 my-8 text-[#000] text-center font-primaryMedium">
          Rektor
        </h1>
      </div>
    </div>
  );
};

export default RektoratRahbar;
