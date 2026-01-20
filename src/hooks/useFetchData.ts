import { useEffect, useState } from "react";
import type { Item } from "~/utils/types";

interface useFetchDataResult {
  data: Item[];
  loading: boolean;
  error: Error | null;
}

export const useFetchData = (endpoint: string = "/items.json"): useFetchDataResult => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(endpoint);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();
        setData(result.items);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [endpoint]);

  return { data, loading, error };
};
