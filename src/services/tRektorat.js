import axiosInstance from ".";

const ep = "tuzilma/rektorat/";
const epN = "tuzilma/rektorat_rahbar/";

const get = () => axiosInstance.get(ep);
const getN = () => axiosInstance.get(epN);

const APITuzilmaRectorat = {
    get,
    getN,
};

export default APITuzilmaRectorat;
