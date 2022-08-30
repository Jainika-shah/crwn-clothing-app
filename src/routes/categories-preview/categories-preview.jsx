import { ProductsContext } from "../../context/products";
import { useContext } from "react";
import ProductPreview from "../../components/products-preview/products-preview";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category-selector";
import { selectIsLoading } from "../../store/categories/category-selector";
import Spinner from "../../components/spinner/spinner";

const CategoriesPreview = () => {
  const products = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  // const { products } = useContext(ProductsContext);
  return (
    <>
    {
      isLoading ? <Spinner /> : Object.keys(products).map(title => {
        const items = products[title];
        return <ProductPreview key={title} title={title} products={items} />
      })
    }
    </>
  );
};

export default CategoriesPreview;
