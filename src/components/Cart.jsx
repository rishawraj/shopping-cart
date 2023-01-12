import { GlobalContext } from "../App";
import { useContext, useEffect, useState } from "react";
import "../styles/Cart.css";

const Cart = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const [count, setCount] = useState(Array(12).fill(1));

  const [total, setTotal] = useState(0);

  const decrement = (index) => {
    console.log(count);
    const newCount = [...count];
    newCount[index] = newCount[index] - 1;
    console.log(newCount);
    setCount([...newCount]);
  };

  const increment = (index) => {
    console.log(count);
    console.log(count);
    const newCount = [...count];
    newCount[index] = newCount[index] + 1;
    console.log(newCount);
    setCount([...newCount]);
  };

  useEffect(() => {
    let t = 0;
    globalState.map((card, index) => {
      t += +card.price * count[index];
    });
    setTotal(t);
  }, [count, setCount]);

  return (
    <div className="cart-list">
      {globalState.map((card, index) => {
        // setTotal(total + card.price);
        return (
          <div key={card.title + "" + index} className="cart-card">
            {/* <p>{index}</p> */}
            <img src={card.src} alt={""} />
            <div>{card.title}</div>
            <div>${card.price * count[index]}</div>
            <div className="cart-count">
              <button onClick={() => decrement(index)} className="cart-btn">
                -
              </button>
              <p>{count[index]}</p>
              <button onClick={() => increment(index)} className="cart-btn">
                +
              </button>
            </div>
          </div>
        );
      })}
      <p>Total: ${total}</p>
      <button
        onClick={() => {
          alert("thanks for shopping");
        }}
      >
        Checkout
      </button>
      <button>close</button>
    </div>
  );
};

export { Cart };
