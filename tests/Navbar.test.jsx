import { Navbar } from "../src/components/Navbar";
import { GlobalContext } from "../src/App";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar component", () => {
  it("should display the logo and the correct links", () => {
    render(
      <Router>
        <GlobalContext.Provider value={{ globalState: [] }}>
          <Navbar />
        </GlobalContext.Provider>
      </Router>
    );

    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe("IMG");
    expect(logo.getAttribute("src")).toBe("/src/styles/download.png");

    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.tagName).toBe("A");
    expect(homeLink.getAttribute("href")).toBe("/");

    const shopLink = screen.getByText("shop");
    expect(shopLink).toBeInTheDocument();
    expect(shopLink.tagName).toBe("A");
    expect(shopLink.getAttribute("href")).toBe("/shop");

    const contactLink = screen.getByText("contact");
    expect(contactLink).toBeInTheDocument();
    expect(contactLink.tagName).toBe("A");
    expect(contactLink.getAttribute("href")).toBe("/contact");

    const cartLink = screen.getByTestId("cart-link");
    expect(cartLink).toBeInTheDocument();
    expect(cartLink.tagName).toBe("A");
    expect(cartLink.getAttribute("href")).toBe("/cart");
  });

  it("should display the cart icon and the number of items in the cart", () => {
    render(
      <Router>
        <GlobalContext.Provider
          value={{ globalState: [{ title: "item1" }, { title: "item2" }] }}
        >
          <Navbar />
        </GlobalContext.Provider>
      </Router>
    );

    const cartIcon = screen.getByAltText("cart-icon");
    expect(cartIcon).toBeInTheDocument();
    expect(cartIcon.tagName).toBe("IMG");
    expect(cartIcon.getAttribute("src")).toBe("/src/styles/shopping-cart.png");

    const cartCount = screen.getByText("2");
    expect(cartCount).toBeInTheDocument();
  });
});
