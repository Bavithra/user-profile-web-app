import React from "react";
import ImageUpload from "./ImageUpload";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

describe("ImageUpload Block", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ImageUpload />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders upload image button", () => {
    render(<ImageUpload />);
    const buttonElement = screen.getByText("Upload Image");
    expect(buttonElement).toBeInTheDocument();
  });
});
