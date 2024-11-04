import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://kspiapi.kspi.uz/",
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

// Tokenni qo'shish qismida faqat 'get' so'rovlarida so'ralmaydi
axiosInstance.interceptors.request.use(async (request) => {
  // Agar request 'post' bo'lsa, token qo'shmaslik
  if (request.method !== 'post') {
    const token = localStorage.getItem("token");
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
  }
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      const refreshed = await refreshToken();
      if (refreshed) {
        // Refreshed successfully, retry the original request
        return axiosInstance(error.config);
      }
    }
    return Promise.reject(error);
  }
);

const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const res = await axios.post("https://kspiapi.kspi.uz/api/token/refresh/", {
      refresh: refreshToken,
    });
    const token = res.data.access;
    if (token) {
      localStorage.setItem("token", token);
      return true;
    }
    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export default axiosInstance;
