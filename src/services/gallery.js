import axiosInstance from "./index";

const ep = "home/gallery/";

const get = () => axiosInstance.get(ep);

const APIGallery = {get}

export default APIGallery;