import { NavLink } from "react-router-dom";
import logo from "../styles/download.png";
import { GlobalContext } from "../App";
import { useContext } from "react";
import cartIcon from "../styles/shopping-cart.png";

export const Navbar = () => {
  const { globalState } = useContext(GlobalContext);
  return (
    <nav data-testid="navbar">
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
          data-testid="cart-link"
          to="/cart"
          className={(navData) =>
            navData.isActive ? "cart-nav active" : "cart-nav"
          }
        >
          <img className="cart-icon" src={cartIcon} alt="cart-icon" />
          {globalState.length >= 1 ? (
            <span className="red-circle">{globalState.length}</span>
          ) : (
            ""
          )}
        </NavLink>
      </div>
    </nav>
  );
};
