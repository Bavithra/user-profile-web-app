import React from "react";
import renderer from "react-test-renderer";
import { WorkExperience } from "../../types/WorkExperience.type";
import WorkExperienceList from "./WorkExperienceList";

describe("WorkExperienceListItem Block", () => {
  it("renders correctly", () => {
    let workExperiences: WorkExperience[] = [
      {
        "start-date": "",
        "end-date": "",
        "job-title": "",
        company: "",
        "company-logo": "",
        "job-description": "",
      },
    ];
    const tree = renderer
      .create(
        <WorkExperienceList
          workExperiences={workExperiences}
          onAddWorkExperienceClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
