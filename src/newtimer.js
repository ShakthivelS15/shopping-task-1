import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate, onExpire }) {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  const getRemainingTime = () => {
    const deadline = new Date(targetDate);
    const msRemaining = deadline.getTime() - currentTime;

    if (msRemaining <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(msRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((msRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((msRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((msRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getRemainingTime();

  useEffect(() => {
    if (days + hours + minutes + seconds <= 0 && onExpire) {
      onExpire();
    }
  }, [days, hours, minutes, seconds, onExpire]);

  return (
    <div style={{ display: "flex", gap: "5px" }}>
    <div style={{ color: "red",border:"solid 5px white" ,boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "5px" }}>{days.toString().padStart(2, '0')}</div>
    <div style={{ color: "green" ,border:"solid 5px white",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "5px"  }}>{hours.toString().padStart(2, '0')}</div>
    <div style={{ color: "blue",border:"solid 5px white",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "5px"   }}>{minutes.toString().padStart(2, '0')}</div>
    <div style={{ color: "purple",border:"solid 5px white",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "5px"   }}>{seconds.toString().padStart(2, '0')}</div>
  </div>
  );
}

export default CountdownTimer;
