import React, { useState, useEffect } from "react";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import kotib from "../../assets/images/1.JPG";
import TextTranslate from "../TextTranslate";
import APIInstitutKengashi from "../../services/institutKengashi";

const InstitutKengashiCom = () => {
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

  // o'chirishni unutmaaa!!!!!!!!!!!!!
  console.log(data);

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
              <div>
                <div className="card sm:card-side bg-base-100 shadow-xl w-full mx-auto mb-5">
                  <figure className="w-full sm:w-1/2 lg:w-1/3">
                    <img className="w-full" src={kotib} alt="kotib" />
                  </figure>
                  <div className="card-body xl:ml-10">
                    <h2 className="card-title text-xl md:text-xl xl:text-2xl">
                      <TextTranslate id="kengashKotib" />
                    </h2>
                    <p className="flex flex-col justify-center">
                      <p className="font-semibold text-lg md:text-2xl xl:text-3xl">
                        <TextTranslate id="kengashKotibIsm" />
                      </p>
                      <p className="card-info">
                        <p className="font-semibold md:text-lg xl:text-xl">
                          <TextTranslate id="kengashKotibBoglanish" />{" "}
                        </p>
                        <Link
                          className="md:text-lg xl:text-xl"
                          to="tel:+998 91 684 49 73"
                        >
                          <b>
                            <TextTranslate id="kengashKotibTelefon" />:{" "}
                          </b>
                          +998 91 684 49 73
                        </Link>
                        <br />
                        <Link
                          className="md:text-lg xl:text-xl"
                          to="mailto:example@mail.ru"
                        >
                          <b>
                            <TextTranslate id="kengashKotibEmail" />:{" "}
                          </b>
                          example@mail.ru
                        </Link>
                      </p>
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-center font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3">
                    <TextTranslate id="kengashKotibMaqsad" />
                  </h2>
                  <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-5">
                    <TextTranslate id="kengashKotibMaqsadTavsif" />
                  </p>
                  <h2 className="text-center font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3">
                    <TextTranslate id="kengashKotibKengash" />
                  </h2>
                  <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
                    <TextTranslate id="kengashKotibTavsif1" />
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
