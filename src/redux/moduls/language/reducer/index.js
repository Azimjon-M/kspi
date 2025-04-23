const initialState = {
    isLang: "uz",
};
const reducerLang = (state = initialState, { type }) => {
    switch (type) {
        case "uz":
            return { ...state, isLang: "uz" };
        case "ru":
            return { ...state, isLang: "ru" };
        case "en":
            return { ...state, isLang: "en" };
        case "xt":
            return { ...state, isLang: "xt" };
        default:
            return { ...state, isLang: "uz" };
    }
};
export default reducerLang;