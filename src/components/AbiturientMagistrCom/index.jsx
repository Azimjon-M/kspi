import React, { useState, useEffect } from "react";
import { MdOutlineSubject } from "react-icons/md";
import { RiNumbersFill } from "react-icons/ri";
import { MdOutlineCreditScore } from "react-icons/md";
import { GrCatalog } from "react-icons/gr";
import { Link } from "react-router-dom";
import TextTranslate from "../TextTranslate";
import APIMagistr from "../../services/abiturientMagistr";
import { useSelector } from "react-redux";

function AbiturientMagistrCom() {
  const [data, setData] = useState(null);
  const Lang = useSelector((state) => state.reducerLang.isLang);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    APIMagistr.get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      {
        data && data.map((item) => (
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
            <img src={item.rasm} className="w-full h-full" alt="" />
          </div>
        ))
      }
      <div className="max-w-7xl mx-5 xl:mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-8 sm:-mt-10 lg:-mt-28 mb-16">
        <Link
          // to="/dtsvaMalaka"
          to="#"
          className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 ease-in-out duration-300"
        >
          <div>
            <MdOutlineCreditScore className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              <TextTranslate id="abiBakalavrLink1" />
            </p>
          </div>
        </Link>
        <Link
          // to="/oquvRejalari"
          to="#"
          className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 ease-in-out duration-300"
        >
          <div>
            <MdOutlineSubject className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              <TextTranslate id="abiBakalavrLink2" />
            </p>
          </div>
        </Link>
        <Link
          // to="/fanDasturlari"
          to="#"
          className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 ease-in-out duration-300"
        >
          <div>
            <RiNumbersFill className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              <TextTranslate id="abiBakalavrLink3" />
            </p>
          </div>
        </Link>
        <Link
          // to="/fanKatalogi"
          to="#"
          className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 ease-in-out duration-300"
        >
          <div>
            <GrCatalog className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              <TextTranslate id="abiBakalavrLink4" />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AbiturientMagistrCom;
