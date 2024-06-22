import React, { useEffect, useState } from "react";
import APITuzilmaFakultet from "../../services/tFakultet";
import { OverflowBox } from "./styled";

const Fakultet = () => {
    const [dataFakLav, setDataFakLav] = useState([]);
    const [dataFakNom, setDataFakNom] = useState([]);
    const [isActive, setisActive] = useState(0);

    const getDataFakLav = async () => {
        await APITuzilmaFakultet.get()
            .then((res) => {
                setDataFakLav(res.data);
                setisActive(res?.data[0]?.id);
            })
            .catch((err) => console.log(err));
    };
    const getDataRekLNom = async () => {
        await APITuzilmaFakultet.getR()
            .then((res) => setDataFakNom(res.data))
            .catch((err) => console.log(err));
    };

    const onClickLav = (id) => {
        setisActive(id);
    };

    useEffect(() => {
        getDataFakLav();
    }, []);
    useEffect(() => {
        getDataRekLNom();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center px-3">
            <h1 className="text-[22px] font-medium my-4">Fakultet</h1>
            {/* Mobil */}
            <div className="w-full lg:hidden">
                {dataFakLav?.length !== 0 ? (
                    dataFakLav?.map((item) => (
                        <div
                            key={item.id}
                            className="collapse collapse-arrow my-1"
                        >
                            <input type="checkbox" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium bg-base-200">
                                {item.name_uz}
                            </div>
                            <div className="collapse-content border border-base-200">
                                {dataFakNom
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
                                                    className="rounded-full border w-[120px] h-[120px]"
                                                    src={nomzod.rasm}
                                                    alt="rahbar rasmi"
                                                />
                                            </div>
                                            <h1>{nomzod.lavozim_uz}</h1>
                                            <h1>{nomzod.fish_uz}</h1>
                                            <h1>{nomzod.unvon_uz}</h1>
                                            <h1>{nomzod.qabul_soati_uz}</h1>
                                            <h1>{nomzod.biografiya_ru}</h1>
                                            <h1>{nomzod.tg_username}</h1>
                                            <h1>+{nomzod.telefon_nomer}</h1>
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
                <div className="p-1 border-2 border-blue-500 bg-blue-50 rounded-md">
                    <OverflowBox className="w-[450px] h-[500px] p-4">
                        {dataFakLav?.length !== 0 ? (
                            dataFakLav?.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => onClickLav(item.id)}
                                    className={`${
                                        item.id === isActive && "bg-blue-400"
                                    } w-full btn btn-ghost bg-gray-100 border hover:bg-blue-400 border-gray-400 shadow-md my-1 font-medium`}
                                >
                                    {item.name_uz}
                                </button>
                            ))
                        ) : (
                            <div className="text-[18px] font-medium text-red-600">
                                Malumot kiritilmagan!
                            </div>
                        )}
                    </OverflowBox>
                </div>
                <div className="p-1 border-1 border-gray-50 bg-blue-50 shadow-lg rounded-md">
                    <OverflowBox className="w-[500px] h-[500px] px-4 py-2">
                        {dataFakNom?.length !== 0 ? (
                            dataFakNom
                                ?.filter(
                                    (item) => item.fakultet_id === isActive
                                )
                                .map((nomzod) => (
                                    <div
                                        key={nomzod.id}
                                        className="flex flex-col my-2"
                                    >
                                        <div className="flex justify-start">
                                            <img
                                                className="rounded-md border w-[200px] h-[200px]"
                                                src={nomzod.rasm}
                                                alt="rahbar rasmi"
                                            />
                                        </div>
                                        <h1 className="font-semibold text-[22px] text-[#004369]">
                                            {nomzod.lavozim_uz}
                                        </h1>
                                        <h1 className="font-medium text-[18px]">
                                            {nomzod.fish_uz}
                                        </h1>
                                        <h1 className="font-medium text-[18px]">
                                            {nomzod.unvon_uz}
                                        </h1>
                                        <h1 className="font-medium text-[18px]">
                                            {nomzod.qabul_soati_uz}
                                        </h1>
                                        <h1 className="font-medium text-[18px]">
                                            {nomzod.biografiya_ru}
                                        </h1>
                                        <h1>
                                            <b>Telegram: </b>
                                            {nomzod.tg_username}
                                        </h1>
                                        <h1>
                                            <b>Tel: </b>+{nomzod.telefon_nomer}
                                        </h1>
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

export default Fakultet;
