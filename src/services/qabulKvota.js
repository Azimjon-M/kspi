import axiosInstance from "./index";

const andPoint = "abiturient/kvota/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIQabulKvota = { get, getById };

export default APIQabulKvota;