import axiosInstance from "./index";

const andPoint = "abiturient/callmarkaz/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APICall = { get, getById };

export default APICall;