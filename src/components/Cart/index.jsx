import "./styles.css";
import CartProduct from "../CartProduct";

const Cart = ({ currentSale, setCurrentSale }) => {
  const removeItem = (productToRemove) => {
    setCurrentSale(
      currentSale.filter((product) => product !== productToRemove)
    );
  };
  return (
    <>
      <div className="apresentacaoCarrinho">
        <span> Carrinho de compras </span>
      </div>

      <div className="carrinhoContent">
        {currentSale.length === 0 ? (
          <>
            <span className="sacolaVazia"> Sua sacola está vazia</span>
            <span className="adicioneItens"> Adicione itens</span>
          </>
        ) : (
          currentSale.map((product) => (
            <CartProduct
              key={product.id}
              product={product}
              removeItem={removeItem}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Cart;
