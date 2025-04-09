import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextTranslate from "../TextTranslate";
import { RiLiveLine } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";
import APILibrary from "../../services/interaktivLibrary";
import APIMasofaviy from "../../services/interaktivMasofaviy";
import { IoLibraryOutline } from "react-icons/io5";
import { TbMessageUp } from "react-icons/tb";
import { MdCoPresent } from "react-icons/md";
import { TfiCamera } from "react-icons/tfi";
// import { useSelector } from "react-redux";

function Interactive() {
  const [data, setData] = useState(null);
  const [dataSecond, setDataSecond] = useState(null);
  // const Lang = useSelector((state) => state.reducerLang.isLang);

  useEffect(() => {
    getData();
    getDataSecond();
  }, []);

  const getData = () => {
    APILibrary.get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  const getDataSecond = () => {
    APIMasofaviy.get()
      .then((res) => setDataSecond(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative z-2 mb-20">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-[#707070]">
            <li className="w-full hover:bg-[#5f4fa1]/70 group">
              <Link
                to="/qabulxona"
                className="flex lg:justify-center items-center p-2 text-center"
              >
                <TbMessageUp className="text-[24px] xl:text-[30px] mr-2 text-black group-hover:text-white transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs mt-2 whitespace-nowrap text-black group-hover:text-white font-medium transition-all duration-200 ease-linear">
                  <TextTranslate id="intVertualQabulxona" />
                </h2>
              </Link>
            </li>
            <li className="w-full hover:bg-[#5f4fa1]/70 group">
              {data &&
                data.map((item) => (
                  <Link
                    key={item.id}
                    to={item.link}
                    target="blank"
                    className="flex lg:justify-center items-center p-2 w-full text-center"
                  >
                    <IoLibraryOutline className="text-[24px] xl:text-[30px] mr-2 text-black group-hover:text-white transition-all duration-200 ease-linear" />
                    <h2 className="uppercase text-xs mt-2 whitespace-nowrap text-black group-hover:text-white font-medium transition-all duration-200 ease-linear">
                      <TextTranslate id="intEKutubxona" />
                    </h2>
                  </Link>
                ))}
            </li>
            <li className="w-full hover:bg-[#5f4fa1]/70 group">
              {dataSecond &&
                dataSecond.map((item) => (
                  <Link
                    key={item.id}
                    to={item.link}
                    className="flex lg:justify-center items-center p-2 w-full text-center"
                  >
                    <MdCoPresent className="text-[24px] xl:text-[30px] mr-2 text-black group-hover:text-white transition-all duration-200 ease-linear" />
                    <h2 className="uppercase text-xs mt-2 whitespace-nowrap text-black group-hover:text-white font-medium transition-all duration-200 ease-linear">
                      <TextTranslate id="intMasofaviyTalim" />
                    </h2>
                  </Link>
                ))}
            </li>
            <li className="w-full hover:bg-[#5f4fa1]/70 group">
              <Link
                to="/videomaruza"
                className="flex lg:justify-center items-center p-2 w-full text-center"
              >
                <RiLiveLine className="text-[24px] xl:text-[30px] mr-2 text-black group-hover:text-white transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs mt-2 whitespace-nowrap text-black group-hover:text-white font-medium transition-all duration-200 ease-linear">
                  <TextTranslate id="intVideoMaruzalar" />
                </h2>
              </Link>
            </li>
            <li className="w-full hover:bg-[#5f4fa1]/70 group">
              <Link
                to="/qabul"
                className="flex lg:justify-center items-center p-2 w-full text-center"
              >
                <FaRegCalendarCheck className="text-[24px] xl:text-[30px] mr-2 text-black group-hover:text-white transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs mt-2 whitespace-nowrap text-black group-hover:text-white font-medium transition-all duration-200 ease-linear">
                  <TextTranslate id="intQabul" />
                </h2>
              </Link>
            </li>
            <li className="w-full hover:bg-[#5f4fa1]/70 group">
              <Link
                to="/kuzatish"
                className="flex lg:justify-center items-center p-2 w-full text-center"
              >
                <TfiCamera className="text-[24px] xl:text-[30px] mr-2 text-black group-hover:text-white transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs mt-2 sm:whitespace-nowrap text-black group-hover:text-white font-medium transition-all duration-200 ease-linear">
                  <TextTranslate id="intImtixonlarniKuzatish" />
                </h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Interactive;
