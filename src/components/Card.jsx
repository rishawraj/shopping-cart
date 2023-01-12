import "../styles/Card.css";
import { GlobalContext } from "../App";
import { useContext } from "react";

const Card = ({ title, price, src }) => {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  const handleClick = () => {
    setGlobalState([...globalState, { title: title, price: price, src }]);
  };

  return (
    <>
      <div className="card">
        {/* <div className="red-rect"></div> */}
        <img className="plant-img" src={src} alt="plants" />
        <p>{title}</p>
        <p>price: {price}</p>
        <button onClick={handleClick}>Add to cart</button>
      </div>
    </>
  );
};

export { Card };
