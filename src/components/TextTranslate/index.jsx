import React, { useEffect, useState } from "react";
import data from "../../languages/index.json";
import { useSelector } from "react-redux";

const TextTranslate = ({ id = "X_ID" }) => {
    const lang = useSelector((state) => state.reducerLang.isLang);
    const [text, setText] = useState(null);

    useEffect(() => {
        setText(data[lang][id]);
    }, [lang, id]);

    return <>{text}</>;
};

export default TextTranslate;