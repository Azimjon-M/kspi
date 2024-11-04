import axiosInstance from "./index";

const ep = "institut/vazirlar_mahkamasi_qarorlari/";

const get = () => axiosInstance.get(ep);

const APIHujjatORVMq = { get };

export default APIHujjatORVMq;