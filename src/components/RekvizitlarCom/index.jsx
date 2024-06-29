import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TextTranslate from "../TextTranslate";
import Breadcrumb from "../Breadcrumb";
import APIInstitutRekviziti from "../../services/institutRekviziti";
import APIBankRekviziti from "../../services/bankRekviziti";

const RekvizitlarCom = () => {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [institutData, setInstitutData] = useState([]);
  const [bankData, setBankData] = useState([]);

  useEffect(() => {
    const getInstitutData = async () => {
      try {
        const response = await APIInstitutRekviziti.get();
        setInstitutData(response.data);
      } catch (error) {
        console.error("Xatolik yuz berdi", error);
      }
    };
    getInstitutData();

    const getBankData = async () => {
      try {
        const response = await APIBankRekviziti.get();
        setBankData(response.data);
      } catch (error) {
        console.error("Xatolik yuz berdi", error);
      }
    };
    getBankData();
  }, []);

  return (
    <div className="px-5 py-3 md:px-10 mt-10">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="rekvizitlar" /> },
          ]}
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="my-1 md:my-3">
          <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269] text-center">
            <TextTranslate id="rekvizitlar" />
          </h2>
        </div>
        <table border="1" className="table mx-auto" cols="true">
          <thead>
            <tr className="bg-[#ddd] text-center text-xl text-[#004269]">
              <th colSpan="2">
                <TextTranslate id="nom" />
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Institut rekviziti */}
            {institutData &&
              institutData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="md:text-lg font-semibold">
                      {item && item[`name_${Lang}`]}:
                    </td>
                    <td className="md:text-lg font-semibold">
                      {item && item[`qiymat_${Lang}`]}
                    </td>
                  </tr>
                );
              })}

            {/* Bank rekviziti */}
            <tr className="bg-[#ddd] text-center text-xl text-[#004269]">
              <th colSpan="2">
                <TextTranslate id="rekvizitlarBankRekvizitlari" />
              </th>
            </tr>
            {bankData &&
              bankData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="md:text-lg font-semibold">
                      {item && item[`name_${Lang}`]}:
                    </td>
                    <td className="md:text-lg font-semibold">
                      {item && item[`qiymat_${Lang}`]}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RekvizitlarCom;
