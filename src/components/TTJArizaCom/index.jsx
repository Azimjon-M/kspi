import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TextTranslate from "../TextTranslate";
import APITTJAriza from "../../services/ttjAriza";

import { LuCopyCheck } from "react-icons/lu";
import { GoChecklist } from "react-icons/go";

function TTJArizaCom() {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await APITTJAriza.get();
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {/* TTJ Ariza */}
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#004269] mt-5">
          <TextTranslate id="ttjUchunArizaTopshirish" />
        </h1>
        {data &&
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 my-16"
              >
                <div className="text-center">
                  <a
                    href={item.link_1}
                    className="inline-block bg-[#F2F2F2] rounded-full p-5 shadow-lg border border-sky-700 group hover:bg-sky-700"
                  >
                    <LuCopyCheck className="text-5xl text-sky-700 group-hover:text-sky-50" />
                  </a>
                  <p className="text-xl font-bold text-gray-600 mt-5">
                    {item && item[`link_1_title_${Lang}`]}
                  </p>
                </div>
                <div className="text-center mt-10 md:mt-0">
                  <a
                    href={item.link_2}
                    className="inline-block bg-[#F2F2F2] rounded-full p-5 shadow-lg border border-sky-700 group hover:bg-sky-700"
                  >
                    <GoChecklist className="text-5xl text-sky-700 group-hover:text-sky-50" />
                  </a>
                  <p className="text-xl font-bold text-gray-600 mt-5">
                    {item && item[`link_2_title_${Lang}`]}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TTJArizaCom;
