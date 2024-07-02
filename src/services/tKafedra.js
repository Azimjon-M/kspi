import axiosInstance from ".";

const ep = "tuzilma/kafedra/";
const epR = "tuzilma/kafedra_rahbar/";
const epH = "tuzilma/kafedra_hodim/"

const get = () => axiosInstance.get(ep);
const getR = () => axiosInstance.get(epR);
const getH = () => axiosInstance.get(epH);

const APITuzilmaRectorat = {
    get,
    getR,
    getH
};

export default APITuzilmaRectorat;
