import { WorkExperience } from "../types/WorkExperience.type";

function getInitialWorkExperienceInput() {
  return {
    id: "",
    "start-date": "",
    "end-date": "",
    "job-title": "",
    company: "",
    "company-logo": "",
    "job-description": "",
  };
}

function shouldSaveButtonDisable(workExperience: WorkExperience) {
  return (
    workExperience["start-date"] === "" ||
    workExperience["end-date"] === "" ||
    workExperience.company === "" ||
    workExperience["job-title"] === ""
  );
}

export default {
  getInitialWorkExperienceInput,
  shouldSaveButtonDisable
};
