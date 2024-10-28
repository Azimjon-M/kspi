import axiosInstance from "./index";

const ep = "faoliyat/professorlar_fikri/";

const get = () => axiosInstance.get(ep);
const getById = (id) => axiosInstance.get(`${ep}${id}/`);


const APIProfessorlarFikri = { get, getById };

export default APIProfessorlarFikri;