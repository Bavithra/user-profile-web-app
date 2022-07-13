import { WorkExperience } from "./WorkExperience.type";

export type UserProfile = {
  name: string;
  age: string;
  'profile-image'?: string;
  'work-experience'?: WorkExperience;
};
