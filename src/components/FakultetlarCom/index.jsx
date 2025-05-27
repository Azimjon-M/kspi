import React, { useEffect, useState } from "react";
import APITuzilmaRectorat from "../../services/tFakultet";
import { useSelector } from "react-redux";
import Logo from "../../assets/images/logo_ksu.png";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import TextTranslate from "../TextTranslate";
import FakultetDetails from "../FakultetDetails";

const Fakultet = () => {
  const isLang = useSelector((state) => state.reducerLang.isLang);
  const [dataRekLav, setDataRekLav] = useState([]);
  const [selectedFakultet, setSelectedFakultet] = useState(null);

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

  // 4 tadan guruhlash funksiyasi
  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  return (
    <div className="mb-10">
      <div className="bg-[#EEF3F8]">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: "Fakultetlar" },
          ]}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-[24px] text-center font-bold my-8 text-[#000]">
          Fakultetlar
        </h1>

        {/* Har 4 ta element alohida divda */}
        {chunkArray(dataRekLav, 4).map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={`grid gap-4 mb-10 shadow-lg bg-[#E5E5E5] justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`}
          >
            {group.map((item) => (
              <Link
                key={item.id}
                to={`/fakultetlar/${item.id}`}
                onClick={() => setSelectedFakultet(item)}
                className="border-b md:border-b-0 md:border-r border-[#CECECE] p-4 flex flex-col items-center md:min-h-[250px]"
              >
                <img
                  src={Logo}
                  alt="University logo"
                  className="mt-[32px] mb-4 w-[107px] h-[107px]"
                />
                <p className="text-center text-lg font-semibold text-[#5f4fa1]">
                  {item[`name_${isLang}`]}
                </p>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <FakultetDetails fakultet={selectedFakultet} />
    </div>
  );
};

export default Fakultet;
