import axiosInstance from "./index";

const andPoint = "home/vakansiya/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIVakansiya = { get, getById };

export default APIVakansiya;