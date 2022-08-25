// reselect lib-
// import { createSelector } from 'reselect';
// const selectCategoryReducer = state => state.categories;
// export const selectCategories = createSelector(
//     [selectCategoryReducer],
//     (categoriesSlice) => categoriesSlice.categoriesMap
// )
// Now as long as state.categories doesnt ChannelMergerNode, our categoriesSlice.categoriesMap code will not run.


export const selectCategoriesMap = (state) => state.categories.categoriesMap