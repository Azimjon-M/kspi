import axiosInstance from "./index";

const andPoint = "home/ochiq_malumot/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIOchiqMalumotlar = { get, getById };

export default APIOchiqMalumotlar;