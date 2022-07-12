import React from "react";
import renderer from "react-test-renderer";
import ProfilePage from "./ProfilePage";

describe("ProfilePage Block", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ProfilePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
