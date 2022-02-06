import "./styles.css";
import logo from "../Images/logo.png";

const Header = ({ inputValue, showProducts, setInputValue }) => {
  return (
    <div className="contentHeader">
      <img className="imgHeader" src={logo} alt="logo" />
      <form onSubmit={showProducts} className="formHeader">
        <input
          className="inputHeader"
          type="text"
          placeholder="Digitar Pesquisa"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        ></input>

        <button className="buttonHeader">Pesquisar</button>
      </form>
    </div>
  );
};

export default Header;
