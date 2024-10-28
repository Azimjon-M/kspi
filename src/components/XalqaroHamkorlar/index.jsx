import React from "react";
import TextTranslate from "../TextTranslate";
import Breadcrumb from "../Breadcrumb";

const XalqaroHamkorlar = () => {
  return (
    <section className="bg-gray-50 px-5 py-3 md:px-10 lg:px-20 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full mb-5 ">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="faoliyat" /> },
            { text: <TextTranslate id="xalqaroHamkorlar" /> },
          ]}
        />
      </div>
      <div className="text-center my-1 md:my-3">
        <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269] text-center">
          <TextTranslate id="xalqaroHamkorlar" />
        </h2>
      </div>
      <div>
        Content
      </div>
    </section>
  );
};

export default XalqaroHamkorlar;
