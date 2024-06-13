import {useEffect, useState} from 'react';

export default function ProgressBar({maxTimer}) {
  const [remainingTime, setRemainingTime] = useState(maxTimer);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={maxTimer} />;
}
