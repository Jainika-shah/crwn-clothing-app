import { CATEGORIES_ACTION_TYPES } from "./category-types"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase"

export const setCatgeriesMap = (categoriesMap) => {
    return {type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, payload: categoriesMap}
}

export const fetchCategoriesStart = () => {
    return { type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START }
}

export const fetchCategoriesSuccess = (categoriesMap) => {
    return { type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categoriesMap }
}

export const fetchCategoriesFailed = (error) => {
    return { type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, payload: error }
}


// thunk: a () that returns an async function if it has async code
export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());

    try {
       const categoryMap = await getCategoriesAndDocuments()
        dispatch(fetchCategoriesSuccess(categoryMap))
    }
    catch(error){
        dispatch(fetchCategoriesFailed(error))
    }
}
