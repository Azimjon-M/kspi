import React, {useState, useEffect } from "react";
import { useSelector } from "react-redux";
import APITTJRaxbar from "../../services/ttjRaxbar";

import { RiDoubleQuotesL } from "react-icons/ri";

function TTJRaxbarCom() {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await APITTJRaxbar.get();
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {/* Leader's opinion */}
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <h1 className="text-2xl md:text-4xl font-bold text-center text-[#004269] mt-5 md:mt-20">
                {item && item[`title_${Lang}`]}
              </h1>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-12">
                <div className="flex justify-center">
                  <img
                    src={item.rasm}
                    className="w-60 md:w-72 h-60 md:h-72 rounded-full"
                    alt=""
                  />
                </div>
                <div className="md:pr-20 text-center md:text-start">
                  <RiDoubleQuotesL className="text-6xl text-gray-300" />
                  <p className="text-lg text-gray-600 font-bold mt-3">
                    {item && item[`body_${Lang}`]}
                  </p>
                  <p className="mt-2 text-amber-800 italic">
                    {item.rahbar_fish}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TTJRaxbarCom;
