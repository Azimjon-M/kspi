import axiosInstance from "./index";

const andPoint = "home/boglanish/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIContact = { get, getById };

export default APIContact;