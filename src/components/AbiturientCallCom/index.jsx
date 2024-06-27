import React, { useState, useEffect } from "react";
import { LuPhoneCall } from "react-icons/lu";
import TextTranslate from "../TextTranslate";
import APICall from "../../services/abiturientCall";
import { useSelector } from "react-redux";
import callImg from "../../assets/images/call.jpg"

const AbiturientCallCom = () => {
  const [data, setData] = useState(null);
  const Lang = useSelector((state) => state.reducerLang.isLang);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    APICall.get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="mb-8">
      <div className="relative">
        <img src={callImg} alt="Call-center" className="w-full" />
        <h3 className="absolute top-5 sm:top-10 md:top-14 lg:top-28 xl:top-32 w-56 md:w-96 lg:w-3/5 left-3 md:left-8 lg:left-20 font-semibold sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-7xl text-[#004269] text-center xl:text-start">
          <TextTranslate id="abiCall" />
        </h3>
      </div>
      {data && data.map((item) => (
        <div className="px-5 xl:px-10 content-item" key={item.id}>
          <h1 className="text-center text-2xl md:text-3xl xl:text-5xl font-semibold py-3 md:py-5 text-[#004269]">
          {item[`title_${Lang}`]}
          </h1>
          <div className="max-w-7xl md:grid md:grid-cols-2 xl:grid-cols-3 mx-auto md:px-3 2xl:px-0">
            <div className="xl:col-span-2 mb-5" dangerouslySetInnerHTML={{ __html: item[`body_${Lang}`] }}>

            </div>
            <div className="ml-auto">
              <ul className="border-2 p-5 border-[#004269] rounded text-center">
                <h4 className="font-semibold mb-3 text-2xl text-[#004269]">
                  <TextTranslate id="abiCallRaqamlar" />:
                </h4>
                <li className="mb-2">
                  <a
                    href={`tel:{item.tel_nomer_1}`}
                    className="flex items-center justify-center text-xl hover:scale-110 duration-150"
                  >
                    <LuPhoneCall className="mr-2 text-[#004269]" />
                    {item.tel_nomer_1}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AbiturientCallCom;
