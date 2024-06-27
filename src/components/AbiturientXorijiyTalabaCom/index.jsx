import React, {useState, useEffect} from "react";
import Breadcrumb from "../Breadcrumb";
import { LuDownload } from "react-icons/lu";
import TextTranslate from "../TextTranslate";
import APIXorijiyTalaba from "../../services/abiturientXorijiyTalaba";
// import { useSelector } from "react-redux";

function AbiturientXorijiyCom() {
  const [data, setData] = useState(null);
  // const Lang = useSelector((state) => state.reducerLang.isLang);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    APIXorijiyTalaba.get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-5 xl:px-10">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="abiXorijiyTalabaBreadcrumb" /> },
          ]}
        />
      </div>
      <div className="max-w-7xl mx-auto py-5">
        <h1 className="text-2xl md:text-4xl font-bold text-[#004269] text-center">
        <TextTranslate id="abiXorijiyTalaba" />
        </h1>
        <div className="relative shadow-md overflow-x-auto sm:rounded-lg mx-5 mt-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="md:text-base text-white uppercase bg-[#004269] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="pl-2 md:pl-6 py-4">
                  №
                </th>
                <th scope="col" className="px-2 md:px-6 py-4">
                <TextTranslate id="abiXorijiyTalabaHujjat" />
                </th>
                <th
                  scope="col"
                  className="px-2 md:px-6 py-4 flex justify-center"
                >
                  <TextTranslate id="abiXorijiyTalabaBatafsil" />
                </th>
              </tr>
            </thead>
            <tbody className="text-base">
              {data &&
                data.map((item) => {
                  const { id, title, fayl } = item;
                  return (
                    <tr
                      key={id}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-200"
                    >
                      <th
                        scope="row"
                        className="pl-2 md:pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {id}
                      </th>
                      <td className="px-2 md:px-6 py-4">{title}</td>
                      <td className="px-2 md:px-6 py-4 mx-auto flex justify-center items-center">
                        <a
                          href={fayl}
                          className="text-[#004269] dark:text-blue-500"
                          target="_blank"
                          rel="noopener noreferrer"
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
    </div>
  );
}

export default AbiturientXorijiyCom;
