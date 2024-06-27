import axiosInstance from "./index";

const andPoint = "faoliyat/madaniy/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIMadaniy = { get, getById };

export default APIMadaniy;