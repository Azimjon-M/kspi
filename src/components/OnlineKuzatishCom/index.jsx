import React, { useEffect, useState, useRef } from "react";
// import APIImthonOnlineKuzatish from "../../services/onlineKuzatish";
import { useSelector } from "react-redux";

const OnlineKuzatishCom = () => {
    const isLang = useSelector((state) => state.reducerLang.isLang);

    // const [dataRekLav, setDataRekLav] = useState([]);
    // const [dataRekNom, setDataRekNom] = useState([]);

    // const getDataRekLav = async () => {
    //     await APIImthonOnlineKuzatish.get()
    //         .then((res) => {
    //             console.log("Name: ", res.data);
    //             setDataRekLav(res.data);
    //         })
    //         .catch((err) => console.log(err));
    // };
    // const getDataRekLNom = async () => {
    //     await APIImthonOnlineKuzatish.getE()
    //         .then((res) => {
    //             setDataRekNom(res.data);
    //             console.log("Link", res.data);
    //         })
    //         .catch((err) => console.log(err));
    // };

    // useEffect(() => {
    //     getDataRekLav();
    // }, []);
    // useEffect(() => {
    //     getDataRekLNom();
    // }, []);

    let dataLav = [
        {
            id: 1,
            name_uz: "Bilol uz",
            name_ru: "Bilol uz",
            name_en: "Bilol uz",
        },
        {
            id: 2,
            name_uz: "Hilol uz",
            name_ru: "Hilol uz",
            name_en: "Hilol uz",
        },
    ];

    let dataLink = [
        {
            id: 1,
            efirname_id: 1,
            name_uz: "Halol",
            name_ru: "Halol",
            name_en: "Halol",
            link: "http://45.150.24.134/Jismoniy%20d3.html",
        },
        {
            id: 2,
            efirname_id: 1,
            name_uz: "Halol",
            name_ru: "Halol",
            name_en: "Halol",
            link: "http://45.150.24.134/Jismoniy%20d3.html",
        },
        {
            id: 3,
            efirname_id: 1,
            name_uz: "Halol",
            name_ru: "Halol",
            name_en: "Halol",
            link: "http://45.150.24.134/Jismoniy%20d3.html",
        },
        {
            id: 4,
            efirname_id: 1,
            name_uz: "Halol",
            name_ru: "Halol",
            name_en: "Halol",
            link: "http://45.150.24.134/Jismoniy%20d3.html",
        },
        {
            id: 5,
            efirname_id: 2,
            name_uz: "Halol",
            name_ru: "Halol",
            name_en: "Halol",
            link: "http://45.150.24.134/Jismoniy%20d3.html",
        },
    ];

    const [height, setHeight] = useState("200");
    const videoContainerRef = useRef(null);

    const resizeVideo = () => {
        if (videoContainerRef.current) {
            const width = videoContainerRef.current.offsetWidth;
            const calculatedHeight = (780 / 1820) * width;
            const yaxlid = String(Math.ceil(calculatedHeight));
            setHeight(yaxlid);
        }
    };

    useEffect(() => {
        resizeVideo(); // Initial call
        window.addEventListener("resize", resizeVideo);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", resizeVideo);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center px-3 lg:pb-8 pb-4 py-4">
            <h1 className="text-[24px] font-bold my-4 text-[#004269]">
                Imthonlarni online kuzatish
            </h1>
            <div className="w-full p-2">
                {dataLav?.length !== 0 ? (
                    dataLav?.map((items) => (
                        <div
                            key={items.id}
                            className="collapse collapse-arrow my-1"
                        >
                            <input type="checkbox" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium bg-base-200">
                                {items[`name_${isLang}`]}
                            </div>
                            <div className="collapse-content border border-base-200">
                                {dataLink
                                    ?.filter(
                                        (item) => item.efirname_id === items.id
                                    )
                                    .map((item) => (
                                        <div
                                            id="video-container"
                                            ref={videoContainerRef}
                                            className={`h-[120px] sm:h-[263px] md:h-[318px] lg:h-[200px] xl:h-[270px] 2xl:h-[350px] w-full lg:w-[310px] xl:w-[390px] 2xl:w-[470px] lg:inline-block border mx-[2px] mt-2`}
                                            onClick={console.log(`${height}px`)}
                                            key={item.id}
                                        >
                                            <h1 className="text-center font-medium my-1">{item[`name_${isLang}`]}</h1>
                                            <iframe
                                                title={item.name_uz}
                                                key={item.id}
                                                className="w-full h-full border border-red-600"
                                                src={item.link}
                                                frameborder="0"
                                                allowfullscreen
                                            />
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
        </div>
    );
};

export default OnlineKuzatishCom;
