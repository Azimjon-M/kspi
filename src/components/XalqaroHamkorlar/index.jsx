import React from "react";
import TextTranslate from "../TextTranslate";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";

const datafaik = [
  {
    id: 1,
    country_uz: "Angliya",
    country_ru: "Англия",
    country_en: "England",
    name_uz: "Cambridge universiteti",
    name_ru: "Кембриджский университет",
    name_en: "University of Cambridge",
    description_uz: "This is a description for item uz",
    description_ru: "This is a description for item ru",
    description_en: "This is a description for item en",
  },
  {
    id: 2,
    country_uz: "Germaniya",
    country_ru: "Германия",
    country_en: "Germany",
    name_uz: "Berlin universiteti",
    name_ru: "Берлинский университет",
    name_en: "Berlin universities",
    description_uz: "This is a description for item uz",
    description_ru: "This is a description for item ru",
    description_en: "This is a description for item en",
  },
  {
    id: 3,
    country_uz: "Turkiya",
    country_ru: "Турция",
    country_en: "Turkey",
    name_uz: "Anqara universiteti",
    name_ru: "Университет Анкары",
    name_en: "Ankara University",
    description_uz: "This is a description for item uz",
    description_ru: "This is a description for item ru",
    description_en: "This is a description for item en",
  },
];

const XalqaroHamkorlar = () => {
  return (
    <section className="bg-gray-50 px-5 py-3 md:px-10 lg:px-20 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full mb-5 ">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="faoliyat" /> },
            { text: <TextTranslate id="xalqaroHamkorlar" /> },
          ]}
        />
      </div>
      <div className="text-center my-1 md:my-3">
        <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269] text-center">
          <TextTranslate id="xalqaroHamkorlar" />
        </h2>
      </div>
      {/* Uzbek */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-3">
        <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
          {datafaik &&
            datafaik.map((item) => (
              <Link class="flex flex-col p-3 hover:bg-slate-200" to={`${item.id}`}>
                <dt class="mb-1 text-blue-500 md:text-lg dark:text-gray-400">
                  {item.country_uz}
                </dt>
                <dd class="text-lg text-blue-900 font-semibold">
                  {item.name_uz}
                </dd>
              </Link>
            ))}
        </dl>
        {/* Rus */}
        <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        {datafaik &&
            datafaik.map((item) => (
              <div class="flex flex-col p-3 hover:bg-slate-200">
                <dt class="mb-1 text-blue-500 md:text-lg dark:text-gray-400">
                  {item.country_ru}
                </dt>
                <dd class="text-lg text-blue-900 font-semibold">
                  {item.name_ru}
                </dd>
              </div>
            ))}
        </dl>
        {/* english */}
        <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        {datafaik &&
            datafaik.map((item) => (
              <div class="flex flex-col p-3 hover:bg-slate-200">
                <dt class="mb-1 text-blue-500 md:text-lg dark:text-gray-400">
                  {item.country_en}
                </dt>
                <dd class="text-lg text-blue-900 font-semibold">
                  {item.name_en}
                </dd>
              </div>
            ))}
        </dl>
      </div>
    </section>
  );
};

export default XalqaroHamkorlar;
