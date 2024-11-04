import axiosInstance from "./index";

const ep = "institut/qonunlar/";

const get = () => axiosInstance.get(ep);

const APIHujjatORQ = { get };

export default APIHujjatORQ;