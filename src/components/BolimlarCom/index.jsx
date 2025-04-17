import React, { useEffect, useState } from "react";
import APITuzilmaBolim from "../../services/tBolim";
import { useSelector } from "react-redux";
import TextTranslate from "../TextTranslate";

const Bolimlar = () => {
  const isLang = useSelector((state) => state.reducerLang.isLang);

  const [dataBolLav, setDataBolLav] = useState([]);
  const [dataBolNom, setDataBolNom] = useState([]);
  const [dataBolHodim, setDataBolHodim] = useState([]);

  const getDataBolLav = async () => {
    await APITuzilmaBolim.get()
      .then((res) => {
        setDataBolLav(res.data);
      })
      .catch((err) => console.log(err));
  };
  const getDataRekLNom = async () => {
    await APITuzilmaBolim.getR()
      .then((res) => setDataBolNom(res.data))
      .catch((err) => console.log(err));
  };
  const getDataRekLHodim = async () => {
    await APITuzilmaBolim.getH()
      .then((res) => setDataBolHodim(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDataBolLav();
  }, []);
  useEffect(() => {
    getDataRekLNom();
  }, []);
  useEffect(() => {
    getDataRekLHodim();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-3 lg:pb-8 pb-4 py-4">
      <h1 className="text-[24px] font-bold my-4 text-[#004269]">Bo'limlar</h1>
      {/* Mobil */}
      <div className="w-full lg:hidden">
        {dataBolLav?.map((item) => (
          <div key={item.id} className="collapse collapse-arrow my-1">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium bg-base-200">
              {item[`name_${isLang}`]}
            </div>
            <div className="collapse-content border border-base-200">
              {dataBolNom
                ?.filter((nomzod) => nomzod.bolim_id === item.id)
                .map((nomzod) => (
                  <div key={nomzod.id} className="flex flex-col my-2">
                    <div className="flex justify-center">
                      <img
                        className="rounded-full border w-[120px] object-cover h-[120px]"
                        src={nomzod.rasm}
                        alt="rahbar rasmi"
                      />
                    </div>
                    <h1>
                      <b>
                        <TextTranslate id="tuzLav" />:
                      </b>
                      {` `}
                      {nomzod[`lavozim_${isLang}`]}
                    </h1>
                    <h1>
                      <b>
                        <TextTranslate id="tuzFio" />:
                      </b>
                      {` `}
                      {nomzod[`fish_${isLang}`]}
                    </h1>
                    <h1>
                      <b>
                        <TextTranslate id="tuzUnvon" />:
                      </b>
                      {` `}
                      {nomzod[`unvon_${isLang}`]}
                    </h1>
                    <h1>
                      <b>
                        <TextTranslate id="tuzQabul" />:
                      </b>
                      {` `}
                      {nomzod[`qabul_soati_${isLang}`]}
                    </h1>
                    <h1>
                      <b>
                        <TextTranslate id="tuzBio" />:
                      </b>
                      {` `}
                      {nomzod[`biografiya_${isLang}`]}
                    </h1>
                    <h1>
                      <b>
                        <TextTranslate id="tuzTg" />:
                      </b>
                      {` `}
                      {nomzod.tg_username}
                    </h1>
                    <h1>
                      <b>
                        <TextTranslate id="tuzTel" />:
                      </b>
                      {` `}+{nomzod.telefon_nomer}
                    </h1>
                  </div>
                ))}
              {dataBolHodim?.length !== 0 && (
                <h1 className="text-center font-bold">Hodimlar: </h1>
              )}
              <div className="flex flex-wrap justify-center gap-2 w-full h-auto my-4">
                {dataBolHodim
                  ?.filter((hodim) => hodim.bolim_id === item.id)
                  .map((hodim) => (
                    <div
                      key={hodim.id}
                      className="w-[125px] h-auto border shadow-md overflow-hidden rounded-md p-1"
                    >
                      <div>
                        <img src={hodim.rasm} alt="Hodim rasmi" />
                      </div>
                      <h1 className="text-center font-medium text-[#004369] text-[13px] mt-1">
                        {hodim[`fish_${isLang}`]}
                      </h1>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bolimlar;
