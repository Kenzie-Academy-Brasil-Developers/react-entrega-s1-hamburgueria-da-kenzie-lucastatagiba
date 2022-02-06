import "./styles.css";

const Product = ({ product, handleClick }) => {
  return (
    <div className="productCard">
      <div className="imgCardContent">
        <img className="cardImg" src={`${product.img}`} alt="productIMG" />
      </div>
      <div className="descriptionsCardContent">
        <h2 className="cardName">{product.name}</h2>
        <span className="cardCategory">{product.category}</span>
        <span className="cardPrice">
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          className="buttonCard"
          type="button"
          onClick={() => handleClick(product.id)}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Product;
