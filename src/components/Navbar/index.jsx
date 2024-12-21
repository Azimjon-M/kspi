import React, { useEffect, useState } from "react";
import kspi_logo from "../../assets/icons/logoWinter.png";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
    setLangUz,
    setLangRu,
    setLangEn,
} from "../../redux/moduls/language/action/";
import { useNavigate } from "react-router-dom";

import flag_1 from "../../assets/icons/flag-uz.png";
import flag_2 from "../../assets/icons/flag-ru.png";
import flag_3 from "../../assets/icons/flag-en.png";
import TextTranslate from "../TextTranslate/index";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLang = useSelector((state) => state.reducerLang.isLang);

    const [isFocusedSearInp, setFocusedSearInp] = useState(false);
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const [scrollY, setScrollY] = useState(false);
    const [isDropF, setIsDropF] = useState(false);
    const [isDropFXal, setIsDropFXal] = useState(false);
    const [isDropIHuj, setIsDropIHuj] = useState(false);

    const noSearch = location.pathname === "/qidiruv";

    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("search") || "";

    // search
    const formik = useFormik({
        initialValues: {
            searchText: query ? query : "",
        },
        onSubmit: (values) => {
            if (values.searchText.length > 1) {
                if (values.searchText !== query) {
                    navigate(`/qidiruv?search=${values.searchText}`);
                }
            }
            setIsActiveMenu(false);
        },
    });

    const handleClickSearch = () => {
        if (isFocusedSearInp && formik.values.searchText) {
            formik.handleSubmit();
        } else {
            setFocusedSearInp(!isFocusedSearInp);
        }
    };
    const handleClickClose = () => {
        setFocusedSearInp(false);
    };
    // Change Language log
    const handleClickLang = (lang) => {
        switch (lang) {
            case "uz":
                dispatch(setLangUz());
                break;
            case "ru":
                dispatch(setLangRu());
                break;
            case "en":
                dispatch(setLangEn());
                break;
            default:
                dispatch(setLangUz());
                break;
        }
    };

    const handleClickCloseMenu = () => {
        setIsActiveMenu(false);
    };

    const onMouseEnter = () => {
        setIsDropF(true);
    };

    const onMouseLeave = () => {
        setIsDropF(false);
    };

    const onMouseEnterXal = () => {
        setIsDropFXal(true);
    };

    const onMouseLeaveXal = () => {
        setIsDropFXal(false);
    };

    const onMouseEnterHuj = () => {
        setIsDropIHuj(true);
    };

    const onMouseLeaveHuj = () => {
        setIsDropIHuj(false);
    };

    // Mobile Handler main no scroll
    useEffect(() => {
        if (isActiveMenu) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isActiveMenu]);

    // Scroll
    useEffect(() => {
        const handleScroll = () => {
            if (Math.floor(window.scrollY) >= 200) {
                setScrollY(true);
            } else {
                setScrollY(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`${
                scrollY
                    ? `sticky top-0 bg-white shadow-xl`
                    : `${
                          location.pathname === "/"
                              ? "absolute"
                              : "relative shadow-xl"
                      } `
            } ${
                isActiveMenu && "bg-white top-0"
            }  left-0 flex flex-col justify-between w-full h-auto z-50 px-4 py-2 sm:px-4 md:px-8 md:py-4 xl:px-0 xl:py-0`}
        >
            <nav className="flex justify-between">
                {/* Emblema QDPI */}
                <Link to="/">
                    <div
                        className={`${
                            isLang === "ru"
                                ? "sm:w-[270px] md:w-[330px] lg:w-[380px] xl:w-[380px] 2xl:w-[450px] 3xl:w-[500px] w-[150px]"
                                : "sm:w-[250px] xl:w-[330px] 2xl:w-[340px] 3xl:w-[350px] w-[150px]"
                        }  flex items-center gap-x-[10px] md:gap-x-[15px] xl:my-[15px] xl:ms-[40px]`}
                    >
                        <img
                            className="w-[32px] sm:w-[36px] md:w-[45px] xl:w-[60px] 3xl:w-[70px] h-auto mb-2"
                            src={kspi_logo}
                            alt="icon"
                        />
                        <p
                            className={`${
                                scrollY
                                    ? " text-[#004269]"
                                    : `${
                                          isActiveMenu
                                              ? " text-[#004269]"
                                              : `${
                                                    location.pathname === "/"
                                                        ? "text-white"
                                                        : "text-[#004269]"
                                                }`
                                      } `
                            } hidden sm:inline-block text-[11px] leading-4  font-bold sm:text-[13px] md:text-[18px] xl:leading-6 lg:text-[20px] xl:text-[24px] 3xl:text-[28px] `}
                        >
                            <TextTranslate id="navLogo" />
                        </p>
                    </div>
                </Link>
                {/* /Emblema QDPI */}
                {/* Desktop Nav / Mobil menu btn */}
                <div className="w-full flex items-end justify-center flex-col">
                    {/* Header */}
                    <div className="hidden xl:flex xl:justify-between bg-[#004269] text-white px-[20px] rounded-bl-lg ">
                        <ul className="flex gap-x-[20px] text-[14px] font-medium 3xl:gap-x-[30px] 3xl:text-[16px]">
                            <li className="py-[4px]">
                                <Link
                                    target="_blank"
                                    to="https://talaba.kspi.uz/dashboard/login"
                                >
                                    <TextTranslate id="hedHemis-tizimi" />
                                </Link>
                            </li>
                            <li className="relative after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-12px] after:w-[7px] after:h-[7px] after:border-s-2 after:border-b-2 after:border-white after:rotate-[-45deg] cursor-pointer py-[4px] mr-3 3xl:after:w-[8px] 3xl:after:h-[8px] ">
                                <div className="dropdown dropdown-hover">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="text-inherit"
                                    >
                                        <TextTranslate id="hedInstitut-jurnali" />
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52 text-[#004269] dark:text-white font-bold"
                                    >
                                        <li>
                                            <Link
                                                target="_blank"
                                                to="https://journal.kspi.uz/"
                                            >
                                                <TextTranslate id="hedDropInstitut-jurnali_1" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                target="_blank"
                                                to="http://wsrjournal.com/index.php/wsrj"
                                            >
                                                <TextTranslate id="hedDropInstitut-jurnali_2" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="py-[4px]">
                                <Link
                                    target="_blank"
                                    to="https://conferences.kspi.uz/"
                                >
                                    <TextTranslate id="hedKonferensyalar" />
                                </Link>
                            </li>
                            <li className="py-[4px]">
                                <Link target="_blank" to="https://my.edu.uz/">
                                    <TextTranslate id="hedIkkinchi-talim" />
                                </Link>
                            </li>
                            <li className="py-[4px]">
                                {/* O'zimizni Page */}
                                <Link to="/ochiq-malumotlar">
                                    <TextTranslate id="hedOchiq-malumotlar" />
                                </Link>
                            </li>
                        </ul>
                        {/* HEADER SEARCH FORM */}
                        <div
                            className={`${
                                noSearch && "hidden"
                            } flex items-center justify-center`}
                        >
                            <form onSubmit={formik.handleSubmit}>
                                <label
                                    className="w-auto h-full flex items-center cursor-pointer"
                                    htmlFor="searchText"
                                >
                                    <input
                                        className={`${
                                            isFocusedSearInp
                                                ? "w-[200px] border-b-[3px] border-white ms-4"
                                                : "w-[0px] -z-50"
                                        } style-transition-01 h-full focus:outline-none bg-inherit px-2`}
                                        placeholder="text..."
                                        onChange={formik.handleChange}
                                        value={formik.values.searchText}
                                        type="text"
                                        id="searchText"
                                    />
                                    <AiOutlineSearch
                                        onClick={() => handleClickSearch()}
                                        className={`${
                                            isFocusedSearInp &&
                                            !formik.values.searchText.trim()
                                                ? "hidden"
                                                : "inline-block"
                                        } text-[25px]`}
                                    />
                                    <AiOutlineClose
                                        onClick={() => handleClickClose()}
                                        className={`${
                                            !isFocusedSearInp ||
                                            formik.values.searchText.trim()
                                                ? "hidden"
                                                : "inline-block"
                                        } text-[25px] text-white`}
                                    />
                                </label>
                            </form>
                        </div>
                    </div>
                    {/* /Header */}

                    {/* Desktop nav Links */}
                    <div className="hidden w-full h-full xl:flex xl:items-center xl:justify-end px-10 xl:pl-3 2xl:pl-10">
                        <ul
                            className={`${
                                scrollY
                                    ? "text-[#004269]"
                                    : `${
                                          location.pathname === "/"
                                              ? "text-white"
                                              : "text-[#004269]"
                                      }`
                            } flex items-center gap-x-8 font-semibold xl:text-[18px] 2xl:text-[20px] 3xl:gap-x-12 3xl:text-[21px]`}
                        >
                            <li className="-mr-2">
                                <Link to="/yangiliklar">
                                    <TextTranslate id="navYangiliklar" />
                                </Link>
                            </li>
                            <li
                                className={`relative after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-15px] after:w-[8px] after:h-[8px] after:border-s-2 after:border-b-2 ${
                                    scrollY
                                        ? "after:border-[#004269]"
                                        : `${
                                              location.pathname === "/"
                                                  ? "after:border-white"
                                                  : "after:border-[#004269]"
                                          }`
                                } after:rotate-[-45deg] 3xl:after:w-[10px] 3xl:after:h-[10px]`}
                            >
                                <div className="dropdown dropdown-hover">
                                    <div
                                        tabIndex={2}
                                        role="button"
                                        className="text-inherit"
                                    >
                                        <TextTranslate id="navInstitut" />
                                    </div>
                                    <ul
                                        tabIndex={2}
                                        className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/institut-kengashi">
                                                <TextTranslate id="navDropInstitut_1" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/institut-haqida">
                                                <TextTranslate id="navDropInstitut_2" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/institut-tuzilma">
                                                <TextTranslate id="navDropInstitut_3" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/rekvizitlar">
                                                <TextTranslate id="navDropInstitut_4" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/qabulxona">
                                                <TextTranslate id="navDropInstitut_5" />
                                            </Link>
                                        </li>
                                        {/* +++++++++++++++ +++++++ Hujjatlar +++++++++ +++++++++++++++ */}
                                        <li className="relative text-[#004269] z-[1] dark:text-white after:-z-[1] after:absolute after:top-[40%] after:right-2 after:rotate-[135deg] after:w-[6px] after:h-[6px] after:border-s-[2px] after:border-t-[2px] after:border-[#004269]">
                                            <div
                                                onMouseEnter={onMouseEnterHuj}
                                                onMouseLeave={onMouseLeaveHuj}
                                                className="dropdown dropdown-hover"
                                            >
                                                <div
                                                    tabIndex={19}
                                                    role="button"
                                                    className="text-inherit"
                                                >
                                                    <TextTranslate id="navDropInstitut_6" />
                                                </div>
                                                <ul
                                                    tabIndex={19}
                                                    className={` ${
                                                        !isDropIHuj && "hidden"
                                                    } translate-x-[174px] translate-y-[36px] dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52`}
                                                >
                                                    <li className="text-[#004269] dark:text-white">
                                                        <Link to="/hujjatlar/o'zbekiston-respublikasi-prezidentining-farmonlar">
                                                            <TextTranslate id="navDropInstitut_6_drop_1" />
                                                        </Link>
                                                    </li>
                                                    <li className="text-[#004269] dark:text-white">
                                                        <Link to="/hujjatlar/o'zbekiston-respublikasi-qonunlari">
                                                            <TextTranslate id="navDropInstitut_6_drop_2" />
                                                        </Link>
                                                    </li>
                                                    <li className="text-[#004269] dark:text-white">
                                                        <Link to="/hujjatlar/o'zbekiston-respublikasi-vazirlar-mahkamasining-qarorlari">
                                                            <TextTranslate id="navDropInstitut_6_drop_3" />
                                                        </Link>
                                                    </li>
                                                    <li className="text-[#004269] dark:text-white">
                                                        <Link to="/hujjatlar/institut-ichki-me'yoriy-huquqiy-hujjatlari">
                                                            <TextTranslate id="navDropInstitut_6_drop_4" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li
                                className={`relative after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-15px] after:w-[8px] after:h-[8px] after:border-s-2 after:border-b-2 ${
                                    scrollY
                                        ? "after:border-[#004269]"
                                        : `${
                                              location.pathname === "/"
                                                  ? "after:border-white"
                                                  : "after:border-[#004269]"
                                          }`
                                } after:rotate-[-45deg] 3xl:after:w-[10px] 3xl:after:h-[10px]`}
                            >
                                <div className="dropdown dropdown-hover">
                                    <div
                                        tabIndex={3}
                                        role="button"
                                        className="text-inherit"
                                    >
                                        <TextTranslate id="navFaoliyat" />
                                    </div>
                                    <ul
                                        tabIndex={3}
                                        className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/jamoatchilik">
                                                <TextTranslate id="navDropFaoliyat_1" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/madaniy">
                                                <TextTranslate id="navDropFaoliyat_2" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/oquv-uslubiy">
                                                <TextTranslate id="navDropFaoliyat_3" />
                                            </Link>
                                        </li>
                                        {/* +++++++++++++++++ +++++++++++++++++++++++ ++++++++++++++++++ */}
                                        <li className="text-[#004269] z-[1] dark:text-white after:-z-[1] after:absolute after:top-[40%] after:right-2 after:rotate-[135deg] after:w-[6px] after:h-[6px] after:border-s-[2px] after:border-t-[2px] after:border-[#004269]">
                                            <div
                                                onMouseEnter={onMouseEnterXal}
                                                onMouseLeave={onMouseLeaveXal}
                                                className="dropdown dropdown-hover"
                                            >
                                                <div
                                                    tabIndex={19}
                                                    role="button"
                                                    className="text-inherit"
                                                >
                                                    <TextTranslate id="navDropFaoliyat_04_xalqaro" />
                                                </div>
                                                <ul
                                                    tabIndex={19}
                                                    className={` ${
                                                        !isDropFXal && "hidden"
                                                    } translate-x-[174px] translate-y-[36px] dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52`}
                                                >
                                                    <li className="text-[#004269] dark:text-white">
                                                        <Link to="/xalqaro-hamkor-tashkilotlar">
                                                            <TextTranslate id="navDropFaoliyat_04_xalqaro_drop1" />
                                                        </Link>
                                                    </li>
                                                    <li className="text-[#004269] dark:text-white">
                                                        <Link to="/xalqaro-yangiliklar">
                                                            <TextTranslate id="navDropFaoliyat_04_xalqaro_drop2" />
                                                        </Link>
                                                    </li>
                                                    <li className="text-[#004269] dark:text-white">
                                                        <Link to="/xalqaro-elonlar">
                                                            <TextTranslate id="navDropFaoliyat_04_xalqaro_drop3" />
                                                        </Link>
                                                    </li>
                                                    <li className="text-[#004269] dark:text-white">
                                                        <Link to="/professorlar-fikri">
                                                            <TextTranslate id="navDropFaoliyat_04_xalqaro_drop4" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/akademik-litsey">
                                                <TextTranslate id="navDropFaoliyat_4" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/ilmiy-faoliyat">
                                                <TextTranslate id="navDropFaoliyat_5" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/yoshlar-ishlash">
                                                <TextTranslate id="navDropFaoliyat_6" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white z-[1] after:-z-[1] after:absolute after:top-[45%] after:right-2 after:rotate-[135deg] after:w-[6px] after:h-[6px] after:border-s-[2px] after:border-t-[2px] after:border-[#004269]">
                                            <div
                                                onMouseEnter={onMouseEnter}
                                                onMouseLeave={onMouseLeave}
                                                className="dropdown dropdown-hover"
                                            >
                                                <div
                                                    tabIndex={19}
                                                    role="button"
                                                    className="text-inherit"
                                                >
                                                    <TextTranslate id="navDropFaoliyat_7" />
                                                </div>
                                                <ul
                                                    tabIndex={19}
                                                    className={` ${
                                                        !isDropF && "hidden"
                                                    } translate-x-[174px] translate-y-[36px] dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52`}
                                                >
                                                    <li className="text-[#004269] dark:text-white">
                                                        <Link to="/faoliyat/normativ-hujjatlar">
                                                            <TextTranslate id="navDropFaoliyat_7_drop_1" />
                                                        </Link>
                                                    </li>
                                                    <li className="text-[#004269] dark:text-white">
                                                        <Link to="/faoliyat/ichki-idoraviy-hujjatlar">
                                                            <TextTranslate id="navDropFaoliyat_7_drop_2" />
                                                        </Link>
                                                    </li>
                                                    <li className="text-[#004269] dark:text-white">
                                                        <Link to="/faoliyat/korrupsya-haqida-habar-berish">
                                                            <TextTranslate id="navDropFaoliyat_7_drop_3" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li
                                className={`relative after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-15px] after:w-[8px] after:h-[8px] after:border-s-2 after:border-b-2 ${
                                    scrollY
                                        ? "after:border-[#004269]"
                                        : `${
                                              location.pathname === "/"
                                                  ? "after:border-white"
                                                  : "after:border-[#004269]"
                                          }`
                                } after:rotate-[-45deg] 3xl:after:w-[10px] 3xl:after:h-[10px]`}
                            >
                                <div className="dropdown dropdown-hover">
                                    <div
                                        tabIndex={4}
                                        role="button"
                                        className="text-inherit"
                                    >
                                        <TextTranslate id="navTuzilma" />
                                    </div>
                                    <ul
                                        tabIndex={4}
                                        className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/rektorat">
                                                <TextTranslate id="navDropTuzilma_1" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/fakultetlar">
                                                <TextTranslate id="navDropTuzilma_2" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/kafedralar">
                                                <TextTranslate id="navDropTuzilma_3" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/bolimlar">
                                                <TextTranslate id="navDropTuzilma_4" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/markazlar">
                                                <TextTranslate id="navDropTuzilma_5" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li
                                className={`relative after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-15px] after:w-[8px] after:h-[8px] after:border-s-2 after:border-b-2 ${
                                    scrollY
                                        ? "after:border-[#004269]"
                                        : `${
                                              location.pathname === "/"
                                                  ? "after:border-white"
                                                  : "after:border-[#004269]"
                                          }`
                                } after:rotate-[-45deg] 3xl:after:w-[10px] 3xl:after:h-[10px]`}
                            >
                                <div className="dropdown dropdown-hover">
                                    <div
                                        tabIndex={5}
                                        role="button"
                                        className="text-inherit"
                                    >
                                        <TextTranslate id="navTalabalar" />
                                    </div>
                                    <ul
                                        tabIndex={5}
                                        className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/bakalavriyat">
                                                <TextTranslate id="navDropTalabalar_1" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/magistratura">
                                                <TextTranslate id="navDropTalabalar_2" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/talabalarTurarJoyi">
                                                <TextTranslate id="navDropTalabalar_3" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li
                                className={`relative after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-15px] after:w-[8px] after:h-[8px] after:border-s-2 after:border-b-2 ${
                                    scrollY
                                        ? "after:border-[#004269]"
                                        : `${
                                              location.pathname === "/"
                                                  ? "after:border-white"
                                                  : "after:border-[#004269]"
                                          }`
                                } after:rotate-[-45deg] 3xl:after:w-[10px] 3xl:after:h-[10px]`}
                            >
                                <div className="dropdown dropdown-hover">
                                    <div
                                        tabIndex={6}
                                        role="button"
                                        className="text-inherit"
                                    >
                                        <TextTranslate id="navAbiturient" />
                                    </div>
                                    <ul
                                        tabIndex={6}
                                        className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/abiturient-bakalavriat">
                                                <TextTranslate id="navDropAbiturient_1" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/abiturient-magistratura">
                                                <TextTranslate id="navDropAbiturient_2" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/abiturient-xorijiy-talabalar">
                                                <TextTranslate id="navDropAbiturient_3" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/call-markaz">
                                                <TextTranslate id="navDropAbiturient_4" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link to="/abiturient-meyoriy">
                                                <TextTranslate id="navDropAbiturient_5" />
                                            </Link>
                                        </li>
                                        <li className="text-[#004269] dark:text-white">
                                            <Link
                                                to="https://xtqabul.kspi.uz/"
                                                target="blank"
                                            >
                                                <TextTranslate id="navDropAbiturient_6" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-end gap-x-2 ms-8">
                                    <img
                                        onClick={() => handleClickLang("uz")}
                                        className={` ${
                                            isLang === "uz" &&
                                            `border-b-[3px] ${
                                                scrollY
                                                    ? "border-[#004269]"
                                                    : `${
                                                          location.pathname ===
                                                          "/"
                                                              ? "border-white"
                                                              : "border-[#004269]"
                                                      }`
                                            } `
                                        } w-[30px] cursor-pointer 3xl:w-[35px]`}
                                        src={flag_1}
                                        alt="flag uz"
                                    />
                                    <img
                                        onClick={() => handleClickLang("ru")}
                                        className={` ${
                                            isLang === "ru" &&
                                            `border-b-[3px] ${
                                                scrollY
                                                    ? "border-[#004269]"
                                                    : `${
                                                          location.pathname ===
                                                          "/"
                                                              ? "border-white"
                                                              : "border-[#004269]"
                                                      }`
                                            } `
                                        } w-[30px] cursor-pointer 3xl:w-[35px]`}
                                        src={flag_2}
                                        alt="flag ru"
                                    />
                                    <img
                                        onClick={() => handleClickLang("en")}
                                        className={` ${
                                            isLang === "en" &&
                                            `border-b-[3px] ${
                                                scrollY
                                                    ? "border-[#004269]"
                                                    : `${
                                                          location.pathname ===
                                                          "/"
                                                              ? "border-white"
                                                              : "border-[#004269]"
                                                      }`
                                            } `
                                        } w-[30px] cursor-pointer 3xl:w-[35px]`}
                                        src={flag_3}
                                        alt="flag en"
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* /Desktop nav Links */}

                    {/* mobil, ipad menu / search btn */}
                    <div className="flex items-center md:gap-x-4">
                        {/* Search to lg */}
                        <div
                            className={`${
                                noSearch
                                    ? "hidden"
                                    : "hidden md:inline-block xl:hidden"
                            }`}
                        >
                            {/* MOBILE SEARCH FORM */}
                            <form
                                className="flex items-center justify-center px-4 py-2"
                                onSubmit={formik.handleSubmit}
                            >
                                <div className="join">
                                    <input
                                        className="input join-item input-sm input-bordered border-[#004269] w-full max-w-xs text-[#004269] z-10 focus:border-[#004269] focus:outline-white"
                                        placeholder="text..."
                                        onChange={formik.handleChange}
                                        value={formik.values.searchText}
                                        type="text"
                                        id="searchText"
                                    />
                                    <AiOutlineSearch
                                        onClick={() => formik.handleSubmit()}
                                        className="text-[32px] cursor-pointer join-item rounded-r-full border border-[#004269] bg-white p-[5px] z-20"
                                    />
                                </div>
                            </form>
                        </div>
                        {/* /Search to lg   */}
                        {/* Menu */}
                        <button
                            onClick={() => setIsActiveMenu(!isActiveMenu)}
                            className={` ${
                                location.pathname === "/"
                                    ? `${
                                          scrollY
                                              ? "border-[#004269] text-[#004269]"
                                              : `${
                                                    isActiveMenu
                                                        ? "border-[#004269] text-[#004269]"
                                                        : "text-white border-white"
                                                } `
                                      }`
                                    : "border-[#004269] text-[#004269]"
                            } btn btn-sm btn-outline xl:hidden flex items-center gap-x-2 font-medium md:btn-md `}
                        >
                            {isActiveMenu ? (
                                <AiOutlineClose />
                            ) : (
                                <AiOutlineMenu />
                            )}
                            MENU
                        </button>
                        {/* /Menu */}
                    </div>
                    {/* /mobil, ipad menu / search btn */}
                </div>
                {/* / Desktop Nav / Mobil menu btn */}
            </nav>

            {/* mobil drop menu */}
            <div
                className={`${
                    isActiveMenu
                        ? "h-[calc(100vh-59px)] sm:h-[calc(100vh-64px)] md:h-[calc(100vh-91px)] z-40 opacity-100 translate-x-0"
                        : "h-0 -z-50 opacity-0 -translate-x-full"
                } style-transition-02 md:flex md:flex-col overflow-auto absolute top-[59px] sm:top-[64px] md:top-[92px] left-0 w-full  bg-[#004269] text-white`}
            >
                {/* Language */}
                <div className="flex justify-end p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="flex items-end gap-x-2 ms-8">
                        <img
                            onClick={() => handleClickLang("uz")}
                            className={` ${
                                isLang === "uz" && "border-b-[2px] border-white"
                            } w-[25px] lg:w-[30px] cursor-pointer 3xl:w-[35px]`}
                            src={flag_1}
                            alt="flag uz"
                        />
                        <img
                            onClick={() => handleClickLang("ru")}
                            className={` ${
                                isLang === "ru" && "border-b-[2px] border-white"
                            } w-[25px] lg:w-[30px] cursor-pointer 3xl:w-[35px]`}
                            src={flag_2}
                            alt="flag ru"
                        />
                        <img
                            onClick={() => handleClickLang("en")}
                            className={` ${
                                isLang === "en" && "border-b-[2px] border-white"
                            } w-[25px] lg:w-[30px] cursor-pointer 3xl:w-[35px]`}
                            src={flag_3}
                            alt="flag en"
                        />
                    </div>
                </div>
                {/* /Language */}
                {/* Search */}
                <div className={`${noSearch ? "hidden" : "md:hidden"}`}>
                    {/* MOBILE SEARCH FORM FROM DROPDON */}
                    <form
                        className="flex items-center justify-center px-4 py-2"
                        onSubmit={formik.handleSubmit}
                    >
                        <input
                            className="input input-sm input-bordered text-[#004269] input-accent w-full max-w-xs"
                            placeholder="text..."
                            onChange={formik.handleChange}
                            value={formik.values.searchText}
                            type="text"
                            id="searchText"
                        />
                        <AiOutlineSearch
                            onClick={() => formik.handleSubmit()}
                            className="text-[30px] ms-[15px] cursor-pointer"
                        />
                    </form>
                </div>
                {/* /Search */}
                <div className="flex flex-col md:flex-row md:pb-10 lg:mx-auto">
                    {/* Navbar */}
                    <div className="flex justify-start pt-4 px-6 sm:px-14">
                        <ul className="flex flex-col items-start gap-x-8 text-white font-semibold 2xl:text-[20px] 3xl:gap-x-12 3xl:text-[22px] ">
                            <li className="py-[3px] border-b-[1px] border-blue-300">
                                <Link
                                    onClick={handleClickCloseMenu}
                                    to="/yangiliklar"
                                >
                                    <TextTranslate id="navYangiliklar" />
                                </Link>
                            </li>
                            <li className="py-[3px] border-b-[1px] border-blue-300">
                                <div className="collapse collapse-arrow rounded-none">
                                    <input
                                        type="radio"
                                        name="my-accordion-2"
                                        className="min-h-0 w-[280px]"
                                    />
                                    <div className="collapse-title min-h-0 py-0 px-0 w-full">
                                        <TextTranslate id="navInstitut" />
                                    </div>
                                    <div className="collapse-content">
                                        <ul>
                                            <li className="text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/institut-kengashi"
                                                >
                                                    <TextTranslate id="navDropInstitut_1" />
                                                </Link>
                                            </li>
                                            <li className="text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/institut-haqida"
                                                >
                                                    <TextTranslate id="navDropInstitut_2" />
                                                </Link>
                                            </li>
                                            <li className="text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/institut-tuzilma"
                                                >
                                                    <TextTranslate id="navDropInstitut_3" />
                                                </Link>
                                            </li>
                                            <li className="text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/rekvizitlar"
                                                >
                                                    <TextTranslate id="navDropInstitut_4" />
                                                </Link>
                                            </li>
                                            <li className="text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/qabulxona"
                                                >
                                                    <TextTranslate id="navDropInstitut_5" />
                                                </Link>
                                            </li>
                                            <li>
                                                <div>
                                                    <div
                                                        role="button"
                                                        className="text-inherit"
                                                    >
                                                        <TextTranslate id="navDropInstitut_6" />
                                                        :
                                                    </div>
                                                    <ul className="ms-4 md:ms-6">
                                                        <li className="text-white">
                                                            <Link
                                                                onClick={
                                                                    handleClickCloseMenu
                                                                }
                                                                to="/hujjatlar/o'zbekiston-respublikasi-prezidentining-farmonlar"
                                                            >
                                                                <TextTranslate id="navDropInstitut_6_drop_1" />
                                                            </Link>
                                                        </li>
                                                        <li className="text-white">
                                                            <Link
                                                                onClick={
                                                                    handleClickCloseMenu
                                                                }
                                                                to="/hujjatlar/o'zbekiston-respublikasi-qonunlari"
                                                            >
                                                                <TextTranslate id="navDropInstitut_6_drop_2" />
                                                            </Link>
                                                        </li>
                                                        <li className="text-white">
                                                            <Link
                                                                onClick={
                                                                    handleClickCloseMenu
                                                                }
                                                                to="/hujjatlar/o'zbekiston-respublikasi-vazirlar-mahkamasining-qarorlari"
                                                            >
                                                                <TextTranslate id="navDropInstitut_6_drop_3" />
                                                            </Link>
                                                        </li>
                                                        <li className="text-white">
                                                            <Link
                                                                onClick={
                                                                    handleClickCloseMenu
                                                                }
                                                                to="/hujjatlar/institut-ichki-me'yoriy-huquqiy-hujjatlari"
                                                            >
                                                                <TextTranslate id="navDropInstitut_6_drop_4" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="py-[3px] border-b-[1px] border-blue-300">
                                <div className="collapse collapse-arrow rounded-none">
                                    <input
                                        type="radio"
                                        name="my-accordion-2"
                                        className="min-h-0 w-[280px]"
                                    />
                                    <div className="collapse-title min-h-0 py-0 px-0">
                                        <TextTranslate id="navFaoliyat" />
                                    </div>
                                    <div className="collapse-content max-w-[280px]">
                                        <ul>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/jamoatchilik"
                                                >
                                                    <TextTranslate id="navDropFaoliyat_1" />
                                                </Link>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/madaniy"
                                                >
                                                    <TextTranslate id="navDropFaoliyat_2" />
                                                </Link>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/oquv-uslubiy"
                                                >
                                                    <TextTranslate id="navDropFaoliyat_3" />
                                                </Link>
                                            </li>
                                            {/* ++++++++ +++++++++++++++    MOBIL  ++++++++++++ */}
                                            <li>
                                                <div>
                                                    <div
                                                        role="button"
                                                        className="text-inherit"
                                                    >
                                                        <TextTranslate id="navDropFaoliyat_04_xalqaro" />:
                                                    </div>
                                                    <ul className="ms-4 md:ms-6">
                                                        <li className="text-white">
                                                            <Link
                                                                onClick={
                                                                    handleClickCloseMenu
                                                                }
                                                                to="/faoliyat/normativ-hujjatlar"
                                                            >
                                                                <TextTranslate id="navDropFaoliyat_04_xalqaro_drop1" />
                                                            </Link>
                                                        </li>
                                                        <li className="text-white">
                                                            <Link
                                                                onClick={
                                                                    handleClickCloseMenu
                                                                }
                                                                to="/faoliyat/ichki-idoraviy-hujjatlar"
                                                            >
                                                                <TextTranslate id="navDropFaoliyat_04_xalqaro_drop2" />
                                                            </Link>
                                                        </li>
                                                        <li className="text-white">
                                                            <Link
                                                                onClick={
                                                                    handleClickCloseMenu
                                                                }
                                                                to="/faoliyat/korrupsya-haqida-habar-berish"
                                                            >
                                                                <TextTranslate id="navDropFaoliyat_04_xalqaro_drop3" />
                                                            </Link>
                                                        </li>
                                                        <li className="text-white">
                                                            <Link
                                                                onClick={
                                                                    handleClickCloseMenu
                                                                }
                                                                to="/faoliyat/korrupsya-haqida-habar-berish"
                                                            >
                                                                <TextTranslate id="navDropFaoliyat_04_xalqaro_drop4" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/akademik-litsey"
                                                >
                                                    <TextTranslate id="navDropFaoliyat_4" />
                                                </Link>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/ilmiy-faoliyat"
                                                >
                                                    <TextTranslate id="navDropFaoliyat_5" />
                                                </Link>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/yoshlar-ishlash"
                                                >
                                                    <TextTranslate id="navDropFaoliyat_6" />
                                                </Link>
                                            </li>
                                            <li>
                                                <div>
                                                    <div
                                                        role="button"
                                                        className="text-inherit"
                                                    >
                                                        <TextTranslate id="navDropFaoliyat_7" />
                                                        :
                                                    </div>
                                                    <ul className="ms-4 md:ms-6">
                                                        <li className="text-white">
                                                            <Link
                                                                onClick={
                                                                    handleClickCloseMenu
                                                                }
                                                                to="/faoliyat/normativ-hujjatlar"
                                                            >
                                                                <TextTranslate id="navDropFaoliyat_7_drop_1" />
                                                            </Link>
                                                        </li>
                                                        <li className="text-white">
                                                            <Link
                                                                onClick={
                                                                    handleClickCloseMenu
                                                                }
                                                                to="/faoliyat/ichki-idoraviy-hujjatlar"
                                                            >
                                                                <TextTranslate id="navDropFaoliyat_7_drop_2" />
                                                            </Link>
                                                        </li>
                                                        <li className="text-white">
                                                            <Link
                                                                onClick={
                                                                    handleClickCloseMenu
                                                                }
                                                                to="/faoliyat/korrupsya-haqida-habar-berish"
                                                            >
                                                                <TextTranslate id="navDropFaoliyat_7_drop_3" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="py-[3px] border-b-[1px] border-blue-300">
                                <div className="collapse collapse-arrow rounded-none">
                                    <input
                                        type="radio"
                                        name="my-accordion-2"
                                        className="min-h-0 w-[280px]"
                                    />
                                    <div className="collapse-title min-h-0 py-0 px-0">
                                        <TextTranslate id="navTuzilma" />
                                    </div>
                                    <div className="collapse-content max-w-[280px]">
                                        <ul>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/rektorat"
                                                >
                                                    <TextTranslate id="navDropTuzilma_1" />
                                                </Link>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/fakultetlar"
                                                >
                                                    <TextTranslate id="navDropTuzilma_2" />
                                                </Link>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/kafedralar"
                                                >
                                                    <TextTranslate id="navDropTuzilma_3" />
                                                </Link>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/bolimlar"
                                                >
                                                    <TextTranslate id="navDropTuzilma_4" />
                                                </Link>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/markazlar"
                                                >
                                                    <TextTranslate id="navDropTuzilma_5" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="py-[3px] border-b-[1px] border-blue-300">
                                <div className="collapse collapse-arrow rounded-none">
                                    <input
                                        type="radio"
                                        name="my-accordion-2"
                                        className="min-h-0 w-[280px]"
                                    />
                                    <div className="collapse-title min-h-0 py-0 px-0">
                                        <TextTranslate id="navTalabalar" />
                                    </div>
                                    <div className="collapse-content max-w-[280px]">
                                        <ul>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/bakalavriyat"
                                                >
                                                    <TextTranslate id="navDropTalabalar_1" />
                                                </Link>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/magistratura"
                                                >
                                                    <TextTranslate id="navDropTalabalar_2" />
                                                </Link>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/talabalarTurarJoyi"
                                                >
                                                    <TextTranslate id="navDropTalabalar_3" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="py-[3px] border-b-[1px] border-blue-300">
                                <div className="collapse collapse-arrow rounded-none">
                                    <input
                                        type="radio"
                                        name="my-accordion-2"
                                        className="min-h-0 w-[280px]"
                                    />
                                    <div className="collapse-title min-h-0 py-0 px-0">
                                        <TextTranslate id="navAbiturient" />
                                    </div>
                                    <div className="collapse-content max-w-[280px]">
                                        <ul>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/abiturient-bakalavriat"
                                                >
                                                    <TextTranslate id="navDropAbiturient_1" />
                                                </Link>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/abiturient-magistratura"
                                                >
                                                    <TextTranslate id="navDropAbiturient_2" />
                                                </Link>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/abiturient-xorijiy-talabalar"
                                                >
                                                    <TextTranslate id="navDropAbiturient_3" />
                                                </Link>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/call-markaz"
                                                >
                                                    <TextTranslate id="navDropAbiturient_4" />
                                                </Link>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="/abiturient-meyoriy"
                                                >
                                                    <TextTranslate id="navDropAbiturient_5" />
                                                </Link>
                                            </li>
                                            <li className="my-4 leading-4 text-white dark:text-white">
                                                <Link
                                                    onClick={
                                                        handleClickCloseMenu
                                                    }
                                                    to="https://xtqabul.kspi.uz/"
                                                    target="blank"
                                                >
                                                    <TextTranslate id="navDropAbiturient_6" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* /Navbar */}
                    {/* Header */}
                    <div className="flex justify-start py-4 sm:px-10">
                        <ul className="text-white px-5 font-semibold">
                            <li className="py-[4px] w-[250px]">
                                <Link
                                    target="_blank"
                                    to="https://talaba.kspi.uz/dashboard/login"
                                >
                                    <TextTranslate id="hedHemis-tizimi" />
                                </Link>
                            </li>
                            <li className="w-[280px] border-b-[1px] border-blue-300">
                                <div className="collapse collapse-arrow rounded-none">
                                    <input
                                        type="checkbox"
                                        name="my-accordion-2"
                                        className="min-h-0 max-w-[280px]"
                                    />
                                    <div className="collapse-title min-h-0 py-0 px-0">
                                        <TextTranslate id="hedInstitut-jurnali" />
                                    </div>
                                    <div className="collapse-content max-w-[280px]">
                                        <ul>
                                            <li className="mt-2">
                                                <Link
                                                    target="_blank"
                                                    to="https://journal.kspi.uz/"
                                                >
                                                    <TextTranslate id="hedDropInstitut-jurnali_1" />
                                                </Link>
                                            </li>
                                            <li className="mt-2">
                                                <Link
                                                    target="_blank"
                                                    to="http://wsrjournal.com/index.php/wsrj"
                                                >
                                                    <TextTranslate id="hedDropInstitut-jurnali_2" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="py-[4px] w-[250px]">
                                <Link
                                    target="_blank"
                                    to="https://conferences.kspi.uz/"
                                >
                                    <TextTranslate id="hedKonferensyalar" />
                                </Link>
                            </li>
                            <li className="py-[4px] w-[250px]">
                                <Link target="_blank" to="https://my.edu.uz/">
                                    <TextTranslate id="hedIkkinchi-talim" />
                                </Link>
                            </li>
                            <li className="py-[4px] w-[250px]">
                                {/* O'zimizni Page */}
                                <Link to="">
                                    <TextTranslate id="hedOchiq-malumotlar" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* /Header */}
            </div>
            {/* /mobil drop menu */}
        </div>
    );
}

export default Navbar;
