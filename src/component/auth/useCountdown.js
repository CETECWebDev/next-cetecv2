import { useEffect, useState } from "react";

export default function useCountdown(start = 180) {
  const [timer, setTimer] = useState(start);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const reset = () => {
    setTimer(start);
    setCanResend(false);
  };

  return { timer, canResend, reset };
}
