import React, { useState, useEffect } from "react";
import APIBaholashMezon from "../../services/baholashMezon";
import { useSelector } from "react-redux";
import { FaRegFilePdf } from "react-icons/fa6";
import TextTranslate from "../TextTranslate";

const QabulCom = () => {
  const [data, setData] = useState(null);
  const Lang = useSelector((state) => state.reducerLang.isLang);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    APIBaholashMezon.get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)] max-w-7xl mx-auto px-4 xl:px-0">
      <h2 className="text-xl md:text-2xl text-center font-bold my-5 text-[#004269]">
        <TextTranslate id="baholashMezon" />
      </h2>
      <div className="mb-5 lg:mb-7 xl:mb-10">
        {data?.length === 0 ? (
          <div className="text-center p-5 font-semibold text-md italic text-red-500">
            Yaqin kunlarda ma'lumot joylanadi.!
          </div>
        ) : (
          data?.map((item) => (
            <div className="mb-2" key={item.id}>
              <a
                href={item.fayl}
                target="blank"
                className="md:text-lg border-2 flex items-center p-2 bg-slate-200 text-sky-700"
              >
                <div className="mr-3">
                  <FaRegFilePdf className="w-[20px] h-auto text-black" />
                </div>
                {item[`title_${Lang}`]}
              </a>
            </div>
          ))
        )}
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-between md:text-lg xl:text-2xl mb-5">
        <div className="font-semibold mb-3 text-center text-md">
          DTM saytiga kirib online hujjat topshirishingiz mumkin
        </div>
        <a
          href="https://my.uzbmb.uz/"
          target="blank"
          className="btn bg-[#004269] hover:bg-[#004580] text-white"
        >
          Saytga o'tish
        </a>
      </div>
    </div>
  );
};

export default QabulCom;
