import axiosInstance from "./index";

const andPoint = "talaba/magistr_fan_dastur/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIBFanDasturlari = { get, getById };

export default APIBFanDasturlari;