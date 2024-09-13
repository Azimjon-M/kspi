import axiosInstance from "./index";

const andPoint = "talaba/magistr_oquv_reja/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIMOquvReja = { get, getById };

export default APIMOquvReja;