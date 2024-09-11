import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useFormik } from "formik";
import APISearch from "../../services/search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchPage = () => {
    const Lang = useSelector((state) => state.reducerLang.isLang);

    const location = useLocation();
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("search") || "";

    const formik = useFormik({
        initialValues: {
            searchText: query ? query : "",
        },
        onSubmit: async ({searchText}) => {
            if (searchText.length > 1) {
                navigate(`/qidiruv?search=${encodeURIComponent(searchText)}`);
                try {
                    const [yangiResponse, elonResponse] = await Promise.all([
                        APISearch.getYangi(encodeURIComponent(searchText)),
                        APISearch.getElon(encodeURIComponent(searchText)),
                    ]);
    
                    // Har bir elementga `type` xususiyatini qo'shish
                    const yangiData = yangiResponse.data.map((item) => ({
                        ...item,
                        type: "yangiliklar",
                    }));
                    const elonData = elonResponse.data.map((item) => ({
                        ...item,
                        type: "elonBatafsil",
                    }));
    
                    // Ma'lumotlarni birlashtirish va sort qilish
                    const combinedData = [...yangiData, ...elonData].sort(
                        (a, b) => new Date(b.sana) - new Date(a.sana)
                    );
    
                    setData(combinedData);
                } catch (err) {
                    console.log(err);
                }
            }
        },
    });

    useEffect(() => {
        document.getElementById("startSearch").click();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <h1 className="text-center text-[24px] md:text-[28px] text-[#004269] font-bold my-10">
                    Qidiruv saxifasi
                </h1>
                <form onSubmit={formik.handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px]"
                            id="searchText"
                            name="searchText"
                            onChange={formik.handleChange}
                            value={formik.values.searchText}
                        />
                        <button
                            id="startSearch"
                            type="submit"
                            className="scale-110 hover:scale-150"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </label>
                </form>
            </div>
            <div className="w-full">
                <h1 className="text-center text-[22px] text-[#004269] font-bold my-10">
                    Qidiruv natijalari
                </h1>
                <div className="w-full flex flex-col items-center border-t">
                    {data.length <= 0 && (
                        <div className="w-full text-center text-[red] font-medium my-6">
                            Ma'lumotlar topilmadi!
                        </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-4 p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12">
                        {data?.length > 0 &&
                            data.map((item, idx) => {
                                const link = item.type;
                                return (
                                    <Link
                                        to={`/${link}/${item.id}`}
                                        key={`${item.id}${idx}`}
                                        className="inline-block"
                                    >
                                        <div className="max-w-sm lg:max-w-xs xl:max-w-md mx-auto group/item hover:cursor-pointer h-full">
                                            <div className="flex rounded-lg h-full dark:bg-gray-800 shadow-md hover:shadow-lg flex-col group/edit">
                                                <div className="flex items-center mb-3 relative overflow-hidden">
                                                    <img
                                                        className="w-full h-48 md:h-48 object-cover rounded group-hover/item:scale-105 ease-in duration-300 ..."
                                                        src={
                                                            item?.rasm ||
                                                            item?.rasm_1
                                                        }
                                                        alt="Sunset in the mountains"
                                                    />
                                                    <div className="absolute top-0 left-3 h-12 w-12 bg-[#802323] text-center flex flex-col text-sm p-1 rounded-b-md">
                                                        {item.sana && (
                                                            <span className="text-white">
                                                                {item.sana.slice(
                                                                    8,
                                                                    10
                                                                )}
                                                                .
                                                                {item.sana.slice(
                                                                    5,
                                                                    7
                                                                )}
                                                            </span>
                                                        )}
                                                        {item.sana && (
                                                            <span className="text-white">
                                                                {item.sana.slice(
                                                                    0,
                                                                    4
                                                                )}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="absolute bottom-0 border-[#004269] border-2 w-10 group-hover/edit:w-full ... ease-in duration-300 ..."></div>
                                                </div>
                                                <div className="flex flex-col justify-between flex-grow px-2">
                                                    <h2 className="leading-relaxed font-bold line-clamp-3 xl:line-clamp-2 text-base text-[#004269] text-center dark:text-gray-300 line">
                                                        {item[`title_${Lang}`]}
                                                    </h2>
                                                    <div className="flex justify-center items-center">
                                                        <div className="border-4 bg-[#004269] w-10 my-5"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
