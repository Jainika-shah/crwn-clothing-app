import './category.scss';
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/products';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category-selector';
const Catgeory = () => {
    const { category } = useParams();
    // console.log("catgory component..");
    // const { products } = useContext(ProductsContext)
    const products = useSelector(selectCategoriesMap);

    const [currentP, setCurrentP] = useState([]);

    useEffect(() => {
        setCurrentP(products[category])
    }, [category, products])

    return (
        <><h2 className='catgeory-title'>
            {category.toUpperCase()}
        </h2>
            <div className='category-products-container'>
                {
                    currentP &&
                    currentP.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div></>

    )
}

export default Catgeory;