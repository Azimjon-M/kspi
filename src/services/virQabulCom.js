import axiosInstance from ".";

const endPoint = 'institut/qabulxona/'

const postVirtualQabul = (item) => {
    return axiosInstance.post(`${endPoint}`, item)
}

const APIVirtualQabul = {postVirtualQabul};

export default APIVirtualQabul;