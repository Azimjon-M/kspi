import axiosInstance from "./index";

const andPoint = "talaba/bakalavr_oquv_reja/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIBOquvReja = { get, getById };

export default APIBOquvReja;