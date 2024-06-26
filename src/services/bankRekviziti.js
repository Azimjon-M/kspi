import axiosInstance from "./index";

const andPoint = "institut/bank_rekviziti/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIBankRekviziti = { get, getById };

export default APIBankRekviziti;