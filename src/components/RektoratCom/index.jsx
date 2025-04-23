import React, { useEffect, useState } from "react";
import APITuzilmaRectorat from "../../services/tRektorat";
import { useSelector } from "react-redux";
import Logo from "../../assets/images/logo_black.png";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import TextTranslate from "../TextTranslate";

const Rektorat = () => {
  const isLang = useSelector((state) => state.reducerLang.isLang);
  const [dataRekLav, setDataRekLav] = useState([]);

  const getDataRekLav = async () => {
    await APITuzilmaRectorat.get()
      .then((res) => {
        setDataRekLav(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDataRekLav();
  }, []);

  return (
    <div className="mb-10">
      <div className="bg-[#EEF3F8]">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: "Rahbariyat" },
          ]}
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[24px] font-bold px-4 my-8 text-[#000]">
          Rahbariyat
        </h1>

        {/* Har 4 ta element alohida divda */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {dataRekLav.map((lavozim) => (
            <Link
              key={lavozim.id}
              to="rahbar"
              className="min-h-[309px] p-2 bg-[#191932] rounded-[10px] flex flex-col items-center"
            >
              <img
                src={Logo}
                alt="University logo"
                className="mt-[20px] mb-4 w-[157px] h-auto"
              />
              <p className="text-center text-lg font-semibold text-[#fff]">
                {lavozim[`name_${isLang}`]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rektorat;
