import { render } from "@testing-library/react";
// import Footer from "./Footer";
import { Footer } from "../src/components/Footer";

describe("Footer component", () => {
  it("should display the correct copyright text", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Copyright © 2023 rishawraj")).toBeInTheDocument();
  });

  it("should display the github icon", () => {
    const { getByAltText } = render(<Footer />);
    const image = getByAltText("github-icon");
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe("IMG");
    expect(image.getAttribute("src")).toBe("/src/styles/github2.png");
    expect(image.getAttribute("height")).toBe("30px");
    expect(image.getAttribute("width")).toBe("30px");
  });

  it("should display the correct link to github profile", () => {
    const { getByRole } = render(<Footer />);
    const link = getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe("A");
    expect(link.getAttribute("href")).toBe("https://github.com/rishawraj");
    expect(link.getAttribute("target")).toBe("_blank");
  });
});
