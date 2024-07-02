import axiosInstance from "./index";

const andPoint = "talaba/ttj_ariza/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APITTJAriza = { get, getById };

export default APITTJAriza;