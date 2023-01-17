import { useCallback } from "react";
import { useState } from "react";

export interface UseInput<T> {
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function useInput<T>(initialValue: T): UseInput<T> {
  const [value, setValue] = useState<T>(initialValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as any);
  }, []);

  return { value, onChange };
}

export default useInput;
