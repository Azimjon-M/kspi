import axiosInstance from "./index";

const andPoint = "abiturient/magistr/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIMagistr = { get, getById };

export default APIMagistr;