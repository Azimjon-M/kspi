import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import APIGallery from "../../services/gallery";
import APIGalleryTur from "../../services/galleryTur";
import TextTranslate from "../TextTranslate/index";
import { useSelector } from "react-redux";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [dataTur, setDataTur] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [initialActiveTab, setInitialActiveTab] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const Lang = useSelector((state) => state.reducerLang.isLang);

  // GET Gallery Types
  const getTurData = async () => {
    try {
      const res = await APIGalleryTur.get();
      setDataTur(res.data);
    } catch (error) {
      console.error("Error fetching gallery types:", error);
    }
  };

  // GET Gallery Data
  const getData = async () => {
    try {
      const res = await APIGallery.get();
      setData(res.data);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  };

  useEffect(() => {
    getTurData();
    getData();
  }, []);

  useEffect(() => {
    if (dataTur?.length && data?.length) {
      const combinedData = dataTur.map((tur) => {
        const label = tur[`tur_${Lang}`];
        return {
          label: label || 'Default Label', // Fallback
          value: tur.id,
          content: data
            .filter((item) => item.tur_id === tur.id)
            .map((item) => item.rasm),
        };
      });
      setPictures(combinedData);

      // Faqat initialActiveTab hali set qilinmagan bo'lsa set qiling
      if (initialActiveTab === null && combinedData.length > 0) {
        const middleIndex = Math.floor(combinedData.length / 2);
        const middleTabValue = combinedData[middleIndex].value;
        setInitialActiveTab(middleTabValue);
        setActiveTab(middleTabValue);
      }
    }
  }, [dataTur, data, Lang, initialActiveTab]);

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
      {initialActiveTab && (
        <Tabs
          id="custom-animation"
          value={activeTab}
          className="-z-10 md:py-10"
        >
          <TabsHeader className="bg-[#eaf3ffa2] mx-2">
            {pictures?.map(({ label, value }) => (
              <Tab
                key={value}
                className={`text-xl font-semibold text-[#004269] ${
                  activeTab === value ? "bg-white rounded" : ""
                }`}
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
                {content.slice(0, 4).map((imageUrl, index) => (
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
      )}
    </div>
  );
};

export default Gallery;
