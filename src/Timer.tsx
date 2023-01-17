import { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setConds] = useState(0);
  const [sumTime, setSumTime] = useState(0);
  const intervalRef = useRef(null);
  const [isInterval, setIsInterval] = useState(false);

  const onChangeMin = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setMinutes(+e.target.value);
    setSumTime((prev) => prev + +e.target.value * 60);
  }, []);

  const onChangeSeconds = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setConds(+e.target.value);
    setSumTime((prev) => prev + +e.target.value);
  }, []);

  const interval = useCallback(() => {
    setSumTime((prev) => prev - 1);
  }, []);

  const start = useCallback(() => {
    let intervalRef;
    if (!isInterval) intervalRef = setInterval(interval, 1000);
    else clearInterval(intervalRef);
  }, [interval, isInterval]);

  const stop = useCallback(() => {
    start();
  }, [start]);

  const reset = useCallback(() => {}, []);

  return (
    <>
      <label>
        <input type="number" value={minutes} onChange={onChangeMin} />
        Minutes
      </label>
      <label>
        <input type="number" value={seconds} onChange={onChangeSeconds} />
        Seconds
      </label>
      <button onClick={start}>Start</button>
      <button onClick={stop}>pause / resume</button>
      <button onClick={reset}>reset</button>
      <h1>{sumTime}</h1>
    </>
  );
};

export default Timer;
