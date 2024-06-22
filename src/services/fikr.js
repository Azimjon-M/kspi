import axiosInstance from "./index";

const ep = "home/fikr/";

const get = () => axiosInstance.get(ep);


const APIFikr = { get };

export default APIFikr;