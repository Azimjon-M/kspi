import React from "react";
import Breadcrumb from "../Breadcrumb";

const VakansiyalarCom = () => {
  return (
    <div className="px-5 py-3 md:px-10 mb-3 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: "Bosh sahifa", link: "/" },
            { text: "Bo'sh ish o'rinlari" },
          ]}
        />
      </div>
      <h2 className="text-xl md:text-3xl font-bold my-5 text-[#004269] text-center">
        Bo'sh ish o'rinlari
      </h2>
      <div className="max-w-7xl mx-auto">
        <p className="text-red-600 italic text-center">
          Hozirda hech qanday ish o'rni mavjud emas.!
        </p>
      </div>
    </div>
  );
};

export default VakansiyalarCom;
