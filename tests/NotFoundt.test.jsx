import { NotFound } from "../src/components/NotFound";
import { render } from "@testing-library/react";

describe("NotFound component", () => {
  it("should render the component", () => {
    const { getByText } = render(<NotFound />);
    expect(getByText("ERROR 404: Not Found")).toBeInTheDocument();
  });
});
