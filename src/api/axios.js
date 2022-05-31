//nơi cấu hình base cho axios
import axios from "axios";
//khởi tạo cấu hình axios
const apiAxios = axios.create({
    baseURL: 'https://6291d18e9d159855f08095c3.mockapi.io'
});
export default apiAxios;