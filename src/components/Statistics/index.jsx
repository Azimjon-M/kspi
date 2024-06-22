import { React, useState } from "react";
import TextTranslate from "../TextTranslate";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Statistics() {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <div className="">
      <VisibilitySensor onChange={handleVisibilityChange}>
        <div className="g bg-[#F1F5F9] py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-[#2A485B] sm:text-4xl">
                  <TextTranslate id="intStatistika" />
                </h2>
                <p className="text-lg md:text-xl leading-8 text-[#2A485B]">
                  <TextTranslate id="intStatisTaytil" />
                </p>
              </div>
              <dl className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col bg-[#1b4769] p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    <TextTranslate id="intStatisTalabalar" />
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {isVisible && <CountUp end={16} duration={3} />}k+
                  </dd>
                </div>
                <div className="flex flex-col bg-[#1b4769] p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    <TextTranslate id="intStatisPhd" />
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {isVisible && <CountUp end={171} duration={3} />}
                  </dd>
                </div>
                <div className="flex flex-col bg-[#1b4769] p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    <TextTranslate id="intStatisOqituvchilar" />
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {isVisible && <CountUp end={517} duration={3} />}
                  </dd>
                </div>
                <div className="flex flex-col bg-[#1b4769] p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    <TextTranslate id="intStatisFanDoktorlar" />
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
    </div>
  );
}

export default Statistics;
