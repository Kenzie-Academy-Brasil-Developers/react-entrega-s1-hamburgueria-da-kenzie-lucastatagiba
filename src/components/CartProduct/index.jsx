import "./styles.css";

const CartProduct = ({ product, removeItem }) => {
  return (
    <div className="productCardCart">
      <div className="imgContentCart">
        <img
          className="imgProductCart"
          src={`${product.img}`}
          alt="productImg"
        />
      </div>

      <div className="nameECategory">
        <h2 className="productCartName">{product.name}</h2>
        <span className="productCartCategory">{product.category}</span>
      </div>
      <button className="buttonCart" onClick={() => removeItem(product)}>
        Remover
      </button>
    </div>
  );
};

export default CartProduct;
