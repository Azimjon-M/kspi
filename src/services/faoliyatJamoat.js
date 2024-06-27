import axiosInstance from "./index";

const andPoint = "faoliyat/jamoatchilik/";

const get = () => axiosInstance.get(andPoint);
const getById = (id) => axiosInstance.get(`${andPoint}${id}/`);


const APIJamoat = { get, getById };

export default APIJamoat;