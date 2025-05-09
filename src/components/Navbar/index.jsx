import React, { useEffect, useState } from "react";
import kspi_logo from "../../assets/icons/logo.png";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import TextTranslate from "../TextTranslate/index";
import Dropdown from "../Dropdown";
import LanguageDropdown from "../DropdownChangeLang";
import SearchBar from "../SearchBar";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const [scrollY, setScrollY] = useState(false);
    const noSearch = location.pathname === "/qidiruv";
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("search") || "";

    const color = "#5f4fa1";

    const ijtimoiyTarmoqlar = [
        { id: "1", name: "Telegram", link: "", icon: <LiaTelegram /> },
        { id: "2", name: "Instagram", link: "", icon: <FaInstagram /> },
        { id: "3", name: "Youtube", link: "", icon: <AiOutlineYoutube /> },
        { id: "4", name: "Facebook", link: "", icon: <CiFacebook /> },
    ];

    // search
    const formik = useFormik({
        initialValues: {
            searchText: query ? query : "",
        },
        onSubmit: (values, {resetForm}) => {
            if (values.searchText.length > 1) {
                if (values.searchText !== query) {
                    navigate(`/qidiruv?search=${values.searchText}`);
                    resetForm();
                }
            }
            setIsActiveMenu(false);
        },
    });

    const handleClickCloseMenu = () => {
        setIsActiveMenu(false);
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
            className={`${scrollY && `sticky top-0 shadow-xl`} ${
                isActiveMenu && "bg-white top-0"
            } left-0 flex flex-col items-center w-full h-auto z-50 px-4 py-2 bg-[${color}] sm:px-4 md:px-8 md:py-4 xl:px-0 xl:py-0`}
        >
            {/* Max W */}
            <div className="w-full flex max-w-7xl px-4">
                {/* Navbar */}
                <nav className="w-full flex justify-between h-[100px!important]">
                    {/* Emblema QDPI */}
                    <Link to="/">
                        <div
                            className={`h-full flex items-center gap-x-[10px] md:gap-x-[15px]`}
                        >
                            <img
                                className="w-[32px] sm:w-[36px] md:w-[45px] xl:w-[60px] 2xl:w-[60px] h-auto"
                                src={kspi_logo}
                                alt="icon"
                            />
                            <p className="font-primaryMedium xl:w-[150px] text-[26px] text-[white] leading-6">
                                <TextTranslate id="navLogo" />
                            </p>
                        </div>
                    </Link>
                    {/* /Emblema QDPI */}
                    {/* Navbar: logo, Naviations */}
                    <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className="w-full hidden xl:flex justify-end text-white rounded-bl-lg">
                            {/* Ijtimoi Tarmoqlar */}
                            <div className="flex items-center gap-1">
                                {ijtimoiyTarmoqlar.map((item) => (
                                    <Link
                                        key={item.id}
                                        title={item.name}
                                        to={item.link}
                                    >
                                        <div className="bg-[#ffffff40] z-0 p-[5px] rounded-md hover:bg-white hover:text-black">
                                            {item.icon}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            {/* /Ijtimoi Tarmoqlar */}
                            <div className="flex">
                                {/* Language */}
                                <LanguageDropdown />
                                {/* /Language */}
                                {/* Tizimlar Drop */}
                                <div className="z-40">
                                    <Dropdown
                                        id="dropdown1"
                                        name="Tizimlar"
                                        classForName="text-[12px] font-thin"
                                        classForAllChild=""
                                        isBtn
                                    >
                                        <li className="text-black">
                                            <Link
                                                target="_blank"
                                                to="https://talaba.kspi.uz/dashboard/login"
                                            >
                                                <TextTranslate id="hedHemis-tizimi" />
                                            </Link>
                                        </li>
                                        <li className="text-black">
                                            {/* Nested dropdown */}
                                            <Dropdown
                                                id="dropChild1"
                                                name={
                                                    <TextTranslate id="hedInstitut-jurnali" />
                                                }
                                                isNested
                                                direction="left"
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
                                                {/* Ichma-ich yana bir nested dropdown */}
                                                {/* <li>
                                                <Dropdown
                                                    id="dropGrandChild1"
                                                    name="GrandChild"
                                                    isNested
                                                    direction="left"
                                                >
                                                    <li>
                                                        <Link to="">
                                                            Grandchild 1
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="">
                                                            Grandchild 2
                                                        </Link>
                                                    </li>
                                                </Dropdown>
                                            </li> */}
                                            </Dropdown>
                                        </li>
                                        <li className="text-black">
                                            <Link
                                                target="_blank"
                                                to="https://conferences.kspi.uz/"
                                            >
                                                <TextTranslate id="hedKonferensyalar" />
                                            </Link>
                                        </li>
                                        <li className="text-black">
                                            <Link
                                                target="_blank"
                                                to="https://my.edu.uz/"
                                            >
                                                <TextTranslate id="hedIkkinchi-talim" />
                                            </Link>
                                        </li>
                                        <li className="text-black">
                                            {/* Nested dropdown */}
                                            <Dropdown
                                                id="dropChild1"
                                                name={
                                                    <TextTranslate id="hedUniversitet-yashil" />
                                                }
                                                isNested
                                                direction="left"
                                            >
                                                <li>
                                                    <Link to="/yashil-univeritet/yangiliklar">
                                                        <TextTranslate id="hedDropUniversitet-yashil_1" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/yashil-univeritet/raqamlarda">
                                                        <TextTranslate id="hedDropUniversitet-yashil_2" />
                                                    </Link>
                                                </li>
                                            </Dropdown>
                                        </li>
                                        <li className="text-black">
                                            <Link to="/ochiq-malumotlar">
                                                <TextTranslate id="hedOchiq-malumotlar" />
                                            </Link>
                                        </li>
                                    </Dropdown>
                                </div>

                                {/* /Tizimlar Drop */}
                            </div>
                        </div>
                        {/* /Header */}
                        {/* Right Nav Navigatons, mobile version */}
                        <div className="w-full flex items-center justify-center h-full text-white">
                            {/* Desktop nav Links */}
                            <div className="hidden w-full h-full xl:flex xl:items-center xl:justify-end">
                                <ul
                                    className={`flex items-center gap-x-8 text-[16px] z-30`}
                                >
                                    <li className="-mr-2">
                                        <Link to="/yangiliklar">
                                            <TextTranslate id="navYangiliklar" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Dropdown
                                            id="dropdown1"
                                            name={
                                                <TextTranslate id="navInstitut" />
                                            }
                                            classForName="font-thin"
                                        >
                                            <li className="text-black bg-white">
                                                <Link to="/institut-kengashi">
                                                    <TextTranslate id="navDropInstitut_1" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/institut-haqida">
                                                    <TextTranslate id="navDropInstitut_2" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/institut-tuzilma">
                                                    <TextTranslate id="navDropInstitut_3" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/rekvizitlar">
                                                    <TextTranslate id="navDropInstitut_4" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/qabulxona">
                                                    <TextTranslate id="navDropInstitut_5" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                {/* Nested dropdown */}
                                                <Dropdown
                                                    id="dropChild1"
                                                    name={
                                                        <TextTranslate id="navDropInstitut_6" />
                                                    }
                                                    isNested
                                                    direction="right"
                                                >
                                                    <li>
                                                        <Link to="/hujjatlar/o'zbekiston-respublikasi-prezidentining-farmonlar">
                                                            <TextTranslate id="navDropInstitut_6_drop_1" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/hujjatlar/o'zbekiston-respublikasi-qonunlari">
                                                            <TextTranslate id="navDropInstitut_6_drop_2" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/hujjatlar/o'zbekiston-respublikasi-vazirlar-mahkamasining-qarorlari">
                                                            <TextTranslate id="navDropInstitut_6_drop_3" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/hujjatlar/institut-ichki-me'yoriy-huquqiy-hujjatlari">
                                                            <TextTranslate id="navDropInstitut_6_drop_4" />
                                                        </Link>
                                                    </li>
                                                </Dropdown>
                                            </li>
                                        </Dropdown>
                                    </li>
                                    <li>
                                        <Dropdown
                                            id="dropdown1"
                                            name={
                                                <TextTranslate id="navFaoliyat" />
                                            }
                                            classForName="font-thin"
                                        >
                                            <li className="text-black bg-white">
                                                <Link to="/jamoatchilik">
                                                    <TextTranslate id="navDropFaoliyat_1" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/madaniy">
                                                    <TextTranslate id="navDropFaoliyat_2" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/oquv-uslubiy">
                                                    <TextTranslate id="navDropFaoliyat_3" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                {/* Nested dropdown */}
                                                <Dropdown
                                                    id="dropChild1"
                                                    name={
                                                        <TextTranslate id="navDropFaoliyat_04_xalqaro" />
                                                    }
                                                    isNested
                                                    direction="right"
                                                >
                                                    <li>
                                                        <Link to="/xalqaro-hamkor-tashkilotlar">
                                                            <TextTranslate id="navDropFaoliyat_04_xalqaro_drop1" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/xalqaro-yangiliklar">
                                                            <TextTranslate id="navDropFaoliyat_04_xalqaro_drop2" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/xalqaro-elonlar">
                                                            <TextTranslate id="navDropFaoliyat_04_xalqaro_drop3" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/professorlar-fikri">
                                                            <TextTranslate id="navDropFaoliyat_04_xalqaro_drop4" />
                                                        </Link>
                                                    </li>
                                                </Dropdown>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/akademik-litsey">
                                                    <TextTranslate id="navDropFaoliyat_4" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/ilmiy-faoliyat">
                                                    <TextTranslate id="navDropFaoliyat_5" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/yoshlar-ishlash">
                                                    <TextTranslate id="navDropFaoliyat_6" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                {/* Nested dropdown */}
                                                <Dropdown
                                                    id="dropChild1"
                                                    name={
                                                        <TextTranslate id="navDropFaoliyat_7" />
                                                    }
                                                    isNested
                                                    direction="right"
                                                >
                                                    <li>
                                                        <Link to="/faoliyat/normativ-hujjatlar">
                                                            <TextTranslate id="navDropFaoliyat_7_drop_1" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/faoliyat/ichki-idoraviy-hujjatlar">
                                                            <TextTranslate id="navDropFaoliyat_7_drop_2" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/faoliyat/korrupsya-haqida-habar-berish">
                                                            <TextTranslate id="navDropFaoliyat_7_drop_3" />
                                                        </Link>
                                                    </li>
                                                </Dropdown>
                                            </li>
                                        </Dropdown>
                                    </li>
                                    <li>
                                        <Dropdown
                                            id="dropdown1"
                                            name={
                                                <TextTranslate id="navTuzilma" />
                                            }
                                            classForName="font-thin"
                                        >
                                            <li className="text-black bg-white">
                                                <Link to="/rektorat">
                                                    <TextTranslate id="navDropTuzilma_1" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/fakultetlar">
                                                    <TextTranslate id="navDropTuzilma_2" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/kafedralar">
                                                    <TextTranslate id="navDropTuzilma_3" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/bolimlar">
                                                    <TextTranslate id="navDropTuzilma_4" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/markazlar">
                                                    <TextTranslate id="navDropTuzilma_5" />
                                                </Link>
                                            </li>
                                        </Dropdown>
                                    </li>
                                    <li>
                                        <Dropdown
                                            id="dropdown1"
                                            name={
                                                <TextTranslate id="navTalabalar" />
                                            }
                                            classForName="font-thin"
                                        >
                                            <li className="text-black bg-white">
                                                <Link to="/bakalavriyat">
                                                    <TextTranslate id="navDropTalabalar_1" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/magistratura">
                                                    <TextTranslate id="navDropTalabalar_2" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/talabalarTurarJoyi">
                                                    <TextTranslate id="navDropTalabalar_3" />
                                                </Link>
                                            </li>
                                        </Dropdown>
                                    </li>
                                    <li>
                                        <Dropdown
                                            id="dropdown1"
                                            name={
                                                <TextTranslate id="navAbiturient" />
                                            }
                                            classForName="font-thin"
                                        >
                                            <li className="text-black bg-white">
                                                <Link to="/abiturient-bakalavriat">
                                                    <TextTranslate id="navDropAbiturient_1" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/abiturient-magistratura">
                                                    <TextTranslate id="navDropAbiturient_2" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/abiturient-xorijiy-talabalar">
                                                    <TextTranslate id="navDropAbiturient_3" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/call-markaz">
                                                    <TextTranslate id="navDropAbiturient_4" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link to="/abiturient-meyoriy">
                                                    <TextTranslate id="navDropAbiturient_5" />
                                                </Link>
                                            </li>
                                            <li className="text-black bg-white">
                                                <Link
                                                    to="https://xtqabul.kspi.uz/"
                                                    target="blank"
                                                >
                                                    <TextTranslate id="navDropAbiturient_6" />
                                                </Link>
                                            </li>
                                        </Dropdown>
                                    </li>
                                    {/* SearchBar */}
                                    <SearchBar />
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
                                                onClick={() =>
                                                    formik.handleSubmit()
                                                }
                                                className="text-[32px] cursor-pointer join-item rounded-r-full border border-[#004269] bg-white p-[5px] z-20"
                                            />
                                        </div>
                                    </form>
                                </div>
                                {/* /Search to lg   */}
                                {/* Menu */}
                                <button
                                    onClick={() =>
                                        setIsActiveMenu(!isActiveMenu)
                                    }
                                    className={` ${
                                        location.pathname === "/"
                                            ? `${
                                                  isActiveMenu
                                                      ? "border-[#004269] text-[#004269]"
                                                      : "text-white border-white"
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
                        {/* / Right Nav Navigatons, mobile version */}
                    </div>
                    {/* /Navbar: logo, Naviations */}
                </nav>
                {/* /Navbar */}
                {/* Navbar mobile */}
                <div
                    className={`${
                        isActiveMenu
                            ? "h-[calc(100vh-59px)] sm:h-[calc(100vh-64px)] md:h-[calc(100vh-91px)] z-40 opacity-100 translate-x-0"
                            : "h-0 -z-50 opacity-0 -translate-x-full"
                    } style-transition-02 md:flex md:flex-col overflow-auto absolute top-[59px] sm:top-[64px] md:top-[92px] left-0 w-full  bg-[#004269] text-white`}
                >
                    {/* Language */}
                    {/* <div className="flex justify-end p-4 sm:p-6 md:p-8 lg:p-10">
                        <div className="flex items-end gap-x-2 ms-8">
                            <img
                                onClick={() => handleClickLang("uz")}
                                className={` ${
                                    isLang === "uz" &&
                                    "border-b-[2px] border-white"
                                } w-[25px] lg:w-[30px] cursor-pointer 3xl:w-[35px]`}
                                src={flag_uz}
                                alt="flag uz"
                            />
                            <img
                                onClick={() => handleClickLang("ru")}
                                className={` ${
                                    isLang === "ru" &&
                                    "border-b-[2px] border-white"
                                } w-[25px] lg:w-[30px] cursor-pointer 3xl:w-[35px]`}
                                src={flag_ru}
                                alt="flag ru"
                            />
                            <img
                                onClick={() => handleClickLang("en")}
                                className={` ${
                                    isLang === "en" &&
                                    "border-b-[2px] border-white"
                                } w-[25px] lg:w-[30px] cursor-pointer 3xl:w-[35px]`}
                                src={flag_en}
                                alt="flag en"
                            />
                        </div>
                    </div> */}
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
                                                            <TextTranslate id="navDropFaoliyat_04_xalqaro" />
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
                                {/* Yashil */}
                                <li className="w-[280px] border-b-[1px] border-blue-300">
                                    <div className="collapse collapse-arrow rounded-none">
                                        <input
                                            type="checkbox"
                                            name="my-accordion-2"
                                            className="min-h-0 max-w-[280px]"
                                        />
                                        <div className="collapse-title min-h-0 py-0 px-0">
                                            <TextTranslate id="hedUniversitet-yashil" />
                                        </div>
                                        <div className="collapse-content max-w-[280px]">
                                            <ul>
                                                <li className="mt-2">
                                                    <Link to="/yashil-univeritet/yangiliklar">
                                                        <TextTranslate id="hedDropUniversitet-yashil_1" />
                                                    </Link>
                                                </li>
                                                <li className="mt-2">
                                                    <Link to="/yashil-univeritet/raqamlarda">
                                                        <TextTranslate id="hedDropUniversitet-yashil_2" />
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
                                    <Link
                                        target="_blank"
                                        to="https://my.edu.uz/"
                                    >
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
                {/* /Navbar mobile */}
            </div>
            {/* /Max W */}
        </div>
    );
}

export default Navbar;
