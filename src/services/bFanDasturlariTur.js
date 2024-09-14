import axiosInstance from "./index";

const andPoint = "talaba/bakalavr_fan_dastur_tur/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIBFanDasturlariTur = { get, getById };

export default APIBFanDasturlariTur;