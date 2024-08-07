import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../Breadcrumb";
import TextTranslate from "../TextTranslate";
import APIInstitutKengashi from "../../services/institutKengashi";

const InstitutKengashiCom = () => {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await APIInstitutKengashi.get();
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
            { text: <TextTranslate id="kengash" /> },
          ]}
        />
      </div>
      <div className="max-w-7xl mx-auto mb-3">
        {/* News heading */}
        <div className="my-1 md:my-5">
          <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269] text-center">
            <TextTranslate id="kengash" />
          </h2>
        </div>
        {data &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <div className="card sm:card-side bg-base-100 shadow-xl w-full mx-auto mb-5">
                  <figure className="w-full sm:w-1/2 lg:w-1/3">
                    <img className="w-full" src={item.rasm} alt="kotib" />
                  </figure>
                  <div className="card-body xl:ml-10">
                    <h2 className="card-title text-xl md:text-xl xl:text-2xl">
                      <TextTranslate id="kengashKotib" />
                    </h2>
                    <p className="flex flex-col justify-center">
                      <p className="font-semibold text-lg md:text-2xl xl:text-3xl">
                      {item && item[`fish_${Lang}`]}
                      </p>
                      <p className="card-info">
                        <p className="font-semibold md:text-lg xl:text-xl">
                          <TextTranslate id="kengashKotibBoglanish" />{" "}
                        </p>
                        <a
                          className="md:text-lg xl:text-xl"
                          href={`tel:${item.telefon}`}
                        >
                          <b>
                            <TextTranslate id="kengashKotibTelefon" />:{" "}
                          </b>
                          {item.telefon}
                        </a>
                        <br />
                        <a
                          className="md:text-lg xl:text-xl"
                          href={`mailto:${item.email}`}
                        >
                          <b>
                            <TextTranslate id="kengashKotibEmail" />:{" "}
                          </b>
                          {item.email}
                        </a>
                      </p>
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-center font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3">
                    <TextTranslate id="kengashKotibMaqsad" />
                  </h2>
                  <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-5" dangerouslySetInnerHTML={{ __html: item[`kengash_vazifasi_${Lang}`] }}>
                  </p>
                  <h2 className="text-center font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3">
                    <TextTranslate id="kengashKotibKengash" />
                  </h2>
                  <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3" dangerouslySetInnerHTML={{ __html: item[`kengash_haqida_${Lang}`] }}>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default InstitutKengashiCom;
