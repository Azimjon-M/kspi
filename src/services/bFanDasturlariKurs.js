import axiosInstance from "./index";

const andPoint = "talaba/bakalavr_fan_dastur_kurs/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIBFanDasturlariKurs = { get, getById };

export default APIBFanDasturlariKurs;