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
      expect(DateTimeUtil.getDisplayDateWithDay('invalid')).toBe('invalid');

    });
  });

  describe('getDate', () => {
    it('should return the formatted date', () => {
      const date = 'July 2022';
      const result = new Date(date);

      expect(DateTimeUtil.getDate(date)).toMatchObject(result);
    });
  });

  describe('getEndDate', () => {
    it('should return the formatted date', () => {
      const date = 'July 2022';
      const result = 'July 2022';

      expect(DateTimeUtil.getEndDate(true, date)).toBe(DateTimeUtil.getDisplayDateWithDay(new Date()));
      expect(DateTimeUtil.getEndDate(false, date)).toBe(result);
    });
  });
  
  
});
