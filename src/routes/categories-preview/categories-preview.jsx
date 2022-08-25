import { ProductsContext } from "../../context/products";
import { useContext } from "react";
import ProductPreview from "../../components/products-preview/products-preview";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category-selector";
const CategoriesPreview = () => {
  const products = useSelector(selectCategoriesMap);
  // const { products } = useContext(ProductsContext);
  return (
    <>
    {
      Object.keys(products).map(title => {
        const items = products[title];
        return <ProductPreview key={title} title={title} products={items} />
      })
    }
    </>
  );
};

export default CategoriesPreview;
