import React, { useEffect, useState } from "react";
import APITuzilmaBolim from "../../services/tMarkaz";
import { OverflowBox } from "../RektoratCom/styled";
import { useSelector } from "react-redux";

const Markazlar = () => {
    const isLang = useSelector((state) => state.reducerLang.isLang);

    const [dataMarLav, setDataMarLav] = useState([]);
    const [dataMarNom, setDataMarNom] = useState([]);
    const [dataMarHodim, setDataMarHodim] = useState([]);
    const [isActive, setisActive] = useState(0);

    const getDataMarLav = async () => {
        await APITuzilmaBolim.get()
            .then((res) => {
                setDataMarLav(res.data);
                setisActive(res?.data[0]?.id);
            })
            .catch((err) => console.log(err));
    };
    const getDataRekLNom = async () => {
        await APITuzilmaBolim.getR()
            .then((res) => setDataMarNom(res.data))
            .catch((err) => console.log(err));
    };
    const getDataRekLHodim = async () => {
        await APITuzilmaBolim.getH()
            .then((res) => setDataMarHodim(res.data))
            .catch((err) => console.log(err));
    };

    const onClickLav = (id) => {
        setisActive(id);
    };

    useEffect(() => {
        getDataMarLav();
    }, []);
    useEffect(() => {
        getDataRekLNom();
    }, []);
    useEffect(() => {
        getDataRekLHodim();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center px-3 lg:pb-8 pb-4 py-4">
            <h1 className="text-[24px] font-bold my-4 text-[#004269]">
                Markazlar
            </h1>
            {/* Mobil */}
            <div className="w-full lg:hidden">
                {dataMarLav?.length !== 0 ? (
                    dataMarLav?.map((item) => (
                        <div
                            key={item.id}
                            className="collapse collapse-arrow my-1"
                        >
                            <input type="checkbox" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium bg-base-200">
                                {item[`name_${isLang}`]}
                            </div>
                            <div className="collapse-content border border-base-200">
                                {dataMarNom
                                    ?.filter(
                                        (nomzod) =>
                                            nomzod.markaz_id === item.id
                                    )
                                    .map((nomzod) => (
                                        <div
                                            key={nomzod.id}
                                            className="flex flex-col my-2"
                                        >
                                            <div className="flex justify-center">
                                                <img
                                                    className="rounded-full border object-cover w-[120px] h-[120px]"
                                                    src={nomzod.rasm}
                                                    alt="rahbar rasmi"
                                                />
                                            </div>
                                            <h1>
                                                <b>Lavozim: </b>{" "}
                                                {nomzod[`lavozim_${isLang}`]}
                                            </h1>
                                            <h1>
                                                <b>F.I.O: </b>{" "}
                                                {nomzod[`fish_${isLang}`]}
                                            </h1>
                                            <h1>
                                                <b>Unvon: </b>{" "}
                                                {nomzod[`unvon_${isLang}`]}
                                            </h1>
                                            <h1>
                                                <b>Qabul soatlari: </b>
                                                {
                                                    nomzod[
                                                        `qabul_soati_${isLang}`
                                                    ]
                                                }
                                            </h1>
                                            <h1>
                                                <b>Biografya: </b>{" "}
                                                {nomzod[`biografiya_${isLang}`]}
                                            </h1>
                                            <h1>
                                                <b>Telegram: </b>{" "}
                                                {nomzod.tg_username}
                                            </h1>
                                            <h1>
                                                <b>Tel: </b> +
                                                {nomzod.telefon_nomer}
                                            </h1>
                                        </div>
                                    ))}
                                {dataMarHodim?.length !== 0 && (
                                    <h1 className="text-center font-bold">
                                        Hodimlar:{" "}
                                    </h1>
                                )}
                                <div className="flex flex-wrap justify-center gap-2 w-full h-auto my-4">
                                    {dataMarHodim
                                        ?.filter(
                                            (hodim) =>
                                                hodim.markaz_id === item.id
                                        )
                                        .map((hodim) => (
                                            <div
                                                key={hodim.id}
                                                className="w-[125px] h-auto border shadow-md overflow-hidden rounded-md p-1"
                                            >
                                                <div>
                                                    <img
                                                        src={hodim.rasm}
                                                        alt="Hodim rasmi"
                                                    />
                                                </div>
                                                <h1 className="text-center font-medium text-[#004369] text-[13px] mt-1">
                                                    {hodim[`fish_${isLang}`]}{" "}
                                                    skdaiokdsa aiojdsao isd
                                                    sajoi
                                                </h1>
                                            </div>
                                        ))}
                                </div>
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
                        {dataMarLav?.length !== 0 ? (
                            dataMarLav?.map((item) => (
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
                <div className="p-1 shadow-xl border rounded-md">
                    <OverflowBox className="w-[550px] xl:w-[650px] 2xl:w-[800px] h-[508px] px-4 py-2">
                        {dataMarNom?.length !== 0 ? (
                            dataMarNom
                                ?.filter((item) => item.markaz_id === isActive)
                                .map((nomzod) => (
                                    <div
                                        key={nomzod.id}
                                        className="flex flex-col my-2"
                                    >
                                        <div className="flex gap-4">
                                            <div className="min-w-[200px] h-[200px] flex justify-start border rounded-md overflow-hidden">
                                                <img
                                                    className="w-full object-cover h-auto"
                                                    src={nomzod.rasm}
                                                    alt="rahbar rasmi"
                                                />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-[22px] text-[#004369]">
                                                    {
                                                        nomzod[
                                                            `lavozim_${isLang}`
                                                        ]
                                                    }
                                                </h1>
                                                <h1 className="font-medium text-[18px]">
                                                    {nomzod[`fish_${isLang}`]}
                                                </h1>
                                                <h1 className="font-medium text-[18px]">
                                                    {nomzod[`unvon_${isLang}`]}
                                                </h1>
                                                <h1 className="font-medium">
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
                                                {nomzod[`biografiya_${isLang}`]}
                                            </h1>
                                            <h1>
                                                <b>Telegram: </b>
                                                {nomzod.tg_username}
                                            </h1>
                                            <h1>
                                                <b>Tel: </b>+
                                                {nomzod.telefon_nomer}
                                            </h1>
                                        </div>
                                    </div>
                                ))
                        ) : (
                            <div className="text-[18px] font-medium text-red-600">
                                Malumot kiritilmagan!
                            </div>
                        )}
                        {dataMarHodim?.length !== 0 && (
                            <h1 className="text-center font-bold">
                                Hodimlar:{" "}
                            </h1>
                        )}
                        <div className="flex flex-wrap justify-start gap-2 w-full h-auto my-4">
                            {dataMarHodim
                                ?.filter((item) => item.markaz_id === isActive)
                                .map((item) => (
                                    <div
                                        key={item.id}
                                        className="w-[150px] h-auto border shadow-md overflow-hidden rounded-md p-1"
                                    >
                                        <div>
                                            <img
                                                src={item.rasm}
                                                alt="Hodim rasmi"
                                            />
                                        </div>
                                        <h1 className="text-center font-medium text-[#004369]">
                                            {item[`fish_${isLang}`]} skdaiokdsa
                                            aiojdsao isd sajoi
                                        </h1>
                                    </div>
                                ))}
                        </div>
                    </OverflowBox>
                </div>
            </div>
            {/* /Desctop */}
        </div>
    );
};

export default Markazlar;
