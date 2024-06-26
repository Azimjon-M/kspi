import axiosInstance from "./index";

const andPoint = "institut/institut_rekviziti/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIInstitutRekviziti = { get, getById };

export default APIInstitutRekviziti;