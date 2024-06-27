import axiosInstance from "./index";

const andPoint = "abiturient/meyoriy/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIMeyoriy = { get, getById };

export default APIMeyoriy;