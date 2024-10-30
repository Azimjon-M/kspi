import axiosInstance from "./index";

const ep = "institut/ichki_meyoriy_hujatlar/";

const get = () => axiosInstance.get(ep);

const APIHujjatIIHMh = { get };

export default APIHujjatIIHMh;