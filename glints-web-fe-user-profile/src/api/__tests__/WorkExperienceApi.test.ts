import ApiClient from '../ApiClient';
import WorkExperienceApi from '../WorkExperienceApi';

describe('WorkExperienceApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('deleteWorkExperience', () => {
    it('should make a correct request to delete a Work Experience with a particular Id', async () => {
      const id = "1";
      ApiClient.delete = jest.fn().mockReturnValue({ status: 200 });
      await WorkExperienceApi.deleteWorkExperience(id);

      expect(ApiClient.delete).toHaveBeenCalledWith(`https://glints-web-be-user-profile.herokuapp.com/user/work-experience?id=${id}`);
    });
  });
});
