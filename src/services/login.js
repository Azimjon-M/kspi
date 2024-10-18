import axiosInstance from "./index";

const ep = "api/token/";
const epRef = "api/token/refresh/";

const post = (item) => {
  return axiosInstance.post(ep, item);
};

const refreshPost = (item) => {
  return axiosInstance.post(epRef, item);
};

const APILogin = { post, refreshPost };

export default APILogin;
