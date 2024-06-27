import axiosInstance from "./index";

const andPoint = "faoliyat/ilmiy/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIIlmiy = { get, getById };

export default APIIlmiy;