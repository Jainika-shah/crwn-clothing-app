import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card';
import './products-preview.scss';

const ProductPreview = ({ title, products }) => {
    // console.log(products.filter((_, index) => {
    //     return index < 4;
    // }))
    
    return (
        <div className='category-preview-container'>
            <h2>
                <Link to={`/shop/${title}`} className='title'>
                {title.toUpperCase()}
               </Link>
            </h2>
            <div className='preview'>
                {
                    products.filter((_, index) => {
                        return index < 4;
                    }).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))                   
                }
            </div>
        </div>
    )
}

export default ProductPreview;