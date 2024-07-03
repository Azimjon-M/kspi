import axiosInstance from "./index";

const andPoint = "talaba/ttj_campus/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APITTJCompus = { get, getById };

export default APITTJCompus;