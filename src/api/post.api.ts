import axiosFactory from "../libs/axiosFactory"
import Post from "../model/Post"
import {IJsonPagingResult, IJsonResult, IPostView} from "../types"

export const insertPost = async (content: string, images: string[]) => {
    const axios = axiosFactory()
    let response = await axios.post<IJsonResult<Post>>('/api/post/insert', {content, images})
    let result = response.data
    if (result.isSuccess) {
        return result.content
    } else {
        throw new Error(result.message)
    }
}

export const getPosts = async (page: number,personId:string='') => {
    const axios = axiosFactory()
    let response = await axios.post<IJsonPagingResult<IPostView>>('/api/post/getPosts',{page:page,personId:personId})
    let result = response.data
    if (result.isSuccess) {
        return result.content
    } else {
        throw new Error(result.message)
    }
}