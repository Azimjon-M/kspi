import axiosInstance from "./index";

const andPoint = "talaba/ttj_rahbar/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APITTJRaxbar = { get, getById };

export default APITTJRaxbar;