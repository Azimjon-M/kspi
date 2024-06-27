import axiosInstance from "./index";

const ep = "home/galareya/";

const get = () => axiosInstance.get(ep);

const APIGallery = {get}

export default APIGallery;