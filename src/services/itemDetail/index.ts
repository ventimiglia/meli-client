export const getItemDetail = async <T>(params: string): Promise<T> => {
  const response = await fetch(`/api/items/${params}`);
  const data = await response.json();
  return data as T;
}

