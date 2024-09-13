import React, { useState, useEffect, useMemo, useCallback } from "react";
import APIMOquvReja from "../../services/mOquvReja";
import APIMOquvRejaTur from "../../services/mOquvRejaTur";
import { useSelector } from "react-redux";
import TextTranslate from "../TextTranslate";
import { PiStudentFill } from "react-icons/pi";
import { LuDownload } from "react-icons/lu";

const MagistrOquvRejalariCom = () => {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [showContent, setShowContent] = useState(1);
  const [data, setData] = useState([]);
  const [dataTur, setDataTur] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const [resTur, res] = await Promise.all([
        APIMOquvRejaTur.get(),
        APIMOquvReja.get(),
      ]);
      setDataTur(resTur.data);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = useCallback((id) => setShowContent(id), []);

  const filteredData = useMemo(
    () => data.filter((item) => item.oquv_reja_turi_id === showContent),
    [data, showContent]
  );

  return (
    <div className="max-w-7xl md:mx-auto py-10 mx-4 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <h1 className="text-4xl font-bold text-[#004269] text-center">
        <TextTranslate id="oquvRejalar" />
      </h1>
      <div className="md:grid grid-cols-12 mt-4 md:mt-8">
        <ul className="col-span-2 space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          {dataTur.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`${
                  showContent === item.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-50"
                } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                <PiStudentFill className="w-4 h-4 me-2" />
                <p>{item[`name_${Lang}`]}</p>
              </button>
            </li>
          ))}
        </ul>
        <div className="col-span-10">
          <div className="p-6 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
            <div className="relative shadow-md overflow-x-auto rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="md:text-base text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="pl-2 md:pl-6 py-4">
                      №
                    </th>
                    <th scope="col" className="px-2 md:px-6 py-4">
                      <TextTranslate id="DTSvaMalakaHujjatNomi" />
                    </th>
                    <th
                      scope="col"
                      className="px-2 md:px-6 py-4 hidden md:block"
                    >
                      <TextTranslate id="DTSvaMalakaSana" />
                    </th>
                    <th scope="col" className="px-2 md:px-6 py-4">
                      <TextTranslate id="DTSvaMalakaBatafsil" />
                    </th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  {filteredData.map((item, index) => (
                    <tr
                      key={item.id}
                      className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 hover:bg-gray-200"
                    >
                      <th
                        scope="row"
                        className="pl-2 md:pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td className="px-2 md:px-6 py-4">
                        {item[`name_${Lang}`]}
                      </td>
                      <td className="px-2 md:px-6 py-4 hidden md:block">
                        {item.sana}
                      </td>
                      <td className="px-2 md:px-6 py-4">
                        <a
                          href={item.fayl}
                          className="text-blue-600 dark:text-blue-500"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LuDownload className="text-xl" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagistrOquvRejalariCom;
