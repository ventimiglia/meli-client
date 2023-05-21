import { getItemDetail } from './';

describe('getItemDetail', () => {
  beforeEach(() => {
    jest.spyOn(window, 'fetch');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should fetch item detail and return the data', async () => {
    const mockResponse = { id: '123', name: 'Item 1' };
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    window.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const result = await getItemDetail<{ id: string; name: string }>('123');

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/items/123');

    expect(result).toEqual(mockResponse);
  });
});
