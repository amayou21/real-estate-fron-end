import { baseUrl } from "../api/baseUrl"

// @desc  Get data
export const UseGetData = async (url, params) => {
    const res = await baseUrl.get(url, params);
    return res
}


export const UseCreateCategryWithImage = async (url, params) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" },
    };

    const res = await baseUrl.post(url, params, config)
    return res
}