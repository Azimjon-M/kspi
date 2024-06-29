import axiosInstance from "./index";

const andPoint = "abiturient/baxo_mezoni/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIBaholashMezon = { get, getById };

export default APIBaholashMezon;