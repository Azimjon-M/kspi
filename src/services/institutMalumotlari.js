import axiosInstance from "./index";

const andPoint = "institut/institut_malumotlari/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIInstitutMalumotlari = { get, getById };

export default APIInstitutMalumotlari;