import React from "react";
import Button from "./Button";
import renderer from "react-test-renderer";

describe("Button Block", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Button children={""} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
