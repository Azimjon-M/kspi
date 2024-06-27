import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import APIMadaniy from "../../services/faoliyatMadaniy";

const MadMarFaoliyatCom = () => {
  const [data, setData] = useState(null);
  const Lang = useSelector((state) => state.reducerLang.isLang);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    APIMadaniy.get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      {data &&
        data.map((item) => (
          <div key={item.id} className="p-4 max-w-7xl mx-auto content-item">
            <div className="text-center text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-bold text-black text-shadow my-5">
              {item[`title_${Lang}`]}
            </div>
            <p
              className="text-black mb-5"
              dangerouslySetInnerHTML={{ __html: item[`body_${Lang}`] }}
            ></p>
          </div>
        ))}
    </div>
  );
};

export default MadMarFaoliyatCom;
