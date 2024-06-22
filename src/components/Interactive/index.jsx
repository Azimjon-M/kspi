import React from "react";
import { Link } from "react-router-dom";
import { RiComputerLine } from "react-icons/ri";
import { GiBookshelf } from "react-icons/gi";
import { MdOutlineLiveTv } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import TextTranslate from "../TextTranslate";
import { FaRegCalendarCheck, FaRegEye } from "react-icons/fa";

function Interactive() {


  return (
    <div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative -top-5 z-2 py-2 mb-20 bg-[#004269] rounded-lg shadow-lg">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <li className="w-full">
              <Link
                to="/qabulxona"
                className="flex flex-col justify-center items-center group md:my-9 my-3 sm:border-r border-[#ebebeb] text-center"
              >
                <RiComputerLine className="text-[40px] md:text-[50px] text-slate-300 group-hover:scale-125 group-hover:text-white transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs md:text-base mt-2 text-slate-200 font-bold">
                  <TextTranslate id="intVertualQabulxona" />
                </h2>
              </Link>
            </li>
            <li className="w-full">
              <Link
                to={"https://unilibrary.uz/"}
                target="blank"
                className="flex flex-col justify-center items-center group md:my-9 my-3 w-full md:border-r border-[#ebebeb] text-center"
              >
                <GiBookshelf className="text-[40px] md:text-[50px] text-slate-300 group-hover:scale-125 group-hover:text-white transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs md:text-base mt-2 text-slate-200 font-bold">
                  <TextTranslate id="intEKutubxona" />
                </h2>
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="http://moodle.kspi.uz/doc/page/login.asp?_1707299150792"
                className="flex flex-col justify-center items-center group md:my-9 my-3 w-full sm:border-r border-[#ebebeb] text-center"
              >
                <PiChalkboardTeacherFill className="text-[40px] md:text-[50px] text-slate-300 group-hover:scale-125 group-hover:text-white transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs md:text-base mt-2 text-slate-200 font-bold">
                  <TextTranslate id="intMasofaviyTalim" />
                </h2>
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/videomaruza"
                className="flex flex-col justify-center items-center group md:my-9 my-3 w-full md:border-r border-[#ebebeb] text-center"
              >
                <MdOutlineLiveTv className="text-[40px] md:text-[50px] text-slate-300 group-hover:scale-125 group-hover:text-white transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs md:text-base mt-2 text-slate-200 font-bold">
                  <TextTranslate id="intVideoMaruzalar" />
                </h2>
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/qabul"
                className="flex flex-col justify-center items-center group md:my-9 my-3 w-full sm:border-r border-[#ebebeb] text-center"
              >
                <FaRegCalendarCheck className="text-[40px] md:text-[50px] text-slate-300 group-hover:scale-125 group-hover:text-white transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs md:text-base mt-2 text-slate-200 font-bold">
                  <TextTranslate id="intQabul" />
                </h2>
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/kuzatish"
                className="flex flex-col justify-center items-center group md:my-9 my-3 w-full text-center"
              >
                <FaRegEye className="text-[40px] md:text-[50px] text-slate-300 group-hover:scale-125 group-hover:text-white transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs md:text-base mt-2 text-slate-200 font-bold">
                  <TextTranslate id="intImtixonlarniKuzatish" />
                </h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Interactive;
