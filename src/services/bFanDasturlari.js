import axiosInstance from "./index";

const andPoint = "talaba/bakalavr_fan_dastur/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIBFanDasturlari = { get, getById };

export default APIBFanDasturlari;