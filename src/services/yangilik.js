import axiosInstance from "./index";

const ep = "home/yangilik/";

const get = () => axiosInstance.get(ep);
const getById = (id) => axiosInstance.get(`${ep}${id}/`);

const APIYangilik = { get, getById };

export default APIYangilik;