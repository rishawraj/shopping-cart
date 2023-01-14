import { fireEvent, render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App component", () => {
  it("should render the Navbar, Home component and Footer component", () => {
    render(<App />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("home")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("should render the Contact component when the /contact path is visited", () => {
    render(<App />);
    const contactNavLink = screen.getByRole("link", { name: "contact" });
    fireEvent.click(contactNavLink);
    expect(screen.getByTestId("contact")).toBeInTheDocument();
  });

  it("should render the Shop component when the /shop path is visited", () => {
    render(<App />);
    const shopNavLink = screen.getByRole("link", { name: "shop" });
    fireEvent.click(shopNavLink);
    expect(screen.getByTestId("shop")).toBeInTheDocument();
  });

  it("should render the Cart component when the /cart path is visited", () => {
    render(<App />);
    const cartNavLink = screen.getByTestId("cart-link");
    fireEvent.click(cartNavLink);
    expect(screen.getByTestId("cart")).toBeInTheDocument();
  });
});
