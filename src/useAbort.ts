import { useEffect, useState } from "react";
import { ICharacter } from "./types";

interface IUseAbort {
  data: ICharacter[];
  isLoading: boolean;
  error: Error | null;
}

const useAbort = (keyword: string): IUseAbort => {
  const [data, setData] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (keyword.length === 0) return;
    let abortController = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://swapi.dev/api/people?search=${keyword}`,
          { signal: abortController.signal }
        ).then((res) => res.json());
        setIsLoading(false);
        setData(response.results);
      } catch (error: any) {
        if (error.name === "AbortError") {
          setError(error);
          setIsLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [keyword]);

  return { data, isLoading, error };
};

export default useAbort;
