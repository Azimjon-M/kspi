import axiosInstance from "./index";

const andPoint = "faoliyat/yoshlar/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIYoshlar = { get, getById };

export default APIYoshlar;