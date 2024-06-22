import axiosInstance from "./index";

const ep = "tuzilma/fakultet/";
const epR = "tuzilma/fakultet_rahbar/";

const get = () => axiosInstance.get(ep);
const getR = () => axiosInstance.get(epR);

const APITuzilmaRectorat = {
    get,
    getR,
};

export default APITuzilmaRectorat;
