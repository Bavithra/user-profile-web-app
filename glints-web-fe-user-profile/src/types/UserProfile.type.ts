import { WorkExperience } from "./WorkExperience.type";

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  'profile-image': string;
  'work-experience': WorkExperience;
};
