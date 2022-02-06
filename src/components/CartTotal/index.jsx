import "./styles.css";

const CartTotal = ({
  currentSale,
  setCurrentSale,
  setTotalValue,
  totalValue,
}) => {
  setTotalValue(currentSale.reduce((acc, item) => acc + item.price, 0));

  return currentSale.length !== 0 ? (
    <div className="cartTotalContent">
      <div className="cartTotal--span">
        <span className="spanTotal"> Total</span>
        <span className="spanTotalPrice">
          {totalValue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <button className="buttonTotalPrice" onClick={() => setCurrentSale([])}>
        {" "}
        Remover todos
      </button>
    </div>
  ) : (
    ""
  );
};

export default CartTotal;
