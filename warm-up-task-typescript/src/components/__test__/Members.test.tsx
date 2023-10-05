import { render } from "@testing-library/react";
import Members from "../Members";

const mockMember = {
  name: "John Doe",
};

describe("Members Component", () => {
  it("renders without errors", () => {
    render(<Members {...mockMember} />);
  });

  it("renders the correct name", () => {
    const { getByText } = render(<Members {...mockMember} />);
    const memberElement = getByText("John Doe");
    expect(memberElement).toBeInTheDocument();
  });

  it("renders the correct image", () => {
    const { getByAltText } = render(<Members {...mockMember} />);
    const image = getByAltText("person-male--v3");
    expect(image).toBeInTheDocument();
  });
});
