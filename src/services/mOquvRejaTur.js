import axiosInstance from "./index";

const andPoint = "talaba/magistr_oquv_reja_tur/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIMOquvRejaTur = { get, getById };

export default APIMOquvRejaTur;