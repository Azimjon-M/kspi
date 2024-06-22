import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
// import APIGallery from "../../services/gallery";
import thayot1 from "../../assets/images/1.JPG"
import thayot2 from "../../assets/images/1.JPG"
import thayot3 from "../../assets/images/1.JPG"
import thayot4 from "../../assets/images/1.JPG"
import tadbir1 from "../../assets/images/1.JPG"
import tadbir2 from "../../assets/images/1.JPG"
import tadbir3 from "../../assets/images/1.JPG"
import tadbir4 from "../../assets/images/1.JPG"
import ilmiy1 from "../../assets/images/1.JPG"
import ilmiy2 from "../../assets/images/1.JPG"
import ilmiy3 from "../../assets/images/1.JPG"
import ilmiy4 from "../../assets/images/1.JPG"

import TextTranslate from "../TextTranslate/index";


const Gallery = () => {
  const [activeTab, setActiveTab] = useState("ilmiy");
  // const [data, setData] = useState(null);
  // const [dataTur, setDataTur] = useState(null);
  // console.log(dataTur);
  // console.log(data);

  // GET
  // const getTur = async () => {
  //   await APIGallery.getTur().then((res) => setDataTur(res.data));
  // };
  // const getData = async () => {
  //   await APIGallery.get().then((res) => setData(res.data));
  // };
  // useEffect(() => {
    // getTur();
    // getData();
  // });

  const pictures = [
    {
      label: <TextTranslate id="galleryTadbir" />,
      value: "tadbirlar",
      content: [
        tadbir1,
        tadbir2,
        tadbir3,
        tadbir4,
      ],
    },
    {
      label: <TextTranslate id="galleryIlmiy" />,
      value: "ilmiy",
      content: [
        ilmiy1,
        ilmiy2,
        ilmiy3,
        ilmiy4,
      ],
    },
    {
      label: <TextTranslate id="galleryTalaba" />,
      value: "talabalar_hayoti",
      content: [
        thayot1,
        thayot2,
        thayot3,
        thayot4,
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-5 md:my-16">
      <div className="p-4 md:flex mb-5 md:justify-between">
        <h2 className="text-2xl md:text-3xl lg:text-4xl max-w-56 mx-auto text-center font-bold text-[#004269] md:text-start mb-5 md:mb-0 lg:mx-5 xl:mx-10 md:border-r-8 border-[#004269] lg:pr-44">
          <TextTranslate id="gallerynomi" />
        </h2>
        <div className="md:mx-5 italic text-[18px] md:text-[25px] lg:text-[30px] lg:max-w-[700px] text-center md:text-start">
          <TextTranslate id="galleryIqtibos" />
        </div>
      </div>
      <Tabs id="custom-animation" value={activeTab} className="-z-10 md:py-10">
        <TabsHeader className="bg-[#eaf3ffa2] mx-2">
          {pictures?.map(({ label, value }) => (
            <Tab
              className={`text-xl font-semibold text-[#004269] ${
                activeTab === value ? "bg-white rounded" : ""
              }`}
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          className="z-0"
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {pictures?.map(({ value, content }) => (
            <TabPanel
              key={value}
              value={value}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {content.slice(0, 8).map((imageUrl, index) => (
                <img
                  key={index}
                  className="block h-full w-full object-cover object-center p-2 rounded-2xl hover:scale-105 ease-linear duration-300"
                  src={imageUrl}
                  alt="gallery"
                />
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Gallery;
