import React, { useState, useEffect } from "react";
import TextTranslate from "../TextTranslate";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import APITTJStatistika from "../../services/ttjStatistika";

function TTJStatistikaCom() {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await APITTJStatistika.get();
        setData(response.data.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <div>
      {/* TTJ statistics */}
      {data &&
        data.map((item) => {
          return (
            <div key={item.id} className="bg-[#F2F2F2] overflow-y-scroll py-14 mt-20">
              <div className="max-w-4xl mx-auto">
                <VisibilitySensor onChange={handleVisibilityChange}>
                  <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:mx-0">
                    <div className="border-b-4 md:border-b-0 md:border-r-4 border-[#004269] p-7">
                      <div className="bg-[#004269] text-center">
                        <p className="text-2xl text-white font-bold py-2">
                          <TextTranslate id="ttjStatisticTitle" />
                        </p>
                      </div>
                      <p className="num text-5xl font-bold text-center text-[#EB7D46] mt-4">
                        {isVisible && <CountUp end={item.talabalar} duration={4} />}
                      </p>
                      <p className="text-xl text-center font-bold mt-3">
                        <TextTranslate id="ttjStatisticTalaba" />
                      </p>
                    </div>
                    <div className="border-b-4 md:border-b-0 md:border-r-4 border-[#004269] p-7">
                      <div className="bg-[#004269] text-center">
                        <p className="text-2xl text-white font-bold py-2">
                          <TextTranslate id="ttjStatisticTitle" />
                        </p>
                      </div>
                      <p
                        id="counter"
                        className="num text-5xl font-bold text-center text-[#EB7D46] mt-4"
                      >
                        {isVisible && <CountUp end={item.xonalar} duration={5} />}
                      </p>
                      <p className="text-xl text-center font-bold mt-3">
                        <TextTranslate id="ttjStatisticXona" />
                      </p>
                    </div>
                    <div className="p-7">
                      <div className="bg-[#004269] text-center">
                        <p className="text-2xl text-white font-bold py-2">
                          <TextTranslate id="ttjStatisticTitle" />
                        </p>
                      </div>
                      <p className="num text-5xl font-bold text-center text-[#EB7D46] mt-4">
                        {isVisible && <CountUp end={item.binolar} duration={6} />}
                      </p>
                      <p className="text-xl text-center font-bold mt-3">
                        <TextTranslate id="ttjStatisticBino" />
                      </p>
                    </div>
                  </div>
                </VisibilitySensor>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TTJStatistikaCom;
