import React from "react";
import renderer from "react-test-renderer";
import { WorkExperience } from "../../types/WorkExperience.type";
import WorkExperienceItem from "./WorkExperience";

describe("WorkExperienceItem Block", () => {
  it("renders correctly", () => {
    let workExperience: WorkExperience = {
      "start-date": "",
      "end-date": "",
      "job-date": "",
      company: "",
      "company-logo": "",
      "job-description": "",
    };
    const tree = renderer
      .create(<WorkExperienceItem workExperience={workExperience} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
