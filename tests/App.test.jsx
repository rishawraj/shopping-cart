import { render, screen } from "@testing-library/react";

import App from "../src/App";

describe("App", () => {
  it("renders heading", () => {
    render(<App />);
    // screen.debug();
    const h1 = screen.getByRole("heading").textContent;
    expect(h1).toBe("Hello World");
  });
});
