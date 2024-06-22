import axiosInstance from "./index";

const andPoint = "home/elon/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIElon = { get, getById };

export default APIElon;
