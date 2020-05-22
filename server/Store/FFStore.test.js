const mockAxios = require('jest-mock-axios').default;
const { fetchFreeCompanyInfosByID } = require('./FFStore');

describe('fetch free companies datas', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test('fetch one free company datas with its id', () => {
    const result = fetchFreeCompanyInfosByID(1);
    console.log(mockAxios.get);
    expect(mockAxios.get).toHaveBeenCalled();
  });

  // test('should return free company infos', async () => {
  //   mockAxios.get.mockReturnValue({ freeCompany: {}, freeCompanyMembers: [] });
  //   const result = await fetchFreeCompanyInfosByID(1);
  //   expect(result).toEqual({ freeCompany: {}, freeCompanyMembers: [] });
  // });
});
