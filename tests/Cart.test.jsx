import { Cart } from "../src/components/Cart";
import { render, fireEvent, screen } from "@testing-library/react";
import { GlobalContext } from "../src/App";
import jest from "jest-mock";

describe("Cart component", () => {
  let globalState;
  let setGlobalState;

  beforeEach(() => {
    globalState = [
      {
        title: "Card Title 1",
        price: "10",
        src: "https://example.com/image1.jpg",
      },
      {
        title: "Card Title 2",
        price: "20",
        src: "https://example.com/image2.jpg",
      },
    ];
    setGlobalState = jest.fn();
  });

  it("should decrement the count of a card when the decrement button is clicked", () => {
    render(
      <GlobalContext.Provider value={{ globalState, setGlobalState }}>
        <Cart />
      </GlobalContext.Provider>
    );
    const decrementButton = screen.getByTestId("decrement-btn-0");
    fireEvent.click(decrementButton);
    const counter = screen.getByTestId("counter-0").textContent;
    expect(counter).toBe("1");
    fireEvent.click(decrementButton);
    expect(counter).toBe("1");
  });

  it("should increment the count of a card when the increment button is clicked", () => {
    render(
      <GlobalContext.Provider value={{ globalState, setGlobalState }}>
        <Cart />
      </GlobalContext.Provider>
    );

    const incrementButton = screen.getByTestId("increment-btn-0");
    fireEvent.click(incrementButton);
    const counter = screen.getByTestId("counter-0").textContent;
    expect(counter).toBe("2");
    fireEvent.click(incrementButton);
    const counter2 = screen.getByTestId("counter-0").textContent;
    expect(counter2).toBe("3");
  });

  it("should delete a card from the globalState when the delete button is clicked", () => {
    render(
      <GlobalContext.Provider value={{ globalState, setGlobalState }}>
        <Cart />
      </GlobalContext.Provider>
    );
    const deleteButton = screen.getByTestId("delete-btn-0");
    fireEvent.click(deleteButton);

    expect(setGlobalState).toHaveBeenCalledWith([
      {
        title: "Card Title 2",
        price: "20",
        src: "https://example.com/image2.jpg",
      },
    ]);
  });

  it("should calculate the total price correctly", () => {
    render(
      <GlobalContext.Provider value={{ globalState, setGlobalState }}>
        <Cart />
      </GlobalContext.Provider>
    );
    const incrementButton = screen.getByTestId("increment-btn-0");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByTestId("total-price").textContent).toBe("Total: $60");
  });
});
