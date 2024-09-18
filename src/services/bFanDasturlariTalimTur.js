import axiosInstance from "./index";

const andPoint = "talaba/bakalavr_fan_dastur_talim_turi/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIBFanDasturlariTalimTur = { get, getById };

export default APIBFanDasturlariTalimTur;