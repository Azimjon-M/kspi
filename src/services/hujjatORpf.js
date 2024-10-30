import axiosInstance from "./index";

const ep = "institut/prizdent_farmonlari/";

const get = () => axiosInstance.get(ep);

const APIHujjatORpf = { get };

export default APIHujjatORpf;