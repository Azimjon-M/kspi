import React from "react";
import Breadcrumb from "../Breadcrumb";
import TextTranslate from "../TextTranslate";
import institutImage from "../../assets/images/1.JPG";
import qoshmaTalim from "../../assets/images/1.JPG";
import Talabalar from "../../assets/images/1.JPG";
import XilmaXilTalabalar from "../../assets/images/1.JPG";
import farqQiladiganMoliyav from "../../assets/images/1.JPG";
import sportBilanBirga from "../../assets/images/1.JPG";

const InstitutHaqidaCom = () => {
  return (
    <div>
      <div className="border-b-2 border-[#004269] block w-full px-5 md:px-10">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="navDropInstitut_2" /> },
          ]}
        />
      </div>
      <div className="max-w-7xl mx-auto my-20">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-source text-center text-[#004269]">
          <TextTranslate id="haqida" />
          </h1>
        </div>
        <div className="px-2 md:px-10 xl:px-0">
          <p className="text-xl md:text-[2rem] font-light font_source md:leading-[3.5rem] text-center my-10">
          <TextTranslate id="haqidaTavsif" />
          </p>
        </div>
        <div className="px-4 xl:px-0 md:py-20">
          <img
            src={institutImage}
            className="w-full max-h-[547px] shadow-2xl rounded-xl opacity-75"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-source text-center text-[#004269]">
          <TextTranslate id="haqidaHeading" />
          </h1>
          <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
            <div className="z-10 mx-6 md:mx-0">
              <img
                src={institutImage}
                className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
                alt=""
              />
            </div>
            <div className="bg-[#F1F5F9] p-10 md:pl-28 md:pr-16 md:py-20 -mt-6 md:mt-0 md:-ml-16">
              <h3 className="text-2xl md:text-3xl font-medium"><TextTranslate id="haqidaTitle1" /></h3>
              <p className="text-md md:text-xl mt-3">
              <TextTranslate id="haqidaTavsif1" />
              </p>
            </div>
          </div>
          <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
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
          </div>
          <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
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
          </div>
        </div>
      </div>
      <div className="py-20 max-w-[1910px] mx-auto" style={{backgroundImage: `url(${require("../../assets/images/institutHaqidaCom/bacgroundSayt.png")})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
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
      </div>
    </div>
  );
};

export default InstitutHaqidaCom;