import ApiClient from "./ApiClient";

const url = `https://glints-web-be-user-profile.herokuapp.com/`;

async function deleteWorkExperience(id: string) {
  const response = await ApiClient.delete(`${url}user/work-experience?id=${id}`);
  return response;
}
export default {
  deleteWorkExperience
};
