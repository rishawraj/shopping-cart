import { render, fireEvent, screen } from "@testing-library/react";
import { Shop } from "../src/components/Shop";
import { GlobalContext } from "../src/App";
import { MemoryRouter } from "react-router-dom";
import jest from "jest-mock";

describe("Shop component", () => {
  let globalState;
  let setGlobalState;
  beforeEach(() => {
    globalState = [];
    setGlobalState = jest.fn();
  });

  it("should render all the products", () => {
    const { getAllByTestId } = render(
      <MemoryRouter>
        <GlobalContext.Provider value={{ globalState, setGlobalState }}>
          <Shop />
        </GlobalContext.Provider>
      </MemoryRouter>
    );

    const products = getAllByTestId("product");
    expect(products.length).toBe(10);
  });

  it("should add products to cart", () => {
    const { getAllByTestId } = render(
      <MemoryRouter>
        <GlobalContext.Provider value={{ globalState, setGlobalState }}>
          <Shop />
        </GlobalContext.Provider>
      </MemoryRouter>
    );
    const addToCartButtons = screen.getAllByRole("button", {
      name: "Add to cart",
    });

    fireEvent.click(addToCartButtons[0]);
    expect(setGlobalState).toHaveBeenCalled();
  });
});
