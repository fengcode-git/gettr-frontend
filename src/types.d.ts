export interface IJsonResult<T> {
    content: T,
    isSuccess: boolean,
    message: string
}

export interface IPagingResult<T> {
    currentPage: number,
    pageSize: number,
    rowCount: number, 
    data: Array<T>
    pageCount: number
}

export interface IJsonPagingResult<T> extends IJsonResult<IPagingResult<T>> {
}

export interface IAuthUser {
    username: string,
    token: string,
    avatar: string
}

export enum RoleType {
    admin = 0,
    user
}

export interface  IUserInfo {
    // _id: string,
    // accountName: string,
    // nickname:string,
    // avatar: string,
    // isMute: boolean,
    // createTime: string,
    // role: RoleType
    id: string
    account_name: string
    nickname:string
    avatar: string
    create_time: Date
    role: RoleType
    is_mute: boolean
}

export interface IPerson extends IUserInfo{
    password: string
}

/** 帖子状态 */
export enum PostStatus {
    visible = 0,
    hide = 1
}

/** 帖子类型 */
export enum PostType{
    post = 0,
    comment = 1
}

export interface IPost {
    id: string
    ref_id: string
    person_id: string
    status: PostStatus
    like_num: number
    forward_num: number
    content: string
    type: PostType
    create_time: Date
    images: string    
}

export interface IPostView{
    id: string
    person_id: string
    status: StatusType
    like_num: number
    type: PostType
    forward_num: number
    content: string
    create_time: Date
    images: string
    account_name: string
    nickname:string
    avatar: string
    ref_id: string
    ref_person_id: string
    ref_images: string
    ref_create_time: Date
    ref_content: string
    ref_forward_num: number
    ref_like_num: number
    ref_type: PostType
    ref_status: StatusType
    ref_account_name: string
    ref_nickname:string
    ref_avatar: string
}