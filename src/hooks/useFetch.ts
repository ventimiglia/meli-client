import { useState, useEffect, useCallback } from "react";

type QueryResult<Data> = [Data | null, boolean, Error | null];
type QueryFn<Data> = () => Promise<Data>;

export const useFetch = <Data>(queryFn: QueryFn<Data>): QueryResult<Data> => {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await queryFn();
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [queryFn]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  return [data, isLoading, error];
};
