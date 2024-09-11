import React, { useState, useEffect } from "react";
import TextTranslate from "../TextTranslate";
import { LuDownload } from "react-icons/lu";
import { useSelector } from "react-redux";
import APImDtsvaMalaka from "../../services/mDtsvaMalaka";

function MagistrDTSvaMalakaCom() {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await APImDtsvaMalaka.get();
        const sortedData = res.data.sort((a, b) => {
          return new Date(b.sana) - new Date(a.sana);
        });
        setData(sortedData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-16">
      <h1 className="text-md md: text-4xl font-bold text-[#004269] text-center">
        <TextTranslate id="dTSvaMalakaTalablari" />
      </h1>
      <div className="relative shadow-md overflow-x-auto sm:rounded-lg mx-5 mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="md:text-base text-white uppercase bg-[#377DFF] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="pl-2 md:pl-6 py-4">
                №
              </th>
              <th scope="col" className="px-2 md:px-6 py-4">
                <TextTranslate id="DTSvaMalakaHujjatNomi" />
              </th>
              <th scope="col" className="px-2 md:px-6 py-4 hidden md:block">
                <TextTranslate id="DTSvaMalakaSana" />
              </th>
              <th scope="col" className="px-2 md:px-6 py-4">
                <TextTranslate id="DTSvaMalakaBatafsil" />
              </th>
            </tr>
          </thead>
          <tbody className="text-base">
            {data &&
              data.map((item, index) => {
                return (
                  <tr
                    key={item.id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-200"
                  >
                    <th
                      scope="row"
                      className="pl-2 md:pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-2 md:px-6 py-4">
                      {item && item[`name_${Lang}`]}
                    </td>
                    <td className="px-2 md:px-6 py-4 hidden md:block">
                      {item.sana}
                    </td>
                    <td className="px-2 md:px-6 py-41">
                      <a
                        href={item.fayl}
                        className="text-blue-600 dark:text-blue-500"
                        target="blank"
                      >
                        <LuDownload className="text-xl" />
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MagistrDTSvaMalakaCom;
