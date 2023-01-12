import { NavLink } from "react-router-dom";
import logo from "../styles/download.png";

export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          shop
        </NavLink>
        <NavLink
          to="/contact"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          contact
        </NavLink>
        <NavLink
          to="/cart"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Cart
        </NavLink>
      </div>
    </nav>
  );
};
