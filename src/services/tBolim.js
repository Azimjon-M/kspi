import axiosInstance from ".";

const ep = "tuzilma/bolim/";
const epR = "tuzilma/bolim_rahbar/";
const epH = "tuzilma/bolim_hodim/"

const get = () => axiosInstance.get(ep);
const getR = () => axiosInstance.get(epR);
const getH = () => axiosInstance.get(epH);

const APITuzilmaRectorat = {
    get,
    getR,
    getH
};

export default APITuzilmaRectorat;
