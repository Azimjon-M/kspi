import axiosInstance from ".";

const endPoint = 'institut/qabulxona/'

const getInstitutQabulxona = () => axiosInstance.get(endPoint);

const postVirtualQabul = (item) => {
    return axiosInstance.post(`${endPoint}`, item)
}

const delInstitutQabulxona = (id) => {
    return axiosInstance.delete(`${endPoint}${id}/`);
  };

const APIVirtualQabul = {getInstitutQabulxona, postVirtualQabul, delInstitutQabulxona};

export default APIVirtualQabul;