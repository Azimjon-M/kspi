import React, { useState } from "react";
import { useFormik } from "formik";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router";

const SearchBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isFocusedSearInp, setIsFocusedSearInp] = useState(false);
    const noSearch = location.pathname === "/qidiruv";

    const formik = useFormik({
        initialValues: {
            searchText: "",
        },
        onSubmit: (values, { resetForm }) => {
            if (values.searchText.trim()) {
                navigate(`/qidiruv?search=${values.searchText}`);
                resetForm();
                setIsFocusedSearInp(false);
            }
        },
    });

    const handleClickSearch = () => {
        if (!isFocusedSearInp) {
            setIsFocusedSearInp(true);
        } else {
            if (formik.values.searchText.trim()) {
                formik.handleSubmit();
            }
        }
    };

    const handleClickClose = (event) => {
        event.stopPropagation();
        formik.resetForm();
        setIsFocusedSearInp(false);
    };

    return (
        <div
            className={`flex items-center justify-center transition-opacity duration-300 ${
                noSearch ? "opacity-0 hidden" : "opacity-100"
            }`}
            role="search"
            aria-label="Qidiruv paneli"
        >
            <form
                onSubmit={formik.handleSubmit}
                className="relative flex items-center"
            >
                <label
                    htmlFor="searchText"
                    className={`flex items-center transition-all duration-300 ${
                        isFocusedSearInp ? "gap-2" : "gap-0"
                    }`}
                >
                    <input
                        className={`h-[30px] bg-[#0000003d] text-white text-[15px] rounded-md focus:outline-none transition-all duration-300 ease-in-out ${
                            isFocusedSearInp
                                ? "w-[220px] border-b-2 border-green-400 p-2"
                                : "w-0 opacity-0"
                        }`}
                        placeholder="Qidiruv..."
                        onChange={formik.handleChange}
                        value={formik.values.searchText}
                        type="text"
                        id="searchText"
                        aria-label="Qidiruv maydoni"
                    />
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <div className="rounded-[3px] hover:bg-[#0000003d] p-[3px]">
                                <AiOutlineSearch
                                    onClick={handleClickSearch}
                                    className="text-[25px] text-white cursor-pointer"
                                    aria-hidden="true"
                                />
                            </div>
                            {isFocusedSearInp && (
                                <div className="rounded-[3px] hover:bg-[#0000003d] p-[3px]">
                                    <AiOutlineClose
                                        onClick={handleClickClose}
                                        className="text-[25px] text-white cursor-pointer"
                                        aria-label="Qidiruvni tozalash"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </label>
            </form>
        </div>
    );
};

export default SearchBar;
