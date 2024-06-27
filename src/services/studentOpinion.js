import axiosInstance from "./index";

const andPoint = "home/talaba/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIStudentOpinion = { get, getById };

export default APIStudentOpinion;