import DateTimeUtil from '../DateTimeUtil';

describe('DateTimeUtil', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getDisplayDate', () => {
    it('should return the formatted date', () => {
      const dateTime = new Date('2022-07-26T09:34:22');
      const result = 'July 2022';

      expect(DateTimeUtil.getDisplayDateWithDay(dateTime)).toBe(result);
    });
  });
});
