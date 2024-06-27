import axiosInstance from "./index";

const andPoint = "abiturient/qabulhujatlari/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIXorijiyTalaba = { get, getById };

export default APIXorijiyTalaba;