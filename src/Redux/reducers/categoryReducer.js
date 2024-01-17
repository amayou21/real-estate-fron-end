import React from 'react';
import { CREATE_CATEGORY, GET_CATEGORIES, GET_ERROR, UPDATE_CATEGORY } from '../types';
const initialValue = {
    category: [],
    loading: true
}
const CategoryReducer = (state = initialValue, action) => {
    switch (action.type) {

        // @desc  Get all categories
        case GET_CATEGORIES:
            return {
                ...state,
                category: action.payload,
                loading: false
            }
        case GET_ERROR:
            return {
                loading: true,
                category: action.payload
            }

        // @desc create category
        case CREATE_CATEGORY:
            return {
                category: action.payload,
                loading: false
            }

        // case UPDATE_CATEGORY:
        //     return {
        //         category: action.payload,
        //         payload: false
        //     }

        default:
            return state
    }

}

export default CategoryReducer;
