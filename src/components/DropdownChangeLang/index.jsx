import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaAngleRight } from "react-icons/fa";
import flag_uz from "../../assets/icons/flag-uz.png";
import flag_ru from "../../assets/icons/flag-ru.png";
import flag_en from "../../assets/icons/flag-en.png";
import {
    setLangUz,
    setLangRu,
    setLangEn,
} from "../../redux/moduls/language/action/";

// Tillarni obyekt sifatida saqlaymiz
const languages = [
    { id: "1", code: "Uz", flag: flag_uz },
    { id: "2", code: "Ru", flag: flag_ru },
    { id: "3", code: "En", flag: flag_en },
];

const LanguageDropdown = () => {
    const [togglerLangDrop, setTogglerLangDrop] = useState(false);

    // Redux store dan faol tilni olamiz
    const isLang = useSelector((state) => state.reducerLang.isLang) || "1"; // Default "1" (Uz)
    const dispatch = useDispatch();

    // `isLang` ni tekshirish va agar noto‘g‘ri bo‘lsa, default qiymat qo‘yish
    useEffect(() => {
        const validLang = languages.some((lang) => lang.id === isLang);
        if (!validLang) {
            dispatch(setLangUz()); // Default "Uz" ga o‘zgartiramiz
        }
    }, [isLang, dispatch]);

    // Faol tilni aniqlash, agar topilmasa default tilni qaytarish
    const activeLang =
        languages.find((lang) => lang.id === isLang) || languages[0];

    // Faol bo‘lmagan tillarni filtr qilish
    const availableLanguages = languages.filter((lang) => lang.id !== isLang);

    // Tilni o‘zgartirish funksiyasi
    const handliTogleLang = (numb) => {
        switch (numb) {
            case "1":
                dispatch(setLangUz());
        console.log(numb);

                break;
            case "2":
                dispatch(setLangRu());
        console.log(numb);

                break;
            case "3":
                dispatch(setLangEn());
        console.log(numb);

                break;
            default:
                dispatch(setLangUz());
                break;
        }
        setTogglerLangDrop(false); // Til o‘zgartirilganda dropdown ni yopamiz
    };

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
                            src={activeLang.flag}
                            alt={`${activeLang.code} flag`}
                        />
                    </div>
                    <span className="text-[12px] font-thin">
                        {activeLang.code}
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
                } z-50 font-medium absolute left-[50%] translate-x-[-50%] bg-gray-50 rounded-lg p-2 min-w-[140px]`}
            >
                {availableLanguages.map((lang) => (
                    <li key={lang.id} className="flex items-center w-full gap-x-2">
                        <button
                            onClick={() => handliTogleLang(lang.id)}
                            className="text-black btn btn-sm btn-ghost w-full flex justify-start items-center gap-x-2"
                        >
                            <div className="w-[20px] h-[20px] overflow-hidden rounded-full">
                                <img
                                    className="w-full h-full"
                                    src={lang.flag}
                                    alt={`${lang.code} flag`}
                                />
                            </div>
                            <span>{lang.code}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageDropdown;
