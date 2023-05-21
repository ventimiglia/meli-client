import { getItems } from './';

describe('getItems', () => {
  beforeEach(() => {
    jest.spyOn(window, 'fetch');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should fetch items with query and return the data', async () => {
    const query = 'example';
    const mockResponse = { items: [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }] };
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    window.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const result = await getItems<{ items: { id: string; name: string }[] }>(query);

    expect(window.fetch).toHaveBeenCalledWith(`http://localhost:3001/api/items?q=${query}`);

    expect(result).toEqual(mockResponse);
  });
});
