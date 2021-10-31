export type TAccountState = {
    username: string,
    token: string,
    loading: boolean,
    error: string,
    isLogin: boolean,
    avatar: string
}

/** 登录表单 */
export type TLoginForm = {
    username: string,
    password: string
}