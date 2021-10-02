import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import "../styles/timer.css";

const element = <FontAwesomeIcon icon={faClock} />;

const Timer = ({time}) => {
  
  const [timer, setTimer] = useState(time);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(increment.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
  
    increment.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };



  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
  
      <div className="stopwatch-card" style={{display:"flex", flexDirection:"column" , height:"200px", width:"200px"}}>
        <p>{formatTime()}</p>
        <div className="ctrs">
          {!isActive && !isPaused ? (
            <button onClick={handleStart}>Start</button>
          ) : isPaused ? (
            <button onClick={handlePause}>Pause</button>
          ) : (
            <button onClick={handleResume}>Resume</button>
          )}
    
        </div>
      </div>
   );
};

export default Timer;
