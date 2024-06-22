import React from "react";
import TextTranslate from "../TextTranslate";
import Breadcrumb from "../Breadcrumb";

const RekvizitlarCom = () => {
  return (
    <div className="px-5 py-3 md:px-10 mt-10">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[{ text: <TextTranslate id="boshSahifa" />, link: "/" }, { text: <TextTranslate id="rekvizitlar" /> }]}
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
              <th colSpan="2"><TextTranslate id="nom" /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="md:text-lg font-semibold"><TextTranslate id="rekvizitlarInn" />:</td>
              <td className="md:text-lg font-semibold">200131171</td>
            </tr>
            <tr>
              <td className="md:text-lg font-semibold"><TextTranslate id="rekvizitlarOkonx" />:</td>
              <td className="md:text-lg font-semibold">92110</td>
            </tr>
            <tr>
              <td className="md:text-lg font-semibold"><TextTranslate id="rekvizitlarShxr" />:</td>
              <td className="md:text-lg font-semibold">
                100010860304057094100079001
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <p className="md:text-lg font-semibold">
                <TextTranslate id="rekvizitlarSana" />
                </p>
                <p className="md:text-lg font-semibold">
                <TextTranslate id="rekvizitlarManzil" />
                </p>
                <p className="md:text-lg font-semibold"><TextTranslate id="rekvizitlarTel" />: 73-542-38-38</p>
                <p className="md:text-lg font-semibold"><TextTranslate id="rekvizitlarFax" />: 73-542-02-57</p>
              </td>
            </tr>
            <tr className="bg-[#ddd] text-center text-xl text-[#004269]">
              <th colSpan="2"><TextTranslate id="rekvizitlarBankRekvizitlari" /></th>
            </tr>
            <tr>
              <td colSpan="2">
                <p className="md:text-lg font-semibold">
                <TextTranslate id="rekvizitlarGazna" />
                </p>
                <p className="md:text-lg font-semibold">
                <TextTranslate id="rekvizitlarHr" /> 23402000300100001010
                </p>
                <p className="md:text-lg font-semibold"><TextTranslate id="rekvizitlarInn" />: 201122919</p>
                <p className="md:text-lg font-semibold">
                <TextTranslate id="rekvizitlarMarkaziyBank" />
                </p>
                <p className="md:text-lg font-semibold"><TextTranslate id="rekvizitlarMfo" /> 00014</p>
                <p className="md:text-lg font-semibold">
                <TextTranslate id="nom" />
                </p>
                <p className="md:text-lg font-semibold">
                <TextTranslate id="rekvizitlarInn" />: 200131171 <TextTranslate id="rekvizitlarIfut" />: 85420
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RekvizitlarCom;
