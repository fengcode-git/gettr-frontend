import axiosFactory from "../libs/axiosFactory"
import { IJsonResult } from "../types"
const  UPLOAD_URL = "/api/file/upload"

/**
 * 上传文件
 * @param file 
 * @returns 返回上传文件的URL
 */
export const upload = async (file: File) => {
    let formData = new FormData()
    formData.append('file', file)
    const axios = axiosFactory()
    axios.defaults.headers['Content-Type'] = 'multipart/form-data'
    const response = await axios.post<IJsonResult<string>>(UPLOAD_URL, formData)
    if(!response.data.isSuccess){
        throw new Error(response.data.message) 
    }
    return response.data.content
}