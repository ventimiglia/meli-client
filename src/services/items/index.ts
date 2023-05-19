export const getItems = async <T>(query: string | null = ""): Promise<T> => {
  const response = await fetch(`http://localhost:3001/api/items?q=${query}`);
  const data = await response.json();
  return data as T;
}

