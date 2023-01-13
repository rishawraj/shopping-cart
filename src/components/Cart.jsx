import { GlobalContext } from "../App";
import { useContext, useEffect, useState } from "react";
// import "../styles/Cart.css";

const Cart = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const [count, setCount] = useState(Array(12).fill(1));

  const [total, setTotal] = useState(0);

  const decrement = (index) => {
    if (count[index] === 1) {
      return;
    }
    // console.log(count);
    const newCount = [...count];
    newCount[index] = newCount[index] - 1;
    // console.log(newCount);
    setCount([...newCount]);
  };

  const increment = (index) => {
    // console.log(count);
    // console.log(count);
    const newCount = [...count];
    newCount[index] = newCount[index] + 1;
    // console.log(newCount);
    setCount([...newCount]);
  };

  useEffect(() => {
    let t = 0;
    globalState.map((card, index) => {
      t += +card.price * count[index];
    });
    setTotal(t);
  }, [count, setCount, globalState]);

  const handleDelete = (cardtitle) => {
    console.log(globalState);
    console.log(globalState[0].title === cardtitle);

    let newGlobalState = [];

    for (let i = 0; i < globalState.length; i++) {
      if (globalState[i].title !== cardtitle) {
        console.log("yest", globalState[i]);
        newGlobalState.push(globalState[i]);
      }
    }
    console.log(newGlobalState);
    setGlobalState(newGlobalState);
    // console.log(globalState);
  };

  return (
    <div className="cart-container">
      <div className="cart-list">
        {globalState.map((card, index) => {
          return (
            <div key={card.title + "" + index} className="cart-card">
              <div className="cart-list-image">
                <img src={card.src} alt={""} />
              </div>
              <div className="cart-list-info">
                <div className="bold">{card.title}</div>
                <div>${card.price * count[index]}</div>
                <div className="cart-count">
                  <button onClick={() => decrement(index)} className="cart-btn">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>
                  </button>
                  <p>{count[index]}</p>
                  <button onClick={() => increment(index)} className="cart-btn">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>
                  </button>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => {
                    handleDelete(card.title);
                  }}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="checkout-section">
        <div className="total-price">Total: ${total}</div>
        <button
          className="checkout-btn"
          onClick={() => {
            alert("thanks for shopping");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export { Cart };
