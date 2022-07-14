import React from "react";
import renderer from "react-test-renderer";
import WorkExperienceAddModal from "./WorkExperienceAddModal";

describe("WorkExperienceAddModal Block", () => {
  it("renders correctly", () => {
    let workExperience = 
      {
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
        <WorkExperienceAddModal
        isOpen={true}
        workExperience={workExperience}
        setIsWorkExperienceModalOpen={() => {}}
        setWorkExperience={() => {}}
        onSaveButtonClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
