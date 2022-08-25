import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview';
import Catgeory from '../category/category';
import './shop.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { setCatgeriesMap } from '../../store/categories/category-action';

const Shop = () => {
  const dispatch = useDispatch();
  // console.log("shop component..")

  useEffect(() => {
    const getCategoriesMap = async () => {
       const categoryMap = await getCategoriesAndDocuments()
        dispatch(setCatgeriesMap(categoryMap))
    }
    getCategoriesMap();
}, [dispatch])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Catgeory />} />
    </Routes>
  )  
};

export default Shop;
