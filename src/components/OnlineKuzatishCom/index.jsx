import React, { useEffect, useState } from "react";
import APIImthonOnlineKuzatish from "../../services/onlineKuzatish";
import { useSelector } from "react-redux";

const OnlineKuzatishCom = () => {
    const isLang = useSelector((state) => state.reducerLang.isLang);

    const [dataRekLav, setDataRekLav] = useState([]);
    const [dataRekNom, setDataRekNom] = useState([]);

    const getDataRekLav = async () => {
        await APIImthonOnlineKuzatish.get()
            .then((res) => {
                console.log("Name: ", res.data);
                setDataRekLav(res.data);
            })
            .catch((err) => console.log(err));
    };
    const getDataRekLNom = async () => {
        await APIImthonOnlineKuzatish.getE()
            .then((res) => {
                setDataRekNom(res.data);
                console.log("Link", res.data);
            })
            .catch((err) => console.log(err));
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
            <div className="w-full p-2">
                {dataRekLav?.length !== 0 ? (
                    dataRekLav?.map((items) => (
                        <div
                            key={items.id}
                            className="collapse collapse-arrow my-1"
                        >
                            <input type="checkbox" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium bg-base-200">
                                {items[`name_${isLang}`]}
                            </div>
                            <div className="collapse-content border border-base-200">
                                {dataRekNom
                                    ?.filter(
                                        (item) =>
                                            item.efirname_id === items.id
                                    )
                                    .map((item) => (
                                        <iframe
                                            title={item.name_uz}
                                            key={item.id}
                                            className="w-full h-[calc(auto+150px)] costom-noOverflow"
                                            src="http://45.150.24.134/Jismoniy%20d3.html"
                                            frameborder="0"
                                            allowfullscreen
                                        />
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
        </div>
    );
};

export default OnlineKuzatishCom;