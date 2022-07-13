import React from "react";
import renderer from "react-test-renderer";
import { WorkExperience } from "../../types/WorkExperience.type";
import WorkExperienceListItem from "./WorkExperienceListItem";

describe("WorkExperienceListItem Block", () => {
  it("renders correctly", () => {
    let workExperience: WorkExperience = {
      id: "",
      "start-date": "",
      "end-date": "",
      "job-title": "",
      company: "",
      "company-logo": "",
      "job-description": "",
    };
    const tree = renderer
      .create(
        <WorkExperienceListItem
        index={-1}
          workExperience={workExperience}
          onEditClicked={function (): void {
            throw new Error("Function not implemented.");
          }}
          onDeleteClicked={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
