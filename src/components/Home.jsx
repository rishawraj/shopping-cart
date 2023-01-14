import plant_img from "../styles/plant.jpg";
// import { /Link } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div data-testid="home" className="home-container">
      <div className="text">
        <div>
          Bring the beauty of nature into your home, without the upkeep.
        </div>

        <Link className="btn" to="/shop">
          Shop Now
        </Link>
      </div>
      <div className="image">
        <img src={plant_img} alt="plant-image" className="plant-img" />
      </div>
    </div>
  );
};

export { Home };
