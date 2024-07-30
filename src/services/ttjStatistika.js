import axiosInstance from "./index";

const andPoint = "talaba/ttj_statistika/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APITTJStatistika = { get, getById };

export default APITTJStatistika;