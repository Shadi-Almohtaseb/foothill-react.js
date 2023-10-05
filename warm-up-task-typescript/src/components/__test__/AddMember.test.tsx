import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddMember from "../AddMember";

const mockSetMembers = jest.fn();
const mockSetTextInput = jest.fn();

const props = {
  setMembers: mockSetMembers,
  setTextInput: mockSetTextInput,
  members: [],
  textInput: "",
};

describe("AddMember Component", () => {
  it("renders without errors", () => {
    render(<AddMember {...props} />);
  });

  it("updates textInput state on input change", () => {
    const { getByPlaceholderText } = render(<AddMember {...props} />);
    const input = getByPlaceholderText("Add member");
    fireEvent.change(input, { target: { value: "John Doe" } });
    expect(mockSetTextInput).toHaveBeenCalledWith("John Doe");
  });

  it("adds a member on button click", () => {
    const { getByText } = render(<AddMember {...props} />);
    const addButton = getByText("Add");
    fireEvent.click(addButton);
    expect(mockSetMembers).toHaveBeenCalled();
  });
});
