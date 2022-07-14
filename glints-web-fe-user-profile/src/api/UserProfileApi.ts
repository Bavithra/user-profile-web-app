import { UserProfile } from "../types/UserProfile.type";
import ApiClient from "./ApiClient";

async function getUser(email: string) {
  const response = await ApiClient.get(
    `http://localhost:3000/user?email=${email}`
  );
  return response;
}

async function createUser(userProfile: UserProfile) {
  const response = await ApiClient.post(`http://localhost:3000/user`, {
    user: userProfile,
  });
  return response;
}
export default {
  getUser,
  createUser,
};
