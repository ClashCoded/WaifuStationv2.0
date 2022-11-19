import React, { useEffect, useState, useRef } from "react";

const Timer = () => {
  const [showMint, setShowMint] = useState(false);
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("May 30, 2023 10:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance <= 0) {
        // stop our timer
        // setShowTimer(false)
        // clearInterval(interval.current)
        // setShowMint(true)
        clearInterval(interval.current);
        setShowMint(true);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
        <div className="timer-div">
          <div className="time-box">
            <h2>Days</h2>
            <h2>{timerDays}</h2>
          </div>
          <div className="time-box">
            <h2>Hours</h2>
            <h2>{timerHours}</h2>
          </div>
          <div className="time-box">
            <h2>Minutes</h2>
            <h2>{timerMinutes}</h2>
          </div>
          <div className="time-box">
            <h2>Seconds</h2>
            <h2>{timerSeconds}</h2>
          </div>
        </div>
  );
};

export default Timer;
