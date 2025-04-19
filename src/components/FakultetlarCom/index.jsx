import React, { useEffect, useState } from "react";
import APITuzilmaRectorat from "../../services/tFakultet";
import { useSelector } from "react-redux";
import Logo from "../../assets/images/logo_black.png";
import { Link } from "react-router-dom";

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

  // 4 tadan guruhlash funksiyasi
  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  return (
    <div className="max-w-7xl mx-auto px-3 lg:pb-8 pb-4 py-4">
      <h1 className="text-[24px] font-bold my-8 text-[#000]">Fakultetlar</h1>

      {/* Har 4 ta element alohida divda */}
      {chunkArray(dataRekLav, 4).map((group, groupIndex) => (
        <Link
          key={groupIndex}
        //   to="/:rektor"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 mb-10 shadow-lg"
        >
          {group.map((item) => (
            <div
              key={item.id}
              className="md:border-r p-4 flex flex-col items-center md:min-h-[250px]"
            >
              <img
                src={Logo}
                alt="University logo"
                className="mb-4 w-[107px]"
              />
              <p className="text-center text-lg font-semibold text-[#5f4fa1]">
                {item[`name_${isLang}`]}
              </p>
            </div>
          ))}
        </Link>
      ))}
    </div>
  );
};

export default Rektorat;
