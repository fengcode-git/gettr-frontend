import axios from "axios";
import { readUser } from "./storage";

const axiosFactory = () => {
    let instance = axios.create({
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 10000
    })
    let token = readUser()
    if (token) {
        instance.defaults.headers['Authorization'] = `Bearer ${token.token}`
    }
    return instance
}
export default axiosFactory