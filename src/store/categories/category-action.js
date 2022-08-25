import { CATEGORIES_ACTION_TYPES } from "./category-types"

export const setCatgeriesMap = (categoriesMap) => {
    return {type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, payload: categoriesMap}
}