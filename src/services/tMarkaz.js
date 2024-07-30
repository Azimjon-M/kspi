import axiosInstance from ".";

const ep = "tuzilma/markaz/";
const epR = "tuzilma/markaz_rahbar/";
const epH = "tuzilma/markaz_hodim/"

const get = () => axiosInstance.get(ep);
const getR = () => axiosInstance.get(epR);
const getH = () => axiosInstance.get(epH);

const APITuzilmaRectorat = {
    get,
    getR,
    getH
};

export default APITuzilmaRectorat;
