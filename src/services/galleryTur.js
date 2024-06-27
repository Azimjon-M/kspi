import axiosInstance from "./index";

const ep = "home/galareya_tur/";

const get = () => axiosInstance.get(ep);

const APIGalleryTur = {get}

export default APIGalleryTur;