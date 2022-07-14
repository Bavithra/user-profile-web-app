import { UserProfile } from "../types/UserProfile.type";
import ApiClient from "./ApiClient";

const url = `https://glints-web-be-user-profile.herokuapp.com/`;

async function getUser(email: string) {
  const response = await ApiClient.get(`${url}user?email=${email}`);
  return response;
}

async function createUser(user: UserProfile) {
  const response = await ApiClient.post(`${url}user`, { user });
  return response;
}

async function updateUser(user: UserProfile) {
  const response = await ApiClient.patch(`${url}user`, { user });
  return response;
}
export default {
  getUser,
  createUser,
  updateUser,
};
