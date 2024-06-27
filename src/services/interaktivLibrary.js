import axiosInstance from "./index";

const andPoint = "home/elektronkutubxona/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APILibrary = { get, getById };

export default APILibrary;