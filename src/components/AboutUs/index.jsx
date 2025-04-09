import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import APIStatistics from "../../services/statistics";
import { useSelector } from "react-redux";
import TextTranslate from "../TextTranslate";
import BizningMaqsad from "../../assets/images/bizningMaqsad.png";
import Logo from "../../assets/icons/logo.png"

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState(null);
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const visibilitySensorRef = useRef(null); // Ref for VisibilitySensor

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    APIStatistics.get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${BizningMaqsad})` }}
      className="relative bg-cover bg-right py-12"
    >
      <div className="absolute inset-0 bg-[#5f4fa1]/60" />
      <div className="flex items-center justify-center gap-5 px-6 relative z-10 max-w-md mx-auto">
        <img src={Logo} alt="logo" />
        <div className="text-3xl md:text-4xl text-white font-primaryMedium">Qo'qon davlat universiteti</div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-0 my-20 relative z-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-source text-center text-white">
            <TextTranslate id="bizningMaqsadimiz" />
          </h1>
        </div>
        <div className="px-2 md:px-10 xl:px-0">
          <p className="text-md md:text-[1.2rem] font-light text-center text-white my-8">
            <TextTranslate id="bizHaqimizda" />
          </p>
        </div>
      </div>
      <div className="relative z-10">
        {data &&
          data.map((item) => (
            <VisibilitySensor
              key={item.id}
              onChange={handleVisibilityChange}
              partialVisibility={true}
              delayedCall={true}
              ref={visibilitySensorRef}
            >
              <div className="py-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center space-y-4">
                      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {item[`statistika_title_${Lang}`]}
                      </h2>
                    </div>
                    <dl className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                      <div className="flex flex-col bg-[#dedef04c] p-8">
                        <dt className="text-sm font-semibold leading-6 text-white">
                          {item[`talaba_title_${Lang}`]}
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                          {isVisible && (
                            <CountUp end={item.talaba_nomer} duration={3} />
                          )}
                          +
                        </dd>
                      </div>
                      <div className="flex flex-col bg-[#dedef04c] p-8">
                        <dt className="text-sm font-semibold leading-6 text-white">
                          {item[`phd_title_${Lang}`]}
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                          {isVisible && (
                            <CountUp end={item.phd_nomer} duration={3} />
                          )}
                        </dd>
                      </div>
                      <div className="flex flex-col bg-[#dedef04c] p-8">
                        <dt className="text-sm font-semibold leading-6 text-white">
                          {item[`oqituvchi_title_${Lang}`]}
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                          {isVisible && (
                            <CountUp end={item.oqituvchi_nomer} duration={3} />
                          )}
                        </dd>
                      </div>
                      <div className="flex flex-col bg-[#dedef04c] p-8">
                        <dt className="text-sm font-semibold leading-6 text-white">
                          {item[`fan_doktiri_title_${Lang}`]}
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                          {isVisible && (
                            <CountUp
                              end={item.fan_doktiri_nomer}
                              duration={3}
                            />
                          )}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </VisibilitySensor>
          ))}
      </div>
    </div>
  );
}

export default AboutUs;
