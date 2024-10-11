import React from "react";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import TextTranslate from "../TextTranslate/index";
import Logo from "../../assets/icons/logo_kspi.png";
import { useSelector } from "react-redux";
import ItPark from "../../assets/icons/ItPark.png";
import "./style.css";

const Footer = () => {
    const isLang = useSelector((state) => state.reducerLang.isLang);

    return (
        <footer className="w-full h-auto relative flex flex-col text-white pt-3 z-10">
            <div className="absolute top-0 left-0 w-full h-full">
                <ul className="background-footer w-full h-full bottom-0 absolute -z-10 overflow-hidden">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            {/* Biz bilan bog'lanish */}
            <div className="flex justify-center md:justify-end mb-3 md:pr-10 z-0">
                <Link
                    target="blank"
                    to={"https://t.me/kspi_rector"}
                    className="mr-4 group"
                >
                    <FaTelegram className="h-6 lg:h-7 w-auto group-hover:bg-[#0088cc] rounded-full" />
                </Link>
                <Link
                    target="blank"
                    to={"https://www.instagram.com/kspi_uz/"}
                    className="mr-4 group"
                >
                    <FaSquareInstagram className="h-6 lg:h-7 w-auto group-hover:bg-[#690000] rounded-[3px]" />
                </Link>
                <Link
                    target="blank"
                    to={"https://www.youtube.com/channel/UC6ThR8cLnJmdWDGDz9PR85Q/featured"}
                    className="mr-4 group"
                >
                    <PiYoutubeLogoFill className="h-6 lg:h-7 w-auto group-hover:text-[#FF0000] group-hover:bg-white rounded-[12px]" />
                </Link>
                <Link
                    target="blank"
                    to={"https://www.facebook.com/kspi.uz.56"}
                    className="mr-4 group"
                >
                    <FaSquareFacebook className="h-6 lg:h-7 w-auto group-hover:bg-[#316FF6]" />
                </Link>
            </div>
            <div className="md:grid md:grid-cols-2 lg:flex lg:justify-evenly lg:items-start px-5 z-0">
                {/* Asosiy */}
                <div className="flex items-center mb-3">
                    {/* about */}
                    <div className="mb-3">
                        <div className="flex items-end mb-3">
                            <img className="w-10 mr-3" src={Logo} alt="" />
                            <h1
                                className={`${
                                    isLang === "ru" ? "w-[240px]" : "w-[150px]"
                                } font-bold`}
                            >
                                <TextTranslate id="navLogo" />
                            </h1>
                        </div>
                        <p className="md:w-[250px] lg:w-[350px] xl:w-[450px]">
                            <TextTranslate id="footerTexts" />
                        </p>
                    </div>
                </div>

                {/* Manzil */}
                <div className="mb-3">
                    <h1 className="font-bold mb-3">
                        <TextTranslate id="location" />
                    </h1>
                    <p>
                        <TextTranslate id="address" />
                    </p>
                    <ul>
                        <li>
                            <Link
                                to="mailto:kspi_info@edu.uz"
                                className="transform hover:translate-x-2 transition duration-300 ease-in-out"
                            >
                                kspi_info@edu.uz
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="mailto:info.kspi.uz"
                                className="transform hover:translate-x-2 transition duration-300 ease-in-out"
                            >
                                info.kspi.uz
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="tel:+998 73 249 38 38"
                                className="transform hover:translate-x-2 transition duration-300 ease-in-out"
                            >
                                <TextTranslate id="ishonchTelefon" />: +998 73
                                249 38 38
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Foydali */}
                <div className="mb-3">
                    <h1 className="font-bold mb-3">
                        <TextTranslate id="foydaliLinklar" />
                    </h1>
                    <ul>
                        <li>
                            <Link to="/yangiliklar">
                                <TextTranslate id="yangiliklar" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/qabulxona">
                                <TextTranslate id="virtualQabulxona" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/vakansiyalar">
                                <TextTranslate id="vakansiyalar" />
                            </Link>
                        </li>
                        <li>
                            <Link>RSS</Link>
                        </li>
                    </ul>
                </div>

                {/* Saytga tashrif */}
                <div className="mb-3">
                    <h1 className="font-bold mb-3">
                        <TextTranslate id="saytgaTashriflarSoni" />
                    </h1>
                    <Link
                        to="https://www.freecounterstat.com"
                        title="page visitor counter"
                    >
                        <img
                            src="https://counter4.optistats.ovh/private/freecounterstat.php?c=j46qsp2lnkbdgewxprmglf8w2q1fbsuq"
                            border="0"
                            title="page visitor counter"
                            alt="page visitor counter"
                        />
                    </Link>
                </div>
            </div>

            {/* Copyright */}
            <Link
                to="/authors"
                className="bg-[#113246] text-center md:flex md:justify-center px-2 py-2 z-50 underline underline-offset-2"
            >
                <div className="flex flex-col md:flex-row justify-center items-center text-white text-center py-4">
                    <p>
                        <TextTranslate id="footerContetn_1" />
                    </p>
                    <p className="flex flex-wrap justify-center items-center m-0">
                        <TextTranslate id="footerContetn_2" />
                        <img
                            className="w-[20px] h-[20px] ms-2 me-[2px]"
                            src={ItPark}
                            alt="it park Logo"
                        />{" "}
                        IT PARK
                    </p>
                </div>
            </Link>
        </footer>
    );
};

export default Footer;
