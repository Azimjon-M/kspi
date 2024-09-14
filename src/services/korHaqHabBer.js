import axiosInstance from "./index";

const ep = "faoliyat/xabar_berish/";

const get = () => axiosInstance.get(ep);

const KorHaqHabBer = { get };

export default KorHaqHabBer;