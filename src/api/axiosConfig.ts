import axios from "axios";
import authService from "../services/authService";

let axiosInstance = axios.create({
    baseURL: "https://localhost:5001/api/",
    headers: {'Access-Control-Allow-Origin' : '*', 'Origin' : 'http://localhost:3000', 'Content-Type' : 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE', 'Access-Control-Allow-Headers': 'Content-Type'}
});

export default axiosInstance;

