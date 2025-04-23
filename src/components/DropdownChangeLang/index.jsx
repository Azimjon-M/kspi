import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaAngleRight } from "react-icons/fa";
import flag_uz from "../../assets/icons/flag-uz.png";
import flag_ru from "../../assets/icons/flag-ru.png";
import flag_en from "../../assets/icons/flag-en.png";
import flag_xt from "../../assets/icons/flag-xt.png";
import {
    setLangUz,
    setLangRu,
    setLangEn,
    setLangXt,
} from "../../redux/moduls/language/action/";
import TextTranslate from "../TextTranslate/index";

// Tillarni obyekt sifatida saqlaymiz
const languages = [
    { code: "uz", label: "hedLangUz", flag: flag_uz },
    { code: "ru", label: "hedLangRu", flag: flag_ru },
    { code: "en", label: "hedLangEn", flag: flag_en },
    { code: "xt", label: "hedLangXt", flag: flag_xt },
];

const LanguageDropdown = () => {
    const [togglerLangDrop, setTogglerLangDrop] = useState(false);

    // Redux store dan faol tilni olamiz
    const isLang = useSelector((state) => state.reducerLang.isLang);
    const dispatch = useDispatch();

    // `isLang` ni tekshirish va agar noto‘g‘ri bo‘lsa, default qiymat qo‘yish
    useEffect(() => {
        const validLang = languages.some((lang) => lang.code === isLang);
        if (!validLang) {
            console.log("Invalid language, setting to uz");
            dispatch(setLangUz()); // Default "uz" ga o‘zgartiramiz
        }
    }, [isLang, dispatch]);

    // Faol tilni aniqlash, agar topilmasa default tilni qaytarish
    const activeLang =
        languages.find((lang) => lang.code === isLang) || languages[0];

    // Faol bo‘lmagan tillarni filtr qilish
    const availableLanguages = languages.filter((lang) => lang.code !== isLang);

    // Tilni o‘zgartirish funksiyasi
    const handleToggleLang = (code) => {
        switch (code) {
            case "uz":
                dispatch(setLangUz());
                break;
            case "ru":
                dispatch(setLangRu());
                break;
            case "en":
                dispatch(setLangEn());
                break;
            case "xt":
                console.log("xt sihladi!");
                dispatch(setLangXt());
                break;
            default:
                dispatch(setLangUz());
                break;
        }
        setTogglerLangDrop(false); // Til o‘zgartirilganda dropdown ni yopamiz
    };

    // Debug uchun isLang o‘zgarishini kuzatish
    useEffect(() => {
        console.log("Current language:", isLang);
    }, [isLang]);

    return (
        <div
            onMouseEnter={() => setTogglerLangDrop(true)}
            onMouseLeave={() => setTogglerLangDrop(false)}
            className="relative font-medium mx-4"
        >
            {/* Dropdown ochuvchisi */}
            <div>
                <button className="btn btn-sm btn-ghost flex items-center gap-x-2 px-2">
                    <div className="w-[20px] h-[20px] overflow-hidden rounded-full">
                        <img
                            className="w-full h-full"
                            src={activeLang?.flag}
                            alt={`${activeLang?.label} flag`}
                        />
                    </div>
                    <span className="text-[12px] font-thin">
                        <TextTranslate id={activeLang?.label} />
                    </span>
                    <FaAngleRight
                        className={`transition-transform duration-200 ${
                            togglerLangDrop
                                ? "rotate-[270deg]"
                                : "rotate-[90deg]"
                        } style-slide-nav`}
                    />
                </button>
            </div>

            {/* Dropdown menyusi */}
            <ul
                className={`${
                    togglerLangDrop ? "block" : "hidden"
                } z-50 font-medium absolute left-[50%] translate-x-[-50%] bg-gray-50 rounded-lg p-2 min-w-[160px]`}
            >
                {availableLanguages?.map((lang) => (
                    <li
                        key={lang?.code}
                        className="flex items-center w-full gap-x-2"
                    >
                        <button
                            onClick={() => handleToggleLang(lang?.code)}
                            className="text-black btn btn-sm btn-ghost w-full flex justify-start items-center gap-x-2"
                        >
                            <div className="w-[20px] h-[20px] overflow-hidden rounded-full">
                                <img
                                    className="w-full h-full"
                                    src={lang?.flag}
                                    alt={`${lang?.label} flag`}
                                />
                            </div>
                            <TextTranslate id={lang?.label} />{" "}
                            {/* Bu yerda o'zgartirish */}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageDropdown;
