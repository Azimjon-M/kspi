import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import APIInstitutTuzilmasi from "../../services/institutTuzilmasi";
import TextTranslate from "../TextTranslate";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";

const InstitutTuzilmasiCom = () => {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await APIInstitutTuzilmasi.get();
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="px-5 py-3 md:px-10 mb-3 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="tuzilma" /> },
          ]}
        />
      </div>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id} className="max-w-7xl mx-auto mb-3">
              {/* News heading */}
              <div className="my-1 md:my-3">
                <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269] text-center">
                  {item && item[`name_${Lang}`]}
                </h2>
              </div>
              <div className="mb-3">
                {[
                  item.rasm_1,
                  item.rasm_2,
                  item.rasm_3,
                  item.rasm_4,
                  item.rasm_5,
                ].map(
                  (rasm, index) =>
                    rasm && (
                      <img
                        key={index}
                        className="w-full"
                        src={rasm}
                        alt={`Institut tuzilmasi rasmi ${index + 1}`}
                      />
                    )
                )}
              </div>
              <div className="border-2 border-[#004269] flex items-center justify-between rounded p-2">
                <div className="font-semibold md:text-lg lg:text-xl">
                  <TextTranslate id="tuzilmaShakli" />
                </div>
                <Link
                  to={item.pdf_fayl}
                  target="blank"
                  className="btn bg-[#004269] hover:bg-white hover:border-[#004269] hover:text-[#004269] text-white"
                >
                  <TextTranslate id="tuzilmaShakliYuklash" />
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default InstitutTuzilmasiCom;
