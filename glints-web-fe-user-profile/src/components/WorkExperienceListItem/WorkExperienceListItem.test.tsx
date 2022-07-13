import React from "react";
import renderer from "react-test-renderer";
import { WorkExperience } from "../../types/WorkExperience.type";
import WorkExperienceListItem from "./WorkExperienceListItem";

describe("WorkExperienceListItem Block", () => {
  it("renders correctly", () => {
    let workExperience: WorkExperience = {
      "start-date": "",
      "end-date": "",
      "job-title": "",
      company: "",
      "company-logo": "",
      "job-description": "",
    };
    const tree = renderer
      .create(<WorkExperienceListItem workExperience={workExperience} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
