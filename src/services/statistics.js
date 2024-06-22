import axiosInstance from "./index";

const andPoint = "home/statistika/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIStatistics = { get, getById };

export default APIStatistics;