import axiosInstance from "./index";

const andPoint = "faoliyat/akademik/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIAkademik = { get, getById };

export default APIAkademik;