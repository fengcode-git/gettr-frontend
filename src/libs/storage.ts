import { IAuthUser } from "../types"

const TOKEN_KEY = "__token"

export const setStorageValue = (key: string, value: string) => {
    try {
        localStorage.setItem(key, value)
    } catch (error) { }
}
export const getStorageValue = (key: string) => {
    try {
        return localStorage.getItem(key)
    } catch (error) {
        return null
    }
}
export const removeStorageValue = (key: string) => {
    try {
        return localStorage.removeItem(key)
    } catch (error) { }
}

export const writeUser = (token: IAuthUser | null) => {
    if (token == null) {
        removeStorageValue(TOKEN_KEY)
    } else {
        let json = JSON.stringify(token)
        setStorageValue(TOKEN_KEY, json)
    }
}

export const readUser = (): IAuthUser | null => {
    let json = getStorageValue(TOKEN_KEY)
    if (json) {
        return JSON.parse(json) as IAuthUser
    } else {
        return null
    }
}