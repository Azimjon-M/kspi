import React from "react";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import TextTranslate from "../TextTranslate/index";
import Logo from "../../assets/icons/logo.png";
import { useSelector } from "react-redux";
import ItPark from "../../assets/icons/ItPark.png";
import "./style.css";

const Footer = () => {
  const isLang = useSelector((state) => state.reducerLang.isLang);

  return (
    <footer className="w-full h-auto relative flex flex-col text-white pt-3 z-10">
      <div className="absolute top-0 left-0 w-full h-full background-footer overflow-hidden"></div>
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
                  <TextTranslate id="ishonchTelefon" />: +998 73 249 38 38
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Manzil */}
        <div className="mb-3">
          <h1 className="font-bold mb-3">Rekvizitlar</h1>
          <p>
            <TextTranslate id="address" />
          </p>
          <ul>
            <li>Muassasa nomi: Qo'qon davlat universiteti</li>
            <li>Hisob raqami:</li>
            <li>STIR:</li>
            <li>MFO:</li>
            <li>Index:</li>
          </ul>
        </div>

        {/* Foydali */}
        <div className="mb-3">
          <h1 className="font-bold mb-3">Universitet</h1>
          <ul>
            <li>
              <Link to="/yangiliklar">Rahbariyat</Link>
            </li>
            <li>
              <Link to="/qabulxona">Departamentlar</Link>
            </li>
            <li>
              <Link to="/vakansiyalar">Fakultetlar</Link>
            </li>
            <li>Kafedralar</li>
          </ul>
        </div>

        {/* Saytga tashrif */}
        <div className="mb-3">
          <h1 className="font-bold mb-3">Matbuot xizmati</h1>
          <ul>
            <li>
              <Link to="/yangiliklar">
                <TextTranslate id="yangiliklar" />
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
      </div>

      {/* Copyright */}
      <Link
        to="/authors"
        className="bg-[#5f4fa1] text-center md:flex md:justify-center px-2 py-2 z-50 underline underline-offset-2"
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
