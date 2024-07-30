import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../Breadcrumb";
import APIAPIInstitutHaqida from "../../services/institutHaqida";
import TextTranslate from "../TextTranslate";

const InstitutHaqidaCom = () => {
    const Lang = useSelector((state) => state.reducerLang.isLang);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await APIAPIInstitutHaqida.get();
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

    return (
        <div>
            <div className="border-b-2 border-[#004269] block w-full px-5 md:px-10">
                <Breadcrumb
                    steps={[
                        { text: <TextTranslate id="boshSahifa" />, link: "/" },
                        { text: <TextTranslate id="navDropInstitut_2" /> },
                    ]}
                />
            </div>
            {data &&
                data.map((item) => {
                    return (
                        <div key={item.id} className="max-w-7xl mx-auto my-20">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold font-source text-center text-[#004269]">
                                    {item && item[`title_${Lang}`]}
                                </h1>
                            </div>
                            <div className="px-2 md:px-10 xl:px-0">
                                <p className="text-xl md:text-[2rem] font-light font_source md:leading-[3.5rem] text-center my-10">
                                    {item && item[`body_${Lang}`]}
                                </p>
                            </div>
                            <div className="px-4 xl:px-0 md:py-20">
                                <img
                                    src={item.rasm}
                                    className="w-full max-h-[547px] shadow-2xl rounded-xl opacity-75"
                                    alt=""
                                />
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default InstitutHaqidaCom;
