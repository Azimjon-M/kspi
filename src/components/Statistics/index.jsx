import { React, useState, useEffect } from "react";
// import TextTranslate from "../TextTranslate";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import APIStatistics from "../../services/statistics";

function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState(null);

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
  console.log(data);

  return (
    <div className="">
      {data &&
        data.map((item) => (
          <VisibilitySensor onChange={handleVisibilityChange} key={item.id}>
            <div className="g bg-[#F1F5F9] py-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-[#2A485B] sm:text-4xl">
                      {item.statistika_title_uz}
                    </h2>
                    <p className="text-lg md:text-xl leading-8 text-[#2A485B]">
                      {item.statistika_text_uz}
                    </p>
                  </div>
                  <dl className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col bg-[#1b4769] p-8">
                      <dt className="text-sm font-semibold leading-6 text-gray-300">
                        {item.talaba_title_uz}
                      </dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                        {isVisible && item.talaba_nomer}k+
                      </dd>
                    </div>
                    <div className="flex flex-col bg-[#1b4769] p-8">
                      <dt className="text-sm font-semibold leading-6 text-gray-300">
                        {item.phd_title_uz}
                      </dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                        {isVisible && <CountUp end={171} duration={3} />}
                      </dd>
                    </div>
                    <div className="flex flex-col bg-[#1b4769] p-8">
                      <dt className="text-sm font-semibold leading-6 text-gray-300">
                        {item.oqituvchi_title_uz}
                      </dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                        {isVisible && <CountUp end={517} duration={3} />}
                      </dd>
                    </div>
                    <div className="flex flex-col bg-[#1b4769] p-8">
                      <dt className="text-sm font-semibold leading-6 text-gray-300">
                        {item.fan_doktiri_title_uz}
                      </dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                        {isVisible && <CountUp end={10} duration={3} />}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </VisibilitySensor>
        ))}
    </div>
  );
}

export default Statistics;