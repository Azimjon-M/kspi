import axiosInstance from "./index";

const andPoint = "talaba/bakalavr/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIBakalavr = { get, getById };

export default APIBakalavr;