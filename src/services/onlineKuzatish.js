import axiosInstance from ".";

const ep = "home/efir_name/";
const epN = "home/efir/";

const get = () => axiosInstance.get(ep);
const getE = () => axiosInstance.get(epN);

const APITuzilmaRectorat = {
    get,
    getE,
};

export default APITuzilmaRectorat;
