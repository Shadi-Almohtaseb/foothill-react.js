import { fireEvent, render } from "@testing-library/react";
import Search from "../Search";

describe("Search Component", () => {
  it("renders without errors", () => {
    render(<Search />);
  });

  it("updates textInput state on input change", () => {
    const { getByPlaceholderText } = render(<Search />);
    const searchTerm = getByPlaceholderText("Find members...");
    fireEvent.change(searchTerm, { target: { value: "John Doe" } });
    expect(searchTerm).toHaveValue("John Doe");
  });

  it("renders the correct image", () => {
    const { getByAltText } = render(<Search />);
    const image = getByAltText("search--v1");
    expect(image).toBeInTheDocument();
  });
});
