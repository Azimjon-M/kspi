import axiosInstance from "./index";

const andPoint = "talaba/magistr_malaka_talab/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APImDtsvaMalaka = { get, getById };

export default APImDtsvaMalaka;