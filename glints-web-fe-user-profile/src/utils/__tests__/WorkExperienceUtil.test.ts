import WorkExperienceUtil from "../WorkExperienceUtil";

describe("WorkExperienceUtil", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const emptyWorkExp = {
    id: "",
    "start-date": "",
    "end-date": "",
    "job-title": "",
    company: "",
    "company-logo": "",
    "job-description": "",
  };

  describe("getInitialWorkExperienceInput", () => {
    it("should return initial data", () => {
      const result = emptyWorkExp;

      expect(WorkExperienceUtil.getInitialWorkExperienceInput()).toMatchObject(
        result
      );
    });
  });

  describe("shouldSaveButtonDisable", () => {
    it("should return initial data", () => {
      expect(WorkExperienceUtil.shouldSaveButtonDisable(emptyWorkExp)).toBe(
        true
      );
    });
  });

  describe("getBase64", () => {
    it("should return initial data", () => {
      const file = new File(["hello"], "hello.png", { type: "image/png" });

      const func = jest
        .fn()
        .mockRejectedValueOnce(new Error("intentional test error"))
        .mockResolvedValueOnce(void 0);
      WorkExperienceUtil.getBase64(file, () => {});
      expect(func).toHaveBeenCalledTimes(0);
    });
  });

  describe("getCompanyLogoUrl", () => {
    it("should return initial data", () => {
      const company = "Glints";
      const companyLogo = `https://logo.clearbit.com/${company
        .replace(/\s/g, "")
        .toLowerCase()}.com?size=60`;

      expect(WorkExperienceUtil.getCompanyLogoUrl(company)).toBe(companyLogo);
    });
  });

  describe("update", () => {
    it("should return initial data", () => {
      const workExperience = {
        id: "1",
        "start-date": "July 2022",
        "end-date": "July 2022",
        "job-title": "Eng",
        company: "Glints",
        "company-logo": "Glints",
        "job-description": "Desc",
      };

      expect(WorkExperienceUtil.update(workExperience, "start-date", "July 2022")).toMatchObject(
        workExperience
      );
    });
  });
});
