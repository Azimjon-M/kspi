import React from "react";
import { Link } from "react-router-dom";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import TextTranslate from "../TextTranslate/index";
import Logo from "../../assets/icons/logo.png";
import { useSelector } from "react-redux";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import "./style.css";

const Footer = () => {
  const isLang = useSelector((state) => state.reducerLang.isLang);

  return (
    <footer className="w-full h-auto relative flex flex-col text-white pt-10 z-10">
      <div className="absolute top-0 left-0 w-full h-full background-footer overflow-hidden -z-10"></div>
      <div className="md:grid md:grid-cols-2 lg:max-w-7xl lg:mx-auto w-full lg:flex lg:justify-between lg:items-start px-5 z-0">
        {/* Asosiy */}
        <div className="flex items-center mb-3">
          {/* about */}
          <div className="mb-3 font-primaryMedium">
            <div className="flex items-center mb-3">
              <img className="w-10 mr-3" src={Logo} alt="" />
              <h1
                className={`${
                  isLang === "ru" ? "w-[180px]" : "w-[120px]"
                } font-primaryBold leading-5`}
              >
                <TextTranslate id="navLogo" />
              </h1>
            </div>
            <ul>
              <li className="flex items-center">
                <CiLocationOn className="mr-2" /> <TextTranslate id="address" />
              </li>
              <li>
                <Link
                  to="mailto:kspi_info@edu.uz"
                  className="flex items-center transform hover:translate-x-2 transition duration-300 ease-in-out"
                >
                  <AiOutlineMail className="mr-2" /> kspi_info@edu.uz
                </Link>
              </li>
              <li>
                <Link
                  to="mailto:info.kspi.uz"
                  className="flex items-center transform hover:translate-x-2 transition duration-300 ease-in-out"
                >
                  <AiOutlineMail className="mr-2" /> info.kspi.uz
                </Link>
              </li>
              <li>
                <Link
                  to="tel:+998 73 249 38 38"
                  className="flex items-center transform hover:translate-x-2 transition duration-300 ease-in-out"
                >
                  <FiPhone className="mr-2" /> +998 73 249 38 38
                </Link>
              </li>
              {/* Biz bilan bog'lanish */}
              <div className="flex items-center mb-3 md:pr-10 z-0">
                <Link
                  target="blank"
                  to={"https://t.me/kspi_rector"}
                  className="mr-4 group w-[24px] h-[24px] bg-[#5f4fa1] rounded p-[2px]"
                >
                  <LiaTelegram className="h-full w-auto" />
                </Link>
                <Link
                  target="blank"
                  to={"https://www.facebook.com/kspi.uz.56"}
                  className="mr-4 group w-[24px] h-[24px] bg-[#5f4fa1] rounded p-[2px]"
                >
                  <CiFacebook className="h-full w-auto" />
                </Link>
                <Link
                  target="blank"
                  to={
                    "https://www.youtube.com/channel/UC6ThR8cLnJmdWDGDz9PR85Q/featured"
                  }
                  className="mr-4 group w-[24px] h-[24px] bg-[#5f4fa1] rounded p-[2px]"
                >
                  <AiOutlineYoutube className="h-full w-auto" />
                </Link>
                <Link
                  target="blank"
                  to={"https://www.instagram.com/kspi_uz/"}
                  className="mr-4 group w-[24px] h-[24px] bg-[#5f4fa1] rounded p-[2px]"
                >
                  <FaInstagram className="h-full w-auto" />
                </Link>
              </div>
            </ul>
          </div>
        </div>

        {/* Manzil */}
        <div className="mb-3 font-primaryMedium">
          <h1 className="font-bold mb-3 border-b-2 border-[#707070] w-full font-primaryBold">
            Rekvizitlar
          </h1>
          <ul>
            <li>Muassasa nomi: Qo'qon davlat universiteti</li>
            <li>Hisob raqami:</li>
            <li>STIR:</li>
            <li>MFO:</li>
            <li>Index:</li>
          </ul>
        </div>

        {/* Foydali */}
        <div className="mb-3 font-primaryMedium">
          <h1 className="font-bold mb-3 border-b-2 border-[#707070] w-full font-primaryBold">
            Universitet
          </h1>
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
        <div className="mb-3 font-primaryMedium">
          <h1 className="font-bold mb-3 border-b-2 border-[#707070] w-full font-primaryBold">
            Matbuot xizmati
          </h1>
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
        className="bg-[#5f4fa1] text-center md:flex md:justify-center px-2 py-2 z-50"
      >
        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-center lg:justify-between items-center text-white p-4">
          <p className="font-primaryMedium">
            Qo'qon davlat universiteti © 2025. Barcha huquqlar himoyalangan
          </p>
          <p className="flex flex-wrap justify-center items-center m-0">
            <span className="font-primaryRegular">
              Sayt ishlab chiqaruvchi:
            </span>
            <div className="flex items-center">
              <img
                className="w-[24px] h-[24px] ms-2 me-[2px]"
                src={Logo}
                alt="it park Logo"
              />{" "}
              <span className="max-w-[78px] text-xs font-primaryBold leading-3 mr-1">
                Qo'qon davlat universiteti
              </span>
            </div>
            <span className="font-primaryMedium text-sm">IT PARK</span>
          </p>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
