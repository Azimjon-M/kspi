import React from "react";
import "aos/dist/aos.css";
import TextTranslate from "../TextTranslate";
import Breadcrumb from "../Breadcrumb";
// import { useSelector } from "react-redux";

const YashilRaqamlarda = () => {
  // const Lang = useSelector((state) => state.reducerLang.isLang);
  // const [title, setTitle] = useState("");

  // useEffect(() => {
  //   switch (Lang) {
  //     case "uz":
  //       setTitle("title_uz");

  //       break;
  //     case "ru":
  //       setTitle("title_ru");
  //       break;
  //     case "en":
  //       setTitle("title_en");
  //       break;

  //     default:
  //       setTitle("title_uz");
  //       break;
  //   }
  // }, [Lang]);

  return (
    <section className="bg-gray-50 px-5 py-3 md:px-10 lg:px-20 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full mb-5 ">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="hedUniversitet-yashil" /> },
            { text: <TextTranslate id="yashilRaqamlarda" /> },
          ]}
        />
      </div>
      <div className="text-center my-1 md:my-3">
        <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269] text-center">
          <TextTranslate id="yashilRaqamlarda" />
        </h2>
      </div>
      <div className="text-center italic font-medium text-red-500 md:text-lg">Hozirda ma'lumot mavjud emas!</div>
    </section>
  );
};

export default YashilRaqamlarda;
