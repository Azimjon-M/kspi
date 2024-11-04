import React from "react";
import TextTranslate from "../TextTranslate";
import { FaRegCalendarAlt } from "react-icons/fa";

function Curriculum() {
  return (
    <div className="bg-slate-100">
      <div className="max-w-xs md:max-w-7xl mx-auto md:py-16 py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-[#004269] text-center">
          <TextTranslate id="oquvDasturlari"/>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-10 lg:mx-0 mt-12">
          <div className="flex w-full h-[140px] bg-white p-3 rounded-2xl duration-200 hover:scale-105 shadow-md hover:shadow-lg">
            <div className="w-[200px]">
              <img
                className="rounded-md w-full h-full object-fill"
                src="https://img.freepik.com/free-vector/hand-drawn-science-background-theme_23-2148538097.jpg?w=1380&t=st=1702876479~exp=1702877079~hmac=dc71321736e991365d2d2ac2ef81b5d2999e33b5d5624438d47a2496282d6a51"
                alt=""
              />
            </div>
            <div className="pl-3 w-full">
              <h2 className="text-md md:text-xl font-medium text-slate-600">
                <TextTranslate id="fanlarKatalog"/>
              </h2>
              <p className="text-sm flex items-center">
                <span>
                  <FaRegCalendarAlt className="mr-1" />
                </span>
                12.12.2023
              </p>
              <div className="text-end">
                <button className="text-sm bg-[#004269] text-white mt-5 md:mt-4 px-2 py-1 rounded-md">
                <TextTranslate id="oquvDasturlariBatafsil"/>
                </button>
              </div>
            </div>
          </div>
          <div className="flex h-[140px] bg-white p-3 rounded-2xl duration-200 hover:scale-105 shadow-md hover:shadow-lg">
            <div className="w-[200px]">
              <img
                className="rounded-md w-full h-full object-fill"
                src="https://static.imtihonlar.uz/crop/1/3/832__85_1367880221.jpg?t=1712574204"
                alt=""
              />
            </div>
            <div className="pl-3 w-full">
              <h2 className="text-md md:text-xl font-medium text-slate-600">
              <TextTranslate id="bakalavrMalakaTalablari"/>
              </h2>
              <p className="text-sm flex items-center">
                <span>
                  <FaRegCalendarAlt className="mr-1" />
                </span>
                12.12.2023
              </p>
              <div className="text-end">
                <button className="text-sm bg-[#004269] text-white mt-5 md:mt-4 lg:mt-4 px-2 py-1 rounded-md">
                <TextTranslate id="oquvDasturlariBatafsil"/>
                </button>
              </div>
            </div>
          </div>
          <div className="flex h-[140px] bg-white bg p-3 rounded-2xl duration-200 hover:scale-105 shadow-md hover:shadow-lg">
            <div className="w-[200px]">
              <img
                className="rounded-md w-full h-full object-fill"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQ_bsktOs4EYLUQZ2sw6vj06ND3lciL4f7g&usqp=CAU"
                alt=""
              />
            </div>
            <div className="pl-3 w-full">
              <h2 className="text-md md:text-xl font-medium text-slate-600">
              <TextTranslate id="magistrMalakaTalablari"/>
              </h2>
              <p className="text-sm flex items-center">
                <span>
                  <FaRegCalendarAlt className="mr-1" />
                </span>
                12.12.2023
              </p>
              <div className="text-end">
                <button className="text-sm bg-[#004269] text-white mt-5 md:mt-4 lg:mt-4 px-2 py-1 rounded-md">
                  <TextTranslate id="oquvDasturlariBatafsil"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
