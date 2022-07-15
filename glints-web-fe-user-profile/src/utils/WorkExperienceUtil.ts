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

function getBase64(
  file: File,
  setFile: React.Dispatch<
    React.SetStateAction<string | ArrayBuffer | null | undefined>
  >
) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    setFile(reader.result);
  };
  reader.onerror = function (error) {
    return;
  };
}

function getCompanyLogoUrl(company: string) {
  return `https://logo.clearbit.com/${company
    .replace(/\s/g, "")
    .toLowerCase()}.com?size=60`;
}

function update(
  previousInputs: WorkExperience,
  inputKey: string,
  value: string
): WorkExperience {
  return {
    ...previousInputs,
    [inputKey]: value,
  };
}

export default {
  getInitialWorkExperienceInput,
  shouldSaveButtonDisable,
  getBase64,
  getCompanyLogoUrl,
  update,
};
