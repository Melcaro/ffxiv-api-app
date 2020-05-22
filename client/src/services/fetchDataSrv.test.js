import mockAxios from 'jest-mock-axios';

import * as fetchData from './fetchDataSrv';

describe('fetch Free Company datas', () => {
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });

  test('should call the right endpoint', () => {
    fetchData.getFreeCompanyInformations('les chats');
    expect(mockAxios.get).toHaveBeenCalledWith('/api/v1/freeCompany', {
      params: { FCName: 'les chats' },
    });
  });

  test('should call the endpoint with an ID', () => {
    const result = fetchData.getFreeCompanyById(1);

    expect(mockAxios.get).toHaveBeenCalledWith('/api/v1/freeCompany/1');
  });

  test('should receive a array of objects of Free Companies', async () => {
    const response = {
      data: [
        { id: '1', name: 'Les Chats Roses', server: 'Shiva' },
        { id: '2', name: 'Les Chatons', server: 'Odin' },
      ],
    };

    mockAxios.get.mockReturnValue(response);

    const result = await fetchData.getFreeCompanyInformations();

    expect(result).toEqual(response);
    mockAxios.get.mockRestore();
  });

  test('should return an object with data about a specific Free Company', async () => {
    const response = { data: {} };
    mockAxios.get.mockReturnValue(response);

    const result = await fetchData.getFreeCompanyById(1);

    expect(result).toEqual(response);
    mockAxios.get.mockRestore();
  });
});

describe('fetch Members datas', () => {
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });

  test('should call the right endpoint', () => {
    fetchData.getMembersSearchResults('elyon');
    expect(mockAxios.get).toHaveBeenCalledWith('/api/v1/member', {
      params: { memberName: 'elyon' },
    });
  });

  test('should call the endpoint with an ID', () => {
    const result = fetchData.getMemberInformations(1);

    expect(mockAxios.get).toHaveBeenCalledWith('/api/v1/member/1');
  });

  test('should receive a array of objects of members', async () => {
    const expectedResult = [{ id: '', name: '', server: '' }];

    const response = {
      data: [
        { id: '1', name: 'Elyon', server: 'Shiva' },
        { id: '2', name: 'Elyon2', server: 'Odin' },
      ],
    };

    mockAxios.get.mockReturnValue(response);

    const result = await fetchData.getMemberInformations(1);

    expect(result).toEqual(response);
    mockAxios.get.mockRestore();
  });

  test('should return an object with data about a specific member', async () => {
    const response = { data: {} };
    mockAxios.get.mockReturnValue(response);

    const result = await fetchData.getMemberInformations(1);

    expect(result).toEqual(response);
    mockAxios.get.mockRestore();
  });
});
