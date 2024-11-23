import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIElon from "../../services/elon";
import { useSelector } from "react-redux";
import TextTranslate from "../TextTranslate";

function Announcements() {
    const Lang = useSelector((state) => state.reducerLang.isLang);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await APIElon.get();
                const sortedData = res.data.sort((a, b) => {
                    return new Date(b.sana) - new Date(a.sana);
                });
                setData(sortedData);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const formatDate = (dateString, Lang) => {
        const months = {
            uz: [
                "Yanvar",
                "Fevral",
                "Mart",
                "Aprel",
                "May",
                "Iyun",
                "Iyul",
                "Avgust",
                "Sentyabr",
                "Oktyabr",
                "Noyabr",
                "Dekabr",
            ],
            ru: [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь",
            ],
            en: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
        };

        const date = new Date(dateString);
        const month = months[Lang][date.getMonth()];

        return `${month}`;
    };

    return (
        <div className="max-w-7xl mx-auto pb-20">
            <h1 className="text-xl md:text-4xl font-bold text-center text-[#004269]">
                <TextTranslate id="elonTitle" />
            </h1>
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 px-5 md:px-10 lg:px-5 xl:px-0 gap-6 py-20">
                {data &&
                    data.slice(0, 4).map((item) => {
                        return (
                            <Link
                                key={item.id}
                                to={`/elonBatafsil/${item.id}`}
                                className="flex md:block md:h-[580px] shadow-md hover:shadow-xl group overflow-hidden rounded-lg"
                            >
                                <div className="h-1/2 hidden md:block">
                                    <img
                                        src={item.rasm.replace(
                                            /^http:\/\//i,
                                            "https://"
                                        )}
                                        className="h-full w-full object-center group-hover:scale-105 duration-300"
                                        alt=""
                                    />
                                </div>
                                <div className="flex items-center bg-slate-600 md:bg-inherit">
                                    <div className="md:inline-block bg-slate-600 px-2 md:px-4 py-2 text-slate-100 text-center uppercase relative md:-top-9 md:ml-6">
                                        <p className="text-base">
                                            {formatDate(
                                                item.boshlanish_vaqti,
                                                Lang
                                            )}
                                        </p>
                                        <p className="text-2xl font-bold">
                                            {item.boshlanish_vaqti.slice(8, 10)}
                                        </p>
                                    </div>
                                </div>
                                <div className="px-3 py-3 md:px-6 md:py-0">
                                    <span className="text-base uppercase font-semibold text-red-800">
                                        {item && item[`field_${Lang}`]}
                                    </span>
                                    <h2 className="text-lg md:text-xl font-bold text-slate-600 line-clamp-4 md:my-2 group-hover:text-blue-500">
                                        {item && item[`title_${Lang}`]}
                                    </h2>
                                    <span className="text-lg font-extralight mt-5">
                                        {item.boshlanish_vaqti.slice(11, 16)}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
            </div>
            <div className="text-center">
                <Link
                    to="/barchaElonlar"
                    className="text-lg md:text-2xl bg-slate-100 text-cyan-900 font-bold active:border border-slate-100 px-10 md:px-28 py-2 md:py-4 rounded-xl"
                >
                    <TextTranslate id="barchaElonlarBtn" />
                </Link>
            </div>
        </div>
    );
}

export default Announcements;
