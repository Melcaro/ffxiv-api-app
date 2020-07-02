const mockAxios = require('jest-mock-axios').default;
const {
  fetchFreeCompanyInfosByID,
  fetchFreeCompanyInfos,
  fetchMemberInfos,
  fetchMemberSearch,
} = require('./FFStore');

describe('fetch free companies datas', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test('fetch one free company datas with its id', () => {
    const result = fetchFreeCompanyInfosByID(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://xivapi.com/freecompany/1',
      {
        params: { data: 'FCM' },
      }
    );
  });

  test('should return free company infos', async () => {
    mockAxios.get.mockReturnValue({
      data: { freeCompany: {}, freeCompanyMembers: [] },
    });
    const result = await fetchFreeCompanyInfosByID(1);
    expect(result).toEqual({ freecompany: {}, freecompanymembers: [] });
  });

  test('should fetch the API with a free company name', () => {
    const result = fetchFreeCompanyInfos('les chats');

    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://xivapi.com/freecompany/search',
      {
        params: { name: 'les chats', private_key: process.env.PRIVATE_KEY },
      }
    );
  });

  test('should return an array of object', async () => {
    const response = {
      data: {
        Results: [
          { id: '1', name: 'Les Chats Roses', server: 'Shiva' },
          { id: '2', name: 'Les Chatons', server: 'Odin' },
        ],
      },
    };

    mockAxios.get.mockReturnValue(response);

    const result = await fetchFreeCompanyInfos('les chats');

    expect(result).toEqual([
      { id: '1', name: 'Les Chats Roses', server: 'Shiva' },
      { id: '2', name: 'Les Chatons', server: 'Odin' },
    ]);
    mockAxios.get.mockRestore();
  });
});

describe('fetch Members datas', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test('should fetch the API with an member ID', () => {
    const result = fetchMemberInfos(1);

    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://xivapi.com/character/1',
      {
        params: {
          data: 'AC,CJ,FC',
          extended: 1,
          private_key: process.env.PRIVATE_KEY,
        },
      }
    );
  });

  test('should return an object with member datas', async () => {
    mockAxios.get.mockReturnValue({
      character: {
        activeclassjob: {},
        bio: '',
        dc: '',
        freecompanyid: '',
        classjobs: [],
        name: '',
        gearset: {},
        nameday: '',
        race: {},
        server: '',
        title: {},
        town: {},
        tribe: {},
        portrait: '',
        grandcompany: {},
        guardiandeity: {},
      },
      freecompany: '',
    });
    const result = await fetchMemberInfos(1);
    expect(result).toEqual({
      characterInfos: {},
      freeCompanyName: '',
    });
  });

  test('should return an array of objects', async () => {
    const response = {
      data: {
        Results: [
          { id: '1', name: 'elyon A', server: 'Shiva' },
          { id: '2', name: 'elyon B', server: 'Odin' },
        ],
      },
    };

    mockAxios.get.mockReturnValue(response);

    const result = await fetchMemberSearch('elyon');

    expect(result).toEqual([
      { id: '1', name: 'elyon A', server: 'Shiva' },
      { id: '2', name: 'elyon B', server: 'Odin' },
    ]);
    mockAxios.get.mockRestore();
  });
});
