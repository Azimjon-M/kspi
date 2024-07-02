import React, { useEffect, useState } from "react";
import APIImthonOnlineKuzatish from "../../services/onlineKuzatish";
import { OverflowBox } from "./styled";
import { useSelector } from "react-redux";
import ReactPlayer from 'react-player';

const OnlineKuzatishCom = () => {
    const isLang = useSelector((state) => state.reducerLang.isLang);

    const [dataRekLav, setDataRekLav] = useState([]);
    const [dataRekNom, setDataRekNom] = useState([]);
    const [isActive, setisActive] = useState(0);

    const getDataRekLav = async () => {
        await APIImthonOnlineKuzatish.get()
            .then((res) => {
                console.log("Name: ", res.data);
                setDataRekLav(res.data);
                setisActive(res?.data[0]?.id);
            })
            .catch((err) => console.log(err));
    };
    const getDataRekLNom = async () => {
        await APIImthonOnlineKuzatish.getE()
            .then((res) => {setDataRekNom(res.data); console.log("Link", res.data)})
            .catch((err) => console.log(err));
    };

    const onClickLav = (id) => {
        setisActive(id);
    };

    useEffect(() => {
        getDataRekLav();
    }, []);
    useEffect(() => {
        getDataRekLNom();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center px-3 lg:pb-8 pb-4 py-4">
            <h1 className="text-[24px] font-bold my-4 text-[#004269]">
              Imthonlarni online kuzatish
            </h1>
            {/* Mobil */}
            <div className="w-full lg:hidden">
                {dataRekLav?.length !== 0 ? (
                    dataRekLav?.map((item) => (
                        <div
                            key={item.id}
                            className="collapse collapse-arrow my-1"
                        >
                            <input type="checkbox" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium bg-base-200">
                                {item[`name_${isLang}`]}
                            </div>
                            <div className="collapse-content border border-base-200">
                                {dataRekNom
                                    ?.filter(
                                        (nomzod) =>
                                            nomzod.efirname_id === item.id
                                    )
                                    .map((nomzod) => (
                                        <div
                                            key={nomzod.id}
                                            className="flex flex-col my-2"
                                        >
                                            <div className="flex justify-center">
                                                <img
                                                    className="rounded-full border w-[120px] h-[120px]"
                                                    src={nomzod.rasm}
                                                    alt="rahbar rasmi"
                                                />
                                            </div>
                                            <h1>
                                                <b>Lavozim: </b> {nomzod[`lavozim_${isLang}`]}
                                            </h1>
                                            <h1><b>F.I.O: </b> {nomzod[`fish_${isLang}`]}</h1>
                                            <h1><b>Unvon: </b> {nomzod[`unvon_${isLang}`]}</h1>
                                            <h1>
                                                <b>Qabul soatlari: </b>
                                                {
                                                    nomzod[
                                                        `qabul_soati_${isLang}`
                                                    ]
                                                }
                                            </h1>
                                            <h1>
                                                <b>Biografya: </b> {nomzod[`biografiya_${isLang}`]}
                                            </h1>
                                            <h1><b>Telegram: </b> {nomzod.tg_username}</h1>
                                            <h1><b>Tel: </b> +{nomzod.telefon_nomer}</h1>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-[18px] font-medium text-red-600">
                        Malumot kiritilmagan!
                    </div>
                )}
            </div>
            {/* /Mobil */}

            {/* Desctop */}
            <div className="hidden lg:flex lg:w-full lg:items-center lg:justify-center lg:gap-4 xl:gap-8 ">
                <div className="p-1 border-2 border-[#004269] rounded-md">
                    <OverflowBox className="w-[380px] h-[500px] py-4 ps-8 pe-4">
                        {dataRekLav?.length !== 0 ? (
                            dataRekLav?.map((item) => (
                                <h1
                                    key={item.id}
                                    onClick={() => onClickLav(item.id)}
                                    className={`${
                                        item.id === isActive &&
                                        "text-[#004259] before:w-[8px] before:h-[8px] before:absolute before:top-[7px] before:left-[-18px] before:border-t-2 before:border-r-2 before:border-[#004269] before:rotate-[45deg] underline underline-offset-4 decoration-2 decoration-[#004269]"
                                    } text-[18px] cursor-pointer relative active:translate-x-[2px] active:translate-y-[2px] mt-1 select-none`}
                                >
                                    {item[`name_${isLang}`]}
                                </h1>
                            ))
                        ) : (
                            <div className="text-[18px] font-medium text-red-600">
                                Malumot kiritilmagan!
                            </div>
                        )}
                    </OverflowBox>
                </div>
                <div className="shadow-xl border  rounded-md">
                    <OverflowBox className="w-[550px] h-[508px] px-4 py-2">
                        {dataRekNom?.length !== 0 ? (
                            dataRekNom
                                ?.filter(
                                    (item) => item.efirname_id === isActive
                                )
                                .map((item) => (
                                  // <ReactPlayer url="http://45.150.24.134/" controls={true} playing={true} />
                                  // <p align="center"><iframe width="560" height="315" src={item.link} frameborder="0" allowfullscreen></iframe></p>
                                  <iframe key={item.id} width="560" height="315" src="http://45.150.24.134/" frameborder="0" allowfullscreen/>
                                ))
                        ) : (
                            <div className="text-[18px] font-medium text-red-600">
                                Malumot kiritilmagan!
                            </div>
                        )}
                    </OverflowBox>
                </div>
            </div>
            {/* /Desctop */}
        </div>
    );
};

export default OnlineKuzatishCom;
