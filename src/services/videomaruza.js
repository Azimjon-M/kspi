import axiosInstance from "./index";

const andPoint = "home/videomaruzalar/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIVideomaruza = { get, getById };

export default APIVideomaruza;