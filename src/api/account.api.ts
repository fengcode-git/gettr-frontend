import axiosFactory from "../libs/axiosFactory"
import {IAuthUser, IJsonResult} from "../types"

/** 登录 */
export const submitLogin = async (username: string, password: string) => {
    const axios = axiosFactory()
    const response = await axios.post<IJsonResult<IAuthUser>>('/api/account/login', { username, password })
    if (!response.data.isSuccess) {
        throw new Error(response.data.message)
    }
    return response.data.content
}

/** 注册 */
export const submitRegister = async (username: string, password: string) => {
    const axios = axiosFactory()
    const response = await axios.post<IJsonResult<string>>('/api/account/register', { username, password })
    if (!response.data.isSuccess) {
        throw new Error(response.data.message)
    }
}