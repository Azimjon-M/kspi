import axiosInstance from "./index";

const ep = "abiturient/otish_ballari/";

const get = () => axiosInstance.get(ep);
const getById = (id) => axiosInstance.get(`${ep}${id}/`);


const APIOtishBallari = { get, getById };

export default APIOtishBallari;