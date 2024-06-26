import axiosInstance from "./index";

const andPoint = "institut/institut_haqida/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIInstitutHaqida = { get, getById };

export default APIInstitutHaqida;