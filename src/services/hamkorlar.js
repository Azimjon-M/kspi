import axiosInstance from "./index";

const andPoint = "home/hamkorlarimiz/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIHamkor = { get, getById };

export default APIHamkor;