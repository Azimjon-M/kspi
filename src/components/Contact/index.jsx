import React, { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import TextTranslate from "../TextTranslate";
import APIContact from "../../services/contact";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const [data, setData] = useState(null);
  const Lang = useSelector((state) => state.reducerLang.isLang);

  const getData = () => {
    APIContact.get()
      .then((res) => setData(res?.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      iframe.setAttribute("loading", "lazy");
    });
  }, []);
  return (
    <div className="p-5 lg:p-10 flex justify-center md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)] bg-white">
      <div className="w-[1000px]">
        <h2 className=" text-xl md:text-4xl font-bold text-center text-[#004269]">
          <TextTranslate id="contactUs" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:my-10">
          {data &&
            data.map((item) => (
              <div className="bg-white" key={item.id}>
                <div className="py-2 lg:py-6 px-4 mx-auto max-w-screen-md">
                  <h2 className="py-2 text-lg font-bold lg:mb-16 text-center text-[#004269] dark:text-gray-400 sm:text-xl">
                    <TextTranslate id="location" />
                  </h2>
                  <div>
                    <div className="flex items-center mb-5 md:mb-10">
                      <FaMapLocationDot className="w-[40px] md:w-[60px] h-auto mr-4" />
                      <p className="text-[#004269]">{item[`manzil_${Lang}`]}</p>
                    </div>
                    <div className="flex items-center mb-5 md:mb-10">
                      <FaSquarePhone className="w-[40px] md:w-[60px] h-auto mr-4" />
                      <p className="text-[#004269]">
                        <a href={`tel:${item.telefon}`}>
                          <TextTranslate id="ishonchTelefon" />: {item.telefon}
                        </a>
                      </p>
                    </div>
                    <div className="flex items-center">
                      <MdMarkEmailUnread className="w-[40px] md:w-[60px] h-auto mr-4" />
                      <p className="text-[#004269]">
                        <a href={`mailto:${item.email_1}`}>{item.email_1}</a>
                        <br />
                        <a href={`mailto:${item.email_2}`}>{item.email_2}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <section className="bg-white py-6 px-4">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3032.5210227216608!2d70.925123!3d40.5300768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38baee945e333c8f%3A0xdbb4218e631b6996!2sKokand%20Pedagogical%20Institute!5e0!3m2!1sen!2s!4v1707112878107!5m2!1sen!2s"
              className="border-0 w-full h-[200px] md:h-[100%] md:w-[100%] lg:w-[450px] xl:w-[600px] mx-auto"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              samesite="None"
            ></iframe>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
