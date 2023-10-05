import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders without errors", () => {
    render(<App />);
  });

  it("adds a member when Add button is clicked", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText("Add member");
    fireEvent.change(input, { target: { value: "John Doe" } });
    const addButton = getByText("Add");
    fireEvent.click(addButton);
    const memberElement = getByText("John Doe");
    expect(memberElement).toBeInTheDocument();
  });
});
