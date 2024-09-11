import axiosInstance from "./index";

const epY = "/users/yangilik_search/";
const epE = "users/elon_search/";

const getYangi = (link) => axiosInstance.get(`${epY}?search=${link}`);
const getElon = (link) => axiosInstance.get(`${epE}?search=${link}`);

const APISearch = { getYangi, getElon };

export default APISearch;
