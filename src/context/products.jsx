import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";

// the default value
export const ProductsContext = createContext({
    products: {},
    setProducts: () => null
});

export const ProductsProvider = ({ children }) => {
    // console.log(SHOP_DATA)
    // useEffect(() => {
    //     addCollectionAndDocument('categories', SHOP_DATA); 
    // }, [])  // run this for the first time only, then we can remove this.

    useEffect(() => {
        const getCategoriesMap = async () => {
           const categoryMap = await getCategoriesAndDocuments()
            // console.log(categoryMap)
            setProducts(categoryMap)
        }
        getCategoriesMap();
    }, [])

    const [products, setProducts] = useState({});
    const value = {
        products, setProducts
    }
    return <ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>
}