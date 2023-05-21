export const getItemDetail = async <T>(id: string): Promise<T> => {
  const response = await fetch(`http://localhost:3001/api/items/${id}`);
  const data = await response.json();
  return data as T;
}

