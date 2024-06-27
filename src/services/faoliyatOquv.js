import axiosInstance from "./index";

const andPoint = "faoliyat/oquv/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIOquv = { get, getById };

export default APIOquv;