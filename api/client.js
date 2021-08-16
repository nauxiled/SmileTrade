import { create } from "apisauce";

const apiClient = create({
    baseURL: 'http://192.168.86.167:9000/assets/'
});

export default apiClient;