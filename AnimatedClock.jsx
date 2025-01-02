import React, { useState, useEffect } from "react";
import "./Clock.css";

const AnimatedClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTimeUnit = (unit) => (unit < 10 ? `0${unit}` : unit);

  const hours = formatTimeUnit(time.getHours());
  const minutes = formatTimeUnit(time.getMinutes());
  const seconds = formatTimeUnit(time.getSeconds());

  return (
    <div className="clock">
      <TimeUnit value={hours} label="Hours" />
      <span className="separator">:</span>
      <TimeUnit value={minutes} label="Minutes" />
      <span className="separator">:</span>
      <TimeUnit value={seconds} label="Seconds" />
    </div>
  );
};

const TimeUnit = ({ value, label }) => {
  return (
    <div className="time-unit">
      <div className="digit" key={value}>
        {value}
      </div>
    </div>
  );
};

export default AnimatedClock;
