// import "../styles/Card.css";
import { GlobalContext } from "../App";
import { useContext } from "react";

const Card = ({ title, price, src }) => {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  const handleClick = () => {
    if (!globalState) {
      setGlobalState[{ title, price, src }];
    }

    for (let i = 0; i < globalState.length; i++) {
      if (globalState[i].title === title) {
        alert("item already exists");
        return;
      }
    }

    setGlobalState([...globalState, { title, price, src }]);
  };

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img className="plant-img" src={src} alt="plants" />
        </div>
        <div className="card-info">
          <div className="card-title">{title}</div>
          <p>${price}</p>
          <button onClick={handleClick}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export { Card };
