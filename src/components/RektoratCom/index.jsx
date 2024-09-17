import React, { useEffect, useState } from "react";
import APITuzilmaRectorat from "../../services/tRektorat";
import { OverflowBox } from "./styled";
import { useSelector } from "react-redux";
import TextTranslate from "../../components/TextTranslate";

const Rektorat = () => {
    const isLang = useSelector((state) => state.reducerLang.isLang);

    const [dataRekLav, setDataRekLav] = useState([]);
    const [dataRekNom, setDataRekNom] = useState([]);
    const [isActive, setisActive] = useState(0);

    const getDataRekLav = async () => {
        await APITuzilmaRectorat.get()
            .then((res) => {
                setDataRekLav(res.data);
                setisActive(res?.data[0]?.id);
            })
            .catch((err) => console.log(err));
    };
    const getDataRekLNom = async () => {
        await APITuzilmaRectorat.getN()
            .then((res) => setDataRekNom(res.data))
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
                Rektorat
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
                                            nomzod.rektorat_id === item.id
                                    )
                                    .map((nomzod) => (
                                        <div
                                            key={nomzod.id}
                                            className="flex flex-col my-2"
                                        >
                                            <div className="flex justify-center">
                                                <img
                                                    className="rounded-full border w-[120px] object-cover h-[120px]"
                                                    src={nomzod.rasm}
                                                    alt="rahbar rasmi"
                                                />
                                            </div>
                                            <h1>
                                                <b>
                                                    <TextTranslate id="tuzLav" />
                                                    :
                                                </b>
                                                {` `}
                                                {nomzod[`lavozim_${isLang}`]}
                                            </h1>
                                            <h1>
                                                <b>
                                                    <TextTranslate id="tuzFio" />
                                                    :
                                                </b>
                                                {` `}
                                                {nomzod[`fish_${isLang}`]}
                                            </h1>
                                            <h1>
                                                <b>
                                                    <TextTranslate id="tuzUnvon" />
                                                    :
                                                </b>
                                                {` `}
                                                {nomzod[`unvon_${isLang}`]}
                                            </h1>
                                            <h1>
                                                <b>
                                                    <TextTranslate id="tuzQabul" />
                                                    :
                                                </b>
                                                {` `}
                                                {
                                                    nomzod[
                                                        `qabul_soati_${isLang}`
                                                    ]
                                                }
                                            </h1>
                                            <h1>
                                                <b>
                                                    <TextTranslate id="tuzBio" />
                                                    :
                                                </b>
                                                {` `}
                                                {nomzod[`biografiya_${isLang}`]}
                                            </h1>
                                            <h1>
                                                <b>
                                                    <TextTranslate id="tuzTg" />
                                                    :
                                                </b>
                                                {` `}
                                                {nomzod.tg_username}
                                            </h1>
                                            <h1>
                                                <b>
                                                    <TextTranslate id="tuzTel" />
                                                    :
                                                </b>
                                                {` `}+{nomzod.telefon_nomer}
                                            </h1>
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
                    <OverflowBox className="w-[380px] xl:w-[420px] 2xl:w-[500px] h-[500px] py-4 ps-8 pe-4">
                        {dataRekLav?.length !== 0 ? (
                            dataRekLav?.map((item) => (
                                <h1
                                    key={item.id}
                                    onClick={() => onClickLav(item.id)}
                                    className={`${
                                        item.id === isActive
                                            ? "text-[#004259] font-semibold before:w-[8px] before:h-[8px] before:absolute before:top-[7px] before:left-[-18px] before:border-t-2 before:border-r-2 before:border-[#004269] before:rotate-[45deg] underline underline-offset-4 decoration-2 decoration-[#004269]"
                                            : "text-gray-600"
                                    } text-[18px]  cursor-pointer relative active:translate-x-[2px] active:translate-y-[2px] mt-1 select-none`}
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
                    <OverflowBox className="w-[550px] xl:w-[650px] 2xl:w-[800px] h-[508px] px-4 py-2">
                        {dataRekNom?.length !== 0 ? (
                            dataRekNom
                                ?.filter(
                                    (item) => item.rektorat_id === isActive
                                )
                                .map((nomzod) => (
                                    <div key={nomzod.id} className="my-2">
                                        <div className="flex gap-4">
                                            <div className="w-[40%] h-[200px] flex justify-start rounded-md overflow-hidden">
                                                <img
                                                    className="w-full h-full object-cover"
                                                    src={nomzod.rasm}
                                                    alt="rahbar rasmi"
                                                />
                                            </div>
                                            <div className="w-[60%]">
                                                <h1 className="font-semibold text-[22px] text-[#004369]">
                                                    {
                                                        nomzod[
                                                            `lavozim_${isLang}`
                                                        ]
                                                    }
                                                </h1>
                                                <h1 className="font-medium text-[18px]">
                                                    <b>
                                                        <TextTranslate id="tuzFio" />
                                                        :
                                                    </b>
                                                    {` `}
                                                    {nomzod[`fish_${isLang}`]}
                                                </h1>
                                                <h1 className="font-medium text-[18px]">
                                                    <b>
                                                        <TextTranslate id="tuzUnvon" />
                                                        :
                                                    </b>
                                                    {` `}
                                                    {nomzod[`unvon_${isLang}`]}
                                                </h1>
                                                <h1 className="font-medium">
                                                    <b>
                                                        <TextTranslate id="tuzQabul" />
                                                        :
                                                    </b>
                                                    {` `}
                                                    {
                                                        nomzod[
                                                            `qabul_soati_${isLang}`
                                                        ]
                                                    }
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <h1 className="font-medium">
                                                <b>
                                                    <TextTranslate id="tuzBio" />
                                                    :
                                                </b>
                                                {` `}
                                                {nomzod[`biografiya_${isLang}`]}
                                            </h1>
                                            <h1>
                                                <b>
                                                    <TextTranslate id="tuzTg" />
                                                    :
                                                </b>
                                                {` `}
                                                {nomzod.tg_username}
                                            </h1>
                                            <h1>
                                                <b>
                                                    <TextTranslate id="tuzTel" />
                                                    :
                                                </b>
                                                {` `}+{nomzod.telefon_nomer}
                                            </h1>
                                        </div>
                                    </div>
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

export default Rektorat;
