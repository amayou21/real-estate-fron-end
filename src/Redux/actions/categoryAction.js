// @desc    get data
// @route   Get /api/v1/categories

import { UseCreateCategryWithImage, UseGetData } from "../../hooks/useGetData"
import { CREATE_CATEGORY, GET_CATEGORIES, GET_ERROR } from "../types"

// @access  Public
export const AllCategory = (limit = 20, page = 1) => async (dispatch) => {
    try {
        const data = await UseGetData(`/api/v1/categories?limit=${limit}&page=${page}`)

        dispatch({
            type: GET_CATEGORIES,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `error :${error}`
        })

    }
}


// create category
export const createCategory = (params) => async (dispatch) => {
    try {
        const data = await UseCreateCategryWithImage("/api/v1/categories", params)

        dispatch({
            type: CREATE_CATEGORY,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `error : ${error}`
        })
    }
}