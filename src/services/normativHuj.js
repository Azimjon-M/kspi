import axiosInstance from "./index";

const ep = "faoliyat/normativ_hujatlar/";

const get = () => axiosInstance.get(ep);

const normativHuj = { get };

export default normativHuj;