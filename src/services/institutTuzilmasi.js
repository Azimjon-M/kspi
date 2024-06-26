import axiosInstance from "./index";

const andPoint = "institut/tuzilma/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIInstitutTuzilmasi = { get, getById };

export default APIInstitutTuzilmasi;