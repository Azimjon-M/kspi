import axiosInstance from "./index";

const ep = "faoliyat/ichki_idoraviy_hujatlar/";

const get = () => axiosInstance.get(ep);

const IchIdoHuj = { get };

export default IchIdoHuj;