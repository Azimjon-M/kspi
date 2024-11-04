import React, { useState, useEffect, memo } from "react";
import TextTranslate from "../TextTranslate";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import APIXalqaroHamkorlar from "../../services/xalqaroHamkorlar";

// LanguageSection - Qayta ishlatiladigan til bo'limi
const LanguageSection = memo(({ data, languageKey }) => (
  <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
    {data.map((item) => (
      <Link key={item.id} to={`${languageKey}/${item.id}`} className="flex flex-col p-3 hover:bg-slate-200">
        <dt className="mb-1 text-blue-500 md:text-lg dark:text-gray-400">
          {item[`davlat_${languageKey}`]}
        </dt>
        <dd className="text-lg text-blue-900 font-semibold">
          {item[`name_${languageKey}`]}
        </dd>
      </Link>
    ))}
  </dl>
));

const XalqaroHamkorlar = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await APIXalqaroHamkorlar.get();
        const sortedData = res.data.sort(
          (a, b) => new Date(b.sana) - new Date(a.sana)
        );
        if (isMounted) {
          setData(sortedData);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError("Ma'lumotni yuklashda xato yuz berdi.");
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <div>Yuklanmoqda...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="bg-gray-50 px-5 py-3 md:px-10 lg:px-20 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full mb-5">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="faoliyat" /> },
            { text: <TextTranslate id="xalqaroHamkorlar" /> },
          ]}
        />
      </div>
      <div className="text-center my-1 md:my-3">
        <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269]">
          <TextTranslate id="xalqaroHamkorlar" />
        </h2>
      </div>
      <div className="max-w-[1600px] mx-auto grid grid-cols-3">
        <LanguageSection data={data} languageKey="uz" />
        <LanguageSection data={data} languageKey="ru" />
        <LanguageSection data={data} languageKey="en" />
      </div>
    </section>
  );
};

export default XalqaroHamkorlar;
