import { useEffect } from "react";

export const useUpdateLogger = (value) => {
  useEffect(() => {
    console.log(`🔥 : ${value}`);
  }, [value]);
};
