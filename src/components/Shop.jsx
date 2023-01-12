import "../styles/Shop.css";
import { Card } from "./Card";

const Shop = () => {
  return (
    <div className="product-grid">
      <Card title={"Money Plant"} price="$50.32" />
      <Card title={"Oak Plant"} price="$140.3" />
      <Card title={"Mango Plant"} price="$100.32" />
      <Card title={"Leechee Plant"} price="$150.2" />
    </div>
  );
};

export { Shop };
