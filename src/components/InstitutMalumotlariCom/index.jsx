import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import APIInstitutMalumotlari from "../../services/institutMalumotlari";
import TextTranslate from "../TextTranslate";

function InstitutMalumotlariCom() {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await APIInstitutMalumotlari.get();
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log(data);

  return (
    <div>
      <div className="max-w-7xl mx-auto my-20">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-source text-center text-[#004269]">
            <TextTranslate id="haqidaHeading" />
          </h1>
          {data &&
            data.map((item, index) => {
              const isEvin = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32"
                >
                  <div className={`z-10 mx-6 md:mx-0 ${isEvin ? '' : 'md:order-last'}`}>
                    <img
                      src={item.rasm}
                      className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
                      alt=""
                    />
                  </div>
                  <div className={`bg-[#F1F5F9] p-10 md:py-20 -mt-6 md:mt-0 md:-ml-16 ${isEvin ? 'md:pl-28 md:pr-16' : 'md:pl-16 md:pr-28'}`}>
                    <h3 className="text-2xl md:text-3xl font-medium">
                      {item && item[`title_${Lang}`]}
                    </h3>
                    <p className="text-md md:text-xl mt-3">
                      {item && item[`body_${Lang}`]}
                    </p>
                  </div>
                </div>
              );
            })}
          {/* <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
            <div className="z-10 mx-6 md:mx-0 md:order-last">
              <img
                src={qoshmaTalim}
                className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
                alt=""
              />
            </div>
            <div className="bg-[#F1F5F9] p-10 md:pl-16 md:pr-28 md:py-20 -mt-6 md:mt-0 md:-mr-16">
              <h3 className="text-2xl md:text-3xl font-medium">
                <TextTranslate id="haqidaTitle2" />
              </h3>
              <p className="text-md md:text-xl mt-3">
                <TextTranslate id="haqidaTavsif2" />
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default InstitutMalumotlariCom;
{
  /* <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
  <div className="z-10 mx-6 md:mx-0">
    <img
      src={Talabalar}
      className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
      alt=""
    />
  </div>
  <div className="bg-[#F1F5F9] p-10 md:pl-28 md:pr-16 md:py-20 -mt-6 md:mt-0 md:-ml-16">
    <h3 className="text-2xl md:text-3xl font-medium">
      <TextTranslate id="haqidaTitle3" />
    </h3>
    <p className="text-md md:text-xl mt-3">
      <TextTranslate id="haqidaTavsif3" />
    </p>
  </div>
</div> */
}

{
  /* <div
  className="py-20 max-w-[1910px] mx-auto"
  style={{
    backgroundImage: `url(${require("../../assets/images/institutHaqidaCom/bacgroundSayt.png")})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
>
  <div className="max-w-7xl mx-auto">
    <h1 className="text-3xl md:text-4xl font-bold font-source text-center text-[#ffffff]">
      <TextTranslate id="kirish" />
    </h1>
    <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
      <div className="z-10 mx-6 md:mx-0">
        <img
          src={XilmaXilTalabalar}
          className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
          alt=""
        />
      </div>
      <div className="bg-[#F1F5F9] p-10 md:pl-28 md:pr-16 md:py-20 -mt-6 md:mt-0 md:-ml-16">
        <h3 className="text-2xl md:text-3xl font-medium">
          <TextTranslate id="haqidaTitle4" />
        </h3>
        <p className="text-md md:text-xl mt-3">
          <TextTranslate id="haqidaTavsif4" />
        </p>
      </div>
    </div>
    <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
      <div className="z-10 mx-6 md:mx-0 md:order-last">
        <img
          src={farqQiladiganMoliyav}
          className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
          alt=""
        />
      </div>
      <div className="bg-[#F1F5F9] p-10 md:pl-16 md:pr-28 md:py-20 -mt-6 md:mt-0 md:-mr-16">
        <h3 className="text-2xl md:text-3xl font-medium">
          <TextTranslate id="haqidaTitle5" />
        </h3>
        <p className="text-md md:text-xl mt-3">
          <TextTranslate id="haqidaTavsif5" />
        </p>
      </div>
    </div>
  </div>
</div>
<div className="max-w-7xl mx-auto">
  <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
    <div className="z-10 mx-6 md:mx-0">
      <img
        src={sportBilanBirga}
        className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
        alt=""
      />
    </div>
    <div className="bg-[#F1F5F9] p-10 md:pl-28 md:pr-16 md:py-20 -mt-6 md:mt-0 md:-ml-16">
      <h3 className="text-2xl md:text-3xl font-medium">
        <TextTranslate id="haqidaTitle6" />
      </h3>
      <p className="text-md md:text-xl mt-3">
        <TextTranslate id="haqidaTavsif6" />
      </p>
    </div>
  </div>
</div> */
}
