import { useEffect, useState } from "react";

export const useAutoCountUp = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const loop = () => {
      timer = setTimeout(() => {
        setCount((c) => c + 1);
        loop();
      }, 1000);
    };
    loop();
    return () => clearTimeout(timer);
  });
  return count;
};
