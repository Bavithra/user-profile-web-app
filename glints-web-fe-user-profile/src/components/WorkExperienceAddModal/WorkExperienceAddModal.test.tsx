import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import WorkExperienceAddModal from "./WorkExperienceAddModal";

describe('WorkExperienceAddModal Block', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it('should render correctly', () => {
    const onSaveButtonClick = jest.fn();
    const setIsWorkExperienceModalOpen = jest.fn();
    const setWorkExperience = jest.fn();

    const component = renderer.create(<WorkExperienceAddModal
      isOpen
      workExperience={{
        id: "",
        'start-date': 'July 2022',
        'end-date': 'July 2022',
        'job-title': 'Engineer',
        company: 'Glints',
        'company-logo': '',
        'job-description': 'Glints Desc',
      }}
      setIsWorkExperienceModalOpen={setIsWorkExperienceModalOpen}
      setWorkExperience={setWorkExperience}
      onSaveButtonClick = {onSaveButtonClick}
      />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});


