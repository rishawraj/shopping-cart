import { Contact } from "../src/components/Contact";

import { render } from "@testing-library/react";
// import Contact from "./Contact";

describe("Contact component", () => {
  it("should display the correct phone number", () => {
    const { getByText } = render(<Contact />);
    expect(getByText("Phone: 555-555-5555")).toBeInTheDocument();
  });

  it("should display the correct email address", () => {
    const { getByText } = render(<Contact />);
    const emailLink = getByText("info@artificialeden.com");
    expect(emailLink).toBeInTheDocument();
    expect(emailLink.tagName).toBe("A");
    expect(emailLink.getAttribute("href")).toBe("#");
  });

  it("should display the correct website", () => {
    const { getByText } = render(<Contact />);
    const websiteLink = getByText("www.artificialeden.com");
    expect(websiteLink).toBeInTheDocument();
    expect(websiteLink.tagName).toBe("A");
    expect(websiteLink.getAttribute("href")).toBe("#");
  });

  it("should display the correct address", () => {
    const { getByText } = render(<Contact />);
    expect(
      getByText("Address: 123 Fake Street, Faketown USA 12345")
    ).toBeInTheDocument();
  });

  it("should display the correct image", () => {
    const { getByAltText } = render(<Contact />);
    const image = getByAltText("plant-img");
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe("IMG");
    expect(image.getAttribute("src")).toBe("/src/styles/plant2.jpg");
  });
});
