import React, { useState, useEffect } from "react";
import Breadcrumb from "../Breadcrumb";
import { BsCash } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import APIVakansiya from "../../services/vakansiyalar";
import { useSelector } from "react-redux";
import TextTranslate from "../TextTranslate";

const VakansiyalarCom = () => {
  const [data, setData] = useState(null);
  const Lang = useSelector((state) => state.reducerLang.isLang);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    APIVakansiya.get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

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
      <TextTranslate id="vakansiyaTitle" />
      </h2>
      <div className="max-w-7xl mx-auto">
        {data?.length === 0 ? (
          <p className="text-red-600 italic text-center">
            <TextTranslate id="vakansiyaNoJob" />
          </p>
        ) : (
          data?.map((item) => (
            <div className="border-2 p-2 rounded mb-5" key={item.id}>
              <div className="border-b-2 py-2">
                <h2 className="font-bold text-lg md:text-xl lg:text-2xl">
                  {item[`lavozim_${Lang}`]}
                </h2>
                <p className="text-blue-500 font-semibold">
                  {item[`bolim_${Lang}`]}
                </p>
              </div>
              <div className="py-2">
                <p className="flex items-center">
                  <BsCash className="text-blue-500 mr-2" />{" "}
                  {item[`oylik_${Lang}`]}
                </p>
                <p className="flex items-center">
                  <MdAccessTime className="text-blue-500 mr-2" />
                  {item[`stavka_${Lang}`]}
                </p>
              </div>
              <div className="border-b-2 py-2">
                <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl font-semibold">
                <TextTranslate id="vakansiyaMalakaviyTalab" />
                </h2>
                <p>{item[`malakaviy_talablar_${Lang}`]}</p>
              </div>
              <div className="py-2">
                <p className="font-bold text-base-300">{item.sana}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VakansiyalarCom;
