const initialState = {
    isLang: "uz",
};

const reducerLang = (state = initialState, { type }) => {
    switch (type) {
        case "uz":
            return { isLang: (state.isLang = "uz") };
        case "ru":
            return { isLang: (state.isLang = "ru") };
        case "en":
            return { isLang: (state.isLang = "en") };
        default:
            return { isLang: (state.isLang = "uz") };
    }
};

export default reducerLang; 
