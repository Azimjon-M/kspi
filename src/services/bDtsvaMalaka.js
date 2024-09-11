import axiosInstance from "./index";

const andPoint = "talaba/bakalavr_malaka_talab/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIDtsvaMalaka = { get, getById };

export default APIDtsvaMalaka;