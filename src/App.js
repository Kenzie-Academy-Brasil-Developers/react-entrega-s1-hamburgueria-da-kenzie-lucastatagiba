import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartTotal from "./components/CartTotal";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [totalValue, setTotalValue] = useState(0);
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  const showProducts = (event) => {
    event.preventDefault();
    const productFiltered = products.filter((product) =>
      product.category
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .includes(
          inputValue
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim()
        )
    );
    setSearchResult(inputValue);
    setFilteredProducts(productFiltered);
  };

  const handleClick = (productID) => {
    const productFiltered = products.find(
      (product) => product.id === productID
    );
    const productsFiltered = currentSale.filter(
      (product) => product.id === productID
    );

    if (!productsFiltered.includes(productFiltered)) {
      setCurrentSale([...currentSale, productFiltered]);
    }
  };

  return (
    <div className="App">
      <Header
        inputValue={inputValue}
        showProducts={showProducts}
        setInputValue={setInputValue}
      />
      <div className="divResult">
        {searchResult !== "" ? (
          <h1>
            {" "}
            Resultados para:
            <span className="resultContent"> {searchResult}</span>
          </h1>
        ) : (
          ""
        )}
      </div>

      <main>
        <div className="cardPanel">
          <ProductList
            products={products}
            handleClick={handleClick}
            filteredProducts={filteredProducts}
          />
        </div>

        <aside>
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
          <CartTotal
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            setTotalValue={setTotalValue}
            totalValue={totalValue}
          />
        </aside>
      </main>
      <footer> Desenvolvido por: Lucas Tatagiba ??</footer>
    </div>
  );
}

export default App;
