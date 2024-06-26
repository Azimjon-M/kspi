import axiosInstance from "./index";

const andPoint = "institut/kengash/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIInstitutKengashi = { get, getById };

export default APIInstitutKengashi;