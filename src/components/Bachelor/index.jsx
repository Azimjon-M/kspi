import React, { useState, useEffect } from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { BsJournalCheck } from "react-icons/bs";
import { GiMaterialsScience } from "react-icons/gi";
import { GrCatalog } from "react-icons/gr";
import { Link } from "react-router-dom";
import TextTranslate from "../TextTranslate";
import { useSelector } from "react-redux";
import APIBakalavr from "../../services/talabalarBakalavr";

function Bachelor() {
  const [data, setData] = useState(null);
  const Lang = useSelector((state) => state.reducerLang.isLang);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    APIBakalavr.get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      {data &&
        data.map((item) => (
          <div className="max-h-vh" key={item.id}>
            <div className="w-full absolute top-[15%] sm:top-[18%] md:top-[25%] lg:top-[25%] xl:top-[40%]">
              <div
                className="text-center text-3xl sm:text-5xl md:text-7xl font-bold text-gray-100 text-shadow"
                style={{ textShadow: "0 0 20px rgba(0,0,0, 1)" }}
              >
                {item[`title_${Lang}`]}
              </div>
              <p
                className="text-gray-100 text-2xl text-center hidden md:block md:px-12 lg:px-32 xl:px-44 mt-5 leading-10 text-shadaw"
                style={{ textShadow: "0 0 30px rgba(0,0,0, 1)" }}
              >
                {item[`body_${Lang}`]}
              </p>
            </div>
            <img
              src={item.rasm}
              className="w-full max-h-[1333px]"
              alt="Bakalavrimage"
            />
          </div>
        ))}
      <div className="max-w-7xl mx-5 xl:mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-8 sm:-mt-10 lg:-mt-28 mb-16">
        <Link
          to="/dtsvaMalaka"
          className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 transition-transform"
        >
          <div>
            <MdOutlineLibraryBooks className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              <TextTranslate id="dTSvaMalakaTalablari" />
            </p>
          </div>
        </Link>
        <Link
          to="/oquvRejalari"
          className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 transition-transform"
        >
          <div>
            <BsJournalCheck className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              <TextTranslate id="oquvRejalar" />
            </p>
          </div>
        </Link>
        <Link
          to="/fanDasturlari"
          className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 transition-transform"
        >
          <div>
            <GiMaterialsScience className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              <TextTranslate id="fanDasturlari" />
            </p>
          </div>
        </Link>
        <Link
          to="/fanKatalogi"
          className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 transition-transform"
        >
          <div>
            <GrCatalog className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              <TextTranslate id="fanKatalogi" />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Bachelor;
