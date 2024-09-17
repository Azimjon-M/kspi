import axiosInstance from "./index";

const andPoint = "talaba/bakalavr_fan_dastur_yonalish/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIBFanDasturlariYonalish = { get, getById };

export default APIBFanDasturlariYonalish;