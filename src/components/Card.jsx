import "../styles/Card.css";

const Card = ({ title, price }) => {
  const handleClick = (e) => {
    console.log(title);
    console.log(price);
  };
  return (
    <>
      <div className="card">
        <div className="red-rect"></div>
        <p>{title}</p>
        <p>price: {price}</p>
        <button onClick={handleClick}>Add to cart</button>
      </div>
    </>
  );
};

export { Card };
