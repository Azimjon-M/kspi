import axiosInstance from "./index";

const andPoint = "talaba/bakalavr_oquv_reja_tur/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIBOquvRejaTur = { get, getById };

export default APIBOquvRejaTur;