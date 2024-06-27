import axiosInstance from "./index";

const andPoint = "home/masofaviytalim/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIMasofaviy = { get, getById };

export default APIMasofaviy;