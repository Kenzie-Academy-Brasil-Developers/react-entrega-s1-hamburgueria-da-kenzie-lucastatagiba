import "./styles.css";
import Product from "../Product";

const ProductList = ({ products, handleClick, filteredProducts }) => {
  return filteredProducts.length === 0
    ? products.map((product) => (
        <Product key={product.id} product={product} handleClick={handleClick} />
      ))
    : filteredProducts.map((product) => (
        <Product key={product.id} product={product} handleClick={handleClick} />
      ));
};

export default ProductList;
