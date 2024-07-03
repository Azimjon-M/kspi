import React, {useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TextTranslate from "../TextTranslate";
import APITTJCompus from "../../services/ttjCompus";

function TTJCompusCom() {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await APITTJCompus.get();
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {/* TTJ compus */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#004269] mt-5 md:mt-20">
          <TextTranslate id="ttjBizningKompus" />
        </h1>
        {data &&
          data.map((item, index) => {
            const isEvin = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32"
              >
                <div
                  className={`z-10 mx-6 md:mx-0 ${
                    isEvin ? "" : "md:order-last"
                  }`}
                >
                  <img
                    src={item.rasm}
                    className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
                    alt=""
                  />
                </div>
                <div
                  className={`bg-[#F1F5F9] p-10 md:py-20 -mt-6 md:mt-0 ${
                    isEvin
                      ? "md:-ml-16 md:pl-28 md:pr-16"
                      : "md:-mr-16 md:pl-16 md:pr-28"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-medium">
                    {item && item[`title_${Lang}`]}
                  </h3>
                  <p className="text-md md:text-xl mt-3">
                    {item && item[`body_${Lang}`]}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TTJCompusCom;
