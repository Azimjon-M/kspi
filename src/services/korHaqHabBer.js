import axiosInstance from ".";

const ep = "institut/korupsiyagaxabar/";

const getInstitutQabulxona = () => axiosInstance.get(ep);

const postVirtualQabul = (item) => {
    return axiosInstance.post(`${ep}`, item)
}

const delInstitutQabulxona = (id) => {
    return axiosInstance.delete(`${ep}${id}/`);
  };

const KorHaqHabBer = {getInstitutQabulxona, postVirtualQabul, delInstitutQabulxona};

export default KorHaqHabBer;