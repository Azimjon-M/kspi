import axiosInstance from "./index";

const andPoint = "faoliyat/xalqaro_hamkorlar/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIXalqaroHamkorlar = { get, getById };

export default APIXalqaroHamkorlar;