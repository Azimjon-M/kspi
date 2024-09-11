import React from "react";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { FaTelegramPlane } from "react-icons/fa";
import TextTranslate from "../../components/TextTranslate";

const AuthorPage = () => {
    const data = [
        {
            name: "Azimjon Meliboev",
            phone: "+998912022444",
            email: "azimeliboev2000@gmail.com",
            tme: "https://t.me/Azimjon_Meliboev",
        },
        {
            name: "Nurmamatov Nodirbek",
            phone: "+998992226660",
            email: "nodirjon0927@gmail.com",
            tme: "https://t.me/nodirbek2709",
        },
        {
            name: "Tuychiyev Orifxon",
            phone: "+998905863595",
            email: "orifxontuychiyev@gmail.com",
            tme: "https://t.me/Orifxon_Tuychiyev",
        },
    ];
    return (
        <div>
            <div className="mt-8">
                <div className="flex justify-center items-center">
                    <h1 className="font-semibold text-[1.3rem] xl:text-[1.5rem] 2xl:text-[1.7rem]">
                        <TextTranslate id="authorTitle" />
                    </h1>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex justify-center items-center">
                    <h1 className="font-semibold text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.4rem]">
                        <TextTranslate id="authorSubTitle_1" />:
                    </h1>
                </div>
            </div>
            <div className="flex flex-wrap flex-col sm:flex-row sm:justify-center xl:text-[1.1rem] 2xl:text-[1.2rem] gap-2 md:gap-3 xl:gap-8 2xl:gap-12 p-2 md:p-4 lg:py-10">
                {data?.map((item, idx) => (
                    <div key={idx} className="bg-gray-200 rounded-md p-4">
                        <div className="text-center">
                            <h1 className="font-semibold">{item.name}</h1>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <FiPhone />{" "}
                            <a href={`tel:${item.phone}`}>{item.phone}</a>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <GoMail className="mt-1" />{" "}
                            <a href={`mailto:${item.email}`}>{item.email}</a>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <FaTelegramPlane className="mt-1" />{" "}
                            <a href={item.tme}>{item.tme}</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <div className="flex justify-center items-center">
                    <h1 className="font-semibold text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.4rem]">
                        <TextTranslate id="authorSubTitle_2" />:
                    </h1>
                </div>
            </div>
            <div className="flex flex-wrap flex-col sm:flex-row sm:justify-center xl:text-[1.1rem] 2xl:text-[1.2rem] p-2 md:p-4 lg:py-10">
                <div className="bg-gray-200 rounded-md p-4">
                    <div className="text-center">
                        <h1 className="font-semibold">Hatamov Fazliddin</h1>
                    </div>
                    <div className="flex justify-center items-center gap-x-2">
                        <FiPhone /> +998908526598
                    </div>
                    <div className="flex justify-center items-center gap-x-2">
                        <GoMail className="mt-1" />{" "}
                        hatamovfazliddin505@gmail.com
                    </div>
                    <div className="flex justify-center items-center gap-x-2">
                        <FaTelegramPlane className="mt-1" />{" "}
                        https://t.me/fazliddin98
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorPage;
