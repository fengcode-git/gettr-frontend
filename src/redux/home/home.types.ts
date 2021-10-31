import { IPostView } from "../../types";

export type THomeState = {
    loading: boolean,
    posts: Array<IPostView>,
    error: string,
    page: number,
    isAll: boolean
}