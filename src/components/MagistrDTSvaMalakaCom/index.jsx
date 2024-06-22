import React from "react";
import TextTranslate from "../TextTranslate";
import { LuDownload } from "react-icons/lu";
import DTSvaMalakaPDF from "../../assets/pdf/DTSvaMalaka2020.pdf";

const dataPDF = [
  {
    id: 1,
    sana: "07.09.2023",
    name: "Oliy ta'limning davlat ta'lim standarti 2020",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 2,
    sana: "07.09.2023",
    name: "Oliy ta'limning davlat ta'lim standarti 2021",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 3,
    sana: "07.09.2023",
    name: "60110300-Maktabgacha ta'lim psixologiyasi va pedagogikasi malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 4,
    sana: "07.09.2023",
    name: "60112000-Chaqiriqqacha harbiy ta'lim malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 5,
    sana: "07.09.2023",
    name: "60110100-Pedagogika(Qo'shimcha tarbiya fani o'qituvchisi) malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 6,
    sana: "07.09.2023",
    name: "60110200-Maktabgacha ta'lim malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 7,
    sana: "07.09.2023",
    name: "60110600-Matematika va informatika malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 8,
    sana: "07.09.2023",
    name: "60110700-Fizika va astronomiya malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 9,
    sana: "07.09.2023",
    name: "60110800-Kimyo malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 10,
    sana: "07.09.2023",
    name: "60110300-Biologiya malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 11,
    sana: "07.09.2023",
    name: "60111000-Geografiya va iqtisodiy bilim asoslari malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 12,
    sana: "07.09.2023",
    name: "60111100-Tarix malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 13,
    sana: "07.09.2023",
    name: "60111200-Tasviriy san'at va muxandislik grafikasi malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 14,
    sana: "07.09.2023",
    name: "60111300-Musiqa ta'lim malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 15,
    sana: "07.09.2023",
    name: "60111400-O'zbek tili adabiyoti malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
];

function MagistrDTSvaMalakaCom() {
  return (
    <div className="max-w-7xl mx-auto py-16">
      <h1 className="text-md md: text-4xl font-bold text-[#004269] text-center">
      <TextTranslate id="dTSvaMalakaTalablari"/>
      </h1>
      <div className="relative shadow-md overflow-x-auto sm:rounded-lg mx-5 mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="md:text-base text-white uppercase bg-[#377DFF] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="pl-2 md:pl-6 py-4">
                №
              </th>
              <th scope="col" className="px-2 md:px-6 py-4">
              <TextTranslate id="DTSvaMalakaHujjatNomi"/>
              </th>
              <th scope="col" className="px-2 md:px-6 py-4 hidden md:block">
              <TextTranslate id="DTSvaMalakaSana"/>
              </th>
              <th scope="col" className="px-2 md:px-6 py-4">
              <TextTranslate id="DTSvaMalakaBatafsil"/>
              </th>
            </tr>
          </thead>
          <tbody className="text-base">
            {dataPDF &&
              dataPDF.map((item) => {
                const { id, sana, name } = item;
                return (
                  <tr
                    key={id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-200"
                  >
                    <th
                      scope="row"
                      className="pl-2 md:pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {id}
                    </th>
                    <td className="px-2 md:px-6 py-4">{name}</td>
                    <td className="px-2 md:px-6 py-4 hidden md:block">
                      {sana}
                    </td>
                    <td className="px-2 md:px-6 py-41">
                      <a
                        href={DTSvaMalakaPDF}
                        className="text-blue-600 dark:text-blue-500"
                        target="blank"
                      >
                        <LuDownload className="text-xl" />
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MagistrDTSvaMalakaCom;
