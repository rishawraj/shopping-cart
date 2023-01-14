import React from "react";
import { Card } from "../src/components/Card";
import { GlobalContext } from "../src/App";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe } from "vitest";
import image from "../src/styles/plant.jpg";
import jest from "jest-mock";

describe("Card component", () => {
  let globalState = [];
  let setGlobalState = jest.fn();
  let alertMock = jest.fn();

  beforeEach(() => {
    globalState = [];
    setGlobalState = jest.fn();
    alertMock = jest.fn();
    jest.spyOn(window, "alert").mockImplementation(alertMock);
  });

  it("should render the title, price, and image", () => {
    const title = "card title";
    const price = "10.99";
    const src = image;

    render(
      <GlobalContext.Provider value={{ globalState, setGlobalState }}>
        <Card title={title} price={price} src={src} />
      </GlobalContext.Provider>
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(`$${price}`)).toBeInTheDocument();
    expect(screen.getAllByAltText("plants")).toBeDefined();
  });
  it("should add an item to the globalState when the button is clicked", () => {
    const title = "card title";
    const price = "100";
    const src = "https://example.com/image.jpg";

    render(
      <GlobalContext.Provider value={{ globalState, setGlobalState }}>
        <Card title={title} price={price} src={src} />
      </GlobalContext.Provider>
    );

    const button = screen.getByRole("button", { name: "Add to cart" });
    fireEvent.click(button);
    expect(setGlobalState).toHaveBeenCalledWith([{ title, price, src }]);
  });

  it("should alert when the item already exist in the globalState", () => {
    globalState = [
      {
        title: "card title",
        price: "100",
        src: "https://example.com/imgage.jpg",
      },
    ];
    const title = "card title";
    const price = "100";
    const src = "https://example.com/imgage.jpg";

    render(
      <GlobalContext.Provider value={{ globalState, setGlobalState }}>
        <Card title={title} price={price} src={src} />
      </GlobalContext.Provider>
    );
    const button = screen.getByRole("button", { name: "Add to cart" });

    fireEvent.click(button);

    expect(setGlobalState).not.toBeCalled();
    expect(window.alert).toHaveBeenCalledWith("item already exists");
  });
});
